export const readName = <T extends { name: string }>(el: T): string => el.name;
