import { heroStackLayers } from './heroStackData'

function LineIcon({ type, size = 22 }) {
  const paths = {
    grid: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
    database: <><ellipse cx="12" cy="5.5" rx="7" ry="3" /><path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
    brain: <><path d="M9.5 4.3A3.3 3.3 0 0 0 4.7 8a3.5 3.5 0 0 0-.4 6.5A3.3 3.3 0 0 0 9.5 19V4.3Z" /><path d="M14.5 4.3A3.3 3.3 0 0 1 19.3 8a3.5 3.5 0 0 1 .4 6.5 3.3 3.3 0 0 1-5.2 4.5V4.3ZM9.5 8H8m1.5 5H7m7.5-5H16m-1.5 5H17M12 3v18" /></>,
    cube: <><path d="m12 2.5 8 4.5v10L12 21.5 4 17V7z" /><path d="m4 7 8 4.5L20 7M12 11.5v10" /></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1>企业AI软件定制开发<br />让AI真正融入您的业务流程</h1>
          <p className="hero-subtitle">
            我们专注于企业 AI 应用落地，从业务分析、数据整合到 AI 能力接入与系统开发，已交付智能标书生成、外贸智能获客、企业知识库、流程自动化等多个项目，让 AI 从概念变成生产力。
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">聊聊你的业务</a>
            <a href="#portfolio" className="btn-secondary">
              查看项目案例
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-system" aria-label="智能软件构建路径">
          <p className="system-name">Intelligent software stack</p>
          <div className="system-loop system-loop-left" aria-hidden="true" />
          <div className="system-loop system-loop-right" aria-hidden="true" />
          <div className="system-flow">
            {heroStackLayers.map((item, index) => (
              <div className="system-flow-row" key={item.id}>
                <div className={`system-node system-node-${item.tone}`}>
                  <span className="system-icon"><LineIcon type={item.icon} size={30} /></span>
                  <strong>{item.title}</strong>
                </div>
                {index < heroStackLayers.length - 1 ? <span className="system-connector" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
          <p className="system-footer">从一个高价值环节开始 · 持续迭代</p>
        </div>
      </div>
      <a className="hero-next" href="#services">
        <span>向下了解我们的智能软件</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </a>
    </section>
  )
}
