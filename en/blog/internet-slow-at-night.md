> Markdown version of https://velocibar.app/en/blog/internet-slow-at-night.html · [Versión en español](https://velocibar.app/blog/internet-lento-por-la-noche.html)

# Why Is Your Internet Slow at Night? Causes and Fixes

By [VelociBar](https://velocibar.app/en/) · Published September 4, 2026 · Updated September 10, 2026 · 4 min read

**Internet that slows down at night can be caused by peak-hour congestion, household downloads, or WiFi interference.** Compare wired tests at quiet and busy hours before blaming your ISP. A recurring slowdown is useful evidence of a problem, but does not establish its cause or prove deliberate throttling.

## One possible cause: shared network capacity

Your connection isn't a private lane all the way to your provider. In most access technologies, including coaxial cable (DOCSIS), GPON fiber, and mobile internet, the last stretch of the network is shared among dozens or hundreds of homes in your area.

Shared capacity can become a bottleneck when simultaneous demand exceeds what a network segment can deliver. Evening streaming, downloads, and calls can increase that demand. The busy period and its impact vary by provider and neighborhood; a shared network is not automatically an overloaded network.

A repeatable evening drop gives you a time window to investigate. Scheduled backups and local wireless interference can follow a schedule too, so the timing alone cannot distinguish an ISP problem from a home-network problem.

## Other causes with the same symptom

- **Neighborhood WiFi interference.** Nearby networks can compete for wireless airtime. Compare WiFi with ethernet at the same time; a faster wired result points toward the wireless segment.
- **Congestion inside your own home.** Backups, updates, and streaming share capacity. If queues add excessive delay, [bufferbloat](https://velocibar.app/en/blog/what-is-bufferbloat.html) may also be involved.
- **Provider traffic management.** Some ISPs prioritize or throttle certain traffic under load. It's hard to see from the outside, which is exactly why you need a measurement history, not a single test.

## How to investigate a nighttime slowdown

A one-off speed test can't demonstrate a problem that only exists at certain hours: run it at 11 a.m. and it will come back perfect. What you need is the **full-day curve**:

1. **Measure continuously for at least a week.** An app like [VelociBar](https://velocibar.app/en/) runs an automatic test every 15, 30, or 60 minutes from your Mac's menu bar and keeps the history locally.
2. **Look for the pattern.** Keep the device, connection type, test engine, and background traffic comparable. Repeat wired tests at quiet and busy hours. If multiple test destinations slow down with household traffic paused, ask your ISP to investigate shared capacity or routing.
3. **Watch responsiveness, not just Mbps.** Latency is measured in milliseconds: lower is better. Responsiveness is measured in RPM: higher is better. A fall in RPM indicates slower responses under the test load; it does not identify where the delay occurs.
4. **Export the evidence.** Keep a CSV with timestamps and test conditions so support can examine recurring drops. Separate results by engine and mark failed tests instead of treating them as valid zero-speed readings.

## What you can do about it

### 1. Complain with data

If repeated wired tests fall well below your plan speed, share the history and ask support to investigate. Include quiet-hour results for comparison. See [how to document slow internet for your ISP](https://velocibar.app/en/blog/prove-isp-throttling.html).

### 2. Consider switching technology, not just plans

A faster plan may not resolve congestion elsewhere in the network. Ask the provider where the bottleneck is before paying for an upgrade. Fiber can also have shared capacity constraints; changing access technology alone does not guarantee a fix.

### 3. Optimize what you control

- Schedule backups and large downloads for the early morning.
- Use ethernet for your work machine and video calls.
- Enable Smart Queue Management (SQM/QoS) on your router so household congestion doesn't add its own lag.

VelociBar runs active tests while the app is running and the Mac is awake. Tests transfer data and may affect calls or downloads. Compare results from the same engine; missing or failed tests are not valid zero-speed samples.

## Sources

- [Ofcom: broadband and WiFi troubleshooting](https://www.ofcom.org.uk/phones-and-broadband/service-quality/broadband-wifi-help)
- [Apple: responsiveness under working conditions](https://developer.apple.com/videos/play/wwdc2021/10239/)

## Find your nighttime pattern

VelociBar measures your connection automatically from the macOS menu bar and draws the full-day curve. No accounts, no cloud: everything stays on your Mac.

[↓ Download VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← All articles](https://velocibar.app/en/blog/)
