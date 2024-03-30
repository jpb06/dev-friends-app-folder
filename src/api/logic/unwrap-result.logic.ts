export const unwrapResult = <TInput>(wrapped: { result: TInput }) =>
  wrapped.result;

export const unwrapPaginatedResult = <TInput>(wrapped: {
  result: TInput;
  previousPage?: number;
  currentPage: number;
  nextPage?: number;
  lastPage: number;
  total: number;
}) => ({
  data: wrapped.result,
  page: {
    prev: wrapped.previousPage,
    curr: wrapped.currentPage,
    next: wrapped.nextPage,
    last: wrapped.lastPage,
  },
  total: wrapped.total,
});
