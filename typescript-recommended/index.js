module.exports = {
  extends: [
    '../javascript',
    '../typescript',
    '../prettier',
    '../prettier-typescript/',
  ].map(require.resolve),
};
