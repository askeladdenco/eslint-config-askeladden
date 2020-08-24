module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '../javascript',
    '../react',
    '../typescript',
    '../prettier',
    '../prettier-react/',
    '../prettier-typescript/',
  ].map(require.resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
