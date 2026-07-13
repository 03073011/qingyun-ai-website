import { useEffect, useRef, useCallback } from 'react'

/* ───────────────────────────────────────────
   离散滚轮滚动 Hook
   每次滚轮 / 触控板滑动只跳转一个完整区块
   ─────────────────────────────────────────── */

// 区块 ID 顺序（滚轮导航的目标）
const SECTION_IDS = ['hero', 'services', 'process', 'portfolio', 'contact', 'footer']
const NAV_HEIGHT = 76 // --nav-height
const THRESHOLD = 50 // 累积 delta 阈值
const SCROLL_DURATION = 700 // 滚动动画时长 (ms)

export default function useSnapScroll() {
  const isScrolling = useRef(false)
  const currentIndex = useRef(0)
  const accumulatedDelta = useRef(0)

  /* ---- helpers ---- */
  const getTargets = useCallback(() => {
    return SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)
  }, [])

  const findIndex = useCallback(() => {
    const targets = getTargets()
    const scrollY = window.scrollY + NAV_HEIGHT + 60
    for (let i = targets.length - 1; i >= 0; i--) {
      const top = targets[i].getBoundingClientRect().top + window.scrollY
      if (scrollY >= top) return i
    }
    return 0
  }, [getTargets])

  /* ---- 自定义平滑滚动 ---- */
  const animateScroll = useCallback((target, index) => {
    isScrolling.current = true
    currentIndex.current = index
    accumulatedDelta.current = 0

    const targetY =
      target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    function step(now) {
      const elapsed = now - startTime
      const t = Math.min(elapsed / SCROLL_DURATION, 1)
      // easeInOutCubic
      const ease =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      window.scrollTo(0, startY + distance * ease)
      if (t < 1) {
        requestAnimationFrame(step)
      } else {
        isScrolling.current = false
      }
    }

    requestAnimationFrame(step)
  }, [])

  /* ---- 公开方法 ---- */
  const goTo = useCallback(
    (index) => {
      const targets = getTargets()
      if (index >= 0 && index < targets.length) {
        animateScroll(targets[index], index)
      }
    },
    [getTargets, animateScroll],
  )

  /* ---- 事件绑定 ---- */
  useEffect(() => {
    // 初始化：识别当前所在区块
    const initTimer = setTimeout(() => {
      currentIndex.current = findIndex()
    }, 120)

    /* 滚轮 / 触控板 */
    const handleWheel = (e) => {
      if (isScrolling.current) {
        e.preventDefault()
        return
      }

      const dir = e.deltaY > 0 ? 1 : -1
      accumulatedDelta.current += e.deltaY

      const targets = getTargets()
      const nextIdx = currentIndex.current + dir
      const hasTarget = nextIdx >= 0 && nextIdx < targets.length

      // 边界处放开，让浏览器自然处理
      if (!hasTarget) {
        accumulatedDelta.current = 0
        return
      }

      if (Math.abs(accumulatedDelta.current) >= THRESHOLD) {
        accumulatedDelta.current = 0
        e.preventDefault()
        animateScroll(targets[nextIdx], nextIdx)
      } else {
        e.preventDefault()
      }
    }

    /* 锚点点击（导航、CTA 按钮等）统一接管 */
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return

      const id = link.getAttribute('href').slice(1)
      if (!id) return

      const targets = getTargets()
      const target = document.getElementById(id)
      if (!target) return

      const idx = targets.indexOf(target)
      if (idx === -1) return

      e.preventDefault()
      animateScroll(target, idx)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    document.addEventListener('click', handleClick, { capture: true })

    return () => {
      clearTimeout(initTimer)
      window.removeEventListener('wheel', handleWheel)
      document.removeEventListener('click', handleClick, { capture: true })
    }
  }, [getTargets, animateScroll, findIndex])

  return { goTo, currentIndex }
}
