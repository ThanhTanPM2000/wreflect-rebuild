'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { Button } from '@mantine/core';
import NewTeamModal from './NewTeamModal';

import '@mantine/dates/styles.css';

type Props = {};

const CreateTeamButton = (props: Props) => {
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
        leftSection={<HiOutlinePlusCircle size={20} />}
      >
        {t('teams.new')}
      </Button>
      <NewTeamModal isVisible={isOpened} setIsVisible={setIsOpened} />
    </>
  );
};

export default CreateTeamButton;
