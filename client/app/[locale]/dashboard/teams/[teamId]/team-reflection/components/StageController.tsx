'use client';

import React, { use } from 'react';
import { add } from 'date-fns';
import Countdown from '@/components/CountDownTimer';
import { Team } from '@/types';
import ActionMenu from './ActionMenu';
import BoardSelect from './BoardSelect';
import ParticipantsDisplay from './ParticipantsDisplay';
import StepController from './TeamStepper';

type Props = {
  team?: Team;
};

const StageController = ({ team }: Props) => {
  return (
    <div className="sticky left-0 flex flex-col items-center gap-3">
      <div className="flex w-full justify-between">
        <div className="relative z-10 flex gap-1 justify-stretch items-center">
          <Countdown endTime={add(new Date(), { days: 4 })} />
          <BoardSelect />
        </div>
        <div className="absolute z-0 w-full flex justify-center">
          {team?.members && team?.members?.length >= 0 && (
            <ParticipantsDisplay participants={team.members} />
          )}
        </div>
        <ActionMenu />
      </div>
      <StepController />
    </div>
  );
};

export default StageController;
