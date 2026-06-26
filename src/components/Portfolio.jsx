// 案例数据：后续有实际项目时在此编辑替换
const cases = [
  {
    tag: '科技 / SaaS',
    title: 'AI 数据分析平台官网',
    desc: '全定制品牌官网 + 数据可视化仪表盘',
    icon: '📊',
  },
  {
    tag: '医疗健康',
    title: '智慧医疗预约管理系统',
    desc: 'AI智能分诊 + 在线预约 + 患者管理后台',
    icon: '🏥',
  },
  {
    tag: '高端制造',
    title: '精密仪器全球品牌官网',
    desc: '多语言站点 + 3D产品展示 + 技术文档中心',
    icon: '⚙️',
  },
]

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">精选案例展示</h2>
          <p className="section-desc">
            更多案例补充中——每个项目都是独一无二的定制作品。
          </p>
        </div>
        <div className="portfolio-grid portfolio-grid-3">
          {cases.map((c, i) => (
            <div key={i} className="portfolio-card fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="card-img">{c.icon}</div>
              <div className="card-overlay">
                <div className="card-tag">{c.tag}</div>
                <div className="card-title">{c.title}</div>
                <div className="card-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
