module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:@typescript-eslint/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports' /* ,"react-hooks" */
  ],
  rules: {
    'no-unused-vars': 2,
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 2,
    'no-plusplus': 2,
    'no-underscore-dangle': 2,
    'no-console': 2,
    'no-debugger': 2
  }
}
