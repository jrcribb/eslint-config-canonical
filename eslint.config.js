import auto from './configurations/auto.js';
import * as ava from './configurations/ava.js';
import * as node from './configurations/node.js';

export default [
  node.recommended,
  ...auto,
  ava.recommended,
  {
    rules: {
      'n/global-require': 0,
    },
  },
  {
    ignores: ['**/package-lock.json', '**/pnpm-lock.yaml'],
  },
];
