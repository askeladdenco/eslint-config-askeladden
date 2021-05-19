const rules = require('../prettier/rules');

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  rules: rules,
  extends: [
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
};
