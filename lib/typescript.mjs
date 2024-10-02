// @ts-check

import { configs as tsEslintConfigs } from 'typescript-eslint'

/** @satisfies {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigFile} */
const config = [
  // "Contains all of `recommended`, `recommended-type-checked`, and `strict`, along with additional strict rules that require type information."
  ...tsEslintConfigs.strictTypeChecked,
  ...tsEslintConfigs.stylisticTypeChecked,

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
      // Permit unused variables that begin with an underscore.
      '@typescript-eslint/no-unused-vars': ['error', {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      }],
      '@typescript-eslint/no-confusing-void-expression': ['warn', {
        ignoreArrowShorthand: true,
      }],
    },
    languageOptions: {
      parserOptions: {
        // https://typescript-eslint.io/blog/announcing-typescript-eslint-v8#project-service
        projectService: true,
      },
    },
  },

  // Don't bother trying to detect undefined globals with ESLint, because
  // TypeScript will always know better.
  // https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
  {
    name: '@textshq/eslint-config.let-typescript-handle-undef-errors',
    files: ['**/*.{ts,tsx,mts,cts,mjs,js,cjs,jsx}'],
    rules: {
      'no-undef': 'off',
    },
  },
]

export default config
