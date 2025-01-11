import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { HiMenu } from 'react-icons/hi';
import { ActionIcon, Button } from '@mantine/core';
import { usePathname } from '@/i18n/routing';

type Props = {
  isCollapse: boolean;
  onCollapse: () => void;
};

const CollapseButton = ({ isCollapse, onCollapse }: Props) => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleCollapse = () => {
    router.push(`${pathname}?isCollapse=${!isCollapse}`, {
      scroll: false,
    });
    onCollapse();
  };

  return (
    <>
      {isCollapse ? (
        <Button className="h-11" onClick={handleToggleCollapse} color="gray" fullWidth>
          {t('common.collapse')}
        </Button>
      ) : (
        <ActionIcon className="h-11 !w-full" onClick={handleToggleCollapse} color="gray">
          <HiMenu />
        </ActionIcon>
      )}
    </>
  );
};

export default CollapseButton;
