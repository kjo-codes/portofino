/* ============================================================================
 *  EDIT THIS FILE — everything you'll want to change lives here.
 *
 *  The calendar runs 31 July → 24 August 2026: 25 days, 25 words.
 *  Each entry's `day` is its position in the countdown (1–25), not a calendar
 *  date. Day 1 is 31 July, day 25 is his birthday. The real date is worked out
 *  from CONFIG.startDate, so you never have to renumber anything.
 *
 *  Any entry with `draft: true` is a starter I wrote — rewrite it in your own
 *  voice, then flip it to `draft: false`. While you're running the site
 *  locally, drafts show a small badge so you can see what's left. That badge
 *  never appears on the deployed site.
 *
 *  Keep messages to roughly 2–4 sentences — they're set in large type and
 *  longer ones start to feel like an essay instead of a note.
 * ========================================================================== */

export const CONFIG = {
  name: 'Zeer',

  /* The age he's turning. Set to null if you'd rather not put a number on it. */
  age: 25,

  /* First envelope. Months are 0-indexed in JS, so 6 = July. */
  startDate: new Date(2026, 6, 31),

  /* The birthday — what the timer counts down to. 7 = August. */
  birthday: new Date(2026, 7, 24, 0, 0, 0),

  /* Lines under his name. */
  tagline: '25 reasons · 25 words',
  note: 'a small way to celebrate your 25th birthday month',

  /* Closing line at the bottom of the page. */
  footer: 'made with love by Kjo <3',
}

/* Day 1 is CONFIG.startDate; each following day is one day later. */
export function dateForDay(day) {
  const d = new Date(CONFIG.startDate)
  d.setDate(d.getDate() + (day - 1))
  return d
}

/* e.g. "July 31", "August 24" */
export function labelForDay(day) {
  return dateForDay(day).toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
  })
}

/* ============================================================================
 *  THE 25 DAYS
 *  message  — your love note for that day
 *  draft    — true means "Claude wrote this, still needs your voice"
 *  word     — the word you two adopt that day
 *  phonetic — rough pronunciation
 *  part     — noun / verb / adjective / etc.
 *  origin   — where it comes from (optional, shows in italics)
 *  meaning  — the definition
 * ========================================================================== */

