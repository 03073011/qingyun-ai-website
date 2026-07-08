import ScrollAnimations from './components/ScrollAnimations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function FooterIcon({ type }) {
  const paths = {
    phone: (
      <path d="M22 16.92v2.12a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 1.2h2.12a2 2 0 0 1 2 1.72c.12.91.34 1.8.66 2.65a2 2 0 0 1-.45 2.11L7.5 8.62a16 16 0 0 0 5.88 5.88l.94-.94a2 2 0 0 1 2.11-.45c.85.32 1.74.54 2.65.66A2 2 0 0 1 22 15.77Z" />
    ),
    message: (
      <>
        <path d="M21 11.5a7.5 7.5 0 0 1-7.5 7.5 8.3 8.3 0 0 1-3.8-.93L4 20l1.67-4.45A7.47 7.47 0 0 1 6 4.87 7.5 7.5 0 0 1 21 11.5Z" />
        <path d="M9.3 11.5h.01" />
        <path d="M13.5 11.5h.01" />
        <path d="M17.7 11.5h.01" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5.25-8 11-8 11S4 15.25 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  }

  return (
    <svg className="footer-contact-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

export default function App() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-logo">◆ 清云智矩</span>
              <p>企业级 AI 数字化解决方案提供商。<br />从企业数据库到 AI 智能体，为你的业务打造持续进化的数字能力。</p>
            </div>
            <div className="footer-links">
              <span className="footer-heading">导航</span>
              <a href="#services">核心服务</a>
              <a href="#process">合作流程</a>
              <a href="#portfolio">合作成果</a>
              <a href="#contact">联系我们</a>
            </div>
            <div className="footer-links">
              <span className="footer-heading">联系方式</span>
              <span className="footer-contact"><FooterIcon type="phone" />134 7621 1139</span>
              <span className="footer-contact"><FooterIcon type="message" />扫码添加企业微信</span>
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
