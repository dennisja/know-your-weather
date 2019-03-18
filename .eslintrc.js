module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',

    // disables eslint rules that conflict with prettier
    'prettier/@typescript-eslint',

    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    // Should always be the last configuration in the extends array
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    // allow parsing of modern features
    ecmaVersion: 2018,

    // allow use of imports
    sourceType: 'module',
  },
  rules: {
    // override rules here
  },
}
