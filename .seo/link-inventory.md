# VelociBar — Internal Link Inventory

> Every URL `/seo` can link to, and every URL it has shipped. Each new page picks ≥3 in-body links from here, takes ≥2 inbound links from existing pages (≥1 of them a frequently-crawled hub), and registers itself here on ship. Reuse and append; never overwrite. Every public page ships as an ES/EN pair; link to the same-language sibling.

## Existing pages (link targets)

### Homepage + core marketing

| Slug | URL | Title (anchor-text candidate) | Linked by |
|---|---|---|---|
| `/` | https://velocibar.app/ | VelociBar - Test de velocidad de internet continuo para macOS | All (ES) |
| `/en/` | https://velocibar.app/en/ | VelociBar - Continuous Internet Speed Test for macOS | All (EN) |
| `/blog/` | https://velocibar.app/blog/ | Blog de VelociBar | ES posts, homepage nav |
| `/en/blog/` | https://velocibar.app/en/blog/ | VelociBar Blog | EN posts, homepage nav |
| `/#comparativa` `/en/#comparativa` | https://velocibar.app/en/#comparativa | VelociBar or a one-off speed test? (comparison table) | comparison post |
| `/#faq` `/en/#faq` | https://velocibar.app/en/#faq | Frequently asked questions | llms.txt |
| App Store | https://apps.apple.com/us/app/velocibar/id6756196355 | Download VelociBar (App Store) | every page's CTA |
| `/legal/privacy.html` | https://velocibar.app/legal/privacy.html | Privacy Policy | footer |
| `/legal/terms.html` | https://velocibar.app/legal/terms.html | Terms of Use | footer |

### Features

No separate feature pages. Features live as homepage sections: `#como-funciona` (engines), `#historial` (CSV history), `#privacidad`, `#widget`. Verify the anchor ids in index.html before linking.

### Tools / free utilities

| Slug | URL | Title | Linked by |
|---|---|---|---|
| (none yet) | | | |

### Content (blog / guides / published pieces)

