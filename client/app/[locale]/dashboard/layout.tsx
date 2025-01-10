import React from 'react';
import Sidebar from './components/Sidebar';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-3 bg-gray-100">{children}</div>
    </div>
  );
};

export default DashboardLayout;
