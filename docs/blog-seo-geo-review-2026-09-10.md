# VelociBar blog: SEO and AI search review

Reviewed September 10, 2026. Scope: five topics in English and Spanish, both blog indexes, their Markdown equivalents, shared assets, sitemap, and existing AI text files.

## Assessment

The technical foundation was already sound: static article HTML, self-referencing canonicals, reciprocal English/Spanish hreflang, permissive robots rules, sitemap entries, BlogPosting schema, and breadcrumb schema. All 12 live blog pages returned HTTP 200 and matched the repository at the start of this review. No restrictive X-Robots-Tag was present on those responses.

The largest weakness was content reliability. The articles sometimes diagnosed ISP congestion or bufferbloat from symptoms alone, confused latency units, overstated what a history could prove, and understated competing tools. These issues matter for readers and for systems choosing trustworthy passages to cite.

This review assesses readiness, not measured search performance. It does not establish Google indexing, rankings, click-through rates, Core Web Vitals, or inclusion in AI answers. A successful HTTP response and valid markup do not guarantee those outcomes.

## Changes by topic

| Topic | Pages | Main corrections |
|---|---|---|
| Internet slow at night | [English](https://velocibar.app/en/blog/internet-slow-at-night.html) · [Spanish](https://velocibar.app/blog/internet-lento-por-la-noche.html) | Treat evening congestion as one possible cause; compare wired/WiFi conditions and test engines; correct RPM versus milliseconds; avoid promising that a plan or technology change solves the problem. |
| Bufferbloat | [English](https://velocibar.app/en/blog/what-is-bufferbloat.html) · [Spanish](https://velocibar.app/blog/que-es-bufferbloat.html) | Explain queueing delay directly; acknowledge loaded-latency tests; remove unsupported universal RPM thresholds; distinguish symptoms from a diagnosis and qualify router replacement advice. |
| Documenting slow internet for an ISP | [English](https://velocibar.app/en/blog/prove-isp-throttling.html) · [Spanish](https://velocibar.app/blog/reclamar-isp-internet-lento.html) | Distinguish slowdown evidence from proof of throttling or breach; use the actual CSV columns; separate errors and engines; remove blanket cancellation claims and link official complaint guidance. The existing English URL is retained. |
| Mac speed tests | [English](https://velocibar.app/en/blog/speed-test-mac.html) · [Spanish](https://velocibar.app/blog/test-velocidad-mac.html) | Use the correct `networkQuality` capitalization; distinguish built-in macOS availability from VelociBar requirements; qualify test output and duration; explain test traffic and comparable workloads. |
| Speedtest/Fast.com/VelociBar comparison | [English](https://velocibar.app/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html) · [Spanish](https://velocibar.app/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html) | Acknowledge latency, history, and sharing features; compare named products rather than attributing VelociBar features to all continuous monitoring; remove speculative ISP favoritism and throttling claims; qualify client-specific features. |

## Shared SEO and citation improvements

- Added a direct opening answer to each article and static links to its main sections.
- Added visible organization authorship and publication/revision dates. Original publication dates remain September 4; substantive revisions are dated September 10.
- Aligned descriptions across search, social metadata, and article schema. Schema headlines match the visible H1, and citations have visible source links.
- Updated both blog listings and the sitemap to match revised articles.
- Preserved article URLs, canonicals, language alternates, and readable HTML without JavaScript.
- Replaced the landing-page script on blog pages with a small script that remembers explicit language choices without redirecting visitors away from the requested article language.
- Made comparison tables keyboard-focusable and retained their horizontal overflow container.
- Made article HTML the source for generated Markdown, with a standard-library Python exporter and checker. `llms-full.txt` now includes the actual ten articles rather than claiming to be full site content while containing only landing-page text.
- Removed unsupported automatic-alert, passive-test, and throttling-proof claims from `llms.txt`; removed hard-coded pricing from that summary.

These text files are maintained for consistency, not presented as a ranking mechanism. Google explicitly says that its AI search features do not require special AI files or special schema. Crawlability, useful text, internal links, and structured data that matches visible content remain relevant. [Google Search Central: AI features](https://developers.google.com/search/docs/appearance/ai-features).

## Resource-size improvements

| Resource | Before | After | Reduction |
|---|---:|---:|---:|
| Blog JavaScript | 15,262 bytes (`app.js`) | 544 bytes (`blog.js`) | 96.4% |
| Heading font | 95,096 bytes (TTF) | 30,440 bytes (WOFF2) | 68.0% |

These are file sizes, not measured end-user transfer savings or Core Web Vitals. HTTP compression, cache state, and third-party analytics affect actual loading. The existing analytics integration is retained. The font conversion preserves the existing font rather than introducing a new design.

## Verification and limits

- `python3 scripts/check_blog.py`: checks 12 blog pages for canonicals, reciprocal hreflang, sitemap inclusion, local resources and fragment targets, parseable JSON-LD, visible author/date/source consistency, and generated-content freshness.
- `python3 scripts/blog_content.py --check`: checks all ten Markdown exports and the compiled text file against their sources.
- `node --check blog.js` and `git diff --check`: syntax and whitespace checks.
- Language-script checks cover explicit choices, invalid language values, blocked storage, and pages without a toggle. Font checks confirm the WOFF2 character map, metrics, and glyph outlines match the original TTF.
- Browser rendering was attempted but could not run: Chromium was not installed, and its download timed out. Desktop/mobile visual checks remain a pre-merge check; no browser or Lighthouse score is claimed.
- Live baseline: all article/index pages, robots.txt, and sitemap.xml fetched successfully before edits; article and index content matched the repository.
- No Search Console, analytics, field Core Web Vitals, or systematic AI citation dataset was inspected. No search-performance uplift is claimed.

## What still needs measurement or original evidence

1. After publication, inspect representative Spanish and English URLs in Search Console, confirm selected canonicals, and verify sitemap processing. Use the rendered live pages in Google's Rich Results Test and PageSpeed Insights.
2. Establish an article-level baseline of impressions, clicks, CTR, queries, and average position. Compare equivalent periods, taking the September 4 publication date and the site's small content set into account. Avoid treating early fluctuations as proof of improvement.
3. Sample the five topic questions in each language across the AI search products relevant to customers. Record the prompt, date, answer, cited URL, and whether the citation supports the answer. Citation inclusion can vary between runs; a single answer is not a visibility score.
4. Add an original, documented connection-testing case study when real measurements are available. Include the hardware, network, app version, engine, timestamps, unsuccessful tests, and limitations. Do not manufacture benchmark results or imply that example Terminal output is a measured result.
5. Consider article-specific screenshots or explanatory figures. The current shared product social image is serviceable, but does not visually explain each article's subject. Add assets only when they help readers, with descriptive text and explicit dimensions.

## Sources consulted

- [Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article) and [helpful, reliable content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Apple: Reduce network delays for your app](https://developer.apple.com/videos/play/wwdc2021/10239/), covering responsiveness under working conditions and RPM.
- [IETF RFC 7567](https://www.rfc-editor.org/rfc/rfc7567.html), covering excessive queueing and active queue management.
- [Fast.com FAQ and settings](https://fast.com/), including loaded/unloaded latency, upload, and test destinations.
- [Ookla's published app listing](https://play.google.com/store/apps/details?id=org.zwanoo.android.speedtest), supporting app history, sharing, and latency features. Features are explicitly qualified by client.
- [FCC complaint portal](https://consumercomplaints.fcc.gov/hc/en-us), [Ofcom broadband/WiFi help](https://www.ofcom.org.uk/phones-and-broadband/service-quality/broadband-wifi-help), and [Spain's telecommunications complaint guidance](https://usuariosteleco.digital.gob.es/reclamaciones).

The app implementation was also checked for test scheduling, CSV fields, error records, and differences between the Apple and CDN measurements. This is a source review, not a test of the currently distributed macOS binary.
