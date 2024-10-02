// @ts-check

import stylistic from '@stylistic/eslint-plugin'

// N.B. The <true> means "we're using ESLint flat config". Parameterization is
// important because the types would be different otherwise.

/** @type {import('@stylistic/eslint-plugin').StylisticCustomizeOptions<true>} */
export const stylisticCustomizationOptions = {
  indent: 2,
  quotes: 'single',
  semi: false,
  braceStyle: '1tbs',
}

/** @type {import('@stylistic/eslint-plugin').StylisticCustomizeOptions<true>} */
export const stylisticCustomizationOptionsJSX = {
  ...stylisticCustomizationOptions,
  jsx: true,
}

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // "Recommended" rules added by this call: https://github.com/eslint-stylistic/eslint-stylistic/blob/ff6905308fa7cca27b0131d27e0c8f5b964ecb5a/packages/eslint-plugin/configs/customize.ts#L33
  { ...stylistic.configs.customize(stylisticCustomizationOptions), name: '@stylistic/eslint-plugin' },

  {
    name: '@textshq/eslint-config.stylistic',
    rules: {
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/implicit-arrow-linebreak': 'off',
      '@stylistic/max-len': 'off',
      '@stylistic/newline-per-chained-call': 'off',
      '@stylistic/object-curly-newline': 'off',
      '@stylistic/member-delimiter-style': ['error', {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'comma' },
      }],
      '@stylistic/quote-props': ['warn', 'as-needed'],
    },
  },

]

export default config
