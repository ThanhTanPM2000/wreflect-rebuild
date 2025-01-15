import React from 'react';
import { AvatarGroup } from '@mantine/core';
import { Member } from '@/types';

type Props = {
  participants: Member[];
};

const ParticipantsDisplay = ({ participants }: Props) => {
  return (
    <AvatarGroup>
      {participants?.map((participant) => (
        <>
          <div></div>
          {/* <Avatar key={participant.id} src={participant} /> */}
        </>
      ))}
    </AvatarGroup>
  );
};

export default ParticipantsDisplay;
