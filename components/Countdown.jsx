import { motion } from 'framer-motion'
import { useCountdown } from '../hooks'

const pad = (n) => String(n).padStart(2, '0')

export default function Countdown({ target }) {
  const t = useCountdown(target)

  if (t.done) {
    return (
      <motion.p
        className="countdown-done"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 16 }}
      >
        the day is here
      </motion.p>
    )
  }

  const units = [
    { key: 'days', value: t.days, label: 'days' },
    { key: 'hours', value: t.hours, label: 'hours' },
    { key: 'minutes', value: t.minutes, label: 'minutes' },
    { key: 'seconds', value: t.seconds, label: 'seconds' },
  ]

  return (
    <div className="countdown" role="timer" aria-live="off">
      {units.map((u, i) => (
        <motion.div
          key={u.key}
          className={`cd-unit${u.key === 'seconds' ? ' cd-unit--live' : ''}`}
          initial={{ opacity: 0, y: 24, rotateX: -25 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.5 + i * 0.09, type: 'spring', stiffness: 140, damping: 15 }}
        >
          <span className="cd-num">{pad(u.value)}</span>
          <span className="cd-label">{u.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
