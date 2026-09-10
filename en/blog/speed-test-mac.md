> Markdown version of https://velocibar.app/en/blog/speed-test-mac.html · [Versión en español](https://velocibar.app/blog/test-velocidad-mac.html)

# How to Test Internet Speed on a Mac: 3 Methods

By [VelociBar](https://velocibar.app/en/) · Published September 4, 2026 · Updated September 10, 2026 · 5 min read

**To test internet speed on a Mac, open a web speed test, run `networkQuality` in Terminal, or use VelociBar for scheduled measurements.** Web tests give a quick snapshot; Apple’s built-in tool also reports responsiveness under load. Repeated tests help you compare connection quality across hours and days.

## Method 1: Web speed tests (Speedtest.net, Fast.com)

Opening Speedtest.net or Fast.com and waiting a few seconds is the fastest way to check your connection. For a quick spot check, such as whether the wifi is working right now or whether the technician actually fixed the line, it's more than enough, and you don't need to install anything.

But it's worth knowing the limits:

- **The destination matters.** Different servers, routes, and connection settings can produce different results. Use the same method for trend comparisons and another destination to cross-check a suspected problem.
- **The device matters too.** Browser, CPU, network adapter, and WiFi limitations can affect results. A browser test is still a useful measurement of the connection available to that device.
- **It only measures that instant.** A test at 11 a.m. tells you nothing about what happens at 9:30 p.m., when your whole house (and your whole neighborhood) is online at once.

Fine for checking whether your wifi is working right now. Not enough to know whether your internet [is slow specifically at night](https://velocibar.app/en/blog/internet-slow-at-night.html) or only at certain times. For that, you need something more.

## Method 2: Apple’s built-in Terminal tool: networkQuality

macOS Monterey 12 and later include `networkQuality`. [Apple describes it as a test of responsiveness under working conditions.](https://developer.apple.com/videos/play/wwdc2021/10239/) Use the capitalization shown below, especially on a case-sensitive filesystem.

Here's how to run it:

1. Open **Terminal** (Applications → Utilities → Terminal, or press ⌘+Space and type "Terminal").
2. Type the command and press Return:

```
networkQuality
```

Wait for the test to finish. Duration and output fields vary by macOS version and network conditions. This is illustrative output, not a VelociBar benchmark:

```
==== SUMMARY ====
Uplink capacity: 18.220 Mbps
Downlink capacity: 245.981 Mbps
Responsiveness: Medium (612 RPM)
Idle Latency: 14.353 milliseconds
```

Each line tells you something different:

- **Uplink / Downlink capacity.** Real upload and download throughput, measured while the network is under working load, not an isolated burst.
- **Responsiveness.** Apple reports how the network responds under load, with a Low, Medium, or High rating. Other tests can also measure loaded latency; their units and methods may differ.
- **RPM (round trips per minute).** Higher RPM means faster responses under this test’s load. A low result can be consistent with [bufferbloat](https://velocibar.app/en/blog/what-is-bufferbloat.html), but does not identify the cause by itself.
- **Idle Latency.** Latency with the network at rest, no load. It's your baseline: compare it against what happens under load to see how much your connection degrades when you actually push it.

The command has two useful variants:

- `networkQuality -v`: verbose output, with more detail on each phase of the test.
- `networkQuality -s`: tests upload and download sequentially rather than together. This changes the workload, so compare it with other sequential runs. Use `man networkQuality` to check options for your installed version.

The built-in tool requires no additional installation. Its tests generate traffic and can affect other activity while running, so avoid overlapping tests and choose a suitable moment on a metered connection.

## Method 3: Continuous measurement from your menu bar (VelociBar)

Methods 1 and 2 have something in common: they're a snapshot. They tell you how your connection looks right now, at 11 a.m., with the house empty. They can't answer the question you actually care about: "why does my internet slow down every night around 9 p.m.?"

For that you need to run the same kind of test over and over, throughout the day, and compare the results. That's exactly what [VelociBar](https://velocibar.app/en/) does: a Mac menu bar app that runs automatic tests every 15, 30, or 60 minutes (you choose the interval), keeps every result in a local history, and lets you export it to CSV whenever you want.

With that history you can see at a glance whether your speed drops consistently every night, whether the problem is occasional or constant, and whether your responsiveness (RPM) collapses during peak hours even while download speed still looks acceptable. That's the difference between suspecting something and proving it with data.

None of the three methods is redundant: use Speedtest or Fast.com for a quick check, `networkQuality` when you want a precise technical reading without leaving Terminal, and VelociBar when you need to see the full pattern over days.

## Tips for accurate results

Whichever method you use, these details change the result more than you'd think:

- **Use an ethernet cable if you can**, or sit close to the router on the 5 GHz band. 2.4 GHz wifi and distance add variables that have nothing to do with your provider.
- **Pause downloads, backups, and VPNs** before you test. A cloud backup running quietly in the background can eat a big chunk of your bandwidth without you noticing.
- **Repeat the test at different times of day**, not just once in the morning. The pattern (if there is one) only shows up when you compare several moments.
- **Don't trust a single reading.** Both web tests and `networkQuality` can vary from one run to the next for reasons unrelated to your connection, such as momentary server congestion. Run the test two or three times and go with the trend, not the outlier.

VelociBar runs active tests while the app is running and the Mac is awake. Tests transfer data and may affect calls or downloads. Compare results from the same engine; missing or failed tests are not valid zero-speed samples.

## Sources

- [Apple: networkQuality and responsiveness](https://developer.apple.com/videos/play/wwdc2021/10239/)
- [Fast.com: speed and latency measurements](https://fast.com/)

## Let VelociBar measure it for you

Run automatic tests from your Mac's menu bar, keep the history locally, and export it to CSV whenever you need it. No accounts, no cloud: everything stays on your Mac.

[↓ Download VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← All articles](https://velocibar.app/en/blog/)
