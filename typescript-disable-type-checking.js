/* eslint-disable canonical/filename-match-exported */

const typescript = require('./configurations/typescript-disable-typed-linting');

typescript.rules = {
  ...require('./configurations/typescript-disable-typed-linting').rules,
};

module.exports = typescript;