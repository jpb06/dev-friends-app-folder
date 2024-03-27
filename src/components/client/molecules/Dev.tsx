'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import type { Dev as DevType } from '@api';

export const Dev = ({ id, idSquad, firstName, avatar }: DevType) => {
  const handleDevSelected = () => {};

  return (
    <motion.div
      key={id}
      className="rounded-lg bg-base-200 hover:shadow-[inset_0_-20px_40px_rgba(50,0,50,0.5)]"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleDevSelected}
    >
      <div className="relative h-[100px] ">
        <Image
          src={avatar}
          alt={firstName}
          fill
          className="rounded-t-lg object-cover"
          sizes="(max-width: &100px) 100vw"
        />
      </div>
      <div className="my-3">
        <h2 className="text-xl font-bold text-sky-700">{firstName}</h2>
        <div className="mt-1">Squad n°{idSquad}</div>
      </div>
    </motion.div>
  );
};
