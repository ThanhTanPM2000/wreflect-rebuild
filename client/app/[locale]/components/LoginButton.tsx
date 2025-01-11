'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@apollo/client';
import auth0, { AuthOptions } from 'auth0-js';
import { useTranslations } from 'next-intl';
import { Button } from '@mantine/core';
import { login } from '@/lib/apollo-client/mutations/AuthMutations';

type Props = {};
const authConfig: AuthOptions = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '',
  clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
  responseType: process.env.NEXT_PUBLIC_AUTH0_RESPONSE_TYPE,
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
};

const LoginButton = (props: Props) => {
  const t = useTranslations();
  const router = useRouter();
  const [loginFunc, { loading }] = useMutation(login, {
    onCompleted: () => {
      router.push('/dashboard/teams');
    },
  });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const webAuth = new auth0.WebAuth(authConfig);

  useEffect(() => {
    if (code && state) {
      loginFunc({ variables: { code, state } });
    }
  }, [code, state]);

  const handleClickLogin = () => {
    webAuth.authorize({ prompt: 'login' });
  };

  return (
    <Button loading={loading} onClick={handleClickLogin}>
      {t('common.authentication.login')}
    </Button>
  );
};

export default LoginButton;
