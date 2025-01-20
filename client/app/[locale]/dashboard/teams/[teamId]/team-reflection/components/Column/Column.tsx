'use client';

import React from 'react';
import { COLUMN_DETAIL_FRAGMENT } from '.';
import { gql, useFragment } from '@apollo/client';
import { Droppable } from '@hello-pangea/dnd';
import { IconMenu2 } from '@tabler/icons-react';
import { ActionIcon, Paper, Text } from '@mantine/core';
import { ColumnDetailFragmentFragment } from '@/__generated__/generated-hooks';
import { CreateOpinionPanel } from '../Opinion';
import OpinionItem from '../Opinion/Opinion';

type Props = {
  column: ColumnDetailFragmentFragment;
  index: number;
};

const ColumnItem = ({ column, index }: Props) => {
  const { data } = useFragment<ColumnDetailFragmentFragment>({
    fragment: COLUMN_DETAIL_FRAGMENT,
    from: column,
    fragmentName: 'ColumnDetailFragment',
  });

  return (
    <Droppable
      isDropDisabled={false}
      isCombineEnabled
      ignoreContainerClipping
      droppableId={data.id || ''}
    >
      {(provided) => (
        <Paper shadow="xl" radius="md" p="xl">
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="flex justify-between mb-2">
              <p className="text-primary font-bold text-md">{data.title}</p>
              <ActionIcon variant="transparent">
                <IconMenu2 />
              </ActionIcon>
            </div>
            <div className="flex flex-col gap-4 px-3 py-3 rounded-sm bg-slate-50 !border-blue-600">
              {(column?.opinions || [])?.length > 4 && (
                <CreateOpinionPanel columnId={data!.id as string} />
              )}
              {data?.opinions?.map(
                (opinion, index: number) =>
                  opinion && <OpinionItem key={opinion.id} index={index} opinion={opinion} />
              )}
              {provided.placeholder}
              <CreateOpinionPanel isCreatingBottom={true} columnId={data!.id as string} />
            </div>
          </div>
        </Paper>
      )}
    </Droppable>
  );
};

export default ColumnItem;
