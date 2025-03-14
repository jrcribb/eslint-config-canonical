import stylisticPlugin from '@stylistic/eslint-plugin';
import canonicalPlugin from 'eslint-plugin-canonical';
import eslintComments from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import promisePlugin from 'eslint-plugin-promise';
import unicornPlugin from 'eslint-plugin-unicorn';

const importRules = {
  'import/consistent-type-specifier-style': [2, 'prefer-inline'],
  'import/default': 2,
  'import/dynamic-import-chunkname': 0,
  'import/export': 2,
  'import/exports-last': 0,
  'import/extensions': 0,
  'import/first': 2,
  'import/group-exports': 0,
  'import/max-dependencies': 0,
  'import/named': 0,
  'import/namespace': 0,
  'import/newline-after-import': 2,
  'import/no-absolute-path': 2,
  'import/no-amd': 2,
  'import/no-anonymous-default-export': 0,
  'import/no-commonjs': 0,
  'import/no-cycle': 2,
  'import/no-default-export': 0,
  'import/no-deprecated': 1,
  'import/no-duplicates': [
    2,
    {
      considerQueryString: true,
      'prefer-inline': true,
    },
  ],
  'import/no-dynamic-require': 2,
  'import/no-extraneous-dependencies': [
    2,
    {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    },
  ],
  'import/no-import-module-exports': 0,
  'import/no-internal-modules': 0,
  'import/no-mutable-exports': 2,
  'import/no-named-as-default': 2,
  'import/no-named-as-default-member': 2,
  'import/no-named-default': 2,
  'import/no-named-export': 0,
  'import/no-namespace': 0,
  'import/no-nodejs-modules': 0,
  'import/no-relative-packages': 0,
  'import/no-relative-parent-imports': 0,
  'import/no-restricted-paths': 0,
  'import/no-self-import': 2,
  'import/no-unassigned-import': 2,
  'import/no-unresolved': 0,
  'import/no-unused-modules': 0,
  'import/no-useless-path-segments': [
    2,
    {
      noUselessIndex: true,
    },
  ],
  'import/no-webpack-loader-syntax': 2,
  'import/order': 0,
  'import/prefer-default-export': 0,
  'import/unambiguous': 0,
};

