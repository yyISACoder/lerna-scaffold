module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:@typescript-eslint/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports' /* ,"react-hooks" */],
  rules: {
    'no-unused-vars': 2,
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 2,
    'no-plusplus': 2,
    'no-underscore-dangle': 2,
    'no-console': 2,
    'no-debugger': 2,

    // "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则

    // "@typescript-eslint/no-unused-vars": 2,
    // "@typescript-eslint/no-unused-imports": 2,
    // "arrow-body-style": 0,
    // "jsx-a11y/label-has-for": 0,
    // "max-lines-per-function": [
    //   2,
    //   { max: 320, skipComments: true, skipBlankLines: true },
    // ],
    // "no-confusing-arrow": 0,
    // "no-nested-ternary": 0,
    // "no-console": 2,
    // "no-param-reassign": [
    //   2,
    //   { props: true, ignorePropertyModificationsFor: ["draft"] },
    // ],
    // "react/no-this-in-sfc": 0,
  },
};
