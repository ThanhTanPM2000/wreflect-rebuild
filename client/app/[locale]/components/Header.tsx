'use client';

import React from 'react';
import Image from 'next/image';
import { Group } from '@mantine/core';
import LanguageIndicator from './LanguageIndicator';
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <header className="bg-gray-100 fixed z-50 w-full shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <Group>
          <Image
            className="h-full w-auto object-cover"
            src="/images/shortLogo.png"
            alt="wReflect Logo"
            height={48}
            width={48}
          />
          <h1 className="text-xl hidden md:block  font-bold">WReflect</h1>
        </Group>

        <div className="flex gap-2">
          <LoginButton />
          <LanguageIndicator />
        </div>
      </div>
    </header>
  );
};

export default Header;
