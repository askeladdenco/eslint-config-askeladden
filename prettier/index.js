const rules = require('./rules');

module.exports = {
  extends: [
    'plugin:prettier/recommended', // enables-eslint-plugin-prettier, sets the prettier/prettier rule to "error", extends eslint-config-prettier so that we can set prettier options in .prettierrc
  ],
  rules: rules,
  // "plugins": [
  //   "prettier", enabled by the plugin;prettier/recommended extension
  // ],
  parser: 'babel-eslint',
};
