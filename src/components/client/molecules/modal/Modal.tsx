'use client';

import { XCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

import { modalAtom } from './state/modal.atom';

export const Modal = () => {
  const [{ id, isOpen, title, modalContent }, setState] = useAtom(modalAtom);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    setState((s) => ({ ...s, isOpen: false }));
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      id={id}
      ref={dialogRef}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box bg-gradient-to-tr from-sky-950 via-cyan-950 to-slate-800">
        <h3 className="text-lg font-bold text-violet-600">{title}</h3>
        <div className="pt-4">{modalContent}</div>
        <form method="dialog">
          <motion.button
            className="absolute right-[18px] top-[18px]"
            onClick={handleClose}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
          >
            <XCircleIcon
              aria-label="close"
              className="iconbutton w-10 text-slate-400"
            />
          </motion.button>
        </form>
      </div>
    </dialog>
  );
};
