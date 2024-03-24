'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import type { Dev as DevType } from '../../api/types/dev-friends-api.types';

export const Dev = ({ id, idSquad, firstName, avatar }: DevType) => {
  const handleDevSelected = () => {};

  return (
    <motion.div
      key={id}
      className="rounded-xl bg-base-200"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleDevSelected}
    >
      <div className="relative h-[100px] w-[170px]">
        <Image
          src={avatar}
          alt={firstName}
          fill
          className="rounded-t-xl"
          sizes="(max-width: &70px) 100vw"
        />
      </div>
      <div className="my-3">
        <h2 className="text-xl font-bold">{firstName}</h2>
        <div className="mt-1">Squad n°{idSquad}</div>
      </div>
    </motion.div>
  );
};
