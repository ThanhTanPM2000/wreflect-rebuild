import React from 'react';
import { useTranslations } from 'next-intl';
import { HiMenu } from 'react-icons/hi';
import { ActionIcon, Button } from '@mantine/core';

type Props = {
  isCollapse: boolean;
  onCollapse: () => void;
};

const CollapseButton = ({ isCollapse, onCollapse }: Props) => {
  const t = useTranslations();

  const handleToggleCollapse = () => {
    onCollapse();
  };

  return (
    <>
      {isCollapse ? (
        <Button onClick={handleToggleCollapse} color="gray" fullWidth>
          {t('common.collapse')}
        </Button>
      ) : (
        <ActionIcon onClick={handleToggleCollapse} color="gray" style={{ width: '100%' }}>
          <HiMenu />
        </ActionIcon>
      )}
    </>
  );
};

export default CollapseButton;
