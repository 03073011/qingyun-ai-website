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
            <span className="gradient-text">AI 赋能企业</span>
          </h1>
          <p className="hero-subtitle">
            不卖通用产品。先聊你的业务痛点，再从数据库、大模型到工作流，一步步定制落地。
          </p>
        </div>
      </div>
    </section>
  )
}
