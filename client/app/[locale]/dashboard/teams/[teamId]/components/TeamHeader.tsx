import React from 'react';
import TeamsBreadcrumbs from './TeamBreadscrumb';
import TeamNavigation from './TeamNavigation';

type Props = {};

const TeamHeader = (props: Props) => {
  return (
    <div className="h-fit items-center justify-between flex min-w-fit bg-white py-6 px-5 shadow rounded-xl min-h-full ">
      <TeamsBreadcrumbs />
      <TeamNavigation />
    </div>
  );
};

export default TeamHeader;
