module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'turbo', 'prettier'],
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {},
}
