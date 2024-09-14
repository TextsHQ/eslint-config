// @ts-check

import basicConfig from './lib/basic.mjs'
import stylisticConfig from './lib/style.mjs'
import typescriptConfig from './lib/typescript.mjs'
import reactConfig from './lib/react.mjs'

/** @type {import('eslint').Linter.Config[]} */
const base = [
  ...stylisticConfig,
  ...basicConfig,
  // Using a @type comment before a parenthesized expression like this is a
  // type cast (like doing "as …" in TypeScript). Unsure why these types are
  // incompatible though.
  ...(/** @type {import('eslint').Linter.Config[]} */ (typescriptConfig)),
]

/** @type {import('eslint').Linter.Config[]} */
export const basic = base

/** @type {import('eslint').Linter.Config[]} */
export const react = [
  ...base,
  ...reactConfig,
]
