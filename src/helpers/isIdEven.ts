export const isIdEven = <T extends { id: number }>(el: T): boolean => el.id % 2 === 0;
