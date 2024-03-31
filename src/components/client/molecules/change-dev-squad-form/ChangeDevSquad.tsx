'use client';

import { useFormStatus } from 'react-dom';

import type { Squad, Dev } from '@api';
import { BubbleProgress } from '@atoms';

import { FormElements } from './children/FormElements';
import type { ChangeDevSquadFormState } from './types/change-dev-squad-form-state.type';

interface ChangeDevSquadProps {
  dev: Dev;
  squads: Squad[];
  state: ChangeDevSquadFormState;
}

export const ChangeDevSquad = ({ dev, squads, state }: ChangeDevSquadProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      <input type="hidden" name="idDev" value={dev.id} />
      <div className="mb-2 text-sky-500">
        {pending
          ? `Moving ${dev.firstName} to squad ${squads.find((s) => s.id === dev.idSquad)?.name} ...`
          : `Move ${dev.firstName} to another squad`}
      </div>
      {pending ? (
        <div className="mt-2 w-full text-center">
          <BubbleProgress />
        </div>
      ) : (
        <FormElements
          dev={dev}
          squads={squads}
          state={state}
          pending={pending}
        />
      )}
    </>
  );
};
