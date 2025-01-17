import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

import React from 'react';
import { Baloo_Bhai_2 } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { routing } from '@/i18n/routing';
import { ApolloWrapper } from '@/lib/graphql/apollo-wrapper';
import { theme } from '@/theme';

import '@/app/global.css';

export const metadata = {
  title: 'wReflect',
  description: 'We reflect on our work',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const baloo_bhai = Baloo_Bhai_2({
  subsets: ['vietnamese'],
});

export default async function RootLayout({ children, params }: Props) {
  const locale = (await params).locale;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/images/shortLogo.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={baloo_bhai.className}>
        <MantineProvider theme={theme}>
          <NextIntlClientProvider messages={messages}>
            <ApolloWrapper>{children}</ApolloWrapper>
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
