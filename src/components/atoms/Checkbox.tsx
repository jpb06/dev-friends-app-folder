"use client";

import React from "react";

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
    <div className="items-center form-control">
      <label className="cursor-pointer label gap-2">
        <input
          type="checkbox"
          className="checkbox w-10 h-10"
          checked={checked}
          onChange={handleChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
