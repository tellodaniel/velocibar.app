> Markdown version of https://velocibar.app/en/blog/what-is-bufferbloat.html · [Versión en español](https://velocibar.app/blog/que-es-bufferbloat.html)

# What Is Bufferbloat (and Why Your Video Calls Freeze on a 300 Mbps Line)

By [VelociBar](https://velocibar.app/en/) · Published September 4, 2026 · Updated September 10, 2026 · 5 min read

**Bufferbloat is excessive packet-queue delay when a network is busy.** It can make calls and games lag even with high download speeds. Check latency under load as well as Mbps; a suitable queue-management configuration can help. WiFi interference, packet loss, and other faults can cause similar symptoms.

## What bufferbloat actually is

Every router and modem keeps a small pool of memory (a **buffer**) where it holds packets that are about to go out over your line. It exists for a good reason: if two packets arrive at once, one waits a moment instead of getting dropped. But many manufacturers, trying hard to avoid ever dropping a single packet, made that pool huge. That's where the problem starts.

Picture a supermarket checkout with a mile-long conveyor belt behind it. As long as the line is short, everything moves fast. But if more people show up than the register can handle, the belt doesn't say "no room": it just keeps filling up, and every new person waits behind everyone who arrived before them. Nobody gets turned away, but the wait balloons.

During a large transfer, packets from a call or game may wait behind bulk traffic. Throughput can remain high while response times worsen. A Mbps-only result misses that delay, but tests with loaded-latency measurements can reveal it. [The IETF explains why excessive queueing adds delay and recommends active queue management.](https://www.rfc-editor.org/rfc/rfc7567.html)

## The symptoms: the test looks great, but everything stutters

Bufferbloat has a very recognizable signature once you know what to look for:

- The speed test comes back excellent, sometimes better than ever, and the video call still freezes.
- Online games have intermittent lag, not constant lag: fine most of the time, terrible in bursts.
- Web pages take a while to start loading, even though they finish fast once they do.
- The problem shows up whenever **someone on the network uploads or downloads something heavy**: a cloud backup, a 4K photo, a console update, a torrent. The moment that transfer finishes, everything goes back to normal.

If the lag appears during heavy transfers, compare unloaded and loaded latency and repeat the test over ethernet. The pattern is consistent with queueing delay, but does not isolate the router or exclude [ISP congestion](https://velocibar.app/en/blog/internet-slow-at-night.html).

## How to measure it: responsiveness in RPM

Measure the increase in delay under load, not just download speed. [Apple’s networkQuality tool reports responsiveness in RPM](https://developer.apple.com/videos/play/wwdc2021/10239/) (round trips per minute); higher means more responsive. [Fast.com also exposes unloaded and loaded latency](https://fast.com/) in milliseconds, where lower is better.

Use the Low, Medium, or High rating reported by your version of Apple’s tool as guidance. There is no single RPM value that guarantees a smooth call or game. Compare like-for-like tests before and after a change; the destination, test method, wireless conditions, and application all matter.

A one-off test describes one moment. [VelociBar](https://velocibar.app/en/) keeps repeated measurements so you can investigate changes over time. Its Apple and CDN engines use different methods: compare results within the same engine instead of treating their RPM values as interchangeable. See the [Mac speed-test guide](https://velocibar.app/en/blog/speed-test-mac.html).

## How to fix it, ranked by impact

### 1. Enable Smart Queue Management (SQM) on your router

SQM is a useful option when your router controls the bottleneck. It combines traffic shaping with queue management, often using fq_codel or CAKE. Use your router’s instructions, test before and after changing it, and check that the hardware can handle your connection speed.

### 2. Set up QoS to prioritize latency-sensitive traffic

If your router offers QoS (Quality of Service), prioritize video calls and online gaming over downloads and backups. It doesn't eliminate bufferbloat on its own, but it decides who gets to the front of the queue.

### 3. Use ethernet for anything that can't wait

WiFi adds its own queue and its own variability on top of the router's. For your work machine, important video calls, or a gaming rig, an ethernet cable removes an entire source of added latency.

### 4. Avoid running heavy uploads at the same time as everything else

Schedule cloud backups and large uploads for a time when you don't need real-time performance, or when no one else in the house is on a call. It's the simplest fix and it costs nothing.

### 5. Check compatibility before replacing your router

If your router cannot manage queues effectively, investigate compatible hardware or firmware. Verify the exact router model, throughput requirements, and ISP setup first. Replacing a router will not fix a bottleneck that lies outside your home.

VelociBar runs active tests while the app is running and the Mac is awake. Tests transfer data and may affect calls or downloads. Compare results from the same engine; missing or failed tests are not valid zero-speed samples.

## Sources

- [IETF RFC 7567: active queue management](https://www.rfc-editor.org/rfc/rfc7567.html)
- [Apple: network delays and RPM](https://developer.apple.com/videos/play/wwdc2021/10239/)
- [Fast.com: unloaded and loaded latency](https://fast.com/)

## Measure your bufferbloat over time

VelociBar logs your responsiveness in RPM automatically from the macOS menu bar, so you can see exactly when latency under load spikes, not just what it reads right now. No accounts, no cloud: everything stays on your Mac.

[↓ Download VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← All articles](https://velocibar.app/en/blog/)
