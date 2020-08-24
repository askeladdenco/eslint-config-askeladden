const jsRules = require('../javascript/rules');

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  rules: Object.assign({}, jsRules, {
    // React's PropTypes are discouraged
    'react/require-default-props': 0,
    "react/no-unused-prop-types": 0,
    "react/prop-types": 0,

    // Exhaustive deps feels unnecessary. Consider settings this to 2 when we get burnt.
    "react-hooks/exhaustive-deps": 1,

    // Only for styling/consistency, often with undesirable defaults.
    // Can be considered in individual repos.
    "react/jsx-curly-brace-presence": 0,
    "react/static-property-placement": 0,
    "react/destructuring-assignment": 0,
    "react/state-in-constructor": 0,

    // Potentially dangerous, but too practical to let go of.
    "react/jsx-props-no-spreading": 1,

    // Does not support dynamic type prop, which we want.
    // ref https://github.com/yannickcr/eslint-plugin-react/issues/1555
    "react/button-has-type": 0,

    // Allow JSX in .js files
    'react/jsx-filename-extension': [0, { extensions: ['.jsx'] }],

    // Ordering of react component methods
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],

    // Allows label-control connection being nested in DOM
    "jsx-a11y/label-has-associated-control": [2, { "assert": "either" }],

    'react/no-did-mount-set-state': [0],
  }),
};
