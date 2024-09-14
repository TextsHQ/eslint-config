// This is incomplete.
declare module 'eslint-plugin-react' {
  import type { ESLint, Linter } from 'eslint'

  const plugin: ESLint.Plugin & {
    flat: {
      all: Linter.Config
      recommended: Linter.Config
      'jsx-runtime': Linter.Config
    }
  }

  export default plugin
}

declare module 'eslint-plugin-react-hooks' {
  import type { ESLint, Rule, Linter } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: { recommended: Linter.Config }
    rules: {
      'rules-of-hooks': Rule.RuleModule
      'exhaustive-deps': Rule.RuleModule
    }
  }
  export default plugin
}

// Non-exhaustive.
declare module 'eslint-plugin-import' {
  import type { Linter } from 'eslint'

  export const flatConfigs: {
    typescript: Linter.Config
    recommended: Linter.Config
  }
}
