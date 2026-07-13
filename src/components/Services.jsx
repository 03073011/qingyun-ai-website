const pillars = [
  {
    tag: '01',
    icon: 'screen',
    title: '业务软件定制',
    subtitle: '贴合现有流程，而不是让团队迁就工具',
    items: ['业务系统与工作台', '流程与权限设计', '现有系统与数据打通'],
  },
  {
    tag: '02',
    icon: 'ai',
    title: 'AI 能力嵌入',
    subtitle: '让识别、生成、检索与分析进入日常工作',
    items: ['文档识别与内容生成', '知识检索与企业问答', '分析判断与辅助决策'],
  },
  {
    tag: '03',
    icon: 'workflow',
    title: '智能工作流',
    subtitle: '把重复工作变成稳定、可追踪的流程',
    items: ['任务自动流转', '关键节点提醒与人工复核', '结果沉淀与持续优化'],
  },
]

function CapabilityIcon({ type }) {
  const paths = {
    screen: <><rect x="3" y="4" width="18" height="15" rx="2" /><path d="M8 22h8M12 19v3M7 8h4M7 12h10M14 8h3" /></>,
    ai: <><path d="M9 3.5A5.5 5.5 0 0 0 3.5 9v2A4.5 4.5 0 0 0 8 15.5V21h6v-4.5a6.5 6.5 0 0 0 0-13Z" /><path d="M9 9h.01M14 9h.01M8.5 13c1.5 1 3.5 1 5 0" /></>,
    workflow: <><rect x="3" y="3" width="7" height="5" rx="1" /><rect x="14" y="16" width="7" height="5" rx="1" /><circle cx="6.5" cy="18.5" r="2.5" /><path d="M10 5.5h3a4 4 0 0 1 4 4V16M6.5 16v-3a4 4 0 0 1 4-4H14" /></>,
  }

  return (
    <span className="capability-icon" aria-hidden="true">
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        {paths[type]}
      </svg>
    </span>
  )
}

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container services-layout">
        <div className="section-header section-header-left services-heading">
          <span className="section-label">01 / 解决方案</span>
          <h2 className="section-title">我们制造怎样的智能软件</h2>
          <p className="section-desc">
            以真实业务流程为核心，把数据、规则与 AI 组合成可落地、可复用、可持续迭代的软件。
          </p>
        </div>
        <div className="capability-list">
          {pillars.map((pillar) => (
            <article className="capability-row" key={pillar.tag}>
              <span className="capability-index">{pillar.tag}</span>
              <CapabilityIcon type={pillar.icon} />
              <div className="capability-heading">
                <h3>{pillar.title}</h3>
                <p>{pillar.subtitle}</p>
              </div>
              <ul className="capability-items">
                {pillar.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
