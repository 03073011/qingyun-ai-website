import { useCallback, useEffect, useState } from 'react'
import qingyunMark from '../assets/qingyun-mark.png'

const links = [
  { href: '#services', label: '解决方案' },
  { href: '#process', label: '服务流程' },
  { href: '#portfolio', label: '项目案例' },
  { href: '#contact', label: '联系我们' },
]

export default function Navbar() {
  const [active, setActive] = useState('#hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const onScroll = useCallback(() => {
    const markerY = window.scrollY + Math.max(160, window.innerHeight * 0.28)
    const nextScrolled = window.scrollY > 24
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean)
    let nextActive = '#hero'

    for (let i = sections.length - 1; i >= 0; i -= 1) {
      if (sections[i].offsetTop <= markerY) {
        nextActive = `#${sections[i].id}`
        break
      }
    }

    setScrolled((current) => (current === nextScrolled ? current : nextScrolled))
    setActive((current) => (current === nextActive ? current : nextActive))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="主导航">
      <div className="container navbar-inner">
        <a href="#hero" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img className="logo-icon" src={qingyunMark} alt="" />
          <span>清云智矩</span>
        </a>

        <button
          type="button"
          className="nav-menu-button"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-panel${menuOpen ? ' open' : ''}`} id="primary-navigation">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  aria-current={active === link.href ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>预约沟通</a>
        </div>
      </div>
    </nav>
  )
}
