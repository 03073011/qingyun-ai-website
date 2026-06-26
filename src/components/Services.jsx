import BorderGlow from './BorderGlow'

const services = [
  { tag: '01', title: '品牌官网定制开发', desc: '深度沟通品牌定位与业务目标，从零量身设计。拒绝千篇一律的模板，每一处细节精准传达品牌价值。', side: 'left' },
  { tag: '02', title: 'AI 能力底座搭建', desc: '大模型接入、RAG知识库、AI Agent工作流——帮企业构建可复用的智能基础设施，而非一次性工具。', side: 'right' },
  { tag: '03', title: '业务系统对接集成', desc: '打通 OA、ERP、CRM、项目管理等既有系统。让 AI 平台成为企业统一入口，消除信息孤岛。', side: 'left' },
  { tag: '04', title: '知识资产沉淀', desc: '将历史文档、案例、专家经验转化为可检索、可问答、可复用的企业向量知识库，越用越聪明。', side: 'right' },
  { tag: '05', title: '持续运营与迭代', desc: '上线只是开始。长期技术支持、性能监控、内容更新——随业务增长持续优化。', side: 'left' },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Core Services</span>
          <h2 className="section-title">核心业务</h2>
          <p className="section-desc" style={{ maxWidth: '680px' }}>
            从单点工具升级为企业级能力平台。AI ＋ 极致定制，让你的数字资产持续进化。
          </p>
        </div>
        <div className="services-alt">
          {services.map((s, i) => (
            <div key={i} className={`service-row ${s.side}`}>
              <div className="service-tag-col">
                <span className="service-num-big">{s.tag}</span>
              </div>
              <BorderGlow
                glowColor="230 80 70"
                backgroundColor="rgba(20, 24, 48, 0.85)"
                borderRadius={18}
                glowRadius={30}
                glowIntensity={0.6}
                coneSpread={20}
                colors={['#6c94ff', '#b195fa', '#34daf0']}
                fillOpacity={0.3}
              >
                <div className="service-card-inner">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
