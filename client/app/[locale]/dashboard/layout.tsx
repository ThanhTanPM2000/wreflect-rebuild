import React from 'react';
import Sidebar from './components/Sidebar';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <Sidebar />
      <div className="flex-grow min-w-[60rem] p-3 bg-gray-100  overflow-y-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
