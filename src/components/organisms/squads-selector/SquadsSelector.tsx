'use client';

import React, { useState } from 'react';

import type { Squad } from '../../../api/types/dev-friends-api.types';
import { Checkbox } from '../../atoms/Checkbox';

import { useSquadsSearchParams } from './hooks/useSquadsSearchParams';

type SquadsSelectorProps = {
  squads: Squad[];
};

export const SquadsSelector = ({ squads }: SquadsSelectorProps) => {
  const [selectedSquads, setSelectedSquads] = useState(
    squads.map(({ id }) => id),
  );
  useSquadsSearchParams(selectedSquads);

  const handleSquadClicked = (id: string, value: boolean) => {
    setSelectedSquads((prev) => {
      if (value === true) {
        return prev.includes(+id) ? prev : [...prev, +id];
      }

      return prev.filter((el) => el !== +id);
    });
  };

  return (
    <>
      <div className="mb-4 grid w-full grid-cols-1 justify-items-start sm:grid-cols-2 md:grid-cols-4 md:justify-items-center">
        {squads.map(({ id, name }) => (
          <Checkbox
            key={id}
            id={`${id}`}
            label={name}
            checked={selectedSquads.some((el) => el === id)}
            onChange={handleSquadClicked}
          />
        ))}
      </div>
    </>
  );
};
