export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">准备好让 AI 为你的业务<br />创造价值了吗？</h2>
          <p className="section-desc">
            30 分钟免费需求评估，我们将根据你的场景给出可落地的定制方案。
          </p>
        </div>

        <div className="contact-cards contact-cards-2">
          {/* 电话 */}
          <div className="contact-card contact-card-phone">
            <div className="contact-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>电话咨询</h3>
            <p className="contact-card-detail">工作日 9:00 – 18:00，随时接听</p>
            <span className="contact-card-action">134 7621 1139</span>
          </div>

          {/* 微信 */}
          <div className="contact-card contact-card-wechat">
            <div className="contact-card-icon wechat-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.4 16.1c-3.45 0-6.2-2.21-6.2-4.94s2.75-4.94 6.2-4.94 6.2 2.21 6.2 4.94-2.75 4.94-6.2 4.94Z" />
                <path d="M15.9 17.78c2.78-.25 4.9-2.08 4.9-4.29 0-2.39-2.47-4.33-5.52-4.33-.2 0-.39.01-.58.02" />
                <path d="m6.18 18.78 1.06-2.77" />
                <path d="m17.6 19.25-.88-2.1" />
                <path d="M6.25 10.52h.01" />
                <path d="M10.45 10.52h.01" />
                <path d="M13.66 13.18h.01" />
                <path d="M17.1 13.18h.01" />
              </svg>
            </div>
            <h3>微信咨询</h3>
            <p className="contact-card-detail">扫码添加微信，即时沟通需求</p>
            <div className="wechat-card-frame">
              <img src="/wechat-card.webp" alt="企业微信二维码名片" className="wechat-card-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
