'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import type { MouseEventHandler, PropsWithChildren } from 'react';

type BadgeProps = {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
};

export const Badge = ({ onClick, children }: PropsWithChildren<BadgeProps>) => (
  <div className="badge badge-ghost h-10 gap-1 rounded-xl text-slate-500 hover:text-slate-300">
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <XMarkIcon className="-ml-1 h-7 w-7 rounded-lg border border-slate-500 text-slate-500 hover:border-red-700 hover:text-red-700" />
    </motion.div>
    {children}
  </div>
);
