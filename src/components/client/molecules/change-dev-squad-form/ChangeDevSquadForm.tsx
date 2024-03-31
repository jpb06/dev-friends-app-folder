'use client';

import { useFormState } from 'react-dom';

import type { Dev, Squad } from '@api';

import { changeDevSquadAction } from './actions/change-dev-squad.action';
import { ChangeDevSquad } from './ChangeDevSquad';
import type { ChangeDevSquadFormState } from './types/change-dev-squad-form-state.type';

interface ChangeDevSquadFormProps {
  dev: Dev;
  squads: Squad[];
}

export const ChangeDevSquadForm = ({
  dev,
  squads,
}: ChangeDevSquadFormProps) => {
  const [state, formAction] = useFormState<ChangeDevSquadFormState, FormData>(
    changeDevSquadAction,
    {
      message: '',
      success: false,
    },
  );

  return (
    <form action={formAction} className="flex w-full flex-col">
      <ChangeDevSquad dev={dev} squads={squads} state={state} />
    </form>
  );
};
