'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  disabled,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <motion.button
    className="btn w-24 cursor-pointer bg-sky-900 disabled:border-slate-900"
    disabled={disabled}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.button>
);
