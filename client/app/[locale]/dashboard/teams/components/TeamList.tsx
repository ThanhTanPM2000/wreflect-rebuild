import React from 'react';
import { Grid } from '@mantine/core';
import { Team } from '@/types';
import TeamItem from './TeamItem';

type Props = {
  teams: Team[];
};

const TeamList = ({ teams }: Props) => {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      {teams.map((team) => (
        <Grid.Col span={4} key={team.id}>
          <TeamItem team={team} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default TeamList;
