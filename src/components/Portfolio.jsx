import { useEffect, useState } from 'react'

// 合作成果：有实际项目后在此补充真实截图与数据
const partners = [
  {
    industry: '建筑工程',
    scope: 'AI 投标生成 · 企业知识库 · RAG 问答',
    result: '标书初稿周期缩短 60%，知识问答命中率 92%，沉淀 10 万+ 份企业文档资产。',
    highlight: '从高频标书场景切入，构建企业级 AI 能力底座',
  },
  {
    industry: '医疗健康',
    scope: '智能分诊 · 在线预约 · 患者管理后台',
    result: '上线首月处理预约 3,200+ 次，患者平均等待时间从 42 分钟降至 8 分钟。',
    highlight: '大模型 + RAG 医学知识库，让 AI 真正进入诊疗流程',
  },
  {
    industry: '跨境电商',
    scope: 'DTC 品牌独立站 · AI 客服 · 智能推荐引擎',
    result: '上线后月均订单增长 27%，AI 客服自动解决率 81%，人工客服成本下降 45%。',
    highlight: '从零搭建品牌独立站 + AI 运营闭环，不依赖平台流量',
  },
]

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % partners.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [activeIndex, isPaused])

  const goTo = (index) => {
    setActiveIndex((index + partners.length) % partners.length)
  }

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Partnerships</span>
          <h2 className="section-title">合作成果</h2>
          <p className="section-desc">
            不是"做过什么项目"，而是"为合作伙伴创造了什么价值"。
          </p>
        </div>

        <div
          className="portfolio-slider fade-in"
          aria-label="合作成果滑动展示"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false)
            }
          }}
        >
          <div className="portfolio-window">
            <div className="portfolio-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {partners.map((p, i) => (
                <article key={i} className="partner-slide" aria-hidden={activeIndex !== i}>
                  <div className="partner-card">
                    <div className="partner-header">
                      <span className="partner-industry">{p.industry}</span>
                      <span className="partner-scope">{p.scope}</span>
                    </div>
                    <blockquote className="partner-highlight">{p.highlight}</blockquote>
                    <p className="partner-result">{p.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="portfolio-controls" aria-label="合作成果轮播控制">
            <button type="button" className="portfolio-nav" aria-label="上一个成果" onClick={() => goTo(activeIndex - 1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <div className="portfolio-dots" aria-label="选择合作成果">
              {partners.map((p, i) => (
                <button
                  key={p.industry}
                  type="button"
                  className={`portfolio-dot ${activeIndex === i ? 'active' : ''}`}
                  aria-label={`查看${p.industry}成果`}
                  aria-current={activeIndex === i}
                  onClick={() => goTo(i)}
                >
                  <span />
                </button>
              ))}
            </div>
            <button type="button" className="portfolio-nav" aria-label="下一个成果" onClick={() => goTo(activeIndex + 1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="partners-cta fade-in">
          <p>期待你的企业成为下一个合作成果。</p>
          <a href="#contact" className="btn-primary">开启合作 →</a>
        </div>
      </div>
    </section>
  )
}
