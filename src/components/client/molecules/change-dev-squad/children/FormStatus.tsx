'use client';

import { useFormStatus } from 'react-dom';

import type { Squad, Dev } from '@api';
import { BubbleProgress } from '@atoms';

import type { ChangeDevSquadFormState } from '../types/change-dev-squad-form-state.type';

import { FormContent } from './FormContent';

interface FormStatusProps {
  dev: Dev;
  squads: Squad[];
  state: ChangeDevSquadFormState;
}

export const FormStatus = ({ dev, squads, state }: FormStatusProps) => {
  const { pending } = useFormStatus();

  return (
    <>
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
        <FormContent
          dev={dev}
          squads={squads}
          state={state}
          pending={pending}
        />
      )}
    </>
  );
};
