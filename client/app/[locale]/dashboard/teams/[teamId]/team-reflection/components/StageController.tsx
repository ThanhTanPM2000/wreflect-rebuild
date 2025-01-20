'use client';

import React from 'react';
import { add } from 'date-fns';
import { AvatarGroup } from '@mantine/core';
import { GetTeamQuery, MemberAvatarFragmentFragment } from '@/__generated__/generated-hooks';
import Countdown from '@/components/CountDownTimer';
import ActionMenu from './ActionMenu';
import BoardSelect from './BoardSelect';
import { MemberAvatar } from './MemberAvatar';
import StepController from './TeamStepper';

type Props = {
  team?: GetTeamQuery['team'];
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
          <AvatarGroup>
            {team?.members?.map(
              (member) =>
                member &&
                member.user &&
                member.user?.picture && (
                  <MemberAvatar size={40} picture={member?.user?.picture} key={member.id} />
                )
            )}
          </AvatarGroup>
        </div>
        <ActionMenu />
      </div>
      <StepController />
    </div>
  );
};

export default StageController;
