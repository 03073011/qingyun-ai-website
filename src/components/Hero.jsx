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
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="dot" />
              企业级 AI 数字化解决方案
            </div>
            <h1>
              <span className="gradient-text">AI 赋能企业</span>
            </h1>
            <p className="hero-subtitle">
              从企业数据库到 AI 智能体，从知识库到业务工作流——1对1定制，拒绝模板。
            </p>
            <div className="hero-capability-pills" aria-label="核心能力">
              <span>数据底座</span>
              <span>知识库 / RAG</span>
              <span>AI 智能体</span>
              <span>业务工作流</span>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">立即咨询</a>
              <a href="#portfolio" className="btn-ghost">查看合作成果 →</a>
            </div>
          </div>

          <div className="hero-system-panel" aria-hidden="true">
            <div className="system-panel-top">
              <span className="system-status" />
              <span>Enterprise AI Stack</span>
            </div>
            <div className="system-flow">
              <div className="system-node glow-seq-1">
                <span>01</span>
                企业数据库
              </div>
              <div className="system-connector" />
              <div className="system-node glow-seq-2">
                <span>02</span>
                大模型能力
              </div>
              <div className="system-connector" />
              <div className="system-node glow-seq-3">
                <span>03</span>
                业务工作流
              </div>
            </div>
            <div className="system-grid">
              <span>文档沉淀</span>
              <span>权限边界</span>
              <span>智能问答</span>
              <span>流程触发</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
