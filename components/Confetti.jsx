import { useEffect, useRef } from 'react'

const COLORS = ['#f6c3d1', '#eda1b6', '#e6c079', '#c99a45', '#ded0ee', '#fcdcc4', '#ffffff']

function drawHeart(ctx, s) {
  ctx.beginPath()
  ctx.moveTo(0, s * 0.3)
  ctx.bezierCurveTo(0, 0, -s / 2, 0, -s / 2, s * 0.3)
  ctx.bezierCurveTo(-s / 2, s * 0.62, 0, s * 0.82, 0, s)
  ctx.bezierCurveTo(0, s * 0.82, s / 2, s * 0.62, s / 2, s * 0.3)
  ctx.bezierCurveTo(s / 2, 0, 0, 0, 0, s * 0.3)
  ctx.closePath()
  ctx.fill()
}

/**
 * Lightweight canvas confetti — a burst on mount, then a slow drizzle so the
 * finale keeps feeling alive without ever getting busy.
 */
export default function Confetti() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width, height, dpr
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = []

    const spawn = (burst) => {
      const x = burst ? width * (0.2 + Math.random() * 0.6) : Math.random() * width
      particles.push({
        x,
        y: burst ? height * 0.42 : -20,
        vx: burst ? (Math.random() - 0.5) * 11 : (Math.random() - 0.5) * 1.4,
        vy: burst ? -7 - Math.random() * 9 : 1 + Math.random() * 1.8,
        size: 6 + Math.random() * 9,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.16,
        heart: Math.random() < 0.32,
        life: 0,
      })
    }

    for (let i = 0; i < 130; i++) spawn(true)

    let frame = 0
    let raf
    const loop = () => {
      ctx.clearRect(0, 0, width, height)
      frame++

      // gentle ongoing drizzle
      if (frame % 9 === 0 && particles.length < 220) spawn(false)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.vy += 0.16          // gravity
        p.vx *= 0.995         // drag
        p.x += p.vx
        p.y += p.vy
        p.rot += p.spin
        p.life++

        if (p.y > height + 40 || p.x < -60 || p.x > width + 60) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, 1 - p.life / 460)
        if (p.heart) {
          drawHeart(ctx, p.size)
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        }
        ctx.restore()
      }

      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="finale__canvas" aria-hidden="true" />
}
