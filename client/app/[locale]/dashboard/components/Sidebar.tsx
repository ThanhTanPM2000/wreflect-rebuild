'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { IconBellRingingFilled, IconBrandTeams, IconUserCircle } from '@tabler/icons-react';
import { useLocale, useTranslations } from 'next-intl';
import ChangeLanguageButton from './ChangeLanguageButton';
import CollapseButton from './CollapseButton';
import LogoutButton from './LogoutButton';
import SidebarItem from './SidebarItem';

type Props = {};

const Sidebar = (props: Props) => {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [isCollapse, setIsCollapse] = useState(
    searchParams.get('isCollapse') === 'true' ? true : false
  );
  const t = useTranslations();

  return (
    <div
      className={`h-screen flex-none bg-primary text-white ${
        isCollapse ? 'w-60' : 'w-20'
      } transition-all duration-400 flex flex-col`}
    >
      {/* Top Section */}
      <div className="flex gap-1 h-12 items-center m-2  justify-center  bg-white p-3 rounded-xl">
        <Image
          className="h-full w-auto object-cover"
          src="/images/shortLogo.png"
          alt="wReflect Logo"
          height={100}
          width={100}
        />
        <span className={`text-2xl font-extrabold text-black  ${!isCollapse && 'hidden'}`}>
          wReflect
        </span>
      </div>

      <div className="flex flex-grow flex-col justify-between">
        {/* Navigation Links */}
        <nav className={`mt-4 ${isCollapse && 'justify-center'}`}>
          <ul>
            <SidebarItem
              href={`/dashboard/teams`}
              icon={IconBrandTeams}
              label={t('sidebar.teams')}
              isOpen={isCollapse}
            />
            <SidebarItem
              href={`/dashboard/notifications`}
              icon={IconBellRingingFilled}
              label={t('sidebar.notifications')}
              isOpen={isCollapse}
            />
            <SidebarItem
              href={`/dashboard/account`}
              icon={IconUserCircle}
              label={t('sidebar.account')}
              isOpen={isCollapse}
            />
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <ChangeLanguageButton isCollapsed={isCollapse} />
        <CollapseButton isCollapse={isCollapse} onCollapse={() => setIsCollapse(!isCollapse)} />
        <LogoutButton isCollapse={isCollapse} />
      </div>
    </div>
  );
};

export default Sidebar;
