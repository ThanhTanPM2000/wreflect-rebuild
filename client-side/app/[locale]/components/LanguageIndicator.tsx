import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Button, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from '@/i18n/routing';

type Props = {};

const LanguageIndicator = (props: Props) => {
  const locale = useLocale();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Popover trapFocus position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Image
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${locale === 'vi' ? 'VN' : 'US'}.svg`}
          alt={locale === 'vi' ? 'Vietnam flag' : 'USA flag'}
          height={0}
          width={0}
          onClick={toggle}
          className="w-auto h-9"
        />
      </Popover.Target>
      <Popover.Dropdown className="flex gap-2 text-3xl">
        <Link href="/" locale="en">
          <Image
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            alt="USA flag"
            height={0}
            width={0}
            className="w-auto h-8"
          />
        </Link>

        <Link href="/" locale="vi">
          <Image
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg"
            alt="Vietnam flag"
            height={0}
            width={0}
            className="w-auto h-8"
          />
        </Link>
      </Popover.Dropdown>
    </Popover>
  );
};

export default LanguageIndicator;