const unicornRules = {
  'unicorn/better-regex': 2,
  'unicorn/catch-error-name': [
    'error',
    {
      name: 'error',
    },
  ],
  'unicorn/consistent-destructuring': 0,
  'unicorn/consistent-function-scoping': 2,
  'unicorn/custom-error-definition': 0,
  'unicorn/empty-brace-spaces': 2,
  'unicorn/error-message': 2,
  'unicorn/escape-case': 2,
  'unicorn/expiring-todo-comments': 0,
  'unicorn/explicit-length-check': 0,
  'unicorn/filename-case': 0,
  'unicorn/import-style': 0,
  'unicorn/new-for-builtins': 2,
  'unicorn/no-abusive-eslint-disable': 2,
  'unicorn/no-array-callback-reference': 0,
  'unicorn/no-array-for-each': 2,
  'unicorn/no-array-method-this-argument': 2,
  'unicorn/no-array-push-push': 0,
  'unicorn/no-array-reduce': [
    'error',
    {
      allowSimpleOperations: true,
    },
  ],
  'unicorn/no-await-expression-member': 0,
  'unicorn/no-console-spaces': 0,
  'unicorn/no-document-cookie': 2,
  'unicorn/no-empty-file': 2,
  'unicorn/no-for-loop': 2,
  'unicorn/no-hex-escape': 2,
  'unicorn/no-instanceof-array': 2,
  'unicorn/no-invalid-remove-event-listener': 2,
  'unicorn/no-keyword-prefix': 0,
  'unicorn/no-lonely-if': 2,
  'unicorn/no-nested-ternary': 2,
  'unicorn/no-new-array': 2,
  'unicorn/no-new-buffer': 2,
  'unicorn/no-null': 0,
  'unicorn/no-object-as-default-parameter': 2,
  'unicorn/no-process-exit': 0,
  'unicorn/no-static-only-class': 2,
  'unicorn/no-thenable': 2,
  'unicorn/no-this-assignment': 2,
  'unicorn/no-unreadable-array-destructuring': 0,
  'unicorn/no-unreadable-iife': 2,
  'unicorn/no-unused-properties': 2,
  'unicorn/no-useless-fallback-in-spread': 2,
  'unicorn/no-useless-length-check': 2,
  'unicorn/no-useless-promise-resolve-reject': 2,
  'unicorn/no-useless-spread': 2,
  'unicorn/no-useless-switch-case': 0,
  'unicorn/no-useless-undefined': 0,
  'unicorn/no-zero-fractions': 2,
  'unicorn/number-literal-case': 2,
  'unicorn/numeric-separators-style': [
    2,
    {
      number: {
        groupLength: 3,
        minimumDigits: 0,
      },
    },
  ],
  'unicorn/prefer-add-event-listener': 0,
  'unicorn/prefer-array-find': 2,
  'unicorn/prefer-array-flat': 2,
  'unicorn/prefer-array-flat-map': 2,
  'unicorn/prefer-array-index-of': 2,
  'unicorn/prefer-array-some': 2,
  'unicorn/prefer-at': 0,
  'unicorn/prefer-blob-reading-methods': 2,
  'unicorn/prefer-code-point': 2,
  'unicorn/prefer-date-now': 2,
  'unicorn/prefer-default-parameters': 2,
  'unicorn/prefer-export-from': 2,
  'unicorn/prefer-includes': 2,
  'unicorn/prefer-json-parse-buffer': 2,
  'unicorn/prefer-math-trunc': 2,
  'unicorn/prefer-modern-math-apis': 2,
  'unicorn/prefer-native-coercion-functions': 2,
  'unicorn/prefer-negative-index': 0,
  'unicorn/prefer-number-properties': 2,
  'unicorn/prefer-object-from-entries': 2,
  'unicorn/prefer-optional-catch-binding': 2,
  'unicorn/prefer-prototype-methods': 0,
  'unicorn/prefer-query-selector': 2,
  'unicorn/prefer-reflect-apply': 2,
  'unicorn/prefer-regexp-test': 2,
  'unicorn/prefer-set-has': 0,
  'unicorn/prefer-spread': 0,
  'unicorn/prefer-string-replace-all': 2,
  'unicorn/prefer-string-slice': 2,
  'unicorn/prefer-string-starts-ends-with': 2,
  'unicorn/prefer-string-trim-start-end': 2,
  'unicorn/prefer-switch': 0,
  'unicorn/prefer-ternary': 0,
  'unicorn/prefer-top-level-await': 0,
  'unicorn/prefer-type-error': 2,
  'unicorn/prevent-abbreviations': [
    2,
    {
      checkProperties: false,
      replacements: {
        args: false,
        pkg: false,
        props: false,
        ref: false,
        rel: false,
      },
    },
  ],
  'unicorn/relative-url-style': [2, 'never'],
  'unicorn/require-array-join-separator': 2,
  'unicorn/require-number-to-fixed-digits-argument': 2,
  'unicorn/require-post-message-target-origin': 2,
  'unicorn/string-content': 0,
  'unicorn/template-indent': 2,
  'unicorn/text-encoding-identifier-case': 2,
  'unicorn/throw-new-error': 2,
};

