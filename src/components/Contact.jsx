import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    gsap.fromTo(cards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    )
    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return (
    <section id="contact" ref={sectionRef}>
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
          <div className="contact-card" ref={el => cardsRef.current[0] = el}>
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
          <div className="contact-card" ref={el => cardsRef.current[1] = el}>
            <div className="contact-card-icon wechat-icon">
              <img src="/wechat-icon.webp" alt="微信" width="28" height="28" />
            </div>
            <h3>微信咨询</h3>
            <p className="contact-card-detail">添加微信，即时沟通需求</p>
            <div className="wechat-info">
              <span className="wechat-label">微信号</span>
              <span className="contact-card-action">yyq_-_yyq</span>
              <span className="wechat-label">昵称</span>
              <span className="wechat-nick">Forest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
