import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CONFIG, DAYS, dateForDay } from './data'
import { useToday } from './hooks'
import Backdrop from './components/Backdrop'
import Countdown from './components/Countdown'
import DayTile from './components/DayTile'
import Letter from './components/Letter'
import Finale from './components/Finale'

const FINALE_DAY = DAYS[DAYS.length - 1].day
const OPENED_KEY = 'countdown:opened'

/* Add ?preview to the URL to unlock every box — handy for checking your
   messages before August. Never affects the normal visitor experience. */
const previewAll =
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('preview')

const isDev = import.meta.env.DEV

function loadOpened() {
  try {
    return new Set(JSON.parse(localStorage.getItem(OPENED_KEY) || '[]'))
  } catch {
    return new Set()
  }
}

export default function App() {
  const today = useToday()
  const [active, setActive] = useState(null)   // entry shown in the letter modal
  const [finale, setFinale] = useState(null)   // entry shown in the finale
  const [opened, setOpened] = useState(loadOpened)

  const unlockTime = useMemo(() => (day) => dateForDay(day).getTime(), [])

  const markOpened = (day) => {
    setOpened((prev) => {
      if (prev.has(day)) return prev
      const next = new Set(prev).add(day)
      try {
        localStorage.setItem(OPENED_KEY, JSON.stringify([...next]))
      } catch {
        /* private browsing — not worth surfacing */
      }
      return next
    })
  }

  const handleOpen = (entry) => {
    markOpened(entry.day)
    if (entry.day === FINALE_DAY) setFinale(entry)
    else setActive(entry)
  }

  /* On the birthday itself, open the finale automatically — but only once per
     tab session, so closing it doesn't fight the visitor. */
  useEffect(() => {
    if (today !== unlockTime(FINALE_DAY)) return
    if (sessionStorage.getItem('countdown:finaleShown')) return
    const entry = DAYS.find((d) => d.day === FINALE_DAY)
    const timer = setTimeout(() => {
      sessionStorage.setItem('countdown:finaleShown', '1')
      setFinale(entry)
      markOpened(FINALE_DAY)
    }, 1600)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today])

  /* Lock background scroll while anything is open */
  useEffect(() => {
    const open = active || finale
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active, finale])

  return (
    <>
      <Backdrop />

      <div className="shell">
        <header className="hero">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            a little something for
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 22, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.12, type: 'spring', stiffness: 120, damping: 15 }}
          >
            {CONFIG.name}
          </motion.h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36, duration: 0.8 }}
          >
            {CONFIG.tagline}
          </motion.p>

          <motion.p
            className="hero__note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.46, duration: 0.8 }}
          >
            {CONFIG.note}
          </motion.p>

          <div className="rule" aria-hidden="true">
            <span className="rule__gem" />
          </div>

          <Countdown target={CONFIG.birthday} />
        </header>

        <main>
          <div className="calendar">
            {DAYS.map((entry, i) => {
              const unlocked = previewAll || today >= unlockTime(entry.day)
              return (
                <DayTile
                  key={entry.day}
                  entry={entry}
                  index={i}
                  isDev={isDev}
                  state={{
                    locked: !unlocked,
                    today: today === unlockTime(entry.day),
                    finale: entry.day === FINALE_DAY,
                    opened: opened.has(entry.day),
                  }}
                  onOpen={handleOpen}
                />
              )
            })}
          </div>
        </main>

        <footer className="footer">
          <p>{CONFIG.footer}</p>
          {isDev && (
            <p className="footer__hint">
              dev mode · add ?preview to the URL to unlock every day
            </p>
          )}
        </footer>
      </div>

      <AnimatePresence>
        {active && <Letter key="letter" entry={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {finale && <Finale key="finale" entry={finale} onClose={() => setFinale(null)} />}
      </AnimatePresence>
    </>
  )
}
