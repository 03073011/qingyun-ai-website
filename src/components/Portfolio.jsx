// 合作成果：有实际项目后在此补充真实截图与数据
const partners = [
  {
    industry: '建筑工程',
    scope: 'AI 投标生成 · 企业知识库 · RAG 问答',
    result: '标书初稿周期缩短 60%，知识问答命中率 92%，沉淀 10 万+ 份企业文档资产。',
    highlight: '从高频标书场景切入，构建企业级 AI 能力底座',
  },
  {
    industry: '医疗健康',
    scope: '智能分诊 · 在线预约 · 患者管理后台',
    result: '上线首月处理预约 3,200+ 次，患者平均等待时间从 42 分钟降至 8 分钟。',
    highlight: '大模型 + RAG 医学知识库，让 AI 真正进入诊疗流程',
  },
  {
    industry: '跨境电商',
    scope: 'DTC 品牌独立站 · AI 客服 · 智能推荐引擎',
    result: '上线后月均订单增长 27%，AI 客服自动解决率 81%，人工客服成本下降 45%。',
    highlight: '从零搭建品牌独立站 + AI 运营闭环，不依赖平台流量',
  },
]

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Partnerships</span>
          <h2 className="section-title">合作成果</h2>
          <p className="section-desc">
            不是"做过什么项目"，而是"为合作伙伴创造了什么价值"。
          </p>
        </div>

        <div className="partners-list">
          {partners.map((p, i) => (
            <div key={i} className="partner-card fade-in" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="partner-header">
                <span className="partner-industry">{p.industry}</span>
                <span className="partner-scope">{p.scope}</span>
              </div>
              <blockquote className="partner-highlight">{p.highlight}</blockquote>
              <p className="partner-result">{p.result}</p>
            </div>
          ))}
        </div>

        <div className="partners-cta fade-in">
          <p>期待你的企业成为下一个合作成果。</p>
          <a href="#contact" className="btn-primary">开启合作 →</a>
        </div>
      </div>
    </section>
  )
}
