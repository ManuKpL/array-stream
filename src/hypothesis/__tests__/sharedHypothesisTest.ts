import { Observable, of } from 'rxjs';

import { FakeData } from 'src/data';

export default (hypothesis: (data: Observable<FakeData[]>) => Observable<string[]>): void => {
  test('should be defined', () => {
    expect(hypothesis).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof hypothesis).toBe('function');
  });

  test('should return an Observable instance', () => {
    expect(hypothesis(of([]))).toBeInstanceOf(Observable);
  });

  test('should return an array wrapped in an Observable', async () => {
    expect(Array.isArray(await hypothesis(of([])).toPromise())).toBeTruthy();
  });

  test('given an array of FakeData with even ids wrapped in an Observable, then returns an array of their names wrapped in an Observable', async () => {
    expect(
      await hypothesis(
        of([
          { id: 2, name: 'bar' },
          { id: 4, name: 'foobar' },
        ]),
      ).toPromise(),
    ).toStrictEqual(['bar', 'foobar']);
  });

  test('given an array of FakeData with odd ids wrapped in an Observable, then returns an empty array wrapped in an Observable', async () => {
    expect(
      await hypothesis(
        of([
          { id: 1, name: 'foo' },
          { id: 3, name: 'qux' },
        ]),
      ).toPromise(),
    ).toStrictEqual([]);
  });

  test("given an array of FakeData with mixed ids wrapped in an Observable, then returns the even id elements' names array wrapped in an Observable", async () => {
    expect(
      await hypothesis(
        of([
          { id: 1, name: 'foo' },
          { id: 2, name: 'bar' },
          { id: 3, name: 'qux' },
          { id: 4, name: 'foobar' },
        ]),
      ).toPromise(),
    ).toStrictEqual(['bar', 'foobar']);
  });
};
