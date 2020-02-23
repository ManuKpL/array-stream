import { Observable, from } from 'rxjs';
import { map, switchMap, filter, toArray } from 'rxjs/operators';

import { FakeData } from '../data';
import { isIdEven, readName } from '../helpers';

export const streamDataChunks = (data: Observable<FakeData[]>): Observable<string[]> => {
  return data.pipe(switchMap(from), filter(isIdEven), map(readName), toArray());
};
