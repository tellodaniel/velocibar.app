# How to Test Your Internet Speed on a Mac (Including Apple's Hidden Terminal Tool)

September 4, 2026 · 6 min read

> Markdown version of https://velocibar.app/en/blog/speed-test-mac.html · [Versión en español](https://velocibar.app/blog/test-velocidad-mac.md)

You search "speed test" on Google, click the first result, wait fifteen seconds, and a number in Mbps shows up. Done? Not quite. That number describes your connection at that exact instant, in that browser, against that server. If you actually want to know how fast (and how stable) your connection is, your Mac gives you three ways to check, and the most revealing one doesn't even involve a browser. Here they are, from fastest to most complete.

## Method 1: Web speed tests (Speedtest.net, Fast.com)

Opening Speedtest.net or Fast.com and waiting a few seconds is the fastest way to check your connection. For a quick spot check, such as whether the wifi is working right now or whether the technician actually fixed the line, it's more than enough, and you don't need to install anything.

But it's worth knowing the limits:

- **It's a best-case number.** The test picks the nearest, least-loaded server and measures under near-ideal conditions, not the real conditions you work, game, or video-call under.
- **It adds browser overhead.** JavaScript running in a tab introduces its own variance; it isn't a pure network-level measurement.
- **It only measures that instant.** A test at 11 a.m. tells you nothing about what happens at 9:30 p.m., when your whole house (and your whole neighborhood) is online at once.

Fine for checking whether your wifi is working right now. Not enough to know whether your internet [is slow specifically at night](https://velocibar.app/en/blog/internet-slow-at-night.html) or only at certain times. For that, you need something more.

## Method 2: Apple's hidden Terminal tool: `networkquality`

Since macOS Monterey, your Mac ships with the same measurement engine Apple uses to rate your network quality. It's called `networkquality`, it lives in Terminal, has no graphical interface, and almost nobody knows it exists.

Here's how to run it:

1. Open **Terminal** (Applications → Utilities → Terminal, or press ⌘+Space and type "Terminal").
2. Type the command and press Return:

```
networkquality
```

Wait about 20-30 seconds. You'll see something like this:

```
==== SUMMARY ====
Uplink capacity: 18.220 Mbps
Downlink capacity: 245.981 Mbps
Responsiveness: Medium (612 RPM)
Idle Latency: 14.353 milliseconds
```

Each line tells you something different:

- **Uplink / Downlink capacity.** Real upload and download throughput, measured while the network is under working load, not an isolated burst.
- **Responsiveness.** This is the interesting part. Apple doesn't just measure Mbps: it measures how your network responds while it's saturated, and rates it **Low, Medium, or High**. It's the number a traditional speed test doesn't give you.
- **RPM (round trips per minute).** The number in parentheses next to Responsiveness. It tells you how many round trips your connection completes per minute while heavy traffic is running at the same time. It's the direct indicator of [bufferbloat](https://velocibar.app/en/blog/what-is-bufferbloat.html): the lower the RPM, the more your traffic queues up behind a large download or upload, and the more you notice lag on a video call or in an online game even when your download speed looks fine.
- **Idle Latency.** Latency with the network at rest, no load. It's your baseline: compare it against what happens under load to see how much your connection degrades when you actually push it.

The command has two useful variants:

- `networkquality -v`: verbose output, with more detail on each phase of the test.
- `networkquality -s`: runs the upload and download tests sequentially instead of simultaneously, useful if you suspect they're interfering with each other and want a cleaner reading of each direction.

It's free, requires no browser and no install, and gives you a number (responsiveness) that most web speed tests don't even mention.

## Method 3: Continuous measurement from your menu bar (VelociBar)

Methods 1 and 2 have something in common: they're a snapshot. They tell you how your connection looks right now, at 11 a.m., with the house empty. They can't answer the question you actually care about: "why does my internet slow down every night around 9 p.m.?"

For that you need to run the same kind of test over and over, throughout the day, and compare the results. That's exactly what [VelociBar](https://velocibar.app/en/) does: a Mac menu bar app that runs automatic tests every 15, 30, or 60 minutes (you choose the interval), keeps every result in a local history, and lets you export it to CSV whenever you want.

With that history you can see at a glance whether your speed drops consistently every night, whether the problem is occasional or constant, and whether your responsiveness (RPM) collapses during peak hours even while download speed still looks acceptable. That's the difference between suspecting something and proving it with data.

None of the three methods is redundant: use Speedtest or Fast.com for a quick check, `networkquality` when you want a precise technical reading without leaving Terminal, and VelociBar when you need to see the full pattern over days.

## Tips for accurate results

Whichever method you use, these details change the result more than you'd think:

- **Use an ethernet cable if you can**, or sit close to the router on the 5 GHz band. 2.4 GHz wifi and distance add variables that have nothing to do with your provider.
- **Pause downloads, backups, and VPNs** before you test. A cloud backup running quietly in the background can eat a big chunk of your bandwidth without you noticing.
- **Repeat the test at different times of day**, not just once in the morning. The pattern (if there is one) only shows up when you compare several moments.
- **Don't trust a single reading.** Both web tests and `networkquality` can vary from one run to the next for reasons unrelated to your connection, such as momentary server congestion. Run the test two or three times and go with the trend, not the outlier.

## Links

- All articles: https://velocibar.app/en/blog/
- Download VelociBar (App Store): https://apps.apple.com/us/app/velocibar/id6756196355
