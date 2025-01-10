import React from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

type Props = {
  isCollapsed: boolean;
};

const ChangeLanguageButton = ({ isCollapsed }: Props) => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();

  const isEnglish = locale === 'en';

  return (
    <Link
      className="p-3 mb-3 bg-violet-500 hover:cursor-pointer hover:bg-violet-500 rounded-md flex font-medium items-center justify-center gap-4"
      href={`${pathname}`}
      locale={isEnglish ? 'vi' : 'en'}
    >
      <Image
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${isEnglish ? 'US' : 'VN'}.svg`}
        alt="USA flag"
        height={0}
        width={0}
        className="w-5 h-auto "
      />
      {isCollapsed && t('common.language')}
    </Link>
  );
};

export default ChangeLanguageButton;
