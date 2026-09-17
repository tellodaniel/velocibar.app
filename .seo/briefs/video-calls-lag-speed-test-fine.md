# Brief: Speed test is fine but video calls still stutter? Check responsiveness, not Mbps

Slugs: /en/blog/video-calls-lag-speed-test-fine.html · /blog/videollamadas-se-cortan-test-velocidad-bien.html
Type: explainer / how-to (SERP rewards 1,000–2,500-word "why it happens + how to fix" pages; process intent). Schema per site convention: BlogPosting + BreadcrumbList. Floor 1,200 words.
Selected 2026-09-16 (run: seo-content). Demand: Xfinity forum 2025-12-27 ("feels like packet loss... only under load"), 2026-05-21 ("jitter, latency spikes, bufferbloat... during gaming"); SERP teardown of 6 ranking pages.

## Information-gain statement
Four Apple networkQuality runs captured on one home Wi-Fi line on 2026-09-16 (saved in `.seo/evidence/networkquality-2026-09-16/`): download 320–626 Mbps, yet round trips rose from ~40 ms idle to a median of 59–145 ms under download load with worst samples of 618–1,150 ms; every run rated Medium (420–560 RPM). None of the six ranking pages shows a real idle-vs-loaded measurement, names RPM or networkQuality, or gives a Mac path. Labeled n=4, one line, one afternoon, Apple's test servers.

## Angle
A speed test measures capacity; a call needs round trips on time. The number that predicts the stutter is latency under load (responsiveness, RPM), and you can read it on a Mac in one minute and log it over days. Honest about the alternatives (Wi-Fi, the Mac itself, VPN, uplink, the other person) and about RPM's limits.

