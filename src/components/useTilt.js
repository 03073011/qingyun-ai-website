import { useRef, useCallback } from 'react'

export default function useTilt(strength = 6) {
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateY(-4px)`
  }, [strength])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)'
  }, [])

  return { ref, onMouseMove: onMove, onMouseLeave: onLeave }
}
