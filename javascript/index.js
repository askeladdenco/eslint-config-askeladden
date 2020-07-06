const jsRules = require('./rules');
const flatten = require('../utils').flattenEslintConfig;

module.exports = flatten({
  extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings'],
  parser: 'babel-eslint',
  rules: jsRules,
});
