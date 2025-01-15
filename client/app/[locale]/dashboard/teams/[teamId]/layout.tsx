import React from 'react';
import TeamHeader from './components/TeamHeader';

type Props = {
  children: React.ReactNode;
};

const TeamLayout = ({ children }: Props) => {
  return (
    <div className="relative h-full flex flex-col gap-5 overflow-x-auto">
      <div className="sticky z-10 top-0 left-0 h-20">
        <TeamHeader />
      </div>
      {children}
    </div>
  );
};

export default TeamLayout;
