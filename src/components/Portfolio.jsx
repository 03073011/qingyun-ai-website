import { useEffect, useState } from 'react'
import caseTender from '../assets/case-tender.png'
import caseSales from '../assets/case-sales.png'
import caseKnowledge from '../assets/case-knowledge.png'

const cases = [
  {
    industry: '工程建设 · 招投标',
    title: '智能投标协作系统',
    problem: '招标文件长、资料分散、人工检查易遗漏。',
    workflow: '解析招标要求 → 匹配企业资料 → 生成章节草稿 → 检查关键响应',
    result: '资料、响应与复核集中在同一工作流。',
    value: '更快成稿，更稳复核',
    image: caseTender,
  },
  {
    industry: '外贸 · 销售增长',
    title: '外贸获客工作台',
    problem: '产品多、市场分散，客户线索和开发信跟进难以持续。',
    workflow: '整理产品资料 → 定义目标客户 → 筛选线索 → 生成沟通内容 → 跟进任务',
    result: '产品、线索、沟通与跟进任务统一管理。',
    value: '流程更清楚，跟进更连续',
    image: caseSales,
  },
  {
    industry: '企业运营 · 知识管理',
    title: '企业知识与流程中心',
    problem: '项目资料散落，经验依赖个人，新员工查找和理解成本高。',
    workflow: '资料归集 → 自动分类 → 权限检索 → 企业问答 → 流程提醒',
    result: '经验沉淀为可搜索、可问答、可更新的企业资产。',
    value: '知识可复用，协作更顺畅',
    image: caseKnowledge,
  },
]

export default function Portfolio() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reducedMotion) return undefined

    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % cases.length),
      6500,
    )
    return () => window.clearInterval(timer)
  }, [paused])

  const go = (direction) => {
    setActive((index) => (index + direction + cases.length) % cases.length)
  }

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header section-header-left portfolio-heading">
          <span className="section-label">03 / 项目案例</span>
          <h2 className="section-title">真实业务 · 真正落地 · 持续创造价值</h2>
        </div>

        <div
          className="case-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="case-window" aria-live="polite">
            <div className="case-track" style={{ transform: `translateX(-${active * 100}%)` }}>
              {cases.map((item, index) => (
                <article key={item.title} className="case-slide" aria-hidden={active !== index}>
                  <div className="case-card">
                    <div className="case-visual">
                      <img src={item.image} alt={`${item.title}系统界面示意`} />
                    </div>
                    <div className="case-content">
                      <span className="case-industry">{item.industry}</span>
                      <h3 className="case-title">{item.title}</h3>

                      <div className="case-body">
                        <div className="case-line">
                          <span className="case-label">业务问题</span>
                          <p>{item.problem}</p>
                        </div>
                        <div className="case-line">
                          <span className="case-label">软件工作流</span>
                          <p>{item.workflow}</p>
                        </div>
                        <div className="case-line">
                          <span className="case-label">交付结果</span>
                          <p>{item.result}</p>
                        </div>
                      </div>

                      <div className="case-value">
                        <span>核心价值</span>
                        <strong>{item.value}</strong>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="case-controls">
            <button type="button" className="case-arrow" aria-label="上一个案例" onClick={() => go(-1)}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <div className="case-tabs" role="tablist" aria-label="选择案例">
              {cases.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  className={`case-tab${active === index ? ' active' : ''}`}
                  onClick={() => setActive(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <button type="button" className="case-arrow" aria-label="下一个案例" onClick={() => go(1)}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
