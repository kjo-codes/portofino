import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Confetti from './Confetti'
import WordEntry from './WordEntry'
import { CONFIG } from '../data'

export default function Finale({ entry, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      className="finale"
      role="dialog"
      aria-modal="true"
      aria-label="Happy birthday"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Confetti />

      <motion.div
        className="finale__frame"
        initial={{ opacity: 0, scale: 0.86, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.15 }}
      >
        <button className="close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <motion.p
          className="finale__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          happy birthday
        </motion.p>

        <motion.h2
          className="finale__name"
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 140, damping: 14 }}
        >
          {CONFIG.name}
        </motion.h2>

        {CONFIG.age != null && (
          <motion.p
            className="finale__age"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
          >
            {CONFIG.age} years
          </motion.p>
        )}

        <motion.p
          className="finale__msg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {entry.message}
        </motion.p>

        <div className="rule" aria-hidden="true">
          <span className="rule__gem" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15 }}
        >
          <WordEntry entry={entry} label="today's word" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
