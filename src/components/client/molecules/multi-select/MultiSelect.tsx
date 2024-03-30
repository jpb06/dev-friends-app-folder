'use client';

import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

import { Badge, Button } from '@client/atoms';

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
    selectedValues,
    handleCurrentValueChanged,
    handleValueAdded,
    handleValueRemoved,
  } = useSelectValue(values, initialSelectedValues, onSelectedValuesChanged);

  if (!currentValue) {
    return <MultiSelectSkeleton />;
  }

  return (
    <div className="form-control w-full rounded-lg border border-slate-900 bg-gradient-to-bl from-sky-950 via-cyan-950 to-slate-800 p-2">
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
        <Button
          onClick={handleValueAdded}
          disabled={selectedValues.some((el) => el.id === currentValue)}
        >
          Add
        </Button>
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
