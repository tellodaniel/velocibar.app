# VelociBar — Content Ledger

> The memory of the engine. The **Shipped** table is the dedup record; **Performance** is the scoreboard; **Candidate backlog** is the scored shortlist. Every public page is an ES/EN pair; one row per pair, ES URL first.

---

## Shipped

| Date | Title | Type | Slug / URL | Target keyword | Vol | Bucket | Original data (source · n · as-of) | Refresh due | Primary internal links | Commit / PR |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-04 | Homepage (ES / EN) | landing | / · /en/ | test de velocidad internet mac · internet speed test mac | n/a (no tool) | unknown | none | n/a | blog, App Store | 9 Sep "Polish VelociBar design" (backfilled) |
| 2026-09-04 | Internet lento por la noche: causas y soluciones / Internet Slow at Night? Causes and Fixes | guide | /blog/internet-lento-por-la-noche.html · /en/blog/internet-slow-at-night.html | internet lento por la noche · internet slow at night | n/a | unknown | none | n/a | bufferbloat, reclamar ISP | "Blog: 5 bilingual SEO posts" (backfilled) |
| 2026-09-04 | Qué es el bufferbloat: cómo medirlo y reducirlo / What Is Bufferbloat? How to Test and Fix It | definition | /blog/que-es-bufferbloat.html · /en/blog/what-is-bufferbloat.html | bufferbloat | n/a | unknown | none | n/a | test velocidad mac | same |
| 2026-09-04 | Cómo reclamar a tu ISP por internet lento con datos / How to Document Slow Internet for Your ISP | how-to | /blog/reclamar-isp-internet-lento.html · /en/blog/prove-isp-throttling.html | reclamar ISP internet lento · prove ISP throttling | n/a | unknown | none | n/a | lento por la noche, comparativa | same |
| 2026-09-04 | Test de velocidad en Mac: 3 métodos explicados / Mac Internet Speed Test: 3 Methods Explained | how-to | /blog/test-velocidad-mac.html · /en/blog/speed-test-mac.html | test velocidad mac · speed test mac networkQuality | n/a | unknown | none | n/a | bufferbloat, comparativa | same |
| 2026-09-04 | Speedtest vs Fast.com vs VelociBar: cuál usar / Which to Use | comparison | /blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html · /en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html | speedtest vs fast.com | n/a | unknown | none | n/a | test velocidad mac, reclamar ISP | same |
| 2026-09-16 | ¿El test de velocidad da bien pero la videollamada se corta? Mira la responsividad / Speed Test Is Fine but Video Calls Still Stutter? Check Responsiveness, Not Mbps | guide (explainer / how-to) | /blog/videollamadas-se-cortan-test-velocidad-bien.html · /en/blog/video-calls-lag-speed-test-fine.html | videollamada se corta test velocidad bien · video call lagging but speed test is fine | n/a (no tool; SERP-inferred) | medium (vendor explainers, no authority owner) | own networkQuality runs · n=4, one Wi-Fi line · 2026-09-16 (.seo/evidence/networkquality-2026-09-16/) | 2027-03 (re-run the four tests; re-check Zoom thresholds) | que-es-bufferbloat, test-velocidad-mac, internet-lento-por-la-noche, reclamar-isp, home | a90e7c4 |

---

## Performance

> **Backfilled:** 2026-09-16. No Search Console connection; index state is unchecked. Bing Webmaster (106 days to 2026-09-16): 4 impressions, 0 clicks, all on the homepage, queries "velocibar" and "www.velocibar.es". Verdicts are written by `scripts/outcomes.py`, never by hand.

| Slug / URL | Published | Indexed? (state · checked) | Read @28d | Read @56d | Site-wide same window | Best lever | State | Note / next action |
|---|---|---|---|---|---|---|---|---|
| / · /en/ | 2026-09-04 | unchecked (no GSC); Bing: 2 in index | — | — | — | — | unmeasured | connect GSC |
| /blog/internet-lento-por-la-noche.html · /en/blog/internet-slow-at-night.html | 2026-09-04 | unchecked | — | — | — | — | unmeasured | radar 2026-09-16 suggests a refresh (FTTH 8–11 pm drop, Movistar thread) |
| /blog/que-es-bufferbloat.html · /en/blog/what-is-bufferbloat.html | 2026-09-04 | unchecked | — | — | — | — | unmeasured | |
| /blog/reclamar-isp-internet-lento.html · /en/blog/prove-isp-throttling.html | 2026-09-04 | unchecked | — | — | — | — | unmeasured | radar suggests a "formal regulator complaint" section |
| /blog/test-velocidad-mac.html · /en/blog/speed-test-mac.html | 2026-09-04 | unchecked | — | — | — | — | unmeasured | |
| /blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html · /en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html | 2026-09-04 | unchecked | — | — | — | — | unmeasured | |
| /blog/videollamadas-se-cortan-test-velocidad-bien.html · /en/blog/video-calls-lag-speed-test-fine.html | 2026-09-16 | unchecked (no GSC) | — | — | — | — | unmeasured | read at 2026-10-14 and 2026-11-11 |

---

## Candidate backlog

