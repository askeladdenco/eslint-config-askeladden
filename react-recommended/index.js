const jsRules = require('../javascript/rules');
const reactRules = require('../react/rules');
const prettierRules = require('../prettier/rules');

module.exports = {
  extends: ['../javascript', '../react', '../prettier', '../prettier-react/'].map(require.resolve),
  rules: Object.assign({}, jsRules, reactRules, prettierRules),
};
