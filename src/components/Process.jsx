const steps = [
  {
    num: '01',
    title: '找到问题',
    desc: '聚焦最耗时、最重复、最影响结果的环节。',
    deliverable: '业务机会清单',
  },
  {
    num: '02',
    title: '样例验证',
    desc: '用真实数据跑通关键任务，确认可行性与效果。',
    deliverable: '可操作原型',
  },
  {
    num: '03',
    title: '软件交付',
    desc: '完成界面、权限、流程与现有系统接入。',
    deliverable: '可上线系统',
  },
  {
    num: '04',
    title: '持续迭代',
    desc: '根据使用数据和反馈优化，让软件越用越顺。',
    deliverable: '迭代路线图',
  },
]

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header section-header-left process-heading">
          <span className="section-label">02 / 服务流程</span>
          <h2 className="section-title">先验证价值，再交付软件</h2>
          <p className="section-desc">
            不从大而全的系统开始。用真实业务和真实数据快速验证，再把有效方案做成稳定的软件。
          </p>
        </div>

        <div className="process-steps" aria-label="智能软件交付流程">
          {steps.map((step) => (
            <article key={step.num} className="process-step">
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>

        <div className="process-note">
          <span className="process-note-icon" aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </span>
          <div>
            <h3>从一个高价值环节开始</h3>
            <p>你不需要一次讲清所有需求。先带来一个最耗时的业务环节，我们一起判断最值得从哪里开始。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
