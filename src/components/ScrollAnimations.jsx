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

    // Process — steps pop with GSAP elastic
    const steps = document.querySelectorAll('#process .process-step')
    gsap.fromTo(steps,
      { opacity: 0, scale: 0.5, rotation: -8 },
      {
        opacity: 1, scale: 1, rotation: 0,
        duration: 0.7,
        stagger: 0.25,
        ease: 'elastic.out(1, 0.6)',
        scrollTrigger: {
          trigger: '#process',
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    )

    // Portfolio — cards slide up with scale
    const portfolioCards = document.querySelectorAll('#portfolio .portfolio-card')
    gsap.fromTo(portfolioCards,
      { opacity: 0, y: 100, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#portfolio',
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return null
}
