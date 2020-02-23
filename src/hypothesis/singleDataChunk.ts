import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FakeData } from 'src/data';
import { isIdEven, readName } from 'src/helpers';

export const singleDataChunk = (data: Observable<FakeData[]>): Observable<string[]> => {
  return data.pipe(
    map(array => {
      return array.filter(isIdEven).map(readName);
    }),
  );
};
