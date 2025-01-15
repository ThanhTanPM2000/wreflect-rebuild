import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Opinion } from '@/types';

type Props = {
  opinion: Opinion;
  index: number;
};

const OpinionItem = ({ opinion, index }: Props) => {
  return (
    <Draggable key={opinion.id} draggableId={opinion.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {opinion.text}
        </div>
      )}
    </Draggable>
  );
};

export default OpinionItem;
