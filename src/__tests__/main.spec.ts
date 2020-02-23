describe('init test', () => {
  test('should log `Hello World`', async () => {
    const spy = jest.spyOn(global.console, 'log').mockImplementationOnce(jest.fn());
    await import('../main');
    expect(spy).toHaveBeenCalledWith('Hello World');
  });
});
