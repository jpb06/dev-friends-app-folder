import { atom } from 'jotai';
import type { JSX } from 'react';

export interface ModalState {
  id: string;
  isOpen: boolean;
  modalContent: JSX.Element | null;
  title: string | null;
}

export const modalAtom = atom<ModalState>({
  id: 'modal',
  isOpen: false,
  title: null,
  modalContent: null,
});
