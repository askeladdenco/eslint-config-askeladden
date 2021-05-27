module.exports = {
  // Typescript style rules are a bit odd (to us)
  '@typescript-eslint/indent': 0,
  '@typescript-eslint/camelcase': 0,
  '@typescript-eslint/no-inferrable-types': 0,
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/explicit-module-boundary-types': 0,
  '@typescript-eslint/interface-name-prefix': 0,
  '@typescript-eslint/no-empty-interface': 0,

  // Do not allow unused variables – a common cause of bugs. Use plugin.
  '@typescript-eslint/no-unused-vars': 0,
  'unused-imports/no-unused-vars': 2,
  'unused-imports/no-unused-imports': 2,

  // It should not be necessary to add two comments in TS-ignore cases
  '@typescript-eslint/ban-ts-comment': 0,

  // Using var x = require(...) is so uncommon, that it's on purpse when we do it
  '@typescript-eslint/no-var-requires': 0,

  // Sometimes you need empty functions to fulfill required parameters.
  '@typescript-eslint/no-empty-function': 0,

  // Needed to allow for ReturnType typedef.
  'no-use-before-define': 0,
  '@typescript-eslint/no-use-before-define': [
    2,
    {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
    },
  ],

  // Libraries like typedi inject based on constructur params.
  'no-useless-constructor': 'off',

  // Regular no-shadow rules doesn't handle Typescript enums
  'no-shadow': 0,
  '@typescript-eslint/no-shadow': 2,

  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        String: {
          message: 'Use string instead',
          fixWith: 'string',
        },

        '{}': {
          message:
            '{} allows a function to be called with any argument.\n' +
            '  - Consider removing the typing entirely.\n' +
            '  - If you explicitly want any Record, use Record<string, unknown>.\n' +
            '  - If you explicitly want an empty object, use Record<never, never>.\n' +
            '  - If you want to allow anything (discouraged), use unknown.',
          fixWith: '',
        },
        'React.FC': {
          message:
            'You do not need to type the return type of a React component. React.FC is discouraged. See https://github.com/facebook/create-react-app/pull/8177',
        },
        FC: {
          message:
            'You do not need to type the return type of a React component. React.FC is discouraged. See https://github.com/facebook/create-react-app/pull/8177',
        },
      },
    },
  ],
};
