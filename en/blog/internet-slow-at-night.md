# Why Is Your Internet Slow at Night? Causes and Fixes

September 4, 2026 · VelociBar Blog

> Markdown version of https://velocibar.app/en/blog/internet-slow-at-night.html · [Versión en español](https://velocibar.app/blog/internet-lento-por-la-noche.md)

It's a pattern millions of people recognize without knowing it has a name: at 3 p.m. your connection flies, and at 9:30 p.m. a video call freezes and Netflix drops to potato quality. It's not your imagination — and it's almost certainly not your router either. It's called **peak-hour congestion**.

## The main cause: you share the network with your neighbors

Your connection isn't a private lane all the way to your provider. In most access technologies — coaxial cable (DOCSIS), GPON fiber, and mobile internet — the last stretch of the network is shared among dozens or hundreds of homes in your area.

Providers size that shared network using a **contention ratio**: they sell more capacity than physically exists, betting that not everyone uses it at once. During the day, the bet pays off. But between 8 and 11 p.m. — when the whole neighborhood is on the couch streaming, gaming, and video-calling — simultaneous demand exceeds the node's capacity, and everyone's speed drops.

That's why the pattern is so recognizable: **slow every night at the same time, fast in the early morning and mid-morning**. A line fault doesn't keep a schedule; congestion does.

## Other causes with the same symptom

- **Neighborhood WiFi interference.** At night your neighbors' routers light up too. If you're on the 2.4 GHz band, saturated channels degrade your local network even when your line is fine. Test over ethernet or on 5 GHz to rule this out.
- **Congestion inside your own home.** Cloud backups, console updates, and 4K streaming in the next room compete with you. That's household [bufferbloat](https://velocibar.app/en/blog/what-is-bufferbloat.md): the line is full and your traffic waits in a queue.
- **Provider traffic management.** Some ISPs prioritize or throttle certain traffic under load. It's hard to see from the outside — which is exactly why you need a measurement history, not a single test.

## How to prove it with data (not feelings)

A one-off speed test can't demonstrate a problem that only exists at certain hours: run it at 11 a.m. and it will come back perfect. What you need is the **full-day curve**:

1. **Measure continuously for at least a week.** An app like [VelociBar](https://velocibar.app/en/) runs an automatic test every 15, 30, or 60 minutes from your Mac's menu bar and keeps the history locally.
2. **Look for the pattern.** If speed drops consistently between 8 and 11 p.m. and recovers overnight, you have peak-hour congestion. If the drops are random, suspect your WiFi or wiring instead.
3. **Watch responsiveness, not just Mbps.** Under load, latency (measured in RPM) usually collapses before download speed does. That's what makes Zoom stutter even when a speed test "looks fine."
4. **Export the evidence.** A CSV with the date, time, and speed of every measurement turns "my internet is slow at night" into a verifiable fact that support can't wave away with a router reboot.

## What you can do about it

### 1. Complain with data

If you pay for 300 Mbps and get 40 every night, your provider is systematically underdelivering. Send your exported history to support and ask them to check saturation on your area's node. Full guide: [how to prove your internet is slower than what you pay for](https://velocibar.app/en/blog/prove-isp-throttling.md).

### 2. Consider switching technology, not just plans

Buying more megabits on a saturated node fixes nothing: congestion caps everyone equally. Switching from cable to fiber — or from an oversubscribed provider to one with fewer customers in your area — usually beats upgrading your plan.

### 3. Optimize what you control

- Schedule backups and large downloads for the early morning.
- Use ethernet for your work machine and video calls.
- Enable Smart Queue Management (SQM/QoS) on your router so household congestion doesn't add its own lag.

## Links

- This article (HTML): https://velocibar.app/en/blog/internet-slow-at-night.html
- VelociBar Blog: https://velocibar.app/en/blog/
- VelociBar for macOS: https://apps.apple.com/us/app/velocibar/id6756196355
