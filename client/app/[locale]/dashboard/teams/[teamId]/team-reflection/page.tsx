'use client';

import React, { use } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { TeamQueries } from '@/lib/apollo-client/queries';
import Board from './components/Board';
import StageController from './components/StageController';

type Props = {};

const TeamReflectionPage = () => {
  const params = useParams();

  const { data } = useQuery(TeamQueries.getTeam, {
    variables: {
      teamId: params!.teamId as string,
    },
  });

  // const { data } = useGetTeamQuery({
  //   variables: {
  //     teamId: params.teamId as string,
  //   },
  // });

  return (
    <div className="relative flex flex-col gap-5 overflow-auto">
      {data?.team && (
        <>
          <StageController team={data.team} />
          {/* <Board board={data?.team?.boards[0]} /> */}
        </>
      )}
    </div>
  );
};

export default TeamReflectionPage;
