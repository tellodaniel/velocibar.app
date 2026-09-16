# VelociBar — Programmatic SEO Roadmap

> Canonical tracker for programmatic pages. Created 2026-09-16 with no keyword tool connected; the keyword appendix is empty on purpose. The site is 16 URLs on a plain-HTML GitHub Pages repo; programmatic batches are premature until the editorial pieces have a Search Console read.

## Phase Status Tracker

| # | Phase | Pattern | Status | PR |
|---|---|---|---|---|
| 0 | Technical foundations | Setup | in_progress (health clean; llms.txt descriptions and EN post depth pending) | – |
| 1 | `/compare/` Mac menu-bar network apps (one page, hand-written, from backlog 3) | compare | pending research | – |

## Reference Data

### 1. Site facts

- **Domain:** https://velocibar.app (ES at `/`, EN at `/en/`)
- **GSC property:** not connected
- **Bing site:** https://velocibar.app/ (verified, key in `BING_API_KEY`)
- **Authority / playable bucket:** unknown → easy (2026-09-16, no tool)
- **Stack:** plain HTML + CSS + vanilla JS, GitHub Pages, `translations.js` for the bilingual homepage, hand-written posts with `.md` mirrors
- **Brand accent color / fonts:** see `styles.css` `:root`; Manrope semibold
- **Marketing pages root:** repo root

### 2. Existing programmatic surface

None.

### 3. Critical files

| File | What lives there |
|---|---|
| `index.html`, `en/index.html`, `translations.js` | homepage copy, FAQ, JSON-LD (SoftwareApplication, FAQPage) |
| `blog/*.html`, `en/blog/*.html` (+ `.md`) | posts; `blog/index.html`, `en/blog/index.html` list them by hand |
| `sitemap.xml` | hand-maintained; hreflang per URL |
| `llms.txt`, `llms-full.txt`, `index.md`, `en/index.md` | answer-engine mirrors; must be updated with every page change |
| `legal/terms.html`, `legal/privacy.html` | legal; system requirements live here too |
| `robots.txt` | all agents allowed |

### 4. Conventions

Every page ships as an ES/EN pair. URL slugs lowercase-hyphenated, ES at the root, EN under `/en/`. Every page reachable from ≥2 pages, one of them `/` or `/en/`. Sitemap `lastmod` is a content date. No self-authored review or rating schema.

## Keyword Research Appendix

Not researched: no keyword tool connected. Demand provenance so far comes from the radar (`radar.md`) and Bing Webmaster (4 impressions in 106 days).

## Off-page checklist

- [ ] AlternativeTo — list as alternative to Speedtest, iStat Menus, NetWorx (brief pending)
- [ ] MacUpdate / macmenubar.com / Product Hunt — brief pending
- [ ] AppleSfera / Genbeta / RedesZone (ES press) — mention brief pending
