const steps = [
  { num: '01', title: '需求深度沟通', desc: '了解你的业务场景、数据基础和技术需求，共同梳理项目范围与核心目标。' },
  { num: '02', title: 'AI 赋能开发', desc: '完成数据库、AI 模型、智能体与工作流集成，让系统不只是上线，更能提升效率。' },
  { num: '03', title: '交付与持续维护', desc: '全面测试上线，提供操作文档。上线后持续监控、迭代优化，陪伴你的业务成长。' },
]

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Workflow</span>
          <h2 className="section-title">合作流程</h2>
          <p className="section-desc">
            三步严谨流程，确保每个项目精准落地、超出预期。
          </p>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div key={i} className="process-step fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="step-number">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="process-note fade-in">
          <span className="process-note-label">沟通优先</span>
          <div>
            <h3>欢迎交流沟通，先把需求提出来最重要。</h3>
            <p>需求不需要一次讲完整。你可以先说业务里最耗时、最重复、最想优化的环节，我们一起判断哪里最适合用数据库和大模型先落地。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
