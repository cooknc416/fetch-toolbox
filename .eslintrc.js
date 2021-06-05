module.exports = {
  extends: [
    'airbnb-typescript/base'
  ],
  plugins: ['modules-newline'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  env: {
    browser: true,
    jest: true
  },
  rules: {
    indent: [2, 2],
    'comma-dangle': 0,
    quotes: [2, 'single'],
    'implicit-arrow-linebreak': 2,
    'no-trailing-spaces': 0,
    "arrow-body-style": [2, "always"],
    'max-len': [1, {
      code: 140,
    }],
    'object-property-newline': [2, {
      allowAllPropertiesOnSameLine: false,
    }],
    'object-curly-newline': [2, {
      ObjectExpression: {
        multiline: true,
        minProperties: 1
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 2
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 2
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 2
      },
    }],
    'modules-newline/import-declaration-newline': 2,
    '@typescript-eslint/comma-dangle': 0,
    'import/prefer-default-export': 0
  }
};
