import { isIdEven } from '../isIdEven';

describe('isIdEven()', () => {
  test('should be defined', () => {
    expect(isIdEven).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof isIdEven).toBe('function');
  });

  test('should return true if element id prop is even', () => {
    expect(isIdEven({ id: 0 })).toBeTruthy();
  });

  test('should return false if element id prop is odd', () => {
    expect(isIdEven({ id: 1 })).toBeFalsy();
  });
});
