module.exports = {
  extends: ['vizeat/lib/defaults', 'plugin:react/recommended', 'standard-jsx'],
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      classes: true,
      jsx: true,
    },
  },
  rules: {
    'react/jsx-indent': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],
    'react/forbid-prop-types': [
      'warn',
      { forbid: ['any', 'array', 'object'], checkContextTypes: false, checkChildContextTypes: false },
    ],
  },
}
