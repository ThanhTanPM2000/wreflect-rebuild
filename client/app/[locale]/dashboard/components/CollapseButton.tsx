import React from 'react';
import { useRouter } from 'next/navigation';
import { IconLayoutSidebarLeftExpandFilled } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
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
        <Button
          color="black"
          className="h-11"
          onClick={handleToggleCollapse}
          variant="outline"
          fullWidth
        >
          {t('common.collapse')}
        </Button>
      ) : (
        <ActionIcon
          color="black"
          className="h-11 !w-full"
          onClick={handleToggleCollapse}
          variant="outline"
        >
          <IconLayoutSidebarLeftExpandFilled />
        </ActionIcon>
      )}
    </>
  );
};

export default CollapseButton;
