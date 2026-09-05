# What Is Bufferbloat (and Why Your Video Calls Freeze on a 300 Mbps Line)

September 4, 2026 · 7 min read

> Markdown version of https://velocibar.app/en/blog/what-is-bufferbloat.html · [Versión en español](https://velocibar.app/blog/que-es-bufferbloat.md)

You pay for 300 Mbps, your speed test comes back at 290, and your Zoom call still freezes the moment someone in the house uploads photos to the cloud or kicks off a backup. It's not an outage, it's not your WiFi, and the speed test isn't lying: the problem has a name. It's called **bufferbloat**, and it's one of the most common network problems precisely because a normal speed test can't see it.

## What bufferbloat actually is

Every router and modem keeps a small pool of memory — a **buffer** — where it holds packets that are about to go out over your line. It exists for a good reason: if two packets arrive at once, one waits a moment instead of getting dropped. But many manufacturers, trying hard to avoid ever dropping a single packet, made that pool huge. That's where the problem starts.

Picture a supermarket checkout with a mile-long conveyor belt behind it. As long as the line is short, everything moves fast. But if more people show up than the register can handle, the belt doesn't say "no room": it just keeps filling up, and every new person waits behind everyone who arrived before them. Nobody gets turned away, but the wait balloons.

That's exactly what happens in your router when the line is saturated — say, uploading a big video or running a cloud backup. The oversized buffer accepts hundreds of extra packets instead of dropping them, so **upload or download speed barely budges**. But every new packet — the one from your video call, the one from your online match, the one for the page you're trying to load — has to wait its turn behind a very long line. The result is **sky-high latency with perfect throughput**: exactly the combination a normal speed test can't catch, because it only measures how many megabits fit through the pipe, not how long they take to arrive.

## The symptoms: the test looks great, but everything stutters

Bufferbloat has a very recognizable signature once you know what to look for:

- The speed test comes back excellent — sometimes better than ever — and the video call still freezes.
- Online games have intermittent lag, not constant lag: fine most of the time, terrible in bursts.
- Web pages take a while to start loading, even though they finish fast once they do.
- The problem shows up whenever **someone on the network uploads or downloads something heavy**: a cloud backup, a 4K photo, a console update, a torrent. The moment that transfer finishes, everything goes back to normal.

If you recognize this pattern — especially the part about it lining up with someone uploading something — it's almost certainly bufferbloat, not a problem with your provider or with [nightly peak-hour congestion](https://velocibar.app/en/blog/internet-slow-at-night.html), although both problems can coexist in the same house.

## How to measure it: responsiveness in RPM

The right way to measure bufferbloat isn't speed — it's **responsiveness under load**, expressed as **RPM (round-trips per minute)**: how many times per minute your network can complete a round trip while it's saturated with traffic. It's the metric reported by Apple's `networkQuality` tool, which rates it in three tiers: **Low, Medium, or High**.

You don't need to memorize an exact number — and you should be skeptical of anyone who hands you an overly precise threshold. What you can expect, in general terms: at a few hundred RPM, video calls and online games are going to suffer as soon as the line gets loaded; above roughly a thousand, the experience is usually comfortable even with heavy background traffic. What matters isn't the isolated number, it's seeing it **over time**: if your responsiveness tanks every night at 10 p.m., every time the automatic backup kicks in, or every weekend, that tells you the cause.

A one-off test only gives you a snapshot of RPM at that instant — the same limitation you run into if you just [run a speed test on your Mac](https://velocibar.app/en/blog/speed-test-mac.html) once and trust that single number. [VelociBar](https://velocibar.app/en/) measures responsiveness automatically several times a day from your Mac's menu bar and keeps the history locally, so you can see exactly when bufferbloat hits — at night, during the backup window, when there's a video class running in the next room — instead of guessing.

## How to fix it, ranked by impact

### 1. Enable Smart Queue Management (SQM) on your router

By far the most effective fix. SQM combines a rate limit set slightly below your actual line speed with a modern queue-management algorithm — **fq_codel** or **CAKE** — that shares bandwidth fairly across flows and stops the queue from growing unbounded. Most stock ISP routers don't ship with it enabled, or don't include it at all.

### 2. Set up QoS to prioritize latency-sensitive traffic

If your router offers QoS (Quality of Service), prioritize video calls and online gaming over downloads and backups. It doesn't eliminate bufferbloat on its own, but it decides who gets to the front of the queue.

### 3. Use ethernet for anything that can't wait

WiFi adds its own queue and its own variability on top of the router's. For your work machine, important video calls, or a gaming rig, an ethernet cable removes an entire source of added latency.

### 4. Avoid running heavy uploads at the same time as everything else

Schedule cloud backups and large uploads for a time when you don't need real-time performance, or when no one else in the house is on a call. It's the simplest fix and it costs nothing.

### 5. If your ISP's router doesn't support SQM, replace it

Many carrier-issued routers don't let you enable SQM at all. Open firmware like **OpenWrt**, installed on a compatible router, ships with fq_codel or CAKE ready to turn on in minutes, and it's usually the single biggest upgrade you can make to your whole home network.

## Measure your bufferbloat over time

VelociBar logs your responsiveness in RPM automatically from the macOS menu bar, so you can see exactly when latency under load spikes — not just what it reads right now. No accounts, no cloud — everything stays on your Mac.

**Download:** https://apps.apple.com/us/app/velocibar/id6756196355

## Links

- Blog: https://velocibar.app/blog/
- Download on the App Store: https://apps.apple.com/us/app/velocibar/id6756196355
