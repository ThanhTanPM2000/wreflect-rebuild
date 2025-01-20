import React from 'react';
import { FragmentType } from '@apollo/client';
import { Grid } from '@mantine/core';
import { TeamDetailFragmentFragment } from '@/__generated__/generated-hooks';
import TeamItem from './TeamItem';

type Props = {
  teams: Array<TeamDetailFragmentFragment>;
};

const TeamList = ({ teams }: Props) => {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      {teams.map((team) => team && <TeamItem team={team} key={team.id} />)}
    </Grid>
  );
};

export default TeamList;
