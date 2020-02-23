import { Observable } from 'rxjs';

import { fakeService } from '../fakeService';

describe('fakeService()', () => {
  test('should be defined', () => {
    expect(fakeService).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof fakeService).toBe('function');
  });

  test('should return an Observable', () => {
    expect(fakeService()).toBeInstanceOf(Observable);
  });

  test('given no argument, then returns an array of 10 elements wrapped in an Observable', async () => {
    const dataGeneratorModule = await import('../dataGenerator');
    const generateSpy = jest.spyOn(dataGeneratorModule, 'dataGenerator');

    expect(await fakeService().toPromise()).toHaveLength(10);
    expect(generateSpy).toHaveBeenCalledWith(10);
  });

  test('given a n size argument, then returns an array of n elements wrapped in an Observable', async () => {
    const dataGeneratorModule = await import('../dataGenerator');
    const generateSpy = jest.spyOn(dataGeneratorModule, 'dataGenerator');

    expect(await fakeService(2).toPromise()).toHaveLength(2);
    expect(generateSpy).toHaveBeenCalledWith(2);
  });
});
