module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "no-new": 0,
    "indent": 0,
    "no-unused-vars": 0,
    "semi": 0,
    "quotes": 0,
    "object-curly-spacing": 0,
    "standard/object-curly-even-spacing": 0,
    "standard/array-bracket-even-spacing": 0,
    "standard/computed-property-even-spacing": 0,
    "standard/no-callback-literal": 0,
    "space-before-function-paren": 0,
    "eslint padded-blocks": 0,
    "no-trailing-spaces": 0,
    'semi-spacing': 0,
    "eol-last": 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
