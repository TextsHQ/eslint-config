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
      // NOTE: Stylistic rules such as `semi` and `arrow-parens` have been
      // deprecated in mainline ESLint and now live in ESLint Stylistic
      // (https://eslint.style/) instead. This is configured in style.mjs.
      'no-constant-binary-expression': 'error',
      'no-param-reassign': 'warn',
      'import/no-webpack-loader-syntax': 'off',
      'import/prefer-default-export': 'off',
      camelcase: 'off',
      'consistent-return': 'off',
      'max-classes-per-file': 'off',
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
      'prefer-template': 'off',
    },
  },
]

export default config
