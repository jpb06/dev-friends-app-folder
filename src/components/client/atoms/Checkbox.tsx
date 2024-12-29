'use client';

import { motion } from 'framer-motion';
import type React from 'react';

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
};

export const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(id, e.target.checked);
  };

  return (
    <motion.div
      className="form-control items-center px-2"
      whileHover={{ textDecoration: 'underline' }}
      whileTap={{ scale: 0.98 }}
    >
      <label className="label cursor-pointer gap-2">
        <motion.input
          type="checkbox"
          className="checkbox-accent checkbox h-10 w-10"
          checked={checked}
          onChange={handleChange}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.98 }}
        />
        <span>{label}</span>
      </label>
    </motion.div>
  );
};
