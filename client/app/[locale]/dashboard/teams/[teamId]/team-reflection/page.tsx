'use client';

import React, { useContext } from 'react';
import { useParams } from 'next/navigation';
import { useGetTeamQuery } from '@/__generated__/generated-hooks';
import { AuthContext } from '@/app/[locale]/dashboard/contexts/AuthContext';
import { Board } from './components/Board';
// import Board, { BOARD_DETAIL_FRAGMENT } from './components/Board';
import StageController from './components/StageController';

type Props = {};

const TeamReflectionPage = () => {
  const params = useParams();

  const { data } = useGetTeamQuery({
    variables: {
      teamId: params!.teamId as string,
    },
  });

  return (
    <div className="relative flex-grow flex flex-col gap-5 overflow-y-hidden overflow-x-auto">
      {data?.team?.boards?.[0] && (
        <>
          <StageController team={data.team} />
          <Board board={data?.team?.boards[0]} />
        </>
      )}
    </div>
  );
};

export default TeamReflectionPage;
