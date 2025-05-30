import jestPlugin from 'eslint-plugin-jest';

export const recommended = {
  languageOptions: {
    globals: jestPlugin.environments.globals.globals,
  },
  plugins: {
    jest: jestPlugin,
  },
  rules: {
    'jest/consistent-test-it': 2,
    'jest/expect-expect': 2,
    'jest/max-nested-describe': [
      2,
      {
        max: 5,
      },
    ],
    'jest/no-alias-methods': 2,
    'jest/no-commented-out-tests': 2,
    'jest/no-conditional-expect': 2,
    'jest/no-conditional-in-test': 2,
    'jest/no-deprecated-functions': 2,
    'jest/no-disabled-tests': 1,
    'jest/no-done-callback': 2,
    'jest/no-duplicate-hooks': 2,
    'jest/no-export': 2,
    'jest/no-focused-tests': 2,
    'jest/no-hooks': 0,
    'jest/no-identical-title': 2,
    'jest/no-interpolation-in-snapshots': 2,
    'jest/no-jasmine-globals': 2,
    'jest/no-large-snapshots': 0,
    'jest/no-mocks-import': 2,
    'jest/no-restricted-matchers': 0,
    'jest/no-standalone-expect': 2,
    'jest/no-test-prefixes': 2,
    'jest/no-test-return-statement': 2,
    'jest/prefer-called-with': 2,
    'jest/prefer-comparison-matcher': 2,
    'jest/prefer-expect-assertions': [
      2,
      {
        onlyFunctionsWithAsyncKeyword: true,
      },
    ],
    'jest/prefer-expect-resolves': 2,
    'jest/prefer-hooks-on-top': 2,
    'jest/prefer-lowercase-title': 0,
    'jest/prefer-snapshot-hint': 2,
    'jest/prefer-spy-on': 2,
    'jest/prefer-strict-equal': 0,
    'jest/prefer-to-be': 2,
    'jest/prefer-to-contain': 2,
    'jest/prefer-to-have-length': 2,
    'jest/prefer-todo': 2,
    'jest/require-hook': 0,
    'jest/require-to-throw-message': 2,
    'jest/require-top-level-describe': 2,
    'jest/unbound-method': 0,
    'jest/valid-describe-callback': 2,
    'jest/valid-expect': 2,
    'jest/valid-expect-in-promise': 2,
    'jest/valid-title': 2,
  },
};
