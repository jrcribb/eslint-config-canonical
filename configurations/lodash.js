import lodashPlugin from 'eslint-plugin-lodash';

export const recommended = {
  plugins: {
    lodash: lodashPlugin,
  },
  rules: {
    'lodash/callback-binding': 2,
    'lodash/chain-style': [2, 'explicit'],
    'lodash/chaining': [2, 'always'],
    'lodash/collection-method-value': 2,
    'lodash/collection-ordering': 2,
    'lodash/collection-return': 2,
    'lodash/consistent-compose': [2, 'flow'],
    'lodash/identity-shorthand': [2, 'always'],
    'lodash/import-scope': 0,
    'lodash/matches-prop-shorthand': 2,
    'lodash/matches-shorthand': [2, 'always', 3],
    'lodash/no-commit': 2,
    'lodash/no-double-unwrap': 2,
    'lodash/no-extra-args': 2,
    'lodash/no-unbound-this': 2,
    'lodash/path-style': 0,
    'lodash/prefer-compact': 2,
    'lodash/prefer-constant': 0,
    'lodash/prefer-filter': [2, 3],
    'lodash/prefer-find': 2,
    'lodash/prefer-flat-map': 2,
    'lodash/prefer-get': [2, 3],
    'lodash/prefer-immutable-method': 2,
    'lodash/prefer-includes': 2,
    'lodash/prefer-invoke-map': 0,
    'lodash/prefer-is-nil': 2,
    'lodash/prefer-lodash-chain': 2,
    'lodash/prefer-lodash-method': 0,
    'lodash/prefer-lodash-typecheck': 2,
    'lodash/prefer-map': 2,
    'lodash/prefer-matches': 2,
    'lodash/prefer-noop': 0,
    'lodash/prefer-over-quantifier': 2,
    'lodash/prefer-reject': [1, 3],
    'lodash/prefer-some': [
      2,
      {
        includeNative: false,
      },
    ],
    'lodash/prefer-startswith': 0,
    'lodash/prefer-thru': 2,
    'lodash/prefer-times': 2,
    'lodash/prefer-wrapper-method': 2,
    'lodash/preferred-alias': 2,
    'lodash/prop-shorthand': 2,
    'lodash/unwrap': 2,
  },
};