| Slug | URL | Title | Topic | Linked by |
|---|---|---|---|---|
| `/blog/internet-lento-por-la-noche.html` | https://velocibar.app/blog/internet-lento-por-la-noche.html | Internet lento por la noche: causas y soluciones | peak-hour congestion | `/blog/internet-lento-por-la-noche.html`, `/blog/que-es-bufferbloat.html`, `/blog/reclamar-isp-internet-lento.html`, `/blog/test-velocidad-mac.html`, `/en/blog/internet-slow-at-night.html`; footer of `/` or `/en/` |
| `/blog/que-es-bufferbloat.html` | https://velocibar.app/blog/que-es-bufferbloat.html | Qué es el bufferbloat: cómo medirlo y reducirlo | bufferbloat / RPM | `/blog/internet-lento-por-la-noche.html`, `/blog/que-es-bufferbloat.html`, `/blog/test-velocidad-mac.html`, `/en/blog/what-is-bufferbloat.html`; footer of `/` or `/en/` |
| `/blog/reclamar-isp-internet-lento.html` | https://velocibar.app/blog/reclamar-isp-internet-lento.html | Cómo reclamar a tu ISP por internet lento con datos | ISP evidence | `/blog/internet-lento-por-la-noche.html`, `/blog/reclamar-isp-internet-lento.html`, `/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html`, `/en/blog/prove-isp-throttling.html`; footer of `/` or `/en/` |
| `/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html` | https://velocibar.app/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html | Speedtest vs Fast.com vs VelociBar: cuál usar | one-off vs monitoring | `/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html`, `/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html`; footer of `/` or `/en/` |
| `/blog/test-velocidad-mac.html` | https://velocibar.app/blog/test-velocidad-mac.html | Test de velocidad en Mac: 3 métodos explicados | Mac speed test | `/blog/que-es-bufferbloat.html`, `/blog/reclamar-isp-internet-lento.html`, `/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html`, `/blog/test-velocidad-mac.html`, `/en/blog/speed-test-mac.html`; footer of `/` or `/en/` |
| `/en/blog/internet-slow-at-night.html` | https://velocibar.app/en/blog/internet-slow-at-night.html | Internet Slow at Night? Causes and Fixes | peak-hour congestion | `/blog/internet-lento-por-la-noche.html`, `/en/blog/internet-slow-at-night.html`, `/en/blog/prove-isp-throttling.html`, `/en/blog/speed-test-mac.html`, `/en/blog/what-is-bufferbloat.html`; footer of `/` or `/en/` |
| `/en/blog/prove-isp-throttling.html` | https://velocibar.app/en/blog/prove-isp-throttling.html | How to Document Slow Internet for Your ISP | ISP evidence | `/blog/reclamar-isp-internet-lento.html`, `/en/blog/internet-slow-at-night.html`, `/en/blog/prove-isp-throttling.html`, `/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html`; footer of `/` or `/en/` |
| `/en/blog/speed-test-mac.html` | https://velocibar.app/en/blog/speed-test-mac.html | Mac Internet Speed Test: 3 Methods Explained | Mac speed test | `/blog/test-velocidad-mac.html`, `/en/blog/prove-isp-throttling.html`, `/en/blog/speed-test-mac.html`, `/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html`, `/en/blog/what-is-bufferbloat.html`; footer of `/` or `/en/` |
| `/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html` | https://velocibar.app/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html | Speedtest vs Fast.com vs VelociBar: Which to Use | one-off vs monitoring | `/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html`, `/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html`; footer of `/` or `/en/` |
| `/en/blog/what-is-bufferbloat.html` | https://velocibar.app/en/blog/what-is-bufferbloat.html | What Is Bufferbloat? How to Test and Fix It | bufferbloat / RPM | `/blog/que-es-bufferbloat.html`, `/en/blog/internet-slow-at-night.html`, `/en/blog/speed-test-mac.html`, `/en/blog/what-is-bufferbloat.html`; footer of `/` or `/en/` |

Markdown mirrors exist for every post and both homepages (same path, `.md`); `llms.txt` links them. Do not link the `.md` from HTML pages.

---

## Crawl hubs

> No Search Console connection, so these are assumed from site structure, not from `last_crawled`. Re-derive when GSC is connected.

| URL | Last crawled | Read on |
|---|---|---|
| https://velocibar.app/ | unknown (assumed hub) | 2026-09-16 |
| https://velocibar.app/en/ | unknown (assumed hub) | 2026-09-16 |
| https://velocibar.app/blog/ | unknown | 2026-09-16 |
| https://velocibar.app/en/blog/ | unknown | 2026-09-16 |

Bing crawl stats (2026-09-16): about one page crawled per day, 2 in index, 0 inbound links known to Bing.

---

## Programmatic pages

None shipped. Patterns below fill as batches ship.

### `/alternatives/[slug]`

| Slug | Ships in phase | URL | Inbound links from | Outbound links to |
|---|---|---|---|---|

### `/for/[slug]`

| Slug | Ships in phase | URL | Inbound links from | Outbound links to |
|---|---|---|---|---|

### `/compare/[slug]`

| Slug | Ships in phase | URL | Inbound links from | Outbound links to |
|---|---|---|---|---|

---

## Editorial pieces shipped

> Appended on every run that ships a piece.

| Slug | URL | Title | Type | Inbound links from | Anchor-text variations |
|---|---|---|---|---|---|
| (backfilled above; new pieces append here) | | | | | |

---

## Anchor-text variations (avoid repetition)

For the homepage / product: "VelociBar", "a menu bar speed logger for macOS", "scheduled speed tests on your Mac", "keep a local speed history", "export your speed history to CSV". ES: "VelociBar", "una app de barra de menú que mide tu velocidad cada 15, 30 o 60 minutos", "guarda un historial local", "exporta el historial en CSV".
