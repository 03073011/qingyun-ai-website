import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimations() {
  useEffect(() => {
    // Hero — text stagger reveal (handled by CSS)
    // Services — alternating left/right cards slide in
    const serviceRows = document.querySelectorAll('#services .service-row')
    serviceRows.forEach((row, i) => {
      const isLeft = row.classList.contains('left')
      gsap.fromTo(row,
        { opacity: 0, x: isLeft ? -80 : 80 },
        {
          opacity: 1, x: 0,
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      )
      // number slide opposite
      const num = row.querySelector('.service-num-big')
      if (num) {
        gsap.fromTo(num,
          { opacity: 0, x: isLeft ? 40 : -40 },
          {
            opacity: 0.3, x: 0,
            duration: 1,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        )
      }
    })

    // Process — steps pop with elastic
    const steps = document.querySelectorAll('#process .process-step')
    gsap.fromTo(steps,
      { opacity: 0, scale: 0.7, y: 30 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '#process',
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    )

    // Portfolio — partner cards fade in with left slide
    const partnerCards = document.querySelectorAll('#portfolio .partner-card')
    gsap.fromTo(partnerCards,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '#portfolio', start: 'top 70%', toggleActions: 'play none none none' } }
    )

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return null
}
