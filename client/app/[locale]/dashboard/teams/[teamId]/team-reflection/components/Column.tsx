import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Column } from '@/types';
import OpinionItem from './Opinion';

type Props = {
  column: Column;
};

const ColumnItem = ({ column }: Props) => {
  return (
    <Droppable
      isDropDisabled={false}
      isCombineEnabled
      ignoreContainerClipping
      droppableId="droppable"
    >
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {column.opinions.map((opinion, index) => (
            <OpinionItem opinion={opinion} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ColumnItem;
