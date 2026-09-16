# Source of truth — VelociBar

Derived from the app repo (`/Users/daniel/Projects/VelociBar`) and the live App Store listing. This is what every page, `llms.txt`, and every answer-engine fact-check is scored against.
Re-derive whenever a release changes intervals, engines, the CSV format, pricing, or the minimum macOS. Last full derivation: 2026-09-16 (app v3.3 build 37).

| Claim | Value | Source | Read |
|---|---|---|---|
| Product name (store) | VelociBar: Internet Speed Test | itunes lookup id 6756196355 | 2026-09-16 |
| App Store id | 6756196355 | docs/app-store-metadata.md:74; itunes lookup | 2026-09-16 |
| Price (US) | $1.99 USD, one-time purchase, no subscription, no IAP | itunes lookup (country=us) | 2026-09-16 |
| Price (Mexico) | MX$49.00 | itunes lookup (country=mx) | 2026-09-16 |
| Free tier / trial | none | absent from repo; App Store paid listing | 2026-09-16 |
| Minimum macOS | 26.0 (app and widget) | velocibar.xcodeproj/project.pbxproj MACOSX_DEPLOYMENT_TARGET | 2026-09-16 |
| Current version / build | 3.3 (37), released 2026-09-11 | pbxproj MARKETING_VERSION; fastlane/Deliverfile:9; itunes lookup | 2026-09-16 |
| First release | 2025-12-28 | itunes lookup releaseDate | 2026-09-16 |
| Automatic test intervals | exactly 15, 30, 60 minutes; no "off" option | velocibar/SpeedTestViewModel.swift:20-23 (TestInterval enum) | 2026-09-16 |
| Manual "Run now" | yes; always uses the CDN download engine | SpeedTestViewModel.swift:134-136 | 2026-09-16 |
| Engines | Apple `networkQuality` CLI and an HTTPS download from CacheFly (300 MB test file); they alternate on automatic tests only | SpeedTestViewModel.swift:85-93,138-144 | 2026-09-16 |
| Metrics measured | download Mbps, latency ms, responsiveness RPM | SpeedTestViewModel.swift:45-46 | 2026-09-16 |
| RPM rating thresholds | High ≥ 1000, Medium 200–999, Low < 200 | velocibar/SpeedLogReader.swift:36-45 | 2026-09-16 |
| Upload speed | NOT measured | no upload code; docs/app-store-metadata.md:26 | 2026-09-16 |
| CSV export header | `timestamp,source,is_error,download_mbps,latency_ms,duration_s,bytes_downloaded,responsiveness_rpm` (8 columns; `source` is the engine) | velocibar/SpeedLogStore.swift:18-37 | 2026-09-16 |
| Test load | each CDN test downloads a file of up to 300 MB at full speed (resource timeout 120 s); networkQuality saturates by design; idle between tests | SpeedTestViewModel.swift:89,391-392 | 2026-09-16 |
| History storage | local CSV on the Mac only | SpeedLogStore.swift | 2026-09-16 |
| Desktop widget | yes; small/medium/large; last Mbps, RPM badge, sparkline, "Run test" button | VelociBarWidget/VelociBarWidget.swift:48; WidgetViews.swift | 2026-09-16 |
| App Intent / Shortcuts | "Run speed test" intent exists | velocibar/RunSpeedTestIntent.swift:20-36 | 2026-09-16 |
| Control Center control | placeholder boilerplate only, not a real feature (do not advertise) | VelociBarWidget/VelociBarWidgetControl.swift | 2026-09-16 |
| Pause on battery / weak signal | NOT implemented | no battery/NWPathMonitor code anywhere | 2026-09-16 |
| Alerts / notifications on slow speed | NOT implemented | no UserNotifications usage | 2026-09-16 |
| Accounts, cloud, telemetry, analytics, ads | none | no analytics SDK in pbxproj or sources | 2026-09-16 |
| External hosts contacted | cachefly.cachefly.net; Apple's networkQuality measurement servers (via /usr/bin/networkQuality) | SpeedTestViewModel.swift:89,93,215-217 | 2026-09-16 |
| App UI languages | Spanish (es-419, source) and English | velocibar/Localizable.xcstrings | 2026-09-16 |
| Store listing languages | 50 locales | fastlane/metadata/ | 2026-09-16 |
| Platforms | macOS only; no iOS, iPadOS, Windows, Linux | repo has only macOS targets | 2026-09-16 |
| Developer | Daniel Tello (indie) | git author; site repo tellodaniel/velocibar.app | 2026-09-16 |

## Integrations

| Integration | Status | Source |
|---|---|---|
| Apple networkQuality | yes (engine) | SpeedTestViewModel.swift:215-217 |
| WidgetKit desktop widget | yes | VelociBarWidget/ |
| App Intents (Shortcuts) | yes, one intent | RunSpeedTestIntent.swift |
| Control Center | no (placeholder only) | VelociBarWidgetControl.swift |
| iCloud / sync | no | absent |
| Speedtest.net / Fast.com servers | no | absent; own CDN + Apple only |
| Notifications | no | absent |
| Menu bar live readings | yes | store description; MenuBarContent.swift |

## HIGH-RISK

Claims where being wrong is a legal or trust problem rather than an embarrassment.

| Claim | Rule |
|---|---|
| Privacy: no telemetry, no accounts, data never leaves the Mac | True for app data. Never say "sends nothing anywhere" without qualifying that tests contact a CDN and Apple's servers. |
| Price | Always "US App Store; local pricing varies". Re-verify via the itunes lookup before any page states a number. |
| Upload speed | Never claim it. |
| Alerts / notifications | Never claim them. |
| Battery / weak-signal pausing | Never claim it. |
| ISP throttling | Content may say "document" and "evidence"; never say the app "proves" or "detects throttling" as a legal certainty. |

## Contradictions found (2026-09-16)

| Claim | Code says | Site says | Which is right |
|---|---|---|---|
| Pauses tests on battery or weak signal | not implemented | `llms.txt` lines 23 and 31: "can pause tests on battery or weak signal" | code; remove from llms.txt |
| Automatic alerts | not implemented | `llms.txt` line 27: "adds historical context, automatic alerts, and exportable evidence" | code; remove |
| CSV columns | 8 columns, engine column is `source` | `llms.txt` line 12 lists 5 as the export; line 29 lists 4 ("date, time, download_mbps, latency_ms"); homepage (index.md / en/index.md / llms-full.txt) says "with these columns:" and lists 5; ISP posts (`reclamar-isp-internet-lento`, `prove-isp-throttling`) call the column `engine` | code; say "including" and name `source` |
| Engines alternate | only on automatic tests; Run now is CDN-only | homepage and llms.txt say "alternates" unqualified | minor; qualify where cheap |
| Minimum macOS on the Terms page | 26.0 | `legal/terms.html` line 207 (via `translations.js` lines 652 and 881) says "macOS 12.0 (Monterey) or later" under System Requirements | code; change to macOS 26 |
| Load: "calibrated not to saturate your bandwidth" | tests saturate the line briefly by design | `llms.txt` line 31 | code; corrected 2026-09-16 |
| Price visible on the homepage | $1.99 in JSON-LD Offer only | no visible price text on / or /en/ | gap, not a contradiction; consider showing it |
