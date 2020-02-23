import { stringGenerator } from '../stringGenerator';

describe('stringGenerator()', () => {
  test('should be defined', () => {
    expect(stringGenerator).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof stringGenerator).toBe('function');
  });

  test('should return a string', () => {
    expect(typeof stringGenerator()).toBe('string');
  });

  test('should return a random string', () => {
    expect(stringGenerator()).not.toBe(stringGenerator());
  });
});
