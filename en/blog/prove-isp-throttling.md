# How to Prove Your Internet Is Slower Than What You Pay For

September 4, 2026 · 7 min read

> Markdown version of https://velocibar.app/en/blog/prove-isp-throttling.html · [Versión en español](https://velocibar.app/blog/reclamar-isp-internet-lento.md)

You pay for 500 Mbps and a speed test shows 180. You call support, they tell you to restart the router, speed climbs for five minutes, then drops again by evening. If that sounds familiar, the problem isn't your patience: it's that you're arguing anecdotal data against a customer-support script. This guide walks you through turning "my internet is slow" into a case a provider can't wave away with a router reboot.

## Step 0: Rule out your own side first

Before you complain about anything, confirm the problem isn't between your router and your laptop. Connect a device by ethernet directly to the router and repeat the test on more than one device, with everything else paused: no downloads, no backups, no console updates running. If wired speed matches what you're paying for, the problem is your WiFi (a saturated channel, an old router, thick walls) and no complaint to your provider will fix that. If speed is systematically below what you contracted even over ethernet, keep reading: that's when you have a real case against your ISP.

## Step 1: Know what you actually contracted

Check your contract or plan page before you argue numbers. Most providers don't promise a fixed speed; they promise speeds "up to" a certain Mbps (a theoretical ceiling, not a guarantee) and that ceiling almost always assumes a wired connection, not WiFi. Still, "up to 500 Mbps" isn't a license to deliver 50 Mbps consistently: the standard most regulators use is that real-world speed should reasonably approach the contracted number most of the time, not only under lab-perfect conditions.

## Step 2: Measure continuously for at least 1-2 weeks

This is where most complaints fall apart. You send a screenshot of a speed test, and support says: "run it again, right now", and of course, at that moment it looks fine. A one-off test proves nothing because it can't demonstrate a pattern; it only describes a single instant, and a single instant can always be repeated until it comes back clean.

What changes the conversation is a timestamped history generated automatically, without you doing anything. An app like [VelociBar](https://velocibar.app/en/) runs a test every 15, 30, or 60 minutes from your Mac's menu bar (you choose the interval) and stores every result locally. After a week or two you have something a screenshot never could: a curve that shows whether the problem is systematic (every night between 8 and 11 p.m., for example, as we cover in [why your internet is slow at night](https://velocibar.app/en/blog/internet-slow-at-night.html)) or just isolated, random dips. A provider can ignore one complaint; it's much harder to ignore two weeks of data showing the same drop, at the same time, every single night.

## Step 3: Build the evidence file

With the history collected, export the full CSV. VelociBar logs every measurement with `timestamp`, `engine`, `download_mbps`, `latency_ms`, and `responsiveness_rpm`. That file is evidence on its own, but a one-page summary convinces faster than a raw spreadsheet:

- **Contracted speed** vs. **median actual speed** over the period (use the median, not the average, because a few good spikes shouldn't hide the problem).
- **Worst hours**: the time window where speed drops repeatedly, and how many days out of the sample it happens.
- **Responsiveness (RPM)** during those same hours, if you're also seeing dropped video calls or laggy games, that's the bufferbloat indicator, and it usually collapses before Mbps does.

If you also want to cross-check with a well-known external tool, complement your file with a one-off test (see [how to test your Mac's speed](https://velocibar.app/en/blog/speed-test-mac.html)), but treat it as a supplement, not the foundation. The foundation is your continuous history.

## Step 4: Contact support the right way

Now, and only now, call or write to technical support, evidence in hand:

1. State the contracted speed and the median actual speed you measured, with the exact period ("contracted 500 Mbps, median actual 210 Mbps between Sept 1 and 14").
2. Attach the exported CSV or the summary: don't just describe the problem in words.
3. Explicitly ask for a line check and a node-saturation review for your area, those are the two most common technical causes, and naming them heads off the generic "reboot your router" script.
4. Get a ticket number for every contact, and log the date, channel (phone, chat, email), and the name of whoever helped you.

That log of dates matters almost as much as the speed data: if you end up escalating, it proves you already gave the provider a chance to fix it.

## Step 5: Escalate if you're ignored

If support closes the ticket without fixing anything, or the problem persists after several technician visits, the next move is to step outside the conversation with your provider. In the US, the FCC accepts informal consumer complaints; in the UK, it's Ofcom; in Spain, the Oficina de Atención al Usuario de Telecomunicaciones. Most countries have an equivalent telecom regulator or consumer-protection agency, and all of them weigh a two-week CSV far more heavily than "it keeps cutting out."

Check your contract too: many early-termination clauses become void if the provider systematically fails to deliver what it promised: exactly the scenario your history documents. This isn't legal advice (terms vary by country and contract), but it's the argument you can open with, whether you're renegotiating, leaving without a penalty, or filing a formal complaint.

## Build your evidence file effortlessly

VelociBar measures your connection automatically from the macOS menu bar and stores every result in a local history you can export to CSV. When it's time to complain, the evidence is already there. [Download VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355).

## Links

- Blog: https://velocibar.app/blog/
- App Store download: https://apps.apple.com/us/app/velocibar/id6756196355
