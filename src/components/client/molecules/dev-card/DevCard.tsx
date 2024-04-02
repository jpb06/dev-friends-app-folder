'use client';

import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';
import Image from 'next/image';

import type { Dev, Squad } from '@api';
import { ChangeDevSquad, modalAtom } from '@client/molecules';

type DevCardProps = {
  dev: Dev;
  squads: Squad[];
};

export const DevCard = ({ dev, squads }: DevCardProps) => {
  const setModalState = useSetAtom(modalAtom);

  const handleDevSelected = () => {
    setModalState({
      id: 'change-squad-modal',
      isOpen: true,
      title: 'Change squad',
      modalContent: (
        <ChangeDevSquad
          key={`${dev.id}-${squads.map(({ id }) => id)}`}
          dev={dev}
          squads={squads}
        />
      ),
    });
  };

  return (
    <motion.div
      key={dev.id}
      className="cursor-pointer rounded-lg bg-base-200 hover:shadow-[inset_0_-20px_40px_rgba(50,0,50,0.5)]"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleDevSelected}
    >
      <div className="relative h-[100px] ">
        <Image
          src={dev.avatar}
          alt={dev.firstName}
          fill
          className="rounded-t-lg object-cover"
          sizes="(max-width: &100px) 100vw"
        />
      </div>
      <div className="my-3">
        <h2 className="text-xl font-bold text-sky-700">{dev.firstName}</h2>
        <div className="mt-1 text-xs text-slate-400">Squad n°{dev.idSquad}</div>
        <div className="text-md text-slate-400">
          {squads.find((s) => s.id === dev.idSquad)?.name ?? ''}
        </div>
      </div>
    </motion.div>
  );
};
