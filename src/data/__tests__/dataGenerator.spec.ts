describe('dataGenerator()', () => {
  jest.mock('../stringGenerator.ts', () => ({ stringGenerator: (): string => 'foo' }));

  test('should be defined', async () => {
    const { dataGenerator } = await import('../dataGenerator');
    expect(dataGenerator).toBeDefined();
  });

  test('should be a function', async () => {
    const { dataGenerator } = await import('../dataGenerator');
    expect(typeof dataGenerator).toBe('function');
  });

  test('should return an array of FakeData-like objects', async () => {
    const { dataGenerator } = await import('../dataGenerator');
    const result = dataGenerator();

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    result.forEach((res, i) => {
      expect('id' in res).toBeTruthy();
      expect(res.id).toBe(i + 1);
      expect('name' in res).toBeTruthy();
      expect(res.name).toBe('foo');
    });
  });

  test('given no arguments, then should return an array of 10 elements', async () => {
    const { dataGenerator } = await import('../dataGenerator');
    const result = dataGenerator();

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(10);
  });

  test('given a n size argument, then should return an array of n elements', async () => {
    const { dataGenerator } = await import('../dataGenerator');
    const result = dataGenerator(5);

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(5);
  });

  test('given a n size argument and a buildName function, then should return an array of n elements with a name corresponding to the passes function', async () => {
    const { dataGenerator } = await import('../dataGenerator');
    const result = dataGenerator(2, () => 'bar');

    expect(result).toStrictEqual([
      { id: 1, name: 'bar' },
      { id: 2, name: 'bar' },
    ]);
  });
});
