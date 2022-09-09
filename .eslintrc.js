/* eslint-disable quotes */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    // 'prettier/prettier': ['error', { singleQuote: true }],
    'react/react-in-jsx-scope': 0,
  },
  // 'prettier/prettier': [
  //   'error',
  //   {
  //     singleQuote: true,
  //     parser: 'flow',
  //   },
  // ],
};
