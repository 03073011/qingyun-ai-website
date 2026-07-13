import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import useSnapScroll from './hooks/useSnapScroll'

function FooterIcon({ type }) {
  const paths = {
    phone: (
      <path d="M22 16.92v2.12a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.3 2 2 0 0 1 4.11 1.2h2.12a2 2 0 0 1 2 1.72c.12.91.34 1.8.66 2.65a2 2 0 0 1-.45 2.11l-.94.94a16 16 0 0 0 5.88 5.88l.94-.94a2 2 0 0 1 2.11-.45c.85.32 1.74.54 2.65.66A2 2 0 0 1 22 15.77Z" />
    ),
    location: (
      <>
        <path d="M20 10c0 5.25-8 11-8 11S4 15.25 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  }

  return (
    <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

export default function App() {
  useSnapScroll()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#hero" className="footer-logo" aria-label="清云智矩首页">
                <span className="footer-logo-mark">◆</span>
                <span>清云智矩</span>
              </a>
              <p>融合 AI 的企业智能软件设计与开发服务商。<br />让数据能复用、工作能自动、效率看得见。</p>
            </div>
            <div className="footer-links">
              <span className="footer-heading">快速导航</span>
              <a href="#services">解决方案</a>
              <a href="#process">服务流程</a>
              <a href="#portfolio">项目案例</a>
              <a href="#contact">联系我们</a>
            </div>
            <div className="footer-links">
              <span className="footer-heading">联系</span>
              <a className="footer-contact" href="tel:13476211139"><FooterIcon type="phone" />134 7621 1139</a>
              <span className="footer-contact"><FooterIcon type="location" />武汉 · 中国</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 清云智矩. All rights reserved.</p>
            <p className="icp">
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">鄂ICP备2026033444号-1</a>
              <span className="icp-sep">|</span>
              <a href="https://www.qyzjwh.com/admin/" target="_blank" rel="noreferrer">管理员模式</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
