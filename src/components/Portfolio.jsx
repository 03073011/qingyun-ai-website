import { useEffect, useState } from 'react'

const cases = [
  {
    industry: '电力 · 建筑工程',
    title: '智能投标平台',
    pain: '标书几百页，条款摘不完，材料到处散落，怕漏关键项废标。',
    solution: '系统自动读招标文件、从企业资料库匹配证据、逐章生成标书草稿，导出前自动检查废标项。',
    result: '资料整理和初稿撰写时间节约 85%+',
    stat: '85%',
    statLabel: '重复性人工节约',
  },
  {
    industry: '外贸 · 跨境电商',
    title: 'AI 获客引擎',
    pain: '人少产品多，不知道客户在哪，英文开发信写不过来。',
    solution: '录入产品 → AI 分析目标客户 → 搜索引擎找公司 → 智能匹配评分 → 自动生成英文开发信草稿。',
    result: '一个人即可管理上百产品、上千客户线索，全流程 AI 辅助。',
    stat: '0→1',
    statLabel: '从零搭建完整获客系统',
  },
  {
    industry: '建筑工程',
    title: '项目知识管理平台',
    pain: '项目文档堆成山，老员工的经验记在脑子里，新来的人什么都要问。',
    solution: '项目资料统一入库 → AI 自动分类打标签 → 历史项目经验可检索问答 → 审批和进度自动提醒。',
    result: '文档查找从几小时缩到几秒，项目经验全员可复用。',
    stat: '10万+',
    statLabel: '份企业文档资产沉淀',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive(i => (i + 1) % cases.length), 4000)
    return () => clearInterval(t)
  }, [paused])

  const go = (dir) => setActive(i => (i + dir + cases.length) % cases.length)

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">合作成果</h2>
          <p className="section-desc">真实项目，真实效果。不是PPT概念，是已经跑在生产环境里的系统。</p>
        </div>

        <div
          className="case-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button type="button" className="case-arrow case-arrow-left" aria-label="上一个案例" onClick={() => go(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button type="button" className="case-arrow case-arrow-right" aria-label="下一个案例" onClick={() => go(1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          <div className="case-window">
            <div className="case-track" style={{ transform: `translateX(-${active * 100}%)` }}>
              {cases.map((c, i) => (
                <article key={i} className="case-slide" aria-hidden={active !== i}>
                  <div className="case-card">
                    <div className="case-top">
                      <span className="case-industry">{c.industry}</span>
                      <h3 className="case-title">{c.title}</h3>
                    </div>

                    <div className="case-body">
                      <div className="case-line">
                        <span className="case-label">痛点</span>
                        <p>{c.pain}</p>
                      </div>
                      <div className="case-line">
                        <span className="case-label">方案</span>
                        <p>{c.solution}</p>
                      </div>
                      <div className="case-line">
                        <span className="case-label">效果</span>
                        <p>{c.result}</p>
                      </div>
                    </div>

                    <div className="case-stat">
                      <span className="case-stat-value">{c.stat}</span>
                      <span className="case-stat-label">{c.statLabel}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="case-controls">
            {cases.map((c, i) => (
              <button
                key={i}
                type="button"
                className={`case-dot ${active === i ? 'active' : ''}`}
                aria-label={`${c.title}`}
                onClick={() => setActive(i)}
              >
                <span />
              </button>
            ))}
          </div>
        </div>

        <div className="partners-cta fade-in">
          <p>你的企业，会成为下一个案例吗？</p>
          <a href="#contact" className="btn-primary">聊聊你的需求 →</a>
        </div>
      </div>
    </section>
  )
}