export const recommended = {
  files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
  plugins: {
    '@stylistic': stylisticPlugin,
    canonical: canonicalPlugin,
    'eslint-comments': eslintComments,
    import: importPlugin,
    perfectionist,
    promise: promisePlugin,
    unicorn: unicornPlugin,
  },
  rules: {
    ...perfectionist.configs['recommended-natural'].rules,
    'perfectionist/sort-imports': [
      2,
      {
        groups: [],
        ignoreCase: true,
        maxLineLength: undefined,
        newlinesBetween: 'never',
        type: 'natural',
      },
    ],
    ...importRules,
    ...unicornRules,
    '@stylistic/array-bracket-newline': [
      2,
      {
        minItems: 1,
        multiline: true,
      },
    ],
    '@stylistic/array-bracket-spacing': [2, 'never'],
    '@stylistic/array-element-newline': [
      2,
      {
        minItems: 1,
        multiline: true,
      },
    ],
    '@stylistic/arrow-parens': [2, 'always'],
    '@stylistic/arrow-spacing': [
      2,
      {
        after: true,
        before: true,
      },
    ],
    '@stylistic/block-spacing': [2, 'always'],
    '@stylistic/brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    '@stylistic/comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    '@stylistic/comma-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    '@stylistic/comma-style': [2, 'last'],
    '@stylistic/computed-property-spacing': [2, 'never'],
    '@stylistic/dot-location': [2, 'property'],
    '@stylistic/eol-last': 2,
    '@stylistic/func-call-spacing': [2, 'never'],
    '@stylistic/function-call-argument-newline': [2, 'consistent'],
    '@stylistic/function-call-spacing': [2, 'never'],
    '@stylistic/generator-star-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    '@stylistic/implicit-arrow-linebreak': [2, 'beside'],
    '@stylistic/indent': [2, 2],
    '@stylistic/jsx-quotes': [2, 'prefer-single'],
    '@stylistic/key-spacing': [
      2,
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    '@stylistic/keyword-spacing': [
      2,
      {
        after: true,
        before: true,
      },
    ],
    '@stylistic/line-comment-position': [
      2,
      {
        position: 'above',
      },
    ],
    '@stylistic/linebreak-style': [2, 'unix'],
    '@stylistic/lines-around-comment': 0,
    '@stylistic/lines-between-class-members': [2, 'always'],
    '@stylistic/max-len': 0,
    '@stylistic/multiline-comment-style': 0,
    '@stylistic/multiline-ternary': 0,
    '@stylistic/new-parens': 2,
    '@stylistic/newline-per-chained-call': 0,
    '@stylistic/no-confusing-arrow': 2,
    '@stylistic/no-extra-parens': 2,
    '@stylistic/no-extra-semi': 2,
    '@stylistic/no-floating-decimal': 2,
    '@stylistic/no-mixed-operators': 0,
    '@stylistic/no-mixed-spaces-and-tabs': 2,
    '@stylistic/no-multi-spaces': 2,
    '@stylistic/no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    '@stylistic/no-tabs': 2,
    '@stylistic/no-trailing-spaces': 2,
    '@stylistic/no-whitespace-before-property': 2,
    '@stylistic/nonblock-statement-body-position': [2, 'below'],
    '@stylistic/object-curly-newline': [
      2,
      {
        ExportDeclaration: 'always',
        ImportDeclaration: 'always',
        ObjectExpression: {
          minProperties: 1,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 1,
          multiline: true,
        },
      },
    ],
    '@stylistic/object-curly-spacing': 0,
    '@stylistic/object-property-newline': [
      2,
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    '@stylistic/one-var-declaration-per-line': 2,
    '@stylistic/operator-linebreak': [2, 'after'],
    '@stylistic/padded-blocks': [2, 'never'],
    '@stylistic/padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        next: '*',
        prev: 'multiline-block-like',
      },
    ],
    '@stylistic/quote-props': [
      2,
      'as-needed',
      {
        numbers: true,
      },
    ],
    '@stylistic/quotes': [2, 'single'],
    '@stylistic/rest-spread-spacing': [2, 'never'],
    '@stylistic/semi': [2, 'always'],
    '@stylistic/semi-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    '@stylistic/space-before-blocks': [2, 'always'],
    '@stylistic/space-before-function-paren': [2, 'always'],
    '@stylistic/space-in-parens': [2, 'never'],
    '@stylistic/space-infix-ops': 2,
    '@stylistic/space-unary-ops': [
      2,
      {
        nonwords: false,
        words: true,
      },
    ],
    '@stylistic/spaced-comment': [2, 'always'],
    '@stylistic/switch-colon-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    '@stylistic/template-curly-spacing': [2, 'never'],
    '@stylistic/template-tag-spacing': [2, 'never'],
    '@stylistic/wrap-iife': [2, 'inside'],

    '@stylistic/wrap-regex': 0,
    '@stylistic/yield-star-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'arrow-body-style': [2, 'always'],
    'block-scoped-var': 2,
    camelcase: 0,
    'canonical/destructuring-property-newline': [
      2,
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'canonical/export-specifier-newline': 2,
    'canonical/filename-match-exported': 2,
    'canonical/filename-match-regex': [
      1,
      {
        ignoreExporting: false,
        // https://regex101.com/r/wTCJVg/1
        regex: '^[A-Za-z]+(?:[A-Za-z0-9]*\\.[A-Za-z0-9]+)*\\d*$',
      },
    ],
    'canonical/filename-no-index': 0,
    'canonical/id-match': [
      2,
      '(^[A-Za-z]+(?:[A-Z\\d][a-z\\d]*)*\\d*$)|(^[A-Z]+(_[A-Z\\d]+)*(_\\d$)*$)|(^(_|\\$)$)',
      {
        ignoreDestructuring: true,
        ignoreNamedImports: true,
        onlyDeclarations: true,
        properties: true,
      },
    ],
    'canonical/import-specifier-newline': 2,
    'canonical/no-import-namespace-destructure': 2,
    'canonical/no-restricted-strings': 0,
    'canonical/no-use-extend-native': 2,
    'capitalized-comments': 0,
    'class-methods-use-this': 0,
    complexity: [2, 30],
    'consistent-return': 2,
    'consistent-this': [2, 'self'],
    'constructor-super': 2,
    curly: 2,
    'default-case': 0,
    'default-case-last': 0,
    'default-param-last': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'eslint-comments/disable-enable-pair': [
      2,
      {
        allowWholeFile: true,
      },
    ],
    'eslint-comments/no-aggregating-enable': 2,
    'eslint-comments/no-duplicate-disable': 2,
    'eslint-comments/no-restricted-disable': 0,
    'eslint-comments/no-unlimited-disable': 2,
    'eslint-comments/no-unused-disable': 0,
    'eslint-comments/no-unused-enable': 0,
    'eslint-comments/no-use': 0,
    'eslint-comments/require-description': 0,
    'for-direction': 2,
    'func-name-matching': 2,
    'func-names': [2, 'never'],
    'func-style': [2, 'expression'],
    'function-paren-newline': [2, 'consistent'],
    'getter-return': 2,
    'grouped-accessor-pairs': [2, 'getBeforeSet'],
    'guard-for-in': 2,
    'id-denylist': 0,
    'id-length': [
      2,
      {
        exceptions: ['_', '$', 'a', 'b', 'x', 'y', 'z'],
        min: 2,
      },
    ],
    'id-match': 0,
    'init-declarations': 0,
    'max-classes-per-file': 0,
    'max-depth': 0,
    'max-lines': 0,
    'max-lines-per-function': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'max-statements-per-line': [
      2,
      {
        max: 1,
      },
    ],
    'new-cap': 0,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-async-promise-executor': 2,
    'no-await-in-loop': 0,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 2,
    'no-const-assign': 2,
    'no-constant-condition': 0,
    'no-constructor-return': 2,
    'no-continue': 0,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 0,
    'no-else-return': 0,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 2,
    'no-fallthrough': 0,
    'no-func-assign': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-import-assign': 2,
    'no-inline-comments': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 0,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-loss-of-precision': 2,
    'no-magic-numbers': 0,
    'no-misleading-character-class': 2,
    'no-multi-assign': 2,
    'no-multi-str': 2,
    'no-negated-condition': 2,
    'no-nested-ternary': 0,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-nonoctal-decimal-escape': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-plusplus': 0,
    'no-promise-executor-return': 2,
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': [
      2,
      {
        builtinGlobals: true,
      },
    ],
    'no-regex-spaces': 2,
    'no-restricted-exports': 0,
    'no-restricted-globals': 0,
    'no-restricted-imports': 0,
    'no-restricted-properties': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-setter-return': 2,
    'no-shadow': [
      2,
      {
        builtinGlobals: false,
        hoist: 'all',
      },
    ],
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-ternary': 0,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 0,
    'no-unreachable-loop': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unsafe-optional-chaining': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-unused-private-class-members': 0,
    'no-unused-vars': 2,
    'no-use-before-define': [
      2,
      {
        classes: true,
        functions: false,
        variables: true,
      },
    ],
    'no-useless-backreference': 2,
    'no-useless-call': 2,
    'no-useless-catch': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': [
      2,
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': [
      2,
      {
        allowAsStatement: true,
      },
    ],
    'no-warning-comments': [
      1,
      {
        location: 'start',
        terms: ['todo', '@toto'],
      },
    ],
    'no-with': 2,
    'object-shorthand': [2, 'always'],
    'one-var': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': 0,
    'prefer-exponentiation-operator': 2,
    'prefer-named-capture-group': 0,
    'prefer-numeric-literals': 2,
    'prefer-object-spread': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-regex-literals': [
      2,
      {
        disallowRedundantWrapping: true,
      },
    ],
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 0,
    'promise/param-names': 2,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 2,
    'promise/valid-params': 2,
    radix: 2,
    'require-atomic-updates': 2,
    'require-await': 0,
    'require-unicode-regexp': 2,
    'require-yield': 2,
    'semi-style': [2, 'last'],
    'sort-imports': 0,
    'sort-keys': 0,
    'sort-vars': 2,
    strict: [2, 'never'],
    'symbol-description': 2,
    'unicode-bom': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': [
      2,
      {
        requireStringLiterals: true,
      },
    ],
    'vars-on-top': 2,
    yoda: [2, 'never'],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
  },
};
