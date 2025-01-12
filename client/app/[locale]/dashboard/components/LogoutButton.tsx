'use client';

import React from 'react';
import { useApolloClient } from '@apollo/client';
import { useTranslations } from 'next-intl';
import { HiOutlineLogout } from 'react-icons/hi';
import { ActionIcon, Avatar, Button } from '@mantine/core';
import { clearCookie } from '../actions';

type Props = {
  isCollapse: boolean;
};

const LogoutButton = ({ isCollapse }: Props) => {
  const t = useTranslations();
  const client = useApolloClient();

  const handleLogout = () => {
    clearCookie();
    client.resetStore();
  };

  return (
    <>
      {isCollapse ? (
        <Button className="h-11" onClick={handleLogout} color="black" fullWidth>
          <Avatar color="cyan" radius="xl">
            MK
          </Avatar>
          {t('common.authentication.logout')}
        </Button>
      ) : (
        <ActionIcon className="h-11 !w-full" onClick={handleLogout} color="black">
          <HiOutlineLogout />
        </ActionIcon>
      )}
    </>
  );
};

export default LogoutButton;
