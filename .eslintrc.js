module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    '@typescript-eslint/triple-slash-reference': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
