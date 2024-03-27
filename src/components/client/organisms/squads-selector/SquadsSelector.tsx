'use client';

import { useState } from 'react';

import type { Squad } from '@api';
import { MultiSelect, type MultiSelectValue } from '@client/molecules';
import { sortByLabel } from '@logic';

import { useSquadsSearchParams } from './hooks/useSquadsSearchParams';

type SquadsSelectionProps = {
  squads: Squad[];
};

export const SquadsSelector = ({ squads }: SquadsSelectionProps) => {
  const [selectedSquads, setSelectedSquads] = useState(
    squads.map(({ id }) => id),
  );
  useSquadsSearchParams(selectedSquads);

  const handleSelectedSquadsChanged = (values: MultiSelectValue[]) => {
    setSelectedSquads(values.map(({ id }) => +id));
  };

  const values = sortByLabel(
    squads.map(({ id, name }) => ({ id: `${id}`, label: name })),
  );

  return (
    <MultiSelect
      values={values}
      initialSelectedValues={values}
      onSelectedValuesChanged={handleSelectedSquadsChanged}
    />
  );
};
