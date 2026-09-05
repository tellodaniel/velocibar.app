# VelociBar - Continuous Internet Speed Test for macOS

> Markdown version of https://velocibar.app/en/ · [Versión en español](https://velocibar.app/index.md)

VelociBar is a macOS menu bar app that measures your real internet speed over time, not just at the moment you run a one-off test. It lives in the menu bar, measures on its own in the background, and keeps a local history you can export to CSV to hold your internet provider (ISP) accountable.

- **Download**: https://apps.apple.com/us/app/velocibar/id6756196355 (App Store, $1.99 USD, one-time purchase)
- **Requirements**: macOS 26 or later
- **Languages**: Spanish (default) and English

## At a glance

- **100% on your Mac, on-device**: no accounts, no cloud, no telemetry
- **2 measurement engines**: Apple's `networkQuality` tool + a real download from a global CDN
- **Full history exportable to CSV**

## What it measures

**Two measurement engines, one honest number.** VelociBar alternates Apple's `networkQuality` tool with a real download from a global CDN. It measures the performance you actually get while browsing, not an idealized lab number:

- **Real download speed** (Mbps)
- **Responsiveness under load** (RPM, roundtrips per minute): how many times per minute your network answers while it's saturated. It's the *bufferbloat* metric: it explains why a video call stutters or a game lags even when your download speed is high. Every test is rated **Low / Medium / High**, the same scale Apple's own tool uses.

## History and export

Every test is saved locally and plotted on a timeline: spot the 9 p.m. drop, the weekend congestion, or the exact day your connection changed. Export the full history in one click to CSV with these columns: `timestamp`, `source` (engine), `download_mbps`, `latency_ms`, `responsiveness_rpm`. Objective evidence for your ISP, or just for you.

Automatic tests run in the background every 15, 30, or 60 minutes (your choice), with a "Run now" button and a desktop widget showing your latest measurement.

## Privacy

Your data never leaves your Mac. **No accounts, no cloud, no telemetry.** Every test, every log and every export runs locally.

## VelociBar or a one-off speed test?

Speedtest and Fast.com are great for a snapshot of the moment. VelociBar answers a different question: how your connection behaves throughout the day, every day.

| | One-off tests (Speedtest, Fast.com) | VelociBar |
|---|---|---|
| **When it measures** | Only when you run it | Automatically, every 15, 30 or 60 minutes |
| **What it reveals** | A snapshot of that instant | The real pattern: the 9 p.m. drop, the weekend congestion |
| **Bufferbloat** | Not always measured | Responsiveness under load (RPM), rated Low / Medium / High |
| **History** | Limited, or requires an account | Local on your Mac, exportable to CSV in one click |
| **Privacy** | Web service, varies by provider | No accounts, no cloud, no telemetry |

You don't have to choose: use a one-off test to check the moment, and VelociBar to know (and prove) what your connection is really like.

## Frequently asked questions

### What exactly does VelociBar measure?

VelociBar measures real download speed (Mbps) and responsiveness under load (RPM). It alternates two engines: Apple's networkQuality tool and a real download from a global CDN, so it reflects the performance you actually experience, not a lab number under ideal conditions.

### What is responsiveness (RPM), and why does it matter?

Responsiveness measures how many round trips your network completes per minute while under load. It's the bufferbloat metric: it explains why a video call stutters or a game lags even when your download speed is high. VelociBar rates it Low, Medium or High.

### Does VelociBar upload my data anywhere?

No. All results are stored only on your Mac. There are no accounts, no cloud and no telemetry. You have full control of your data.

### Can I export the history?

Yes. VelociBar saves every test to a CSV file with timestamp, engine, download (Mbps), latency (ms) and responsiveness (RPM). You can open or export it in one click: objective evidence for your ISP or for your own tracking.

### Does it run in the background?

Yes. VelociBar lives in the menu bar and runs automatic tests at the interval you choose: every 15, 30 or 60 minutes. It also includes a widget so you can see your latest reading at a glance.

### What do I need to run VelociBar?

macOS 26 or later. You can download VelociBar from the Apple App Store.

### How do I prove to my ISP that my internet is slow?

Let VelociBar measure in the background for a few days, then export the history to CSV. The file includes timestamp, measurement engine, download (Mbps), latency (ms) and responsiveness (RPM): objective evidence of recurring drops (say, every night at 9 p.m.) that a one-off test can't show.

### Does VelociBar replace Speedtest or Fast.com?

It complements them. A one-off test is great for checking a single moment; VelociBar measures continuously and automatically, keeps the history on your Mac, and exports it to CSV, so you can see patterns over time and have objective evidence. Many users run both.

## Links

- Home page (HTML): https://velocibar.app/en/
- Versión en español (HTML): https://velocibar.app/
- Download on the App Store: https://apps.apple.com/us/app/velocibar/id6756196355
- Privacy Policy: https://velocibar.app/legal/privacy.html
- Terms of Use: https://velocibar.app/legal/terms.html
- Site summary for LLMs: https://velocibar.app/llms.txt
