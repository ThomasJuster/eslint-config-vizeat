module.exports = {
  extends: ['./defaults.js', 'plugin:react/recommended', 'prettier/react', 'standard-jsx'],
  plugins: ['react', 'prettier', 'standard'],
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
  },
}
