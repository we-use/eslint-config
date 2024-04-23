import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import { typescript, javascript, node, stylistic, combine } from '../src'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'

const configs = await combine(
  { plugins: { '': { rules: Object.fromEntries(builtinRules.entries()) } }},
  javascript(),
  node(),
  stylistic(),
  typescript()
)

const configNames = configs.map(i => i.name).filter(Boolean) as string[]

let dts = await flatConfigsToRulesDTS(configs, { includeAugmentation: false })

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map(i => `'${i}'`).join(' | ')}
`

await writeFile(join(cwd(), "src/types/gen.d.ts"), dts)