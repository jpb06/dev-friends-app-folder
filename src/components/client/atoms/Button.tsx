'use client';

import { motion } from 'framer-motion';
import type { HTMLProps } from 'react';

export const Button = ({
  onClick,
  disabled,
  children,
  className,
}: HTMLProps<HTMLButtonElement>) => (
  <motion.button
    className={`btn w-24 cursor-pointer bg-sky-900 disabled:border-slate-900 ${className}`}
    aria-disabled={disabled}
    disabled={disabled}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.button>
);
