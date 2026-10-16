# Portfolio

A React + Vite portfolio built around a passport concept: the homepage is a
passport cover, each case study is a visa-style page you "stamp" by reading
to the end, and a dedicated Passport page collects every stamp you've earned
in one place. A mascot placeholder is wired up and ready for your own
illustrations.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build for deployment:

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy directly to
Vercel or Netlify (drag-and-drop the folder, or connect the GitHub repo for
automatic deploys).

## Structure

- **`/`** — the passport cover (name, role, tagline, mascot as the passport
  photo, a faint world-map watermark) plus the project grid and a link to
  More Work.
- **`/work/:slug`** — a case study, styled as a passport page: tag, title,
  a passport-field meta strip (role / duration / type), your content
  sections, a scroll trail at the top, a stamp when you finish reading, and
  a decorative MRZ code strip at the bottom.
- **`/more-work`** — a lighter-weight page for projects beyond the three
  featured case studies. Content lives in `src/data/moreWork.js`; each entry
  links to its own internal detail page at `/more-work/:slug` (with a back
  link), so nothing routes off-site unless you choose to add outbound links
  yourself. A card's small corner stamp switches from a dashed outline to a
  solid checkmark once you've visited that entry (tracked in
  `src/context/MoreWorkContext.jsx`, reset each session).
- **`/passport`** — the collection page. Shows every project as a square,
  perforated postage-stamp card (type icon + a postmark stamped over it
  once visited, alternating between a rectangular ink-stamp style and a
  plain circular postmark) with a live count, a link to More Work, and a
  small celebration once all stamps are collected.
- **`/resume`** — embeds `public/resume.pdf` inline with a download button.
  Replace that file with your real résumé, same filename, and it updates
  automatically. There's no backend, so this can't accept uploads from
  visitors — it's your résumé, made easy to read or download.
- **`/about`** — standard bio page.
- **`/contact`** — styled as a boarding pass (passenger/class fields, a
  gate/seat mapped to email/LinkedIn, a torn-stub side with a decorative
  barcode).
- **Footer** (every page) — an airmail-striped top border plus a circular
  "issued" postmark, like a mailed envelope. The same airmail stripe also
  runs along the top of the sticky navbar on every page.
- **Homepage cover** — a faint world-map-style globe grid sits behind the
  passport cover as a background illustration.
- **Navigation** — every route change scrolls the window back to the top
  (`src/components/ScrollToTop.jsx`), so opening a case study never drops
  you mid-page, and the scroll-progress hook ignores any leftover scroll
  position from the previous page so the achievement badge can't fire
  falsely right after navigating in.
- **Stamp thumbnails** — each passport stamp and More Work card shows a
  faint, sepia-toned image of that project inside its frame instead of
  empty space. Placeholder abstract graphics live in
  `src/assets/stamps/<slug>.jpg`; drop in a real screenshot with the same
  filename (matching the project's `slug`) and it's picked up automatically
  via `src/data/stampImages.js` — no code changes needed.

## Color palettes

Three ready-made palettes live in `src/styles/palettes/`, each checked
against WCAG AA (4.5:1 contrast for body text, 3:1 for the large decorative
postmark chip):

1. **`kraft-vermillion.css`** (default) — classic travel: warm kraft paper,
   forest green, vermillion postmark red.
2. **`harbor-blue.css`** — calming blue: deep navy ink, pale harbor-fog
   paper, a teal-green accent, with the classic airmail red kept only for
   stamps and achievements.
3. **`botanical-voyage.css`** — calming green: forest-slate ink, warm sage
   paper, a cooler teal accent, and a vintage ochre/sepia stamp color.

To switch, open `src/styles/tokens.css` and comment out the current
`@import` line, then uncomment the one you want. Nothing else needs to
change — every component reads color through these variables rather than a
hardcoded hex value, including drop-shadows (via `color-mix()`), so the
whole site re-themes from that one file.

## Where to customize

- **`src/styles/tokens-base.css`** — non-color tokens: type, spacing,
  layout, motion. Shared by all three palettes.
- **`src/styles/palettes/`** — the three color palettes above. Add a fourth
  by copying one of these files and defining the same set of variables.
- **`src/data/projects.js`** — single source of truth for your projects:
  title, tag, description, meta fields (role/duration/type), and the full
  case study sections. Add or remove entries here and Home, CaseStudy, and
  Passport all update automatically.
- **`src/pages/Home.jsx`** — cover hero copy.
- **`src/pages/About.jsx`** / **`src/pages/Contact.jsx`** — swap in your real
  bio and contact links.
- **`src/components/Mascot.jsx`** — replace `PlaceholderFigure` with your own
  illustration (an `<img>` or inline SVG). Keep the `state` prop
  (`idle` / `waving` / `celebrating` / `pointing`) — it's already wired to
  trigger on page load and on stamp unlock, so once you swap in real art for
  each state it should work without touching any other file. The `variant`
  prop switches between `"floating"` (fixed corner popup, used on case study
  and Passport pages) and `"photo"` (inline, used as the framed photo on the
  passport cover in `Home.jsx`) — both use the same figure and states.
- **`index.html`** — update the page `<title>` and meta description.

## How the gamification works

- `src/context/PassportContext.jsx` holds which project slugs have been
  stamped this session (React state, not persisted — every visit starts
  fresh, since a first-time unlock is the point).
- `src/hooks/useScrollProgress.js` tracks scroll position as a 0–1 value on
  each case study page; `src/components/ProgressTrail.jsx` renders it as the
  fixed trail bar.
- `src/pages/CaseStudy.jsx` watches that value and, once it crosses ~96%,
  calls `stampProject(slug)`, triggers the mascot's celebrating state, and
  shows `AchievementBadge`.
- `src/components/Navbar.jsx` and `src/pages/Passport.jsx` both read from
  the same context, so the stamp count in the nav and the collection grid
  stay in sync automatically as you browse.

## Notes

- Fonts (Fraunces + Inter) load from Google Fonts via `index.html`. If you'd
  rather self-host them, download the font files and update the link tags
  accordingly.
- Motion respects `prefers-reduced-motion` globally (see the bottom of
  `src/styles/tokens.css`).
- Add real project screenshots by replacing `.proj-card-thumb` (currently a
  gradient placeholder) in `src/components/Card.jsx` with an `<img>`, and by
  swapping the files in `src/assets/stamps/` (see above) for the passport
  and More Work stamp thumbnails.
