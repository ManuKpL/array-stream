import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FakeData } from '../data';
import { isIdEven } from './isIdEven';
import { readName } from './readName';

export const singleDataChunk = (data: Observable<FakeData[]>): Observable<string[]> => {
  return data.pipe(
    map(array => {
      return array.filter(isIdEven).map(readName);
    }),
  );
};
