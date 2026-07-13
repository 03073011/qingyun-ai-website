import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const css = await readFile(new URL('../src/index.css', import.meta.url), 'utf8')

function ruleBody(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = css.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`))
  assert.ok(match, `missing ${selector} rule`)
  return match[1]
}

test('portfolio image fills its visual column without decorative whitespace', () => {
  const card = ruleBody('.case-card')
  const visual = ruleBody('.case-visual')
  const image = ruleBody('.case-visual img')

  assert.match(card, /min-height:\s*420px;/)
  assert.match(visual, /padding:\s*0;/)
  assert.match(image, /height:\s*100%;/)
  assert.match(image, /object-fit:\s*contain;/)
})
