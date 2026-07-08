import TiltCard from './TiltCard'

const pillars = [
  {
    tag: '01',
    title: '数据底座',
    subtitle: '让你的业务数据不再散落各处',
    items: [
      '企业数据库建设 — 文档、流程、经验统一沉淀',
      '知识库 + RAG — 制度与案例可检索、可问答',
      '权限与安全 — 数据边界清晰，该看的看、不该看的看不到',
    ],
  },
  {
    tag: '02',
    title: 'AI 大脑',
    subtitle: '让大模型真正为你的业务工作',
    items: [
      '智能问答 — 员工随时获取业务知识与经验',
      '分析总结 — 从海量信息中提炼关键洞察',
      '辅助决策 — 结合企业数据给出可执行建议',
    ],
  },
  {
    tag: '03',
    title: '业务自动化',
    subtitle: '重复劳动交给系统，团队专注高价值工作',
    items: [
      '智能工作流 — 销售、客服、项目、财务环节自动流转',
      '跨系统打通 — 减少人工录入和重复沟通',
      '持续优化 — 系统越用越贴合企业运行',
    ],
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Core Services</span>
          <h2 className="section-title">我们能为你做什么</h2>
          <p className="section-desc" style={{ maxWidth: '680px' }}>
            以数据库为底座，接入大模型与业务系统——不是卖工具，是帮你把 AI 真正用起来。
          </p>
        </div>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <TiltCard key={i} className="pillar-card" strength={4}>
              <span className="pillar-tag">{p.tag}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-subtitle">{p.subtitle}</p>
              <ul className="pillar-items">
                {p.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
