import ScrollAnimations from './components/ScrollAnimations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

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
              <p>企业级 AI 数字化解决方案提供商。<br />从品牌官网到 AI 智能体，为你的业务打造持续进化的数字能力。</p>
            </div>
            <div className="footer-links">
              <span className="footer-heading">导航</span>
              <a href="#services">核心服务</a>
              <a href="#process">合作流程</a>
              <a href="#portfolio">精选案例</a>
              <a href="#contact">联系我们</a>
            </div>
            <div className="footer-links">
              <span className="footer-heading">联系方式</span>
              <span className="footer-contact">📞 134 7621 1139</span>
              <span className="footer-contact">💬 yyq_-_yyq</span>
              <span className="footer-contact">📍 武汉 · 中国</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 清云智矩. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
