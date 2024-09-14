// @ts-check

import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  eslintPluginJsxA11y.flatConfigs.recommended,
  { ...eslintPluginReact.configs.flat.recommended, name: 'eslint-plugin-react/recommended' },

  {
    name: '@textshq/eslint-config.react',
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    languageOptions: {
      parserOptions: {
        jsx: true,
      },
    },
    rules: {
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/control-has-associated-label': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'jsx-a11y/no-static-element-interactions': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-key': 'warn',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]

export default config
