export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header portfolio-heading">
          <span className="section-label">04 / 开始沟通</span>
          <h2 className="section-title">从一个最耗时的业务环节开始</h2>
        </div>

        <div className="contact-methods">
          <article className="contact-card contact-card-phone">
            <span className="contact-card-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <h3>电话沟通</h3>
            <a className="contact-phone" href="tel:13476211139">134 7621 1139</a>
            <p>工作日 9:00 – 18:00</p>
          </article>

          <article className="contact-card contact-card-wechat">
            <span className="contact-card-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.4 16.1c-3.45 0-6.2-2.21-6.2-4.94s2.75-4.94 6.2-4.94 6.2 2.21 6.2 4.94-2.75 4.94-6.2 4.94Z" />
                <path d="M15.9 17.78c2.78-.25 4.9-2.08 4.9-4.29 0-2.39-2.47-4.33-5.52-4.33-.2 0-.39.01-.58.02M6.18 18.78l1.06-2.77M17.6 19.25l-.88-2.1M6.25 10.52h.01M10.45 10.52h.01M13.66 13.18h.01M17.1 13.18h.01" />
              </svg>
            </span>
            <h3>企业微信</h3>
            <div className="wechat-card-frame">
              <img src="/wechat-card.webp" alt="清云智矩企业微信二维码" className="wechat-card-image" />
            </div>
            <p>扫码添加，即时沟通</p>
          </article>
        </div>
      </div>
    </section>
  )
}
