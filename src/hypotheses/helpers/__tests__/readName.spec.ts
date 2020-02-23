import { readName } from '../readName';

describe('readName()', () => {
  test('should be defined', () => {
    expect(readName).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof readName).toBe('function');
  });

  test('given an object, then should return its name property', () => {
    expect(readName({ name: 'foo' })).toBe('foo');
    expect(readName({} as { name: string })).toBeUndefined();
  });
});
