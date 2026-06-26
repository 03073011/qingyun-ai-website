const steps = [
  { num: '01', title: '需求深度沟通', desc: '了解你的业务模式、品牌定位和技术需求，共同梳理项目范围与核心目标。' },
  { num: '02', title: 'AI 赋能开发', desc: '前端高性能实现 + AI模型/智能体/工作流集成，让网站不只是漂亮，更聪明。' },
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
      </div>
    </section>
  )
}
