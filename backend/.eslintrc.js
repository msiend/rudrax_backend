module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 15,
  },
  rules: {
    'no-console': 0,
    'import/no-dynamic-require': 0,
    eqeqeq: 'warn',
    'global-require': 0,
    'import/no-unresolved': 0,
  },
  settings: {
    'import/resolver': {
      alias: true,
    },
  },
};
