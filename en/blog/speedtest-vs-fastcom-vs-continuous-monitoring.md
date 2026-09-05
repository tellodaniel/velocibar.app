# Speedtest vs Fast.com: What Each Really Measures (and What Neither Tells You)

September 4, 2026 · 7 min read

> Markdown version of https://velocibar.app/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.html · [Versión en español](https://velocibar.app/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.md)

"Which is the better speed test, Speedtest or Fast.com?" is the wrong question. Both are reliable tools, but they measure different things, with different methods, for different purposes. Neither one lies to you, but neither gives you the full picture either. Let's look at exactly what each one does, where they overlap, and what information stays out of reach no matter which test you run.

## How Ookla's Speedtest works

Speedtest looks through thousands of servers spread across the world and picks one that's close to you and very well connected — usually hosted on carrier infrastructure or in a datacenter with plenty of bandwidth to spare. It then opens several parallel connections against that server and adds up their combined throughput.

That design isn't an accident: Speedtest is built to find the **ceiling** of your line. If you pay for 500 Mbps, you want a test capable of squeezing out all 500 Mbps if your line can deliver them, and multiple parallel connections against an optimal server is how you get there. It's the right tool for one specific question: *is my provider giving me what I paid for?*

What Speedtest isn't designed to represent is your **everyday experience**. When you stream a show, download a file, or load a page, you're almost never talking to an optimal server over several parallel connections — you're talking to a single server, over a single connection, that may be farther away or less generously provisioned. The number Speedtest gives you is real, but it's your best case, not your typical one.

## How Fast.com works

Fast.com, from Netflix, was built with a much narrower purpose: letting anyone check whether their ISP was **throttling traffic to Netflix**. That's why, instead of generic test servers, Fast.com measures against Netflix's own infrastructure — the same network of servers (Open Connect) that streams you movies and shows.

It's a deliberately simple tool: few settings, little configuration, one big number in the middle of the screen. That makes it very approachable, but also more limited as a general diagnostic: it measures the "traffic to Netflix" scenario well, which serves as a reasonable proxy for your general download speed, though it isn't exactly the same as talking to any other service.

## What Speedtest and Fast.com have in common

Beyond their differences, both share a structural limitation: they're a **snapshot of one moment**, taken right when you, deliberately, decide to look. And that detail matters more than it seems.

Some ISPs have been reported to handle traffic bound for well-known test servers more favorably — and the servers behind Speedtest and Fast.com are, by definition, some of the most recognizable ones out there. That's not a blanket accusation, nor something provable in every individual case, but it is a plausible reason a result can look better in the test than the connection feels day to day. And even without any special treatment at all, the simple fact that the result depends on a single moment — the exact instant you open the app — already leaves out everything that happens the rest of the day.

## Comparison: Speedtest, Fast.com, and continuous monitoring

| | Speedtest | Fast.com | Continuous monitoring |
|---|---|---|---|
| **What it measures** | Your line's ceiling: maximum throughput possible using parallel connections | Real throughput against Netflix's network (Open Connect) | Your actual speed and responsiveness over the course of the day, test after test |
| **Test servers** | Global network of third-party servers, picks the most optimal one near you | Netflix's own infrastructure (Open Connect) | Global CDN + Apple's networkQuality tool |
| **Best use** | Verifying your contracted speed against your ISP | Checking whether traffic to Netflix is being throttled | Understanding your connection's real pattern, day and night |
| **Latency under load** | Includes a loaded-latency metric, but only for that instant | Includes a loaded-latency metric, but only for that instant | Responsiveness (RPM) measured on every test, with history |
| **History over time** | No, unless you create an account and repeat it manually | No | Yes, automatic, every 15/30/60 minutes |
| **Exportable evidence** | Screenshot or account with limited history | Screenshot | Local CSV with date, time, Mbps, and RPM for every test |

## What neither one tells you

Neither Speedtest nor Fast.com can answer questions that depend on time: how does your connection behave at 9 p.m. compared to 9 a.m.? Are there drops that repeat every night or every weekend? Did your connection actually improve after you switched plans or routers, or does it just look that way because you happened to test it once at a good moment?

Those questions don't get answered by a one-off test, no matter how good the test is. They get answered by **continuous monitoring**: automatic, repeated measurements that draw a curve, not a point. That's exactly why [VelociBar](https://velocibar.app/en/) exists — a macOS menu bar app that runs an automatic test every 15, 30, or 60 minutes, measures both download speed and responsiveness under load (RPM), and keeps the entire history locally, exportable to CSV.

The honest conclusion is that these tools don't compete with each other — they complement each other. Use Speedtest or Fast.com for a spot check — say, to [run a speed test on your Mac](https://velocibar.app/en/blog/speed-test-mac.html) before an important video call. And if you suspect your connection gets worse at certain times or want to [prove your ISP is throttling you with data](https://velocibar.app/en/blog/prove-isp-throttling.html), you need the full pattern that only continuous monitoring can give you.

## Links

- Blog: https://velocibar.app/en/blog/
- Download VelociBar (App Store): https://apps.apple.com/us/app/velocibar/id6756196355
