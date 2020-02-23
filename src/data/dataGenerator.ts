import { stringGenerator } from './stringGenerator';
import { FakeData } from './FakeData';

export const dataGenerator = (size = 10, buildName = stringGenerator): FakeData[] => {
  return [...new Array(size)].map((_, i): FakeData => ({ id: i + 1, name: buildName() }));
};
