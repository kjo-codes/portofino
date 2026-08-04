import { useEffect, useState } from 'react'

/**
 * Ticks once a second and returns the time remaining until `target`.
 * `done` flips true the moment the target passes.
 */
export function useCountdown(target) {
  const calc = () => {
    const ms = target.getTime() - Date.now()
    if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
    return {
      days: Math.floor(ms / 86400000),
      hours: Math.floor(ms / 3600000) % 24,
      minutes: Math.floor(ms / 60000) % 60,
      seconds: Math.floor(ms / 1000) % 60,
      done: false,
    }
  }

  const [time, setTime] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return time
}

/**
 * Returns today's date, re-checking every minute so the calendar unlocks the
 * next box on its own if the page is left open across midnight.
 */
export function useToday() {
  const stamp = () => {
    const d = new Date()
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
  }

  const [today, setToday] = useState(stamp)

  useEffect(() => {
    const id = setInterval(() => {
      const next = stamp()
      setToday((prev) => (prev === next ? prev : next))
    }, 60000)
    return () => clearInterval(id)
  }, [])

  return today
}
