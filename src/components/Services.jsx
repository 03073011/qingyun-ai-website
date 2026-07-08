const services = [
  { tag: '01', title: '企业数据库底座建设', desc: '梳理业务数据、文档与流程记录，统一数据结构与权限边界，为后续智能应用打好可持续底座。', side: 'left' },
  { tag: '02', title: '大模型能力接入', desc: '结合企业场景接入大模型，让问答、生成、分析、总结和辅助决策成为可调用的日常能力。', side: 'right' },
  { tag: '03', title: '业务流程智能优化', desc: '围绕销售、客服、项目、财务等高频环节设计智能工作流，减少重复录入、人工流转和跨系统沟通成本。', side: 'left' },
  { tag: '04', title: '知识库与 RAG 应用', desc: '把制度、案例、项目资料和经验沉淀为可检索、可问答、可复用的企业知识库，让信息真正服务业务。', side: 'right' },
  { tag: '05', title: '持续运营与效率提升', desc: '上线后根据真实使用情况持续优化数据、提示词、权限和流程，让系统越用越贴合企业运行。', side: 'left' },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Core Services</span>
          <h2 className="section-title">核心业务</h2>
          <p className="section-desc" style={{ maxWidth: '680px' }}>
            以数据库为底座，接入大模型与业务系统，让企业数据被看见、被调用、被复用，持续优化运行效率。
          </p>
        </div>
        <div className="service-system-line fade-in" aria-hidden="true">
          <span>数据底座</span>
          <i />
          <span>大模型能力</span>
          <i />
          <span>业务工作流</span>
        </div>
        <div className="services-alt">
          {services.map((s, i) => (
            <article key={i} className={`service-row ${s.side}`}>
              <div className="service-tag-col">
                <span className="service-num-big">{s.tag}</span>
              </div>
              <div className="service-card-inner">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
