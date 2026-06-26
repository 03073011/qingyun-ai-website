import { useState, useEffect, useCallback } from 'react'

const links = [
  { href: '#hero', label: '首页' },
  { href: '#services', label: '核心服务' },
  { href: '#process', label: '合作流程' },
  { href: '#portfolio', label: '合作成果' },
  { href: '#contact', label: '联系我们' },
]

export default function Navbar() {
  const [active, setActive] = useState('#hero')

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY + 100
    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean)
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollY) { setActive('#' + sections[i].id); return }
    }
    setActive('#hero')
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="nav-logo">
          <span className="logo-icon">◆</span>
          <span>清云智矩</span>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={active === l.href ? 'active' : ''}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">立即咨询</a>
      </div>
    </nav>
  )
}
