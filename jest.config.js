module.exports = {
  collectCoverageFrom: ['**/*.ts', '!**/*.spec.ts', '!**/__tests__/**/*'],
  coverageDirectory: '../coverage',
  testRegex: '(/__tests__/)?\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  rootDir: '.',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', '<rootDir>'],
};
