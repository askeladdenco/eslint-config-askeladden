const jsRules = require('../javascript/rules');
const tsRules = require('../typescript/rules');
const prettierRules = require('../prettier/rules');

module.exports = {
  extends: [
    '../javascript',
    '../typescript',
    '../prettier',
    '../prettier-typescript/',
  ].map(require.resolve),
  rules: Object.assign({}, jsRules, tsRules, prettierRules),
};
