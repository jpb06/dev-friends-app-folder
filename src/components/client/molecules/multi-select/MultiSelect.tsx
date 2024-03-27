'use client';

import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { Badge } from '@client/atoms';

import { useSelectValue } from './hooks/useSelectValue';
import { MultiSelectSkeleton } from './MultiSelectSkeleton';

export type MultiSelectValue = {
  id: string;
  label: string;
};

export type MultiSelectProps = {
  values: MultiSelectValue[];
  initialSelectedValues: MultiSelectValue[];
  onSelectedValuesChanged: (values: MultiSelectValue[]) => void;
};

export const MultiSelect = ({
  values,
  initialSelectedValues,
  onSelectedValuesChanged,
}: MultiSelectProps) => {
  const {
    currentValue,
    setCurrentValue,
    selectedValues,
    handleCurrentValueChanged,
    handleValueAdded,
    handleValueRemoved,
  } = useSelectValue(values, initialSelectedValues, onSelectedValuesChanged);

  useEffect(() => {
    setCurrentValue(values.at(0)?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(values), setCurrentValue]);

  if (!currentValue) {
    return <MultiSelectSkeleton />;
  }

  return (
    <div className="form-control mb-2 w-full rounded-lg border border-slate-900 bg-gradient-to-bl from-sky-950 via-cyan-950 to-slate-800 p-2">
      <div className="label flex flex-wrap justify-normal gap-2">
        {selectedValues.length === 0 ? (
          <ChevronDoubleDownIcon className="ml-6 w-10 text-slate-800" />
        ) : (
          selectedValues.map(({ id, label }) => (
            <Badge key={id} onClick={handleValueRemoved(id)}>
              {label}
            </Badge>
          ))
        )}
      </div>
      <div className="flex flex-row gap-2">
        <motion.button
          className="btn btn-primary w-24 disabled:border-slate-900"
          disabled={selectedValues.some((el) => el.id === currentValue)}
          onClick={handleValueAdded}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Add
        </motion.button>
        <select
          className="select select-bordered w-full"
          onChange={handleCurrentValueChanged}
        >
          {values.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
