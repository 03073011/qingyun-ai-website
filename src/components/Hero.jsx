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
        transparent={true}
      />
      <div className="container">
        <div className="hero-badge">
          <span className="dot" />
          企业级 AI 数字化解决方案
        </div>
        <h1>
          <span className="gradient-text">AI 赋能企业</span>
        </h1>
        <p className="hero-subtitle">
          以 AI 为底座，为企业打造持续进化的数字能力
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">立即咨询</a>
          <a href="#portfolio" className="btn-ghost">查看精选案例 →</a>
        </div>
      </div>
    </section>
  )
}
