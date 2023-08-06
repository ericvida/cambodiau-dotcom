// make header allow uppercase
// https://github.com/conventional-changelog/commitlint/issues/773#issuecomment-574995098
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': () => [0, 'never', 72],
  },
};
