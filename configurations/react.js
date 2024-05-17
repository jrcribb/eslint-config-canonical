module.exports.recommended = {
  files: ['**/*.tsx'],
  plugins: {
    canonical: require('eslint-plugin-canonical'),
    react: require('eslint-plugin-react'),
    'react-hooks': require('eslint-plugin-react-hooks'),
  },
  rules: {
    // TODO broke after upgrading to ESLint v9
    // 'canonical/sort-react-dependencies': 2,
    'react/boolean-prop-naming': 0,
    // 'react/button-has-type': 2,
    // TODO broke after upgrading to ESLint v9
    // 'react/default-props-match-prop-types': 2,
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    'react/forbid-component-props': 2,
    'react/forbid-dom-props': 0,
    'react/forbid-elements': 0,
    'react/forbid-foreign-prop-types': 0,
    'react/forbid-prop-types': 0,
    // TODO broke after upgrading to ESLint v9
    // 'react/function-component-definition': [
    //   2,
    //   {
    //     namedComponents: 'arrow-function',
    //     unnamedComponents: 'arrow-function',
    //   },
    // ],
    // 'react/hook-use-state': 2,
    // 'react/iframe-missing-sandbox': 2,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-child-element-spacing': 0,
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': 0,
    'react/jsx-curly-brace-presence': [
      2,
      {
        children: 'never',
        props: 'never',
      },
    ],
    'react/jsx-curly-newline': 2,
    'react/jsx-curly-spacing': [
      2,
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    // 'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-handler-names': [
      2,
      {
        checkInlineFunction: false,
        checkLocalVariables: false,
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': [
      2,
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/jsx-max-depth': 0,
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 3,
        when: 'multiline',
      },
    ],
    'react/jsx-newline': [
      2,
      {
        prevent: true,
      },
    ],
    // TODO broke after upgrading to ESLint v9
    // 'react/jsx-no-bind': [
    //   2,
    //   {
    //     allowArrowFunctions: true,
    //     allowBind: false,
    //     ignoreRefs: true,
    //   },
    // ],
    'react/jsx-no-comment-textnodes': 2,
    // TODO broke after upgrading to ESLint v9
    // 'react/jsx-no-constructed-context-values': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-script-url': 2,
    'react/jsx-no-target-blank': 2,
    // 'react/jsx-no-undef': 2,
    'react/jsx-no-useless-fragment': [
      2,
      {
        allowExpressions: true,
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-pascal-case': [
      2,
      {
        ignore: [
          'h{}',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'p',
          'a',
          'ul',
          'ol',
          'li',
          'img',
          'div',
          'span',
          'dl',
          'dt',
          'dd',
        ],
      },
    ],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': 2,
    'react/jsx-tag-spacing': [
      2,
      {
        afterOpening: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never',
      },
    ],
    // 'react/jsx-uses-react': 2,
    // 'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 0,
    // TODO broke after upgrading to ESLint v9
    // 'react/no-access-state-in-setstate': 2,
    'react/no-adjacent-inline-elements': 0,
    // TODO broke after upgrading to ESLint v9
    // 'react/no-array-index-key': 2,
    // 'react/no-arrow-function-lifecycle': 2,
    // 'react/no-children-prop': 2,
    'react/no-danger': 2,
    // 'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    // TODO broke after upgrading to ESLint v9
    // 'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-invalid-html-attribute': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    // 'react/no-namespace': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    // TODO broke after upgrading to ESLint v9
    // 'react/no-set-state': 2,
    // 'react/no-string-refs': 2,
    // 'react/no-this-in-sfc': 2,
    // 'react/no-typos': 2,
    'react/no-unescaped-entities': 0,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 2,
    // TODO broke after upgrading to ESLint v9
    // 'react/no-unstable-nested-components': 2,
    'react/no-unused-class-component-methods': 2,
    // TODO broke after upgrading to ESLint v9
    // 'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/no-will-update-set-state': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-exact-props': 0,
    // TODO broke after upgrading to ESLint v9
    // 'react/prefer-read-only-props': 2,
    // 'react/prefer-stateless-function': [
    //   2,
    //   {
    //     ignorePureComponents: true,
    //   },
    // ],
    // 'react/prop-types': 2,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/require-optimization': 0,
    // TODO broke after upgrading to ESLint v9
    // 'react/require-render-return': 2,
    // TODO broke after upgrading to ESLint v9
    'react/self-closing-comp': 2,
    // 'react/sort-comp': 2,
    'react/sort-default-props': 2,
    'react/sort-prop-types': 2,
    'react/state-in-constructor': [2, 'always'],
    // TODO broke after upgrading to ESLint v9
    // 'react/static-property-placement': 2,
    // 'react/style-prop-object': 2,
    // 'react/void-dom-elements-no-children': 2,
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
