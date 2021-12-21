module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2_020,
  },
  plugins: [
    'unicorn',
    'import',
    'node',
  ],
  rules: {
    'node/callback-return': 2,
    'node/exports-style': [
      2,
      'module.exports',
    ],
    'node/file-extension-in-import': 0,
    'node/global-require': 2,
    'node/handle-callback-err': 2,
    'node/no-callback-literal': 2,
    'node/no-deprecated-api': 2,
    'node/no-exports-assign': 2,
    'node/no-extraneous-import': 2,
    'node/no-extraneous-require': 2,
    'node/no-missing-import': 0,
    'node/no-missing-require': 0,
    'node/no-mixed-requires': 0,
    'node/no-new-require': 2,
    'node/no-path-concat': 2,
    'node/no-process-env': 2,
    'node/no-process-exit': 2,
    'node/no-restricted-import': 0,
    'node/no-restricted-require': 0,
    'node/no-sync': [
      2,
      {
        allowAtRootLevel: true,
      },
    ],
    'node/no-unpublished-bin': 2,
    'node/no-unpublished-import': 0,
    'node/no-unpublished-require': 0,
    'node/no-unsupported-features/es-builtins': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-unsupported-features/node-builtins': 0,
    'node/prefer-global/buffer': 2,
    'node/prefer-global/console': 2,
    'node/prefer-global/process': 2,
    'node/prefer-global/text-decoder': 2,
    'node/prefer-global/text-encoder': 2,
    'node/prefer-global/url': 2,
    'node/prefer-global/url-search-params': 2,
    'node/prefer-promises/dns': 2,
    'node/prefer-promises/fs': 2,
    'node/process-exit-as-throw': 2,
    'node/shebang': [
      2,
      {
        convertPath: {
          'src/**/*.js': [
            '^src/(.+?)\\.js$',
            'dist/$1.js',
          ],
        },
      },
    ],
    'unicorn/prefer-node-protocol': 2,
  },
};
