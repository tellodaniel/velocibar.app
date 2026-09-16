# VelociBar — Brand Context

> The voice contract. Read at the start of every `/seo` run; everything written is governed by this file, in every lane. Drafted 2026-09-16 from the site, the store copy and the app source; values marked `inferred` await the developer's confirmation. Never overwrite; edit.

## Product

- **Name:** VelociBar (App Store: "VelociBar: Internet Speed Test")
- **One-liner (≤20 words):** A macOS menu bar app that logs your real internet speed and responsiveness automatically, so you can prove slowdowns to your ISP.
- **What we do:** Runs a speed test every 15, 30 or 60 minutes from the menu bar, alternating Apple's `networkQuality` tool with a real CDN download. Records download Mbps, latency and responsiveness (RPM, the bufferbloat metric, rated Low/Medium/High). Keeps the whole history on the Mac and exports it as CSV. Desktop widget with the last reading and a sparkline. No accounts, no cloud, no telemetry.
- **Pricing structure:** $1.99 USD one-time on the US App Store (MX$49 in Mexico; local pricing varies). No subscription, no in-app purchases.
- **Free tier?** No. No trial.

## Audience

- **Primary persona:** A Mac user who pays for a fast plan but feels the connection drop at certain hours (evenings, weekends) and wants numbers, not feelings, before calling the ISP. Often a remote worker whose video calls stutter.
- **Secondary personas:** Gamers and streamers chasing lag that a one-off speed test does not show (bufferbloat). Power users who want a long-term record after changing plan, router or provider. `inferred`
- **Industries we target:** consumer / prosumer; not B2B.
- **Company size we target:** n/a (individuals, home offices).
- **Jobs to be done (top 3):**
  1. Know what speed I actually get through the day, without remembering to run tests.
  2. Have exportable evidence when I complain to my provider.
  3. Understand why calls and games lag even when the speed test "looks fine" (responsiveness, not Mbps).

## Positioning (confirm)

> We are a **scheduled internet-speed logger for macOS** for **people who pay for a fast plan but feel slow at certain hours and want proof for their ISP**. We win because **we record download and responsiveness (RPM) automatically over days and export a CSV, on-device with no account**. We are **not** for **one-off speed checks (Speedtest and Fast.com do that), live bandwidth meters of current throughput, upload measurement, or anyone not on macOS 26+**.

## Competitors

`inferred` from the existing comparison post and from what answer engines named instead of us on 2026-09-16. Confirm who you actually lose to.

| Brand | URL | Tier | Notes |
|---|---|---|---|
| Speedtest by Ookla | https://www.speedtest.net | head | The default one-off test; has a Mac app; owns "speed test mac". We complement, not replace. |
| Fast.com | https://fast.com | head | Netflix's one-off test, Open Connect servers. Named in our comparison post. |
| iStat Menus | https://bjango.com/mac/istatmenus/ | mid | The menu-bar monitor Mac users already own; live bandwidth, not scheduled tests or RPM. |
| NetWorx | https://www.softperfect.com/products/networx/ | mid | Bandwidth-usage logger with reports; measures usage, not speed under load. |
| Menu-bar niche apps (Bandwidth+, NetCheck, Bytetally, MoniThor, Net Bar, Stats) | App Store / GitHub | niche | What answer engines recommended for "menu bar internet speed mac". Live meters or connectivity checkers, no history of test results. |
| Reference tools (Apple `networkQuality`, Waveform bufferbloat test, Cloudflare speed test, LibreSpeed) | — | reference | Own the "how do I measure bufferbloat" answers. Cite them; do not compete with them. |

## Brand voice

