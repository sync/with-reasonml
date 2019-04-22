module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  plugins: ['jest', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/spaced-comment': 'off',
        '@typescript-eslint/no-restricted-globals': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['**/__tests__/**', '**/__mocks__/**'],
      globals: {
        mockData: true,
      },
      env: {
        jest: true,
      },
    },
  ],
  globals: {
    fetch: true,
    __DEV__: true,
    window: true,
    FormData: true,
    XMLHttpRequest: true,
    requestAnimationFrame: true,
    cancelAnimationFrame: true,
    page: true,
    browser: true,
    jestPuppeteer: true,
  },
};
