'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { HiBell, HiOutlineLogout, HiUser, HiUserGroup } from 'react-icons/hi';
import { Avatar, Burger, Button } from '@mantine/core';
import ChangeLanguageButton from './ChangeLanguageButton';
import CollapseButton from './CollapseButton';
import LogoutButton from './LogoutButton';
import SidebarItem from './SidebarItem';

type Props = {};

const Sidebar = (props: Props) => {
  const locale = useLocale();
  const [isCollapse, setIsCollapse] = useState(true);
  const t = useTranslations();

  return (
    <div
      className={`h-screen bg-primary text-white ${
        isCollapse ? 'w-52' : 'w-20'
      } transition-all duration-400 flex flex-col`}
    >
      {/* Top Section */}
      <div className="flex items-center m-2  justify-center  bg-white p-3 rounded-xl">
        <Image
          className="h-9 mr-2 w-auto"
          src="/images/shortLogo.png"
          alt="wReflect Logo"
          height={48}
          width={48}
        />
        {isCollapse && (
          <span className="text-2xl font-extrabold text-center text-black">wReflect</span>
        )}
      </div>

      <div className="flex flex-grow flex-col justify-between">
        {/* Navigation Links */}
        <nav className={`mt-4 ${isCollapse && 'justify-center'}`}>
          <ul>
            <SidebarItem
              href={`/dashboard/teams`}
              icon={HiUserGroup}
              label={t('sidebar.teams')}
              isOpen={isCollapse}
            />
            <SidebarItem
              href={`/dashboard/notifications`}
              icon={HiBell}
              label={t('sidebar.notifications')}
              isOpen={isCollapse}
            />
            <SidebarItem
              href={`/dashboard/account`}
              icon={HiUser}
              label={t('sidebar.account')}
              isOpen={isCollapse}
            />
          </ul>
        </nav>
        <div className="p-4">
          <ChangeLanguageButton isCollapsed={isCollapse} />
          <CollapseButton isCollapse={isCollapse} onCollapse={() => setIsCollapse(!isCollapse)} />
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <LogoutButton isCollapse={isCollapse} />
      </div>
    </div>
  );
};

export default Sidebar;
