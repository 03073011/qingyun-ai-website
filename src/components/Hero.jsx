import Galaxy from './Galaxy'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Galaxy
        mouseRepulsion={false}
        mouseInteraction={true}
        density={0.8}
        glowIntensity={0.3}
        hueShift={215}
        saturation={0.1}
        twinkleIntensity={0.3}
        rotationSpeed={0.06}
        repulsionStrength={0}
      />
      <div className="container">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="dot" />
            企业级 AI 数字化解决方案
          </div>
          <h1>
            <span className="gradient-text">让 AI 真正</span>
            <br />
            为你的业务干活
          </h1>
          <p className="hero-subtitle">
            不卖通用产品。先聊你的业务痛点，再从数据库、大模型到工作流，一步步定制落地。
          </p>
          <div className="hero-capability-pills" aria-label="核心能力">
            <span>企业数据库</span>
            <span>智能知识库</span>
            <span>业务自动化</span>
            <span>AI 决策辅助</span>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">预约需求评估</a>
            <a href="#portfolio" className="btn-ghost">查看案例 →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
