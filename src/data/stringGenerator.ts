export const stringGenerator = (): string =>
  Math.random()
    .toString(36)
    .substring(2, 15);
