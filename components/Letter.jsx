import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import WordEntry from './WordEntry'
import { labelForDay } from '../data'

export default function Letter({ entry, onClose }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    cardRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      className="overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
    >
      <motion.div
        ref={cardRef}
        className="letter"
        role="dialog"
        aria-modal="true"
        aria-label={labelForDay(entry.day)}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, rotateX: -62, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        exit={{ opacity: 0, rotateX: 32, y: 20, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 130, damping: 17 }}
        style={{ transformOrigin: 'top center' }}
      >
        <button className="close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <motion.p
          className="letter__day"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
        >
          {labelForDay(entry.day)}
        </motion.p>

        <motion.p
          className="letter__msg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {entry.message}
        </motion.p>

        <div className="rule" aria-hidden="true">
          <span className="rule__gem" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
        >
          <WordEntry entry={entry} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
