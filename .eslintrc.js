const isProd = process.env.NODE_ENV === 'production';


module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'semi': ['error', 'always'],
    'quotes': [0, 'single'],
    'quote-props': [0, 'always'],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    'space-before-function-paren': ['error', 'always']
  }
};
