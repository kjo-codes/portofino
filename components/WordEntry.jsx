export default function WordEntry({ entry, label = 'word of the day' }) {
  return (
    <div className="entry">
      <p className="entry__label">{label}</p>
      <p className="entry__word">{entry.word}</p>
      <p className="entry__meta">
        {entry.phonetic && <span>/{entry.phonetic}/</span>}
        {entry.phonetic && entry.part && <span> · </span>}
        {entry.part && <span>{entry.part}</span>}
      </p>
      {entry.origin && <p className="entry__origin">{entry.origin}</p>}
      <p className="entry__meaning">{entry.meaning}</p>
    </div>
  )
}
