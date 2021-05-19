const rules = require('../prettier/rules');

module.exports = {
  extends: ['prettier/react'],
  rules,
  parser: 'babel-eslint',
};
