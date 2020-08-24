/**
 * Plain JS-projects uses airbnb-base and React-projects uses airbnb.
 *
 * To avoid duplicating these rules they are imported from here.
 */

module.exports = {
  'no-underscore-dangle': [0],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'import/prefer-default-export': [0],
  "import/extensions": 0,
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    },
  ],
  "no-use-before-define": [
    "error",
    {
      "functions": false,
      "classes": false,
      "variables": false
    }
  ],
  "no-console": 2,
  "consistent-return": 0,
  "import/no-extraneous-dependencies": [
    "error",
    { "devDependencies": ["**/*.test.ts", "**/*.spec.ts"] }
  ],

  // The readability varies depending on the case. No need to enforce a rule.
  "prefer-template": 0,
  "prefer-destructuring": 0,
  'import/prefer-default-export': 0,

  // We use short-circuts and ternary function calls, though they can be less
  //   readable. Could be considered removed.
  "no-unused-expressions": [
    2,
    { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }
  ],
};
