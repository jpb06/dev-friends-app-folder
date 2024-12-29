import { type ChangeEvent, useEffect, useState } from 'react';

import { sortByLabel } from '@logic';

import type { MultiSelectValue } from '../MultiSelect';

export const useSelectValue = (
  values: MultiSelectValue[],
  initialSelectedValues: MultiSelectValue[],
  onSelectedValuesChanged: (values: MultiSelectValue[]) => void,
) => {
  const [currentValue, setCurrentValue] = useState<string | undefined>();
  const [selectedValues, setSelectedValues] = useState<MultiSelectValue[]>([]);

  const handleCurrentValueChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(e.target.value);
  };

  const handleValueAdded = () => {
    const valueAlreadyAdded = selectedValues.some(
      ({ id }) => id === currentValue,
    );
    if (currentValue && !valueAlreadyAdded) {
      const value = values.find(({ id }) => id === currentValue);
      if (value) {
        setSelectedValues((prev) => sortByLabel([...prev, value]));
      }
    }
  };

  const handleValueRemoved = (id: string) => () => {
    setSelectedValues((prev) => prev.filter((team) => team.id !== id));
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setCurrentValue(values.at(0)?.id);
  }, [JSON.stringify(values), setCurrentValue]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setSelectedValues(initialSelectedValues);
  }, [JSON.stringify(initialSelectedValues), setSelectedValues]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    onSelectedValuesChanged(selectedValues);
  }, [JSON.stringify(selectedValues)]);

  return {
    currentValue,
    selectedValues,
    handleCurrentValueChanged,
    handleValueAdded,
    handleValueRemoved,
  };
};
