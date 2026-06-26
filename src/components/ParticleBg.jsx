import { useEffect, useRef, useState, useCallback } from 'react'

// 大型光斑 + 网格线 + 流动粒子 + 射线扫描
export default function ParticleBg() {
  const canvasRef = useRef(null)
  const [size, setSize] = useState({ w: 1920, h: 1080 })

  const resize = useCallback(() => {
    setSize({ w: window.innerWidth, h: window.innerHeight })
  }, [])

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [resize])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const { w, h } = size
    let t = 0

    canvas.width = w
    canvas.height = h

    // 光斑球
    const orbs = [
      { x: w * 0.25, y: h * 0.25, r: 280, vx: 0.15, vy: 0.2, hue: 230, alpha: 0.06 },
      { x: w * 0.75, y: h * 0.55, r: 340, vx: -0.2, vy: -0.1, hue: 270, alpha: 0.05 },
      { x: w * 0.45, y: h * 0.7, r: 200, vx: 0.1, vy: -0.15, hue: 190, alpha: 0.07 },
    ]

    // 流光线粒子
    const trails = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      len: Math.random() * 120 + 40,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.6 + 0.3,
      hue: [230, 270, 190][Math.floor(Math.random() * 3)],
      alpha: Math.random() * 0.4 + 0.2,
    }))

    let raf
    function animate() {
      t++
      ctx.fillStyle = 'rgba(10, 10, 15, 1)'
      ctx.fillRect(0, 0, w, h)

      // --- 网格背景 ---
      const gridSize = 70
      ctx.strokeStyle = 'rgba(100, 140, 255, 0.03)'
      ctx.lineWidth = 0.5
      for (let x = gridSize; x < w; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
      }
      for (let y = gridSize; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
      }

      // --- 光斑 ---
      for (const o of orbs) {
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        grad.addColorStop(0, `hsla(${o.hue}, 80%, 65%, ${o.alpha * 1.5})`)
        grad.addColorStop(0.5, `hsla(${o.hue}, 60%, 50%, ${o.alpha * 0.5})`)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.fillRect(o.x - o.r, o.y - o.r, o.r * 2, o.r * 2)

        o.x += o.vx * 0.3
        o.y += o.vy * 0.3
        if (o.x < -o.r) o.x = w + o.r
        if (o.x > w + o.r) o.x = -o.r
        if (o.y < -o.r) o.y = h + o.r
        if (o.y > h + o.r) o.y = -o.r
      }

      // --- 扫描线 ---
      const scanY = (t * 0.3) % h
      ctx.fillStyle = 'rgba(100, 140, 255, 0.015)'
      ctx.fillRect(0, scanY, w, 1)
      ctx.fillRect(0, (scanY + h * 0.33) % h, w, 1)
      ctx.fillRect(0, (scanY + h * 0.66) % h, w, 1)

      // --- 流光线 ---
      for (const tr of trails) {
        const dx = Math.cos(tr.angle) * tr.speed
        const dy = Math.sin(tr.angle) * tr.speed
        const sx = tr.x - Math.cos(tr.angle) * tr.len
        const sy = tr.y - Math.sin(tr.angle) * tr.len

        const grad = ctx.createLinearGradient(sx, sy, tr.x, tr.y)
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(0.6, `hsla(${tr.hue}, 80%, 65%, ${tr.alpha * 0.3})`)
        grad.addColorStop(1, `hsla(${tr.hue}, 90%, 70%, ${tr.alpha})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.moveTo(sx, sy)
        ctx.lineTo(tr.x, tr.y)
        ctx.stroke()

        // 头部亮点
        ctx.beginPath()
        ctx.arc(tr.x, tr.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${tr.hue}, 90%, 75%, ${tr.alpha})`
        ctx.fill()

        tr.x += dx; tr.y += dy
        if (Math.random() < 0.005) tr.angle += (Math.random() - 0.5) * 0.6
        if (tr.x < 0) tr.x = w
        if (tr.x > w) tr.x = 0
        if (tr.y < 0) tr.y = h
        if (tr.y > h) tr.y = 0
      }

      // --- 十字交点闪烁 ---
      for (let i = 0; i < 8; i++) {
        const cx = (Math.sin(t * 0.003 + i * 1.7) * 0.5 + 0.5) * w
        const cy = (Math.cos(t * 0.004 + i * 2.1) * 0.5 + 0.5) * h
        const pulse = Math.sin(t * 0.02 + i) * 0.5 + 0.5
        ctx.strokeStyle = `rgba(100, 180, 255, ${pulse * 0.15})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(cx - 30, cy); ctx.lineTo(cx + 30, cy)
        ctx.moveTo(cx, cy - 30); ctx.lineTo(cx, cy + 30)
        ctx.stroke()
      }

      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [size])

  return <canvas ref={canvasRef} className="particle-canvas" />
}
