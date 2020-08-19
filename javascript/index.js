const jsRules = require('./rules');

module.exports = {
  extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings'],
  parser: 'babel-eslint',
  plugins: [
    "jest"
  ],
  rules: jsRules,
};
