module.exports = {
  extends: [
    'plugin:prettier/recommended', // enables-eslint-plugin-prettier, sets the prettier/prettier rule to "error", extends eslint-config-prettier so that we can set prettier options in .prettierrc
  ],
  rules: {
    // Prettier errors are expected to be fixed automatically. No need to also hint in IDE.
    "prettier/prettier": 0
  },
  // "plugins": [
  //   "prettier", enabled by the plugin;prettier/recommneded extension
  // ],
  parser: 'babel-eslint',
};