> From the 2026-09-16 selection. Blocked for creates until the truth contradictions are corrected (truth gate) and until the pieces above are 21+ days old with a Search Console read.

| Rank | Candidate | Proposed type | Target keyword | Vol | Bucket | Intent | Data angle | Score | Notes / angle |
|---|---|---|---|---|---|---|---|---|---|
| ~~1~~ | SHIPPED 2026-09-16: Speed test says fine but calls still stutter (ES/EN) | guide | speed test fine but video calls lag | n/a | unknown | informational→product | developer's own idle-vs-loaded latency log, n=1 | — | demand: Xfinity threads 2025-12-27, 2026-05-21; answer owner: us (no .gov/Apple page owns the symptom) |
| 2 | Refresh: prove-isp-throttling with a formal-complaint section (AG / Osiptel / Profeco) | refresh | reclamar ISP formal | n/a | unknown | transactional | none | — | demand: Xfinity 2026-03-14, 2026-04-15; Infobae Perú 2026-06-06 |
| 3 | Menu bar network apps for Mac, compared: connectivity checkers vs traffic meters vs speed loggers | comparison / listicle | menu bar internet speed mac | n/a | unknown | commercial | hands-on test of each app | — | demand: MacRumors NetCheck thread 2026-08-15; AEO snapshot P1/P8; honest tradeoffs required |
| 4 | Refresh: internet lento por la noche with FTTH 8–11 pm data and the Movistar thread | refresh | internet lento por la noche | n/a | unknown | informational | none | — | demand: Infobae 2026-02-08, tecnoorbita, Comunidad Movistar |
| 5 | How to read your VelociBar CSV in Numbers / Sheets (all 8 columns) | how-to | analyze speed log csv | n/a | unknown | product | the real CSV header | — | closes the CSV-column gap the truth check found; no dated thread yet → needs provenance |

---

## Coverage map

| Cluster / theme | Pieces shipped | Gaps still open |
|---|---|---|
| Peak-hour congestion (slow at night) | 1 pair | refresh with 2026 data |
| Bufferbloat / responsiveness (RPM) | 2 pairs (definition; symptom-first explainer with real runs) | router SQM fix on Mac |
| ISP evidence / complaints | 1 pair | formal complaint section (backlog 2); per-country regulator notes (MX Profeco/IFT, ES, PE Osiptel) |
| Mac speed test / networkQuality | 1 pair | reading networkQuality output; WiFi vs Ethernet logging |
| One-off tests vs monitoring | 1 pair | Mac menu-bar apps compared (backlog 3) |
| Product how-tos (CSV, widget, intervals) | 0 | CSV columns explained (backlog 5) |

---

## Actions

> One row per action that changed a public page (register.md §1). `outcomes.py` scores these against saved Search Console pulls.

| date | action | slug | type | lane | what changed | commit |
|---|---|---|---|---|---|---|
| 2026-09-10 | correct | https://velocibar.app/llms.txt | answer-engine file | (upstream, PR #3) | battery/alerts/load claims removed, all 8 CSV fields listed, alternation qualified; found already fixed when this clone was synced on 2026-09-16 | d9bf682 |
| 2026-09-16 | correct | https://velocibar.app/legal/terms.html | legal | fix | system requirement macOS 12.0 (Monterey) → macOS 26.0 (Tahoe), ES+EN; Last updated → 2026-09-16 | 642a77f |
| 2026-09-10 | correct | https://velocibar.app/blog/reclamar-isp-internet-lento.html · /en/blog/prove-isp-throttling.html | how-to | (upstream, PR #3) | posts rewritten with the real CSV fields; found already fixed on sync | d9bf682 |
| 2026-09-16 | correct | https://velocibar.app/index.md · /en/index.md | homepage mirrors | fix | "with these columns:" five-column claim → key columns plus the three extra ones | 642a77f |
| 2026-09-16 | repair | https://velocibar.app/en/ | landing | technical | footer Guides row (5 EN posts now click depth 2); CSV excerpt note; lastmod 2026-09-16 | 642a77f |
| 2026-09-16 | repair | https://velocibar.app/ | landing | technical | footer Guías row; CSV excerpt note; title 61 → 56 chars ("VelociBar: test de velocidad de internet continuo, macOS"); lastmod 2026-09-16 | 642a77f |
| 2026-09-16 | repair | https://velocibar.app/llms.txt | answer-engine file | technical | one-line description on all 13 links; llms-full.txt regenerated with scripts/blog_content.py | 642a77f |
| 2026-09-16 | create-editorial | https://velocibar.app/en/blog/video-calls-lag-speed-test-fine.html · https://velocibar.app/blog/videollamadas-se-cortan-test-velocidad-bien.html | guide | editorial | new ES/EN pair with four real networkQuality runs; inbound links from the bufferbloat and Mac speed-test pairs, both indexes, llms.txt, homepage footers | a90e7c4 |

---

## Notes

- Difficulty bucket: `easy` by default (new site, no rankings, no keyword tool). Record the vendor when one is connected.
- One piece per run. Every piece ships as an ES/EN pair with hreflang, `.md` mirror, sitemap entries and an `llms.txt` line.
- Measure before you write: nothing here has a Search Console read yet.
