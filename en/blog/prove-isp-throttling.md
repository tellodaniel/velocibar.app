> Markdown version of https://velocibar.app/en/blog/prove-isp-throttling.html · [Versión en español](https://velocibar.app/blog/reclamar-isp-internet-lento.html)

# How to Document Slow Internet for Your ISP

By [VelociBar](https://velocibar.app/en/) · Published September 4, 2026 · Updated September 10, 2026 · 5 min read

**To document slow internet for your ISP, collect repeatable wired tests, record the conditions, and share a dated summary with support.** Keep results from both quiet and busy hours. A speed history can demonstrate recurring slowdowns; it cannot, by itself, prove deliberate ISP throttling or a contractual breach.

## Step 0: Rule out your own side first

Start with ethernet and pause other traffic. Check that the adapter, cable, router ports, and device support your plan speed. Repeat on another device and test destination. If wired results improve but WiFi remains slow, investigate the wireless segment; your ISP may still help if it supplied the router.

## Step 1: Know what you actually contracted

Check the speed definitions, connection requirements, and complaint procedure in your plan or contract. Advertised, typical, and minimum guaranteed speeds are different measures. Whether a result breaches an agreement depends on the contract and applicable local rules; a low test result alone does not decide that question.

## Step 2: Collect comparable measurements over time

Report the fault promptly; you do not need to wait two weeks to contact support. Several days of measurements can reveal a recurring pattern, and a longer sample can help with intermittent issues. A single test remains useful evidence of that moment, even though it cannot establish a trend.

What changes the conversation is a timestamped history generated automatically, without you doing anything. An app like [VelociBar](https://velocibar.app/en/) runs a test every 15, 30, or 60 minutes from your Mac's menu bar (you choose the interval) and stores every result locally. After a week or two you have something a screenshot never could: a curve that shows whether the problem is systematic (every night between 8 and 11 p.m., for example, as we cover in [why your internet is slow at night](https://velocibar.app/en/blog/internet-slow-at-night.html)) or just isolated, random dips. A provider can ignore one complaint; it's much harder to ignore two weeks of data showing the same drop, at the same time, every single night.

## Step 3: Build the evidence file

Export the original CSV and keep its column names. VelociBar’s current log includes `timestamp`, `source`, `is_error`, `download_mbps`, `latency_ms`, `duration_s`, `bytes_downloaded`, and `responsiveness_rpm`. Separate successful tests from errors and group by `source` before calculating summaries. Older app versions may have fewer fields.

- **Plan speed and measured distribution.** Report the median, range, and number of successful tests for each engine and time window. Include typical and poor periods so the summary does not cherry-pick results.
- **Worst hours**: the time window where speed drops repeatedly, and how many days out of the sample it happens.
- **Responsiveness and latency.** Keep engine results separate. Apple’s `latency_ms` is derived from RPM; the CDN engine records initial HTTP response time in that column. A zero RPM may mean unmeasured, so it should not be interpreted as a valid responsiveness score.

If you also want to cross-check with a well-known external tool, complement your file with a one-off test (see [how to test your Mac's speed](https://velocibar.app/en/blog/speed-test-mac.html)), but treat it as a supplement, not the foundation. The foundation is your continuous history.

## Step 4: Contact support the right way

When you contact technical support, include what you have measured so far:

1. State the contracted speed and the median actual speed you measured, with the exact period ("contracted 500 Mbps, median actual 210 Mbps between Sept 1 and 14").
2. Attach the exported CSV or the summary: don't just describe the problem in words.
3. Ask support to check the line and investigate the recurring time window, including possible capacity or routing issues. Avoid presenting a suspected cause as a confirmed diagnosis.
4. Get a ticket number for every contact, and log the date, channel (phone, chat, email), and the name of whoever helped you.

That log of dates matters almost as much as the speed data: if you end up escalating, it proves you already gave the provider a chance to fix it.

## Step 5: Escalate if you're ignored

If the problem remains unresolved, follow the provider’s formal complaint process and then the route that applies in your country. The [FCC complaint portal](https://consumercomplaints.fcc.gov/hc/en-us) accepts US internet-service complaints. Consult [Ofcom’s guidance](https://www.ofcom.org.uk/make-a-complaint/complain-about-mobile-phone-or-internet-services) for the appropriate UK route, and [Spain’s telecommunications complaints office](https://usuariosteleco.digital.gob.es/reclamaciones) for Spanish requirements. Evidence requirements and remedies vary.

Do not assume a speed log automatically cancels an early-termination charge. Check the relevant contract terms and complaint rules before seeking cancellation, compensation, or another remedy.

VelociBar runs active tests while the app is running and the Mac is awake. Tests transfer data and may affect calls or downloads. Compare results from the same engine; missing or failed tests are not valid zero-speed samples.

## Sources

- [FCC: internet service complaints](https://consumercomplaints.fcc.gov/hc/en-us)
- [Ofcom: faults, complaints, and dispute resolution](https://www.ofcom.org.uk/phones-and-broadband/service-quality/broadband-wifi-help)
- [Spain: telecommunications complaints](https://usuariosteleco.digital.gob.es/reclamaciones)

## Build your evidence file effortlessly

VelociBar measures your connection automatically from the macOS menu bar and stores every result in a local history you can export to CSV. When it's time to complain, the evidence is already there.

[↓ Download VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← All articles](https://velocibar.app/en/blog/)
