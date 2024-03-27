export const sortByLabel = <TItem extends { label: string }>(values: TItem[]) =>
  values.sort((a, b) => (a.label < b.label ? -1 : 1));
