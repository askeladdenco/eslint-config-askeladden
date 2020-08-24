const jsRules = require('../javascript/rules');

module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  rules: Object.assign({}, jsRules, {
    'react/require-default-props': 0,
    "react/no-unused-prop-types": 0,
    "react/prop-types": 0,
    // We want to encourage destructuring, but in order to do this incrementally we'll on warng about it.
    // See https://github.com/yannickcr/eslint-plugin-react/issues/1731 for more info.
    'react/destructuring-assignment': ['warn', 'always'],
    "react/jsx-curly-brace-presence": 0,
    "react/static-property-placement": 0,
    "react/destructuring-assignment": 0,
    "react/state-in-constructor": 0,

    "react/jsx-props-no-spreading": 1,

    // Does not support dynamic type props :(
    "react/button-has-type": 0,

    'react/jsx-filename-extension': [0, { extensions: ['.jsx'] }],
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
