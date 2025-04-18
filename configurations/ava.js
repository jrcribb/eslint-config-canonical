import ava from 'eslint-plugin-ava';
import unicorn from 'eslint-plugin-unicorn';

export const recommended = {
  files: ['**/*.test.{js,ts,tsx}'],
  plugins: {
    ava,
    unicorn,
  },
  rules: {
    'ava/assertion-arguments': 2,
    'ava/hooks-order': 2,
    'ava/max-asserts': [2, 5],
    'ava/no-async-fn-without-await': 2,
    'ava/no-duplicate-modifiers': 2,
    'ava/no-identical-title': 2,
    'ava/no-ignored-test-files': 2,
    'ava/no-import-test-files': 0,
    'ava/no-incorrect-deep-equal': 2,
    'ava/no-inline-assertions': 2,
    'ava/no-nested-tests': 2,
    'ava/no-only-test': 2,
    'ava/no-skip-assert': 2,
    'ava/no-skip-test': 2,
    'ava/no-todo-implementation': 2,
    'ava/no-todo-test': 2,
    'ava/no-unknown-modifiers': 2,
    'ava/prefer-async-await': 2,
    'ava/prefer-power-assert': 0,
    'ava/prefer-t-regex': 2,
    'ava/test-title': 2,
    'ava/test-title-format': 0,
    'ava/use-t': 2,
    'ava/use-t-throws-async-well': 2,
    'ava/use-t-well': 2,
    'ava/use-test': 2,
    'ava/use-true-false': 2,
    'id-length': [
      2,
      {
        exceptions: ['_', '$', 'a', 'b', 'x', 'y', 't'],
        min: 2,
      },
    ],
    'unicorn/consistent-function-scoping': 0,
  },
};
