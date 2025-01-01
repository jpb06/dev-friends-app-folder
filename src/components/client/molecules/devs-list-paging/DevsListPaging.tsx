'use client';

import { parseAsInteger, useQueryState } from 'nuqs';

import type { Pagination } from '@api';
import { Button } from '@client/atoms';

type DevsListPagingProps = {
  page?: Pagination;
  total: number;
};

export const DevsListPaging = ({ page, total }: DevsListPagingProps) => {
  const [queryPage, setQueryPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({
      shallow: false,
    }),
  );

  const handleGotoPreviousPage = () => {
    const value = queryPage ?? page?.curr ?? 1;
    setQueryPage(value - 1);
  };

  const handleGotoNextPage = () => {
    const value = queryPage ?? page?.curr ?? 1;
    setQueryPage(value + 1);
  };

  if (!page) {
    return null;
  }

  const hasPrev = page.prev !== undefined;
  const hasNext = page.next !== undefined;

  return (
    <div className="my-3 flex w-full flex-row justify-between rounded-lg border border-slate-900 bg-gradient-to-bl from-sky-950 via-cyan-950 to-slate-800 p-2">
      <Button onClick={handleGotoPreviousPage} disabled={!hasPrev}>
        {hasPrev ? `Page ${page.prev}` : ''}
      </Button>
      <div className="content-center text-slate-500">{total} results</div>
      <Button onClick={handleGotoNextPage} disabled={!hasNext}>
        {hasNext ? `Page ${page.next}` : ''}
      </Button>
    </div>
  );
};
