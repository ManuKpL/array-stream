describe('init test', () => {
  test('should log `Hello World`', async () => {
    const spy = jest.spyOn(global.console, 'log');
    await import('./index');
    expect(spy).toHaveBeenCalledWith('Hello World');
  });
});
