import test from 'node:test'
import assert from 'node:assert/strict'

import { heroStackLayers } from '../src/components/heroStackData.js'

test('hero stack exposes the four approved layers in order', () => {
  assert.deepEqual(
    heroStackLayers.map(({ title }) => title),
    ['业务场景', '数据与规则', 'AI 能力', '智能软件'],
  )
  assert.equal(heroStackLayers[1].tone, 'rules')
  assert.equal(heroStackLayers[3].tone, 'accent')
})
