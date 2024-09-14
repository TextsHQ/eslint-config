// @ts-check

import { fileURLToPath } from 'node:url'
import path from 'node:path'

import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import eslintPluginImport from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

// https://github.com/import-js/eslint-plugin-import/issues/2948#issuecomment-2148832701
/**
  * @param {string} name
  * @param {string} alias
  * @returns {import('eslint').ESLint.Plugin}
  */
function legacyPlugin(name, alias = name) {
  const plugin = compat.plugins(name)[0]?.plugins?.[alias]
  if (!plugin) throw new Error(`Unable to resolve plugin ${name} and/or alias ${alias}`)
  return fixupPluginRules(plugin)
}

/** @type {import('eslint').Linter.Config[]} */
export const importPlugin = [
  { ...eslintPluginImport.flatConfigs.recommended, plugins: {} },
  // TypeScript one doesn't have a name, but recommended does.
  { ...eslintPluginImport.flatConfigs.typescript, name: 'import/typescript', plugins: {} },

  {
    name: '@textshq/eslint-config.basic.import',
    plugins: { import: legacyPlugin('eslint-plugin-import', 'import') },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
  },
]

/** @type {import('eslint').Linter.Config[]} */
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

  ...importPlugin,
]

export default config
