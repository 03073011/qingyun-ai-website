export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="nav-logo">
          <span className="logo-icon">◆</span>
          <span>清云智矩</span>
        </a>
        <ul className="nav-links">
          <li><a href="#services">核心服务</a></li>
          <li><a href="#process">合作流程</a></li>
          <li><a href="#portfolio">精选案例</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
        <a href="#contact" className="nav-cta">立即咨询</a>
      </div>
    </nav>
  )
}
