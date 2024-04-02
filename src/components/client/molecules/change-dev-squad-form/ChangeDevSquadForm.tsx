'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

import type { Dev, Squad } from '@api';

import { modalAtom } from '../modal/state/modal.atom';

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
  const setModalState = useSetAtom(modalAtom);
  const [state, formAction] = useFormState<ChangeDevSquadFormState, FormData>(
    changeDevSquadAction,
    {
      message: '',
      success: false,
    },
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      setModalState((prev) => ({
        ...prev,
        title: '',
        modalContent: null,
        isOpen: false,
      }));
    }
  }, [state.success, state.message, setModalState]);

  return (
    <form action={formAction} className="flex w-full flex-col">
      <ChangeDevSquad dev={dev} squads={squads} state={state} />
    </form>
  );
};
