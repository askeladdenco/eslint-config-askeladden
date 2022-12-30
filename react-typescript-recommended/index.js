const jsRules = require('../javascript/rules');
const tsRules = require('../typescript/rules');
const prettierRules = require('../prettier/rules');
const reactRules = require('../react/rules');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '../javascript',
    '../react',
    '../typescript',
    '../prettier',
    '../prettier-typescript/',
  ].map(require.resolve),
  rules: Object.assign({}, jsRules, tsRules, reactRules, prettierRules),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
