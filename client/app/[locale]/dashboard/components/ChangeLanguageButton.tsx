import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { getCurrentUrlParams } from '@/utils/validateParams';

type Props = {
  isCollapsed: boolean;
};

const ChangeLanguageButton = ({ isCollapsed }: Props) => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isEnglish = locale === 'en';

  const currentSearchParams = getCurrentUrlParams(searchParams);

  return (
    <Link
      className={`h-11 p-3 bg-none
        ${
          isCollapsed &&
          `bg-violet-500 hover:cursor-pointer hover:bg-violet-500 rounded-md flex font-medium items-center gap-3`
        }`}
      href={`${pathname}?${currentSearchParams.toString()}`}
      locale={isEnglish ? 'vi' : 'en'}
    >
      <div className="h-full aspect-video">
        <Image
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${isEnglish ? 'US' : 'VN'}.svg`}
          alt="flag"
          height={400}
          width={400}
          className={`${isCollapsed ? 'h-full' : 'h-full'} w-auto`}
        />
      </div>
      {isCollapsed && <p className="flex-grow whitespace-nowrap text-sm">{t('common.language')}</p>}
    </Link>
  );
};

export default ChangeLanguageButton;
