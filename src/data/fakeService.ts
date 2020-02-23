import { Observable, of } from 'rxjs';

import { FakeData } from './FakeData';
import { dataGenerator } from './dataGenerator';

export const fakeService = (size = 10): Observable<FakeData[]> => of(dataGenerator(size));
