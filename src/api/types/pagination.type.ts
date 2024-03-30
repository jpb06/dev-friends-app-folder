export type Pagination =
  | {
      prev: number | undefined;
      curr: number;
      next: number | undefined;
      last: number;
    }
  | undefined;
