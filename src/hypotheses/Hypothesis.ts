import { FakeData } from '../data';
import { Observable } from 'rxjs';
export interface Hypothesis {
  name: string;
  method: (data: Observable<FakeData[]>) => Observable<string[]>;
}
