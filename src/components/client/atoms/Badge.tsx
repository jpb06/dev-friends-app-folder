'use client';

import { XCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import type { MouseEventHandler, PropsWithChildren } from 'react';

type BadgeProps = {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
};

export const Badge = ({ onClick, children }: PropsWithChildren<BadgeProps>) => (
  <div
    className="badge badge-ghost h-10 text-slate-500 hover:text-slate-300"
    onClick={onClick}
  >
    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.98 }}>
      <XCircleIcon className="-ml-2 h-9 w-9 text-slate-500 hover:text-red-700" />
    </motion.div>
    {children}
  </div>
);
