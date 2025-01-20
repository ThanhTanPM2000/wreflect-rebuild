'use client';

import React, { useState } from 'react';
import { BOARD_DETAIL_FRAGMENT } from '.';
import { useFragment } from '@apollo/client';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Grid } from '@mantine/core';
import {
  BoardDetailFragmentFragment,
  ColumnDetailFragmentFragment,
} from '@/__generated__/generated-hooks';
import ColumnItem from '../Column/Column';

type Props = {
  board: BoardDetailFragmentFragment;
};

const Board = ({ board }: Props) => {
  const { data } = useFragment<BoardDetailFragmentFragment>({
    fragment: BOARD_DETAIL_FRAGMENT,
    from: board,
    fragmentName: 'BoardDetailFragment',
  });

  const handleDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId } = result;

    // If no destination, exit the function
    if (!destination) {
      return;
    }

    // If the source and destination are the same, exit the function
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // Find the source and destination columns
    const sourceColumn = data.columns?.find(
      (col) => col && col.id === source.droppableId
    ) as ColumnDetailFragmentFragment;
    const destinationColumn = data.columns?.find(
      (col) => col && col.id === destination.droppableId
    ) as ColumnDetailFragmentFragment;

    if (!sourceColumn || !destinationColumn) {
      return;
    }

    // Clone the items in the source column
    const sourceItems = Array.from(sourceColumn.opinions || []);
    const [movedItem] = sourceItems.splice(source.index, 1);

    // Clone the items in the destination column
    const destinationItems = Array.from(destinationColumn?.opinions || []);
    destinationItems.splice(destination.index, 0, movedItem);

    // Update the column data
    const updatedColumns = data?.columns?.map((col) => {
      if (col?.id === source.droppableId) {
        return {
          ...col,
          items: sourceItems,
        };
      }
      if (col?.id === destination.droppableId) {
        return {
          ...col,
          items: destinationItems,
        };
      }
      return col;
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid className="flex-grow h-full">
        {data?.columns?.map(
          (column, index: number) =>
            column?.isActive && (
              <Grid.Col className="h-full" span={4} key={column.id}>
                <ColumnItem index={index} column={column} key={column.id} />
              </Grid.Col>
            )
        )}
      </Grid>
    </DragDropContext>
  );
};

export default Board;
