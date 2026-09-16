# Attribute matrix — VelociBar

Scored 1 to 3 on each axis. Distance is an estimate from the 2026-09-16 answer-engine snapshot (host-model fallback, n=1 per prompt, 0/8 mentions), so distance is 3 nearly everywhere; the first real AI panel corrects it. Accuracy claims live in `truth.md`, not here.

| ID | Category | Attribute | Weight | Distance | Reach | Priority | Evidence |
|---|---|---|---|---|---|---|---|
| A01 | product category | internet speed monitor / speed test logger for Mac | 3 | 3 | 2 | 1 | store copy; P1/P3 prompts named Bytetally, MoniThor, "Wifi Speed Test Periodical Log" instead |
| A02 | product category | menu bar app (macOS) | 3 | 3 | 2 | 1 | P1/P8 cited NetCheck, Net Bar, iStat Menus |
| A03 | pain point | internet slow at night / peak-hour congestion | 3 | 3 | 2 | 1 | existing post; Xfinity thread 2025-09-21; Infobae 2026-02-08 |
| A04 | use case | evidence for an ISP complaint (CSV log, regulator) | 3 | 3 | 2 | 1 | existing post; Xfinity threads 2026-03-14, 2026-04-15; Infobae Perú 2026-06-06 |
| A05 | capability | responsiveness / RPM / bufferbloat measured over time | 3 | 3 | 2 | 1 | P4 cited bufferbloat.org, Waveform; Xfinity threads 2025-12-27, 2026-05-21 |
| A06 | capability | automatic scheduled tests (15/30/60 min) with history | 3 | 3 | 3 | 1 | P3 prompt; store copy |
| A07 | capability | CSV export, on-device, no account | 2 | 3 | 3 | 2 | store copy; privacy sections |
| A08 | compatibility | uses Apple's networkQuality | 2 | 3 | 3 | 2 | existing Mac speed test post; Apple Community 2024 thread |
| A09 | persona | remote worker whose calls stutter | 2 | 3 | 2 | 2 | store "BUILT FOR"; Xfinity Teams-call thread |
| A10 | vertical | Spanish-speaking Mac users (MX, ES, LatAm) | 2 | 3 | 2 | 2 | ES-default site; P6/P7 cited applesfera, genbeta, redeszone, adslzone |
| A11 | use case | speed test says fine but calls/games lag | 2 | 3 | 2 | 2 | radar cluster 1 (two 2026 threads) |
| A12 | persona | gamer chasing lag | 1 | 3 | 2 | 3 | Xfinity bufferbloat threads |

## Evidence log

| Attribute | Source | What it said | Frequency |
|---|---|---|---|
| A01, A02 | AEO snapshot 2026-09-16 | menu-bar prompts recommend live meters, never a scheduled logger | 3 of 8 prompts |
| A03 | community (Xfinity, Movistar), news (Infobae, tecnoorbita) | "speed drops 200+ → 3-5 Mbps at 8 pm nightly" | 4 signals in 12 months |
| A04 | community (Xfinity) | "billing me for full service delivering less than 25%", escalated to AG | 2 signals + 1 news |
| A05, A11 | community (Xfinity) | "feels like packet loss ... only under upstream load, not at idle" | 3 signals |
| A10 | AEO snapshot ES prompts | Spanish answers cite Spanish tech press, never App Store apps with history | 3 of 3 ES prompts |

## Parked

| Attribute | Why parked | Promotes when |
|---|---|---|
| "best speed test" (generic) | owned by Ookla, Fast.com, Cloudflare | never; we complement them |
| WiFi troubleshooting (drops, channels) | owned by Apple support and ISP forums; app does not diagnose WiFi | a WiFi-vs-Ethernet logging angle earns a click |
| upload speed | not measured | the app measures it |
