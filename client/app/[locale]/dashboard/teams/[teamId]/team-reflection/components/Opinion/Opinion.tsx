'use client';

import React from 'react';
import { OPINION_DETAIL_FRAGMENT } from '.';
import { gql, useFragment } from '@apollo/client';
import { Draggable } from '@hello-pangea/dnd';
import { IconDots, IconStar } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { OpinionDetailFragmentFragment } from '@/__generated__/generated-hooks';
import useGetMember from '../../../hooks/useGetMember';
import { MemberAvatar } from '../MemberAvatar';

type Props = {
  opinion: OpinionDetailFragmentFragment;
  index: number;
};

const OpinionItem = ({ opinion, index }: Props) => {
  const { data } = useFragment<OpinionDetailFragmentFragment>({
    fragment: OPINION_DETAIL_FRAGMENT,
    from: opinion,
  });

  const member = useGetMember({ memberId: data?.authorId || '' });

  return (
    data.id && (
      <Draggable key={data.id} draggableId={data.id} index={index}>
        {(provided) => (
          <div
            className="flex flex-col gap-2 justify-between items-center min-h-32 p-4 bg-pink-200"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="flex w-full justify-between items-center">
              <ActionIcon variant="transparent" className="!text-gray-500">
                <IconStar />
              </ActionIcon>
              {member?.user?.picture && <MemberAvatar picture={member?.user?.picture} />}
              <ActionIcon variant="transparent" className="!text-gray-500">
                <IconDots />
              </ActionIcon>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: data.text || '',
              }}
            ></p>
          </div>
        )}
      </Draggable>
    )
  );
};

export default OpinionItem;
