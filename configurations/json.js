import jsoncPlugin from 'eslint-plugin-jsonc';

export const recommended = {
  files: ['**/*.json'],
  languageOptions: {
    parser: jsoncPlugin,
  },
  plugins: {
    jsonc: jsoncPlugin,
  },
  rules: {
    'jsonc/array-bracket-newline': [
      2,
      {
        minItems: 1,
        multiline: true,
      },
    ],
    'jsonc/array-bracket-spacing': 2,
    'jsonc/array-element-newline': [2, 'always'],
    'jsonc/auto': 0,
    'jsonc/comma-dangle': 2,
    'jsonc/comma-style': [2, 'last'],
    'jsonc/indent': [2, 2],
    'jsonc/key-name-casing': 0,
    'jsonc/key-spacing': 2,
    'jsonc/no-bigint-literals': 2,
    'jsonc/no-binary-expression': 2,
    'jsonc/no-binary-numeric-literals': 2,
    'jsonc/no-comments': 2,
    'jsonc/no-dupe-keys': 2,
    'jsonc/no-escape-sequence-in-identifier': 2,
    'jsonc/no-floating-decimal': 2,
    'jsonc/no-hexadecimal-numeric-literals': 2,
    'jsonc/no-infinity': 2,
    'jsonc/no-multi-str': 2,
    'jsonc/no-nan': 2,
    'jsonc/no-number-props': 2,
    'jsonc/no-numeric-separators': 2,
    'jsonc/no-octal': 2,
    'jsonc/no-octal-escape': 2,
    'jsonc/no-octal-numeric-literals': 2,
    'jsonc/no-parenthesized': 2,
    'jsonc/no-plus-sign': 2,
    'jsonc/no-regexp-literals': 2,
    'jsonc/no-sparse-arrays': 2,
    'jsonc/no-template-literals': 2,
    'jsonc/no-undefined-value': 2,
    'jsonc/no-unicode-codepoint-escapes': 2,
    'jsonc/no-useless-escape': 2,
    'jsonc/object-curly-newline': 2,
    'jsonc/object-curly-spacing': 2,
    'jsonc/object-property-newline': 2,
    'jsonc/quote-props': 2,
    'jsonc/quotes': 2,
    'jsonc/sort-array-values': 0,
    'jsonc/sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'jsonc/space-unary-ops': 2,
    'jsonc/valid-json-number': 2,
    'jsonc/vue-custom-block/no-parsing-error': 2,
  },
};
