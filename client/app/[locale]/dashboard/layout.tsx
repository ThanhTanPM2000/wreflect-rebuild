import React from 'react';
import { decodeCookies } from '@/utils/cookies-util';
import Sidebar from './components/Sidebar';
import AuthProvider from './contexts/AuthContext';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  const sanitizedUser = await decodeCookies();

  return (
    <div className="flex h-screen overflow-y-hidden">
      <Sidebar />
      <div className="flex-grow relative min-w-[60rem] p-3 bg-gray-100  overflow-y-auto">
        <AuthProvider value={sanitizedUser}>{children}</AuthProvider>
      </div>
    </div>
  );
};

export default DashboardLayout;
