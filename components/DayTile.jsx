import { motion } from 'framer-motion'
import { labelForDay } from '../data'

function Padlock() {
  return (
    <svg className="tile__lock" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 10V7a5 5 0 0 1 10 0v3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <rect x="4.5" y="10" width="15" height="11" rx="2.6" fill="currentColor" />
    </svg>
  )
}

export default function DayTile({ entry, index, state, isDev, onOpen }) {
  const { locked, today, finale, opened } = state

  const classes = [
    'tile',
    locked ? 'tile--locked' : 'tile--open',
    today ? 'tile--today' : '',
    finale ? 'tile--finale' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const label = locked
    ? `Day ${entry.day} — locked until ${labelForDay(entry.day)}`
    : `Day ${entry.day}, ${labelForDay(entry.day)} — open`

  return (
    <motion.button
      className={classes}
      aria-label={label}
      disabled={locked}
      onClick={() => !locked && onOpen(entry)}
      initial={{ opacity: 0, y: 26, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.7 + index * 0.032,
        type: 'spring',
        stiffness: 170,
        damping: 17,
      }}
      whileHover={locked ? { rotate: [0, -1.2, 1.2, 0] } : { y: -8, scale: 1.05 }}
      whileTap={locked ? {} : { scale: 0.96 }}
    >
      <span className="tile__inner">
        <span className="tile__body" />
        <span className="tile__seams" />
        <span className="tile__flap" />

        {opened && !today && !locked && <span className="tile__tick">✦</span>}

        <span className="tile__seal">
          <span className="tile__num">{entry.day}</span>
        </span>

        {locked && <Padlock />}
        {today && <span className="tile__today-label">open me</span>}
        {isDev && entry.draft && <span className="tile__draft">draft</span>}
      </span>
    </motion.button>
  )
}
