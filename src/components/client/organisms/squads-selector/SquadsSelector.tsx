'use client';

import { parseAsArrayOf, parseAsInteger, useQueryState } from 'nuqs';
import { useEffect } from 'react';

import type { Squad } from '@api';
import { MultiSelect, type MultiSelectValue } from '@client/molecules';

import { toMultiSelectValue } from './logic/squad-to-multi-select-value.logic';

type SquadsSelectionProps = {
  squads: Squad[];
};

export const SquadsSelector = ({ squads }: SquadsSelectionProps) => {
  const [querySquads, setQuerySquads] = useQueryState(
    'squads',
    parseAsArrayOf(parseAsInteger, '-')
      .withDefault(squads.map(({ id }) => id))
      .withOptions({
        shallow: false,
      }),
  );
  const [, setQueryPage] = useQueryState(
    'page',
    parseAsInteger.withOptions({ shallow: false }),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const squadsIds = squads.map(({ id }) => id);
    setQuerySquads(querySquads ?? squadsIds);
  }, [JSON.stringify(squads), setQuerySquads]);

  const handleSelectedSquadsChanged = (values: MultiSelectValue[]) => {
    setQuerySquads(values.map(({ id }) => +id));
    setQueryPage(1);
  };

  return (
    <MultiSelect
      values={toMultiSelectValue(squads)}
      initialSelectedValues={toMultiSelectValue(
        squads.filter(({ id }) => querySquads.includes(id)),
      )}
      onSelectedValuesChanged={handleSelectedSquadsChanged}
    />
  );
};
