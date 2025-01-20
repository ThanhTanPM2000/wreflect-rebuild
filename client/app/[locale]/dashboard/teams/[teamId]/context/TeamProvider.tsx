'use client';

import React from 'react';
import { GetTeamQuery } from '@/__generated__/generated-hooks';

type Props = {
  children: React.ReactNode;
  value: GetTeamQuery['team'];
};

export const TeamContext = React.createContext({});

const TeamProvider = ({ children, value }: Props) => {
  return <TeamContext.Provider value={value || {}}>{children}</TeamContext.Provider>;
};

export default TeamProvider;
