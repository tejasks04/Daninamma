# ಶ್ರೀ ಧನಿನಮ್ಮ ದೇವಿ · Sri Dhaninamma Devi

A bilingual (ಕನ್ನಡ / English) site for the village deity of **Kengal Kempohalli,
Sompura Hobli, Nelamangala Taluk** — her origin story, the jatre, a photo
gallery and video section.

Built with React + Vite. No backend, no accounts, no build-time services.

---

## Run it

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install     # once
npm run dev     # opens http://localhost:5173
npm run build   # production files land in dist/
npm run preview # check the production build locally
```

---

## Where everything lives

```
src/
  i18n/
    translations.js     ← every heading, label and paragraph (kn + en)
    LanguageContext.jsx   language state + the t() helper
  data/
    story.js            ← the origin story, step by step
    jatre.js            ← the day-by-day rituals, and the three sisters
    gallery.js          ← photo list + categories
    videos.js           ← video list
  components/           one .jsx + one .css per section
  styles/
    tokens.css          ← colours, fonts, spacing, motion
    global.css            shared layout, buttons, reveal animation
public/
  images/               ← put photos here
  videos/               ← put video files here
```

**Rule of thumb:** wording lives in `src/i18n/translations.js`, content lists
live in `src/data/`, looks live in `src/styles/tokens.css`.

---

## Add a photo

1. Copy the file into `public/images/` — say `moola-devaru.jpg`.
2. Open `src/data/gallery.js` and set the `src`:

```js
{
  id: 'moola',
  cat: 'devi',
  src: '/images/moola-devaru.jpg',
  caption: { kn: 'ಧನಿನಮ್ಮ ದೇವಿ ಮೂಲದೇವರು', en: 'Dhaninamma Devi — the original idol' },
}
```

Tiles marked `wide: true` span two columns and `tall: true` spans two rows —
useful for your best shots.

For the large portrait in the "ತಾಯಿ / The Mother" section, open
`src/components/About.jsx` and change `src={null}` to your file path.

Resize photos to about 1600 px on the long edge before adding them, so the
site stays fast on village mobile data.

## Add a video

In `src/data/videos.js`, either:

```js
youtubeId: 'AbCdEfGh123'     // the part after watch?v=  ← recommended
file: '/videos/jatre.mp4'    // or a file in public/videos/
poster: '/images/thumb.jpg'  // optional still frame
```

## Change the text

Everything is a `{ kn, en }` pair, so both languages stay side by side:

```js
title: { kn: 'ಜಾತ್ರೆಯ ವಿವರ', en: 'The jatre' },
```

Edit the Kannada, the English, or both. Nothing else needs touching.

## Change the colours or fonts

`src/styles/tokens.css` holds the whole palette in one place —
`--kumkuma` (vermillion), `--arishina` (turmeric), `--gold`, `--neem`,
`--limewash`, `--sanctum`. Change a value there and it updates everywhere.

Fonts are loaded in `index.html`: **Noto Serif Kannada** and
**Noto Sans Kannada** for Kannada, **Eczar** and **Mukta** for English.

## Add a real map

In `src/components/Visit.jsx`, replace the `<div className="visit__map-inner">`
block with the embed code Google Maps gives you under *Share → Embed a map*.

---

## Put it online

`npm run build` produces a plain `dist/` folder — any static host will serve it.

- **Netlify / Vercel** — connect the repository, build command `npm run build`,
  publish directory `dist`. Or drag the `dist` folder onto Netlify Drop.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch. `vite.config.js`
  already uses `base: './'`, so it works from a sub-path.

---

## Notes

- The site is not affiliated with any trust or organisation. It records the
  account as the villagers and elders tell it.
- Language choice is remembered in the browser, and defaults to Kannada.
- Motion is disabled automatically for anyone who has "reduce motion" turned on.

ಜೈ ಧನಿನಮ್ಮ ದೇವಿ ತಾಯಿ 🪔
