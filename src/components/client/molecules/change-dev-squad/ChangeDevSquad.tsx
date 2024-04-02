'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

import type { Dev, Squad } from '@api';

import { modalAtom } from '../modal/state/modal.atom';

import { changeDevSquadAction } from './actions/change-dev-squad.action';
import { FormStatus } from './children/FormStatus';
import type { ChangeDevSquadFormState } from './types/change-dev-squad-form-state.type';

interface ChangeDevSquadProps {
  dev: Dev;
  squads: Squad[];
}

export const ChangeDevSquad = ({ dev, squads }: ChangeDevSquadProps) => {
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
      <FormStatus dev={dev} squads={squads} state={state} />
    </form>
  );
};
