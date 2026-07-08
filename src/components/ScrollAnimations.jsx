import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimations() {
  useEffect(() => {
    const mm = gsap.matchMedia()

    // ---- Services: pillar cards stagger in ----
    mm.add('(min-width: 769px)', () => {
      gsap.fromTo('#services .pillar-card',
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#services',
            start: 'top 68%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // ---- Process: step circles pop ----
    mm.add('(min-width: 769px)', () => {
      gsap.fromTo('#process .process-step',
        { opacity: 0, scale: 0.7, y: 30 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.65,
          stagger: 0.2,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: '#process',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // ---- Process: note card slides up ----
    mm.add('(min-width: 769px)', () => {
      gsap.fromTo('#process .process-note',
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#process .process-note',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // ---- Portfolio: case slider fades in ----
    mm.add('(min-width: 769px)', () => {
      gsap.fromTo('#portfolio .case-slider',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#portfolio',
            start: 'top 68%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // ---- Contact: cards pop in ----
    mm.add('(min-width: 769px)', () => {
      gsap.fromTo('#contact .contact-card',
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65,
          stagger: 0.18,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 72%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // ---- Hero: slight parallax on galaxy container ----
    mm.add('(min-width: 769px)', () => {
      gsap.to('.galaxy-container', {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return null
}
