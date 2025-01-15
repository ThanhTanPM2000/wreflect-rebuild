import React from 'react';
import { Select } from '@mantine/core';

type Props = {};

const BoardSelect = (props: Props) => {
  return (
    <Select
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      allowDeselect={false}
    />
  );
};

export default BoardSelect;