## Claim ledger
| # | Claim | Source | Tier | Date | Status |
|---|---|---|---|---|---|
| 1 | Apple: RPM = number of sequential round trips a network can do in one minute under normal working conditions; labels Low/Medium/High qualitatively (Medium: "momentary pauses or freezes, like during FaceTime audio or video calls") | https://support.apple.com/en-us/HT212313 | primary | 2025-03-18 | verified (agent opened page) |
| 2 | networkQuality ships with macOS since Monterey (12) | https://support.apple.com/en-us/HT212313 | primary | 2025 | verified |
| 3 | IETF draft-ietf-ippm-responsiveness "Responsiveness under Working Conditions", rev -09, 2026-07-06: measure "when the network is under working conditions", expressed in RPM; working conditions = path fully utilised, queue builds at the bottleneck | https://datatracker.ietf.org/doc/draft-ietf-ippm-responsiveness/ | primary | 2026-07-06 | verified |
| 4 | Zoom Statistics panel: latency 150 ms or less, jitter 40 ms or less, packet loss 2% or less recommended | https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0070504 | primary | undated | single-source (to verify) |
| 5 | Zoom bandwidth: 1:1 720p 1.2 Mbps up/down; group 720p 2.6/1.8 Mbps; 1080p 3.8/3.0 Mbps | https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060748 | primary | undated | verified |
| 6 | Teams: "can deliver HD video quality in under 1.5 Mbps"; 1:1 video recommended 1,500 kbps | https://learn.microsoft.com/en-us/microsoftteams/prepare-network | primary | 2026-07-14 | verified |
| 7 | Google Meet: ~1 Mbps out / 1.3 Mbps in per participant for HD; up to 3.6 Mbps for 1080p | https://knowledge.workspace.google.com/admin/meet/prepare-your-network-for-meet-meetings-and-live-streams?hl=en | primary | 2026-09-11 | verified |
| 8 | Microsoft: a VPN "inherently adds packet overhead and creates delays in real-time traffic"; avoid real-time traffic over VPN | https://learn.microsoft.com/en-us/microsoftteams/qos-in-teams | primary | 2025-09-10 | verified |
| 9 | Apple: 2.4 GHz is shared with Bluetooth and other devices; use 5 GHz / reduce devices on the band | https://support.apple.com/en-us/102319 | primary | undated | verified |
| 10 | Zoom: video problems commonly "due to device settings, competing applications, or quality issues"; dual/single-core laptops drop to ~5 fps when screen sharing | KB0062684; KB0060748 | primary | undated | verified |
| 11 | Cloudflare: speed-test paths may be optimised for speed tests and differ from your real traffic; AIM collects loaded latency separately | https://blog.cloudflare.com/aim-database-for-internet-quality/ | primary | 2023-04-18 | verified |
| 12 | Fast.com shows unloaded vs loaded latency; ideally close to each other | https://about.netflix.com/en/news/fast-com-now-measures-latency-and-upload-speed | primary (Netflix) | ~2018 | verified |
| 13 | Bufferbloat: "undesirable latency that comes from a router or other network equipment buffering too much data" | https://www.bufferbloat.net/projects/bloat/wiki/Introduction/ | primary | undated | verified |
| 14 | RFC 7567 (2015) recommends active queue management | https://www.rfc-editor.org/rfc/rfc7567 | primary | 2015-07 | verified |
| 15 | FCC MBA 13th report: latency under downstream load "generally is significantly higher than idle latency", more pronounced for DSL; idle fiber 7–14 ms, cable 12–24, DSL 23–34 | https://data.fcc.gov/download/measuring-broadband-america/2023/2023-Fixed-Measuring-Broadband-America-Report.pdf | primary | 2024 | verified |
| 16 | ITU-T G.114: 0–150 ms one-way delay acceptable for most applications | Cisco doc citing G.114 https://www.cisco.com/c/en/us/support/docs/voice/voice-quality/5125-delay-details.html | secondary | undated | single-source; cite as "per Cisco's summary of ITU-T G.114" or omit |
| 17 | First-hand: 4 runs, Wi-Fi, 2026-09-16 (see table) | .seo/evidence/networkquality-2026-09-16/ | primary (own) | 2026-09-16 | verified (raw JSON saved) |
| 18 | VelociBar rates RPM Low <200, Medium 200–999, High ≥1000 (its own bands; Apple's labels are qualitative) | app source SpeedLogReader.swift:36-45 | primary (own) | 2026-09-16 | verified |
| 19 | 60,000 / RPM = milliseconds per round trip (549 RPM ≈ 109 ms, as networkQuality prints) | arithmetic + run4-plain.txt | primary | 2026-09-16 | verified |

Not used (could not verify): numeric Low/Medium/High cutoffs as Apple's; Teams RTT<100/jitter<30/loss<1%; Meet "ping<50 ms"; Waveform's grade table.

## First-hand data (run1–run3 JSON, run4 plain)
| run | down Mbps | up Mbps | RPM | idle RTT ms | loaded (download phase) median / p90 / max ms | loaded (upload phase) median / p90 / max ms |
|---|---|---|---|---|---|---|
| 1 | 320 | 154 | 470 | 39.8 | 59 / 130 / 618 | 173 / 326 / 500 |
| 2 | 547 | 158 | 560 | 45.7 | 82 / 175 / 787 | 151 / 312 / 617 |
| 3 | 496 | 149 | 420 | 43.7 | 145 / 263 / 1,150 | 214 / 513 / 876 |
| 4 | 626 | 143 | 549 (Medium, 109 ms) | 42.1 | n/a (plain output) | n/a |
Method: /usr/bin/networkQuality on macOS, Wi-Fi (en0), one home connection, afternoon of 2026-09-16, back to back. Limits: n=4, one line, Apple's servers, Wi-Fi adds its own variance; not a claim about any ISP.

## Table-stakes (≥3 of 6 ranking pages)
latency/jitter/packet loss as the real culprits; upload vs download; Wi-Fi → Ethernet; close competing apps/devices; QoS; router/firmware; distrust one snapshot.
## Gap (none of 6)
real idle-vs-loaded measurement; logging responsiveness over time on your own machine; RPM / networkQuality; Mac path; Spanish SERP has none of it either.
## Entity map
latency, round trip, jitter, packet loss, bufferbloat, responsiveness, RPM, working conditions, idle vs loaded latency, upload vs download, QoS, SQM, Wi-Fi 2.4/5 GHz, Ethernet, VPN, Zoom, Teams, Google Meet, FaceTime, networkQuality, Fast.com, Cloudflare speed test, Speedtest, Zoom Statistics panel.
## PAA (verbatim-ish from SERP titles)
Why do video calls freeze on my end but not for others? · What is a good internet speed for Zoom? · Is upload speed more important than download for video calls? · How do I stop Zoom from freezing? · ES: ¿Por qué se corta la videollamada y cómo evitarlo? · ¿Por qué mi videollamada se retrasa?
## Internal links
in-body: /en/blog/what-is-bufferbloat.html, /en/blog/speed-test-mac.html, /en/blog/internet-slow-at-night.html, /en/blog/prove-isp-throttling.html, /en/. Inbound: what-is-bufferbloat (symptoms), internet-slow-at-night, blog index, llms.txt, homepage footer guides.
