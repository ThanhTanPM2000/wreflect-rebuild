'use client';

import React, { useState } from 'react';
import { IconCirclePlus } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Button } from '@mantine/core';
import NewTeamModal from './NewTeamModal';

import '@mantine/dates/styles.css';

type Props = {
  onRefetch: () => void;
};

const CreateTeamButton = ({ onRefetch }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const t = useTranslations();

  const handleClick = () => {
    setIsOpened(true);
  };
  return (
    <>
      <Button
        className="!min-w-fit"
        onClick={handleClick}
        leftSection={<IconCirclePlus size={20} />}
      >
        {t('teams.new')}
      </Button>
      <NewTeamModal isVisible={isOpened} setIsVisible={setIsOpened} onRefecth={onRefetch} />
    </>
  );
};

export default CreateTeamButton;
