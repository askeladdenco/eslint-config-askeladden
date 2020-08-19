/**
 * Plain JS-projects uses airbnb-base and React-projects uses airbnb.
 *
 * To avoid duplicating these rules they are imported from here.
 */

module.exports = {
  'no-underscore-dangle': [0],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'import/prefer-default-export': [0],
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
  "no-console": 2
};
