'use client';

import React, { createContext } from 'react';

export const AuthContext = createContext({
  email: '',
  userId: '',
});

type Props = {
  children: React.ReactNode;
  value: any;
};

const AuthProvider = ({ children, value }: Props) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
