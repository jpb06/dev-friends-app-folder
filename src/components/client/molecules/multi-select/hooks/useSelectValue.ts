import { useState } from 'react';

import { sortByLabel } from '@logic';

import { MultiSelectValue } from '../MultiSelect';

export const useSelectValue = (
  values: MultiSelectValue[],
  initialSelectedValues: MultiSelectValue[],
  onSelectedValuesChanged: (values: MultiSelectValue[]) => void,
) => {
  const [currentValue, setCurrentValue] = useState<string | undefined>();
  const [selectedValues, setSelectedValues] = useState<MultiSelectValue[]>(
    initialSelectedValues,
  );

  const handleCurrentValueChanged = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCurrentValue(e.target.value);
  };

  const handleValueAdded = () => {
    const valueAlreadyAdded = selectedValues.some(
      ({ id }) => id === currentValue,
    );
    if (currentValue && !valueAlreadyAdded) {
      const value = values.find(({ id }) => id === currentValue);
      if (value) {
        setSelectedValues((prev) => {
          const newValues = sortByLabel([...prev, value]);
          onSelectedValuesChanged(newValues);
          return newValues;
        });
      }
    }
  };

  const handleValueRemoved = (id: string) => () => {
    setSelectedValues((prev) => {
      const newValues = prev.filter((team) => team.id !== id);
      onSelectedValuesChanged(newValues);

      return newValues;
    });
  };

  return {
    currentValue,
    setCurrentValue,
    selectedValues,
    handleCurrentValueChanged,
    handleValueAdded,
    handleValueRemoved,
  };
};
