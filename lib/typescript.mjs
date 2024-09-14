// @ts-check

import tseslint from 'typescript-eslint'

/** @satisfies {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigFile} */
const config = [
  // "Contains all of `recommended`, `recommended-type-checked`, and `strict`, along with additional strict rules that require type information."
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    name: '@textshq/eslint-config.typescript',
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/restrict-template-expressions': ['warn', {
        allowAny: false,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
        allowRegExp: true,
        allowNever: false,
      }],
    },
    languageOptions: {
      parserOptions: {
        // https://typescript-eslint.io/blog/announcing-typescript-eslint-v8#project-service
        projectService: true,
      },
    },
  },
]

export default config
