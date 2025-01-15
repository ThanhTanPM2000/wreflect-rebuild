'use client';

import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Board as BoardType } from '@/types';
import ColumnItem from './Column';

type Props = {
  board: BoardType;
};

const Board = ({ board }: Props) => {
  const handleDragEnd = async (result: DropResult) => {
    console.log({ result });
  };

  const data = [
    {
      id: '1',
      content: 'hello',
    },
    {
      id: '2',
      content: 'hello2',
    },
  ];

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {board.columns.map((column) => (
        <ColumnItem column={column} />
      ))}
    </DragDropContext>
  );
};

export default Board;
