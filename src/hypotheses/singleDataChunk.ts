import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FakeData } from '../data';
import { isIdEven, readName } from '../helpers';

export const singleDataChunk = (data: Observable<FakeData[]>): Observable<string[]> => {
  return data.pipe(
    map(array => {
      return array.filter(isIdEven).map(readName);
    }),
  );
};
