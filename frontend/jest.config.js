module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.js',
    '*.js',
    '!**/*.test.js',
    '!node_modules/**',
    '!coverage/**'
  ],
  coverageReporters: ['lcov', 'text', 'html'],
  coverageDirectory: 'coverage'
};
