import { useEffect, useState } from 'react';

import { sortByLabel } from '@logic';

import { MultiSelectValue } from '../MultiSelect';

export const useSelectValue = (
  values: MultiSelectValue[],
  initialSelectedValues: MultiSelectValue[],
  onSelectedValuesChanged: (values: MultiSelectValue[]) => void,
) => {
  const [currentValue, setCurrentValue] = useState<string | undefined>();
  const [selectedValues, setSelectedValues] = useState<MultiSelectValue[]>([]);

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
        setSelectedValues((prev) => sortByLabel([...prev, value]));
      }
    }
  };

  const handleValueRemoved = (id: string) => () => {
    setSelectedValues((prev) => prev.filter((team) => team.id !== id));
  };

  useEffect(() => {
    setCurrentValue(values.at(0)?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(values), setCurrentValue]);

  useEffect(() => {
    setSelectedValues(initialSelectedValues);
  }, [JSON.stringify(initialSelectedValues), setSelectedValues]);

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
