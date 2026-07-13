import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const files = ['case-tender.png', 'case-sales.png', 'case-knowledge.png']

test('portfolio uses three non-trivial local PNG dashboard images', async () => {
  for (const file of files) {
    const bytes = await readFile(new URL(`../src/assets/${file}`, import.meta.url))
    assert.deepEqual(
      [...bytes.subarray(0, 8)],
      [137, 80, 78, 71, 13, 10, 26, 10],
    )
    assert.ok(bytes.length > 10_000, `${file} should contain a full dashboard image`)
  }
})