export const DAYS = [
  {
    day: 1,
    draft: false,
    message:
      "Starting a countdown for you feels a little unfair, because I'd happily spend all twenty-five days just telling you about how I love you. But we have to begin somewhere, so: I love that you exist, and that I get to be the one counting.",
    word: 'Vorfreude',
    phonetic: 'FOR-froy-duh',
    part: 'noun',
    origin: 'German — literally "pre-joy"',
    meaning: 'The intense, happy anticipation of a pleasure still to come.',
  },
  {
    day: 2,
    draft: false,
    message:
      "Every time we step out into the world, your hand finds mine before I even think to reach for it — the door held open a beat before I arrive, your palm settling at  my back as you steer me gently through a crowd. You've never once noticed you do it. I notice every single time, and every single time, something in me quietly comes undone.",
    word: 'Assiduous',
    phonetic: 'uh-SID-yoo-us',
    part: 'adjective',
    origin: 'Latin, assiduus — "sitting down to, attending to"',
    meaning: 'Showing great care, attention, and persistent dedication — devoted in the small, unshowy ways.',
  },
  {
    day: 3,
    draft: false,
    message:
      "I didn't know a person could feel like shelter until you. Not the kind of safe where nothing bad ever happens — the kind where, if it does, you're already standing there beside me. Before you, I'm not sure I believed that kind of safety existed anywhere outside my own head.",
    word: 'Inviolable',
    phonetic: 'in-VY-uh-luh-buhl',
    part: 'adjective',
    origin: 'Latin, inviolabilis',
    meaning: 'Safe from injury, violation, or destruction; sacred and unbreakable.',
  },
  {
    day: 4,
    draft: false,
    message:
      "And if I could, I would kiss the grief from your lips and swallow every ache that has ever touched you, so that none of it would ever have to be carried alone again.",
    word: 'Anodyne',
    phonetic: 'AN-uh-dyne',
    part: 'noun',
    origin: 'Greek, anodynos — "without pain"',
    meaning: 'Something that soothes, comforts, or eases distress.',
  },
  {
    day: 5,
    draft: false,
    message:
      "You fold yourself into six inches of the bed, ask for nothing, and never once wake me, though I know you easily could. Thank You — for guarding my sleep even at the quiet cost of your own comfort.",
    word: 'Forbearance',
    phonetic: 'for-BAIR-ens',
    part: 'noun',
    origin: 'English, forbear — "to hold back"',
    meaning: 'Patient self-restraint; the quiet holding-back of what one has every right to do.',
  },
  {
    day: 6,
    draft: false,
    message:
      "You walk into every room and it already belongs to you, and you make it look effortless. I admire the ease, the light, the way people like you. Every quality I wish I carried more of, I find already living in you. You are the one I have ever let see all of me. And sometimes, looking at you, I catch myself looking into a mirror — my own reflection looking back, a little more sure of itself than usual.",
    word: 'Effulgent',
    phonetic: 'ih-FUL-jent',
    part: 'adjective',
    origin: 'Latin, effulgere — "to shine out"',
    meaning: 'Radiant; shining brilliantly, as if lit from within.',
  },
  {
    day: 7,
    draft: false,
    message:
      "I love watching you do what you're good at. Whatever's in your hands, you go all in, take responsibility and completely do justice to it. I admire you so much for that",
    word: 'Meraki',
    phonetic: 'meh-RAH-kee',
    part: 'noun',
    origin: 'Greek, μεράκι',
    meaning: 'Doing something with soul, creativity, and love — leaving a piece of yourself in it.',
  },
  {
    day: 8,
    draft: false,
    message:
      "I love you in a way that would worry a therapist and thrill a poet — entirely, inconveniently, far past what could be called reasonable. I gave up loving you in moderation a long time ago. It was never a battle I was going to win.",
    word: 'Ineluctable',
    phonetic: 'in-ih-LUK-tuh-buhl',
    part: 'adjective',
    origin: 'Latin, ineluctabilis — "unable to be struggled out of"',
    meaning: 'Impossible to escape or resist; inevitable in the way a tide is inevitable.',
  },
  {
    day: 9,
    draft: false,
    message:
      "'Whatever souls are made of, his and mine are the same.'",
    word: 'Kindred',
    phonetic: 'KIN-drid',
    part: 'adjective',
    origin: 'Old English, cynn + rǣden — "kinship, connection"',
    meaning: 'Similar in nature or feeling; sharing a natural bond as if related in spirit.',
  },
  {
    day: 10,
    draft: false,
    message:
      "Even after you've left a room, some of you stays in it. I'll catch it hours later and find myself smiling at nothing in particular, like an idiot, in an empty kitchen.",
    word: 'Susurrus',
    phonetic: 'soo-SUR-us',
    part: 'noun',
    origin: 'Latin — "whispering, rustling"',
    meaning: 'A soft, murmuring sound — like a whisper or a rustle that lingers in a room.',
  },
  {
    day: 11,
    draft: false,
    message:
      "Ten days of this and I've barely started. I want you to know that on the days I've been hardest to love, you didn't flinch. You just stayed. I accept you with all of you, just how you are. I promise to stay darling - for better and for the worst",
    word: 'Constancy',
    phonetic: 'KON-stuhn-see',
    part: 'noun',
    origin: 'Latin, constantia — "standing firm"',
    meaning: 'The quality of being faithful and unchanging; a steady, unwavering presence.',
  },
  {
    day: 12,
    draft: false,
    message:
      "Here's a thought that's been stuck in my head: they say every choice splits off into some other timeline where you chose differently — which means somewhere out there is a version of you who never walked into my life, and a version of me who never got this. I don't spend much time on that one. I ended up in the timeline where you're mine, and it happened so easily that I never had to sit and figure out how much you meant to me. Some part of me already knew. I think that's just what it means to find your person.",
    word: 'Ineffable',
    phonetic: 'in-EF-uh-buhl',
    part: 'adjective',
    origin: 'Latin, ineffabilis',
    meaning: 'Too great or extraordinary to be expressed or described in words.',
  },
  {
    day: 13,
    draft: false,
    message:
      "Halfway. Which means in twelve days you'll be another year older and I'll be exactly as obsessed with you as I am now, possibly worse. Fair warning.",
    word: 'Besotted',
    phonetic: 'bih-SOT-id',
    part: 'adjective',
    origin: 'English, be- + sot — intensified "made foolish by"',
    meaning: 'Foolishly, helplessly infatuated; drunk on the fact of someone.',
  },
  {
    day: 14,
    draft: false,
    message:
      "You tend to the small things I never even have to ask for, and somewhere along the way, tending to yours became just as instinctive to me. You are not only the person I love — you are my best friend. Thank you for letting me be exactly who I am, free and still loved",
    word: 'Unfettered',
    phonetic: 'un-FET-erd',
    part: 'adjective',
    origin: 'English, un- + fetter',
    meaning: 'Free from restriction or restraint; unbound.',
  },
  {
    day: 15,
    draft: false,
    message:
      "I know you and I are not always together — that there are days we must be apart, days I feel the distance like a weight. But for the privilege of loving you, I will bear the burden of missing you, gladly, every single time, for as long as it takes.",
    word: 'Longanimity',
    phonetic: 'lon-guh-NIM-ih-tee',
    part: 'noun',
    origin: 'Latin, longus + animus — "long-spirited"',
    meaning: 'Patient, uncomplaining endurance of hardship or separation.',
  },
  {
    day: 16,
    draft: false,
    message:
      "Your mind is a genuinely lovely place. The things you notice, the way you turn something over before you decide about it — I learn from how you think, not just what you think.",
    word: 'Perspicacious',
    phonetic: 'pur-spih-KAY-shus',
    part: 'adjective',
    origin: 'Latin, perspicere — "to see through clearly"',
    meaning: 'Having keen insight and sound judgment; sharply perceptive.',
  },
  {
    day: 17,
    draft: false,
    message:
      "There is a specific point in the evening where you get sleepy and go soft around the edges and say whatever you're thinking. That's the version of you I'd protect with my life.",
    word: 'Artless',
    phonetic: 'ART-less',
    part: 'adjective',
    origin: 'English, art + -less',
    meaning: 'Natural and without pretense or calculation; unguarded in the best way.',
  },
  {
    day: 18,
    draft: false,
    message:
      "Rumi wrote, 'The minute I heard my first love story, I started looking for you.' And, 'Lovers don't finally meet somewhere. They're in each other all along.' I used to read lines like these and think they were beautifully overwrought — the kind of thing poets say because it sounds nice. Then I found you, and understood he wasn't reaching but describing you.",
    word: 'Preordained',
    phonetic: 'pree-or-DAYND',
    part: 'adjective',
    origin: 'Latin, prae + ordinare — "to arrange beforehand"',
    meaning: 'Decided or determined in advance; written into things before they began.',
  },
  {
    day: 19,
    draft: false,
    message:
      "Mid-sentence, mid-traffic, mid-nothing at all, it hits me that I could just kiss you. Respectfully, I think about you sexually. It's only us, I hope you know how you hold me up",
    word: 'Impetuous',
    phonetic: 'im-PECH-oo-us',
    part: 'adjective',
    origin: 'Latin, impetus — force, attack',
    meaning: 'Acting on sudden feeling, without stopping to think.',
  },
  {
    day: 20,
    draft: false,
    message:
      "I hope we're still doing exactly this when we're older — the silly arguments over nothing, the little flashes of cute aggression, all of it, unchanged. I'm not asking for a love with no friction in it. I'm asking for this one, precisely as it is, just carried by many great years.",
    word: 'Vicissitude',
    phonetic: 'vih-SIS-ih-tood',
    part: 'noun',
    origin: 'Latin, vicis — a turn, a change',
    meaning: 'A natural change of circumstance in life, especially an unwelcome one — the ordinary ups and downs of living something together.',
  },
  {
    day: 21,
    draft: false,
    message:
      "Three days now, and I keep finding you in every version of every day I imagine ahead of us. I have turned this love over from every angle — sat with it in bright rooms and quiet ones, watched it hold through both good moods and terrible ones — and it always comes back the same. I love you without knowing how, or when, or from where. I only know, with a kind of quiet certainty I have never had about anything else, that you are my person. Unmistakably. Unbudgingly. Mine.",
    word: 'Circumspect',
    phonetic: 'SUR-kum-spekt',
    part: 'adjective',
    origin: 'Latin, circum + specere — "to look around"',
    meaning: 'Wary and careful to consider all circumstances before acting or speaking.',
  },
  {
    day: 22,
    draft: false,
    message:
      "You've healed parts of me that you didn't break, and every one of them was needed. I'm softer than I was. I'm better than I was. That's your doing.",
    word: 'Efflorescence',
    phonetic: 'ef-luh-RES-ens',
    part: 'noun',
    origin: 'Latin, efflorescere — "to blossom, flower forth"',
    meaning: 'The process of flowering or coming into full bloom; a flourishing.',
  },
  {
    day: 23,
    draft: false,
    message:
      "Two days. Here's what I'm promising you: I will keep you laughing until you cry, and then until you can't see, and then a little past that just for sport. I will be the funniest person with you. I will be the reason you exhale when the door shuts behind you, and the reason you come home in the first place. You get the softest landing I can build. Every single day. For as long as you'll have me.",
    word: 'Levity',
    phonetic: 'LEV-ih-tee',
    part: 'noun',
    origin: 'Latin, levitas — "lightness"',
    meaning: 'Humor and lightness of spirit, especially when it lifts a heavier moment.',
  },
  {
    day: 24,
    draft: false,
    message:
      "Tomorrow, you turn twenty-five, and I have never been this excited about the passage of a single day. I carry your heart with me — I carry it in mine — luck I can't quite believe I've been handed. Sleep well tonight, my love. The world begins again in the morning, and I want YOURSELF to be the first thing you see in it.",
    word: 'Apotheosis',
    phonetic: 'uh-poth-ee-OH-sis',
    part: 'noun',
    origin: 'Greek, apotheoun — "to deify"',
    meaning: 'The highest point in the development of something; the perfect culmination or example.',
  },
  {
    day: 25,
    draft: false,
    message:
      "Happiest Birthday my Zeer! Twenty-five days of reasons and I still didn't get to the end of them — I just ran out of days. You are the best thing I didn't plan for. God's answer to my prayers, my biggest blessing and the King of my heart. Here's to every year I get to keep doing this.",
    word: 'Nonpareil',
    phonetic: 'non-puh-REL',
    part: 'noun / adjective',
    origin: 'French, non + pareil — "not equal"',
    meaning: 'A person or thing having no equal; without match, without parallel.',
  },
]
