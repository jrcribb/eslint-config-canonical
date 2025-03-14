export const recommended = {
  files: ['**/*.{ts,tsx}'],
  rules: {
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/func-call-spacing': [2, 'never'],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/init-declarations': 0,
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-dupe-class-members': 2,
    '@typescript-eslint/no-invalid-this': 0,
    '@typescript-eslint/no-loop-func': 2,
    '@typescript-eslint/no-loss-of-precision': 2,
    '@typescript-eslint/no-magic-numbers': 0,
    '@typescript-eslint/no-redeclare': [
      2,
      {
        builtinGlobals: true,
      },
    ],
    '@typescript-eslint/no-restricted-imports': 0,
    '@typescript-eslint/no-shadow': [
      2,
      {
        builtinGlobals: false,
        hoist: 'all',
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      2,
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
        enforceForJSX: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        classes: true,
        functions: false,
        variables: true,
      },
    ],
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/require-await': 0,
    'block-spacing': 0,
    'default-param-last': 0,
    'dot-notation': 0,
    'func-call-spacing': 0,
    indent: 0,
    'init-declarations': 0,
    'no-array-constructor': 0,
    'no-dupe-class-members': 0,
    'no-duplicate-imports': 0,
    'no-empty-function': 0,
    'no-implied-eval': 0,
    'no-invalid-this': 0,
    'no-loop-func': 0,
    'no-loss-of-precision': 0,
    'no-magic-numbers': 0,
    'no-redeclare': 0,
    'no-restricted-imports': 0,
    'no-shadow': 0,
    'no-throw-literal': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-useless-constructor': 0,
    'react/prop-types': 0,
    'require-await': 0,
  },
};
