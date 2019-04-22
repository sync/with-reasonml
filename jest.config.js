module.exports = {
  setupFiles: ['jest-canvas-mock', '<rootDir>/jest/setup.js'],
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'react-testing-library/cleanup-after-each',
  ],
  moduleFileExtensions: ['web.js', 'js', 'jsx', 'json', 'ts', 'tsx', 'bs.js'],
  modulePathIgnorePatterns: ['dist'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(bs-platform)/)'],
  testRegex: '/__tests__/.*\\.(js|jsx|ts|tsx)$',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  clearMocks: true,
};
