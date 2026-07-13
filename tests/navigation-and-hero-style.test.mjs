import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const navbar = await readFile(new URL('../src/components/Navbar.jsx', import.meta.url), 'utf8')
const app = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8')
const services = await readFile(new URL('../src/components/Services.jsx', import.meta.url), 'utf8')
const process = await readFile(new URL('../src/components/Process.jsx', import.meta.url), 'utf8')
const css = await readFile(new URL('../src/index.css', import.meta.url), 'utf8')

test('navigation uses the revised section names consistently', () => {
  assert.match(navbar, /label:\s*'解决方案'/)
  assert.match(navbar, /label:\s*'服务流程'/)
  assert.match(app, /href="#services">解决方案</)
  assert.match(app, /href="#process">服务流程</)
})

test('section labels stay synchronized with the navigation names', () => {
  assert.match(services, />01 \/ 解决方案</)
  assert.match(process, />02 \/ 服务流程</)
})

test('the final hero stack node uses a pale teal treatment', () => {
  const accent = css.match(/\.system-node-accent\s*\{([^}]*)\}/)?.[1] ?? ''
  const icon = css.match(/\.system-node-accent \.system-icon\s*\{([^}]*)\}/)?.[1] ?? ''

  assert.match(accent, /#f7fcfc/)
  assert.match(accent, /#edf8f7/)
  assert.match(accent, /color:\s*var\(--ink\)/)
  assert.match(icon, /color:\s*var\(--teal\)/)
})
