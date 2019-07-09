module.exports = {
  setupFiles: ['jest-canvas-mock', '<rootDir>/jest/setup.js'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
  moduleFileExtensions: ['web.js', 'js', 'jsx', 'json', 'ts', 'tsx', 'bs.js'],
  modulePathIgnorePatterns: ['dist'],
  moduleNameMapper: {
    '^.+\\.css$': '<rootDir>/jest/identity-obj-proxy-esm.js',
    '^.+\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(bs-platform|re-classnames)/)'],
  testRegex: '/__tests__/.*\\.(js|jsx|ts|tsx)$',
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/packages/e2e/',
    '<rootDir>/packages/*/dist',
  ],
  clearMocks: true,
};
