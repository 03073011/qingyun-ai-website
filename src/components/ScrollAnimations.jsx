import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimations() {
  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return null
}