- **Voice tags:** plain, explanatory, concrete (hours and Mbps figures, not adjectives), honest about competitors, second person, technical terms explained inline, no hype, ES-first bilingual.
- **Person/perspective:** "you" / "tú" to the reader; "VelociBar" in the third person for the product; no "we" on posts; no bylines today.
- **Forbidden words/phrases:** seamless, revolutionary, blazing, supercharge, unlock, game-changer, cutting-edge, robust, leverage, "in today's fast-paced world", "en el mundo actual", em-dashes (the site purged them on 2026-09-04; use commas, colons or full stops).
- **Forbidden claims:** upload speed measurement; alerts or notifications; pausing on battery or weak signal; "continuous" meaning per-second sampling (say "automatic every 15, 30 or 60 minutes"); "replaces Speedtest"; "sends nothing anywhere" without noting that tests contact a CDN and Apple's servers; a price without "US App Store; local pricing varies"; "proves throttling" as a legal certainty (say "documents", "evidence").
- **Reference brands for tone:** Apple's own networkQuality man page (dry, precise); Waveform's bufferbloat explainer; Bjango's product pages (plain, no fluff). `inferred`
- **Existing content to match:** `en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.md` (rhythm, honesty about competitors) and `blog/internet-lento-por-la-noche.md` (ES register: tú, concrete hours, short sections).

## Anti-positioning (where we don't compete)

1. One-off speed tests: we do not try to beat Speedtest or Fast.com at a snapshot, and we say so.
2. Live bandwidth meters (iStat Menus, Bandwidth+): we do not show per-second throughput of current traffic.
3. Upload measurement: not measured. Point readers to `networkQuality` for uplink.
4. Cross-platform: macOS 26+ only; no Windows, iOS, iPadOS, Linux, no router firmware.
5. Cloud dashboards, accounts, sharing, team features: nothing leaves the Mac.
6. Network diagnostics (packet loss, traceroute, DNS, WiFi channel analysis): out of scope; link to the right tool.

## Concrete differentiators

1. Scheduled, automatic tests every 15/30/60 minutes with a local history, so the 9 p.m. drop is on record without anyone remembering to test.
2. Responsiveness (RPM) on every test, Apple's own bufferbloat methodology, rated Low/Medium/High and logged over time.
3. Two engines alternating on automatic tests (Apple `networkQuality` and a real CDN download), so one server's good day does not flatter the line.
4. CSV export with timestamps that a support agent or a regulator complaint can use; on-device, no account, $1.99 once.

## Proprietary data & first-hand experience

- **Product/usage data we can anonymize & cite:** none. Data lives only on users' Macs; there is no aggregate usage data and there never will be.
- **How to get at it (access path):** the developer's own VelociBar CSV logs (export from the app on the developer's Macs). n=1 per household, always labeled as a personal sample.
- **Off-limits — never publish:** nothing user-derived exists; never imply aggregate statistics from users.
- **First-hand experience / things we've actually done:** built the app against Apple's `networkQuality`; multi-week logs of a real home connection across ISPs and hours; hands-on with the Mac menu-bar tools above. `inferred`
- **Original research we can run:** week-long personal logs (hourly Mbps and RPM curves), before/after router SQM bufferbloat measurements, side-by-side one-off tests vs scheduled logs on the same line, hands-on comparisons of Mac menu-bar network apps.
- **Internal experts we can attribute/quote:** Daniel Tello, developer.

## Author / E-E-A-T

- **Default author:** Daniel Tello — indie macOS developer, author of VelociBar. `inferred`
- **Credentials / why-credible:** wrote the measurement engine; publishes his own logs.
- **Author bio URL / profile:** https://tello.io `inferred — confirm`

## Links to existing surfaces

- Domain: https://velocibar.app
- Homepage: https://velocibar.app/ (ES) · https://velocibar.app/en/ (EN)
- Pricing: no pricing page; App Store https://apps.apple.com/us/app/velocibar/id6756196355
- Existing blog/content: https://velocibar.app/blog/ · https://velocibar.app/en/blog/
- Existing features list: homepage sections; `llms.txt`

## Visual brand

- Fonts: Manrope semibold, self-hosted (`assets/fonts/`); body stack per `styles.css` `:root`.
- Colours and dark mode: CSS variables at the top of `styles.css`; `prefers-color-scheme` media. Read them from the file when a programmatic page needs them; do not ask.
- Icon set: none (inline SVG).
