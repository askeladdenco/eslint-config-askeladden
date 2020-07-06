const flatten = require('../utils').flattenEslintConfig;

module.exports = flatten({
  extends: ['prettier/react'],
  parser: 'babel-eslint',
});
