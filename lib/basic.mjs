// @ts-check

import js from '@eslint/js'

/** @satisfies {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigFile} */
const config = [
  // Using a @type comment before a parenthesized expression like this is a
  // type cast (like doing "as …" in TypeScript).

  { ...js.configs.recommended, name: '@eslint/js/recommended' },

  {
    name: '@textshq/eslint-config.basic',
    rules: {
      semi: ['error', 'never'],
      'no-constant-binary-expression': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'no-param-reassign': 'warn',
      'import/no-webpack-loader-syntax': 'off',
      'import/prefer-default-export': 'off',
      camelcase: 'off',
      'consistent-return': 'off',
      'implicit-arrow-linebreak': 'off',
      'max-classes-per-file': 'off',
      'max-len': 'off',
      'newline-per-chained-call': 'off',
      'no-alert': 'off',
      'no-await-in-loop': 'off',
      'no-bitwise': 'off',
      'no-console': 'off',
      'no-continue': 'off',
      'no-nested-ternary': 'off',
      'no-new': 'off',
      'no-plusplus': 'off',
      'no-restricted-syntax': 'off',
      'no-underscore-dangle': 'off',
      'object-curly-newline': 'off',
      'prefer-template': 'off',
    },
  },
]

export default config
