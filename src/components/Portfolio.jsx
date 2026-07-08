const cases = [
  {
    industry: '电力 · 建筑工程',
    title: '智能投标平台',
    subtitle: '从招标解析到标书生成的全流程 AI 系统',
    metrics: [
      { value: '85%+', label: '重复性人工节约' },
      { value: '95%', label: '条款自动抽取' },
      { value: '88%', label: '初稿撰写提效' },
    ],
    scope: '招标解析 · 响应矩阵 · 资料库证据召回 · 逐章生成 · 合规复核 · DOCX/PDF 导出',
    highlight: '不是卖一个 AI 问答入口，而是围绕企业资料库、证据矩阵和合规门禁，建立可追溯、可复核的长期投标能力。',
    result: '本地化部署，数据安全分层隔离。所有生成内容保留证据来源和待确认标记，正式提交前由投标负责人最终审核。',
  },
  {
    industry: '外贸 · 跨境电商',
    title: 'AI 获客引擎',
    subtitle: '从产品管理到客户开发信的全自动获客系统',
    metrics: [
      { value: '0→1', label: '自研获客引擎' },
      { value: '100', label: '候选公司智能排序' },
      { value: '81%', label: 'AI 匹配达标率' },
    ],
    scope: '产品库 · AI 客户方向生成 · 自研获客引擎 · 产品-公司智能匹配 · 英文开发信草稿 · 客户研究',
    highlight: '面向外贸小团队：人少、产品多、英文压力大不是问题。系统自动发现高质量客户、智能匹配评分、生成可审核的开发信，全部沉淀到本地数据库，可复盘可复用。',
    result: '本地 SQLite 数据库，敏感信息保护。AI 生成草稿但不自动群发，用户决定是否外发——效率和安全兼顾。',
  },
]

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">合作成果</h2>
          <p className="section-desc">
            不是"做过什么项目"，而是"为合作伙伴创造了什么价值"。
          </p>
        </div>

        <div className="cases-grid">
          {cases.map((c, i) => (
            <article key={i} className="case-card fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="case-header">
                <span className="case-industry">{c.industry}</span>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-subtitle">{c.subtitle}</p>
              </div>

              <div className="case-metrics">
                {c.metrics.map((m, j) => (
                  <div key={j} className="case-metric">
                    <span className="case-metric-value">{m.value}</span>
                    <span className="case-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="case-scope">
                <span className="case-scope-label">涉及模块</span>
                <p>{c.scope}</p>
              </div>

              <blockquote className="case-highlight">{c.highlight}</blockquote>

              <p className="case-result">{c.result}</p>
            </article>
          ))}
        </div>

        <div className="partners-cta fade-in">
          <p>你的企业，会成为下一个案例吗？</p>
          <a href="#contact" className="btn-primary">聊聊你的需求 →</a>
        </div>
      </div>
    </section>
  )
}
