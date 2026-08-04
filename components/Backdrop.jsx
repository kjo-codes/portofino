import { useMemo } from 'react'

/**
 * Fixed decorative background: three slowly drifting colour blobs, a paper
 * grain overlay, and a handful of petals falling on a loop. All CSS-driven so
 * it costs nothing per frame in JS.
 */
export default function Backdrop() {
  const petals = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 7 + Math.random() * 11,
        duration: 14 + Math.random() * 14,
        delay: -Math.random() * 26,
        drift: (Math.random() - 0.5) * 24,
      })),
    []
  )

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <div className="aurora__blob aurora__blob--1" />
        <div className="aurora__blob aurora__blob--2" />
        <div className="aurora__blob aurora__blob--3" />
      </div>
      <div className="grain" aria-hidden="true" />
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          aria-hidden="true"
          style={{
            left: `${p.left}vw`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
            '--drift': `${p.drift}vw`,
          }}
        />
      ))}
    </>
  )
}
