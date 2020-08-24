/**
 * Plain JS-projects uses airbnb-base and React-projects uses airbnb.
 *
 * To avoid duplicating these rules they are imported from here.
 */

module.exports = {
  // Do not allow use of undefined variables
  'no-undef': 2,

  // Do not allow unused variables – a common cause of bugs
  "no-unused-vars": 2,

  'no-underscore-dangle': 0,

  // Allow e.g. i++ in loops
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

  // Do not require default exports
  "import/extensions": 0,
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    },
  ],

  // Do not use a variable before it's define, unless it's accessed after initialization
  "no-use-before-define": [
    2,
    {
      "functions": false,
      "classes": false,
      "variables": false
    }
  ],

  // Prevent accidental console logs
  "no-console": 2,

  // Allow implicit return of value undefined in functions where values can also be returned
  "consistent-return": 0,

  // Disallow depending on libraries not inside package.json
  "import/no-extraneous-dependencies": [
    2,
    // For test files, allow libraries only to be specified in devDependencies
    { "devDependencies": ["**/*.test.ts", "**/*.spec.ts"] }
  ],

  // The readability varies depending on the case. No need to enforce a rule.
  "prefer-template": 0,
  "prefer-destructuring": 0,
  'import/prefer-default-export': 0,

  // We use short-circuit and ternary function calls, though they can be less
  //   readable. Could be considered removed at a later stage.
  "no-unused-expressions": [
    2,
    { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }
  ],

  // Allow second parameter to be optional in parseInt
  "radix": 0,
};
