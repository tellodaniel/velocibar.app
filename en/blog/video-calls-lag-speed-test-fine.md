> Markdown version of https://velocibar.app/en/blog/video-calls-lag-speed-test-fine.html · [Versión en español](https://velocibar.app/blog/videollamadas-se-cortan-test-velocidad-bien.html)

# Speed Test Is Fine but Video Calls Still Stutter? Check Responsiveness, Not Mbps

By [VelociBar](https://velocibar.app/en/) · Published September 16, 2026 · 11 min read

**A speed test measures how much data your line can move. A video call needs packets to arrive on time.** When calls freeze on a connection that tests fast, the usual cause is latency under load: round trips that stretch from tens of milliseconds to hundreds while the line is busy. Apple’s networkQuality tool reports that as responsiveness (RPM), and you can read it on a Mac in about a minute.

## Why a fast test and a frozen call are both true at once

A video call uses very little of a modern line. [Zoom lists 1.2 Mbps up and down for a 720p one-to-one call](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060748) and 3.8 Mbps up, 3.0 Mbps down for 1080p. [Microsoft says Teams can deliver HD video in under 1.5 Mbps](https://learn.microsoft.com/en-us/microsoftteams/prepare-network), and [Google Meet asks for about 1 Mbps out and 1.3 Mbps in per participant](https://knowledge.workspace.google.com/admin/meet/prepare-your-network-for-meet-meetings-and-live-streams?hl=en) for HD. On a 300 Mbps plan, bandwidth is not the constraint. A speed test that comes back at 300 is telling the truth. It is not the number a call depends on.

The call’s question is different: does each small packet of audio and video arrive within a few tens of milliseconds, every time, in both directions? Zoom’s own in-meeting statistics measure exactly that. [Zoom recommends latency of 150 ms or less, jitter of 40 ms or less, and packet loss of 2% or less](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0070504). None of those three numbers is a speed. A line can move 500 Mbps and still miss all three the moment something else on the network starts a big transfer.

## What the speed test does not show: latency under load

Most speed tests report your **idle latency**: the round-trip time measured before the transfer starts, on a quiet line. It is usually a pleasant number, 10 to 40 ms on cable or fibre. What matters for a call is the round-trip time **while the line is busy**, because your line is busy whenever someone in the house backs up photos, a console downloads an update, or your own Mac syncs a folder.

On many routers and modems that number balloons. The equipment holds outgoing packets in an oversized queue instead of dropping a few, and your call’s packets wait behind everything else. That queueing delay has a name, [bufferbloat](https://velocibar.app/en/blog/what-is-bufferbloat.html), which bufferbloat.net defines as “the undesirable latency that comes from a router or other network equipment buffering too much data.” The IETF has recommended active queue management against it since [RFC 7567 in 2015](https://www.rfc-editor.org/rfc/rfc7567), and the FCC’s Measuring Broadband America report found that latency under downstream load “generally is significantly higher than idle latency” across US providers, with the biggest gap on DSL.

The cleanest way to measure this is the one Apple built into macOS. Since Monterey, every Mac ships with [the networkQuality command](https://velocibar.app/en/blog/speed-test-mac.html), which saturates the line on purpose and counts how many round trips it can still complete. [Apple calls the result responsiveness, in round trips per minute (RPM)](https://support.apple.com/en-us/HT212313): “the number of sequential round-trips, or transactions, a network can do in one minute under normal working conditions.” The method is being standardised at the IETF as [Responsiveness under Working Conditions](https://datatracker.ietf.org/doc/draft-ietf-ippm-responsiveness/), which defines working conditions as a path that is fully utilised so a queue builds up at the bottleneck. In other words, the test creates the exact situation that breaks your call, then measures it.

RPM and milliseconds are the same thing viewed from two sides. Divide 60,000 by the RPM and you get the average round trip in milliseconds under load: 1,000 RPM is 60 ms, 500 RPM is 120 ms, 200 RPM is 300 ms. Apple labels the result Low, Medium or High, and describes Medium as a connection where you “might see momentary pauses or freezes, like during FaceTime audio or video calls.” That sentence describes the mechanism behind the freeze.

## What it looks like on a real line

To show the gap rather than describe it, we ran networkQuality four times back to back on one home Wi-Fi connection on the afternoon of September 16, 2026, from the Mac this article was written on. The raw output is saved alongside the article. This is one line on one afternoon, tested against Apple’s servers, so it says nothing about your provider. It does show how far apart “fast” and “responsive” can sit on the same connection.

Four consecutive networkQuality runs, one home Wi-Fi line, 2026-09-16. Loaded round trips are the request-response samples taken while the download phase saturated the line. Run 4 used the plain summary output, which reports only the RPM and its equivalent in milliseconds.

| Run | Download | Upload | Idle round trip | Round trip under load (median / worst) | Responsiveness |
| --- | --- | --- | --- | --- | --- |
| 1 | 320 Mbps | 154 Mbps | 40 ms | 59 ms / 618 ms | 470 RPM, Medium |
| 2 | 547 Mbps | 158 Mbps | 46 ms | 82 ms / 787 ms | 560 RPM, Medium |
| 3 | 496 Mbps | 149 Mbps | 44 ms | 145 ms / 1,150 ms | 420 RPM, Medium |
| 4 | 626 Mbps | 143 Mbps | 42 ms | 109 ms (from RPM; no raw samples) | 549 RPM, Medium |

Every run would pass any speed test with room to spare. Every run also rated Medium, with the median round trip under load anywhere from 1.5 to more than 3 times the idle figure and the worst samples between 618 ms and 1,150 ms. Run 3 is the one to look at: the fastest-looking download of the first three, and the worst responsiveness, with a median round trip of 145 ms under load, right at the edge of Zoom’s 150 ms guidance, and one in ten samples above 263 ms. A call during that run would freeze for a moment every time a queue like that drained, and a speed test taken a minute later would say everything is fine.

Two honest caveats. Wi-Fi adds its own variance, so an Ethernet run would likely look tighter. And four runs are a snapshot, not a pattern. The pattern is the part that matters when you are trying to work out whether this happens at 9 p.m. every night or only when the backup kicks in, which is why the last step below is to log it.

## How to check your own connection in five minutes

1. **Run networkQuality on your Mac.** Open Terminal, type `networkQuality`, press Return, and wait about 20 seconds. Read the Responsiveness line: the label and the RPM (recent versions of macOS also print the milliseconds). Low or Medium with a healthy download number is the signature this article is about.
2. **Compare idle and loaded latency in a browser test.** Fast.com’s “Show more info” reports unloaded and loaded latency separately; Netflix’s own guidance is that the two should be close to each other. Cloudflare’s speed test does the same and folds the gap into its video-call score. A loaded figure several times the idle one is the same finding from a different server.
3. **Read the call’s own statistics.** During a Zoom call, open Settings, then Statistics, and watch latency, jitter and packet loss while the freeze happens. If latency and jitter jump when a transfer starts elsewhere in the house, you have found the queue.
4. **Repeat over Ethernet.** If the loaded latency collapses back toward idle on a cable, the queue is in your Wi-Fi, not your router or your provider. If it stays high, the bottleneck is upstream of the cable.
5. **Log it over a few days.** A single run tells you what the line did at that minute. To see whether the problem is a nightly pattern, a backup schedule, or random, you need responsiveness measured on a schedule. [VelociBar](https://velocibar.app/en/) runs a test every 15, 30 or 60 minutes from the menu bar, alternates Apple’s engine with a CDN download, and writes each result, including RPM, to a local CSV. VelociBar labels the RPM it records using the bands under 200 (Low), 200 to 999 (Medium) and 1,000 or more (High).

## When it is not responsiveness

Queueing delay is the most common explanation for a fast test and a bad call, and it is not the only one. Before changing routers, rule these out, because each has a different fix.

| What you see | Likely cause | How to check |
| --- | --- | --- |
| Freezes on Wi-Fi, fine on a cable | Wireless interference or a crowded 2.4 GHz band. [Apple’s own advice](https://support.apple.com/en-us/102319) is to move devices to 5 GHz and reduce what shares the band. | Step 4 above |
| Video freezes but audio survives; fans spin up | The Mac itself. Zoom attributes many video problems to “device settings, competing applications, or quality issues,” and notes dual-core laptops drop to around 5 frames per second when screen sharing. | Close heavy apps; watch CPU in Activity Monitor during the call |
| Bad only on the work VPN | VPN overhead. [Microsoft recommends against sending real-time traffic over a VPN](https://learn.microsoft.com/en-us/microsoftteams/qos-in-teams) because it “inherently adds packet overhead and creates delays in real-time traffic.” | Test the same call off the VPN |
| Only one person freezes for everyone else | That person’s connection, not yours. | Ask them to run the same checks |
| Freezes when you upload or sync | Upload saturation. Home plans have far less uplink than downlink, and a cloud backup fills it. This is often bufferbloat on the upload side. In the four runs above, the median round trip during the upload phase ran higher than during the download phase every time: 173 ms against 59 ms in run 1, 151 against 82 in run 2, 214 against 145 in run 3. | Pause the sync and retest |

RPM has limits of its own. It is one number from one path to Apple’s servers, and as [Cloudflare points out](https://blog.cloudflare.com/aim-database-for-internet-quality/), the route a speed test takes “may be vastly different” from the route your calls take. Two tools that follow the same method should agree on the label, not on the exact RPM. Treat it as a reliable indicator of queueing on your line, not as a verdict on a specific call.

## What fixes it, in order

1. **Plug in for calls that matter.** Ethernet removes the Wi-Fi queue entirely and is the only fix that costs nothing and works today.
2. **Move heavy transfers off call hours.** Schedule cloud backups, photo sync and console updates for the night. Most of the queue is caused by traffic you control.
3. **Turn on queue management on the router.** If your router offers Smart Queue Management (SQM, usually fq_codel or CAKE), enable it and set it to slightly below your measured speeds. Older firmware often lacks SQM entirely, so check for a firmware update before assuming your router cannot do this. If it only offers QoS, prioritise your Mac or your calling app. [The bufferbloat guide](https://velocibar.app/en/blog/what-is-bufferbloat.html) ranks these options in detail.
4. **Get off 2.4 GHz.** Use the 5 GHz or 6 GHz band for the machine you take calls on, and keep the router within line of sight if you can.
5. **If it only happens at the same hours every day, measure and document it.** Congestion at the provider’s node peaks in the evening, and a log of responsiveness by hour is the evidence that separates [peak-hour congestion](https://velocibar.app/en/blog/internet-slow-at-night.html) from a problem inside your home. [Here is how to turn that log into a support request](https://velocibar.app/en/blog/prove-isp-throttling.html).

## Frequently asked questions

### Why does Zoom freeze even though my internet is fast?

Because Zoom needs packets on time rather than in bulk. A 720p call uses about 1.2 Mbps, so a 300 Mbps plan has plenty of capacity. Freezes come from latency, jitter and packet loss, which rise when the line is busy with other traffic. Measure responsiveness under load, not download speed.

### Is upload speed more important than download for video calls?

Neither matters much once you have a few Mbps in each direction. What matters is that the smaller of the two, almost always upload on home plans, does not get saturated by a backup or sync during the call. When it does, the upload queue delays your outgoing audio and video and the other side sees you freeze.

### What is a good internet speed for Zoom?

Zoom’s published figures are 1.2 Mbps up and down for a 720p one-to-one call and 3.8 Mbps up, 3.0 Mbps down for 1080p. Almost any broadband plan clears that. A good connection for Zoom is one that keeps latency at or below 150 ms and jitter at or below 40 ms while the rest of the house is online.

### Why does the call freeze for me but not for the other participants?

Everyone on a call shares the same meeting server, so if only your feed breaks up, the problem is between your Mac and that server: your Wi-Fi, your router’s queue, your uplink or your VPN. Run networkQuality and the Ethernet comparison above to narrow it down.

VelociBar runs active tests while the app is running and the Mac is awake. Tests transfer data and may affect calls or downloads. Compare results from the same engine; missing or failed tests are not valid zero-speed samples. The measurements in this article are from one connection on one day and are not a claim about any provider.

## Sources

- [Apple: test your network responsiveness with networkQuality (RPM, Low/Medium/High)](https://support.apple.com/en-us/HT212313)
- [IETF: Responsiveness under Working Conditions (draft-ietf-ippm-responsiveness)](https://datatracker.ietf.org/doc/draft-ietf-ippm-responsiveness/)
- [Zoom: meeting statistics and recommended latency, jitter and packet loss](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0070504)
- [Zoom: system requirements and bandwidth](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060748)
- [Microsoft: prepare your network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network)
- [Microsoft: quality of service in Teams (VPN guidance)](https://learn.microsoft.com/en-us/microsoftteams/qos-in-teams)
- [Google: prepare your network for Meet](https://knowledge.workspace.google.com/admin/meet/prepare-your-network-for-meet-meetings-and-live-streams?hl=en)
- [Apple: resolve Wi-Fi and Bluetooth issues caused by wireless interference](https://support.apple.com/en-us/102319)
- [Cloudflare: idle and loaded latency in the AIM test](https://blog.cloudflare.com/aim-database-for-internet-quality/)
- [Netflix: Fast.com unloaded and loaded latency](https://about.netflix.com/en/news/fast-com-now-measures-latency-and-upload-speed)
- [Bufferbloat.net: introduction](https://www.bufferbloat.net/projects/bloat/wiki/Introduction/)
- [IETF RFC 7567: active queue management](https://www.rfc-editor.org/rfc/rfc7567)
- [FCC: Measuring Broadband America, latency under load](https://data.fcc.gov/download/measuring-broadband-america/2023/2023-Fixed-Measuring-Broadband-America-Report.pdf)

## Log your responsiveness over time

VelociBar measures download speed and responsiveness in RPM on a schedule from the macOS menu bar and keeps the history on your Mac, so you can see the hours when round trips balloon, not just the minute you ran a test. No accounts, no cloud.

[↓ Download VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← All articles](https://velocibar.app/en/blog/)
