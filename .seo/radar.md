# Demand radar

Outside-in demand signals, cumulative. Free tier only (web search; Reddit was unreachable to the search tool on 2026-09-16, so community signals lean on Apple Community, MacRumors, Xfinity forums, Movistar community and ES tech press). Prune dropped and expired rows older than 90 days.

## Signals

| seen | kind | source | url | quote | engagement | seed | status |
|---|---|---|---|---|---|---|---|
| 2026-03-14 | asked | Xfinity forum | https://forums.xfinity.com/conversations/customer-service/throttling-have-proof/69b55181aad6d77c8403c390 | "charging for 1.2 Gig... throttling to 70-294Mbps max (25% of paid speeds)" | 56 views, 2 replies | prove ISP throttling | proposed (refresh prove-isp-throttling) |
| 2026-04-15 | complained | Xfinity forum | https://forums.xfinity.com/conversations/your-home-network/throttling-for-many-months/69e01a729a4289797736bdcc | "billing me for full service delivering less than 25%", filed state AG complaint | 84 likes, 4 comments | prove ISP throttling | proposed (refresh prove-isp-throttling) |
| 2025-09-21 | asked | Xfinity forum | https://forums.xfinity.com/conversations/your-home-network/slow-internet-speeds-around-8pm-every-single-night/656fc41be4ada5345191c536 | speed drops 200+ → 3-5 Mbps at 8 pm nightly | 109 views | internet slow at night | proposed (refresh slow-at-night) |
| 2025-12-27 | asked | Xfinity forum | https://forums.xfinity.com/conversations/your-home-network/intermittent-latency-packetlosslike-behavior-under-upload-load-signals-clean/694fa5e58f5b6e1c4a8a1201 | "feels like packet loss (gaming lag, voice calls cutting out)... only under upstream load, not at idle" | 139 views | video call stutters but speed test is fine | proposed (create: RPM not Mbps) |
| 2026-05-21 | complained | Xfinity forum | https://forums.xfinity.com/conversations/your-home-network/jitter-and-bufferbloat-problem/6a0f11086040aa483af22559 | "significant jitter, latency spikes, and bufferbloat, especially during gaming" | 331 views, 4 replies | bufferbloat fix | proposed (create: RPM not Mbps) |
| 2025-08-08 | complained | Xfinity forum | https://forums.xfinity.com/conversations/your-home-network/re-high-latency-under-load-bufferbloat-need-help-escalating-docsis-31-smart-queues-enabled/689658d7c3884e34158ff006 | "I get D/F mostly, rarely C" on the bufferbloat test, stuttering on Teams calls | 180 views | bufferbloat fix | proposed |
| 2026-08-15 | reacted | MacRumors forum | https://forums.macrumors.com/threads/netcheck-a-little-menu-bar-app-that-tells-you-when-your-internet-is-actually-working-free.2486947/ | the WiFi icon "only reflects your connection to the router" | dev launch thread | menu bar internet speed mac | proposed (create: menu-bar apps compared) |
| 2026-06-06 | reacted | Infobae Perú | https://www.infobae.com/peru/2026/06/06/internet-lento-como-reclamar-a-tu-operador-y-en-que-plazo-debe-responder/ | how and when to formally report slow internet (Osiptel) | news | reclamar velocidad internet al proveedor | proposed (refresh reclamar-isp) |
| 2026-02-08 | reacted | Infobae | https://www.infobae.com/tecno/2026/02/08/el-motivo-por-el-que-el-wifi-se-vuelve-lento-en-las-noches-asi-es-posible-evitar-este-problema/ | why WiFi slows at night: node / neighbour saturation | news | internet lento por la noche | proposed (refresh) |
| 2026 (undated) | trending | tecnoorbita.com | https://www.tecnoorbita.com/tu-conexion-pierde-velocidad-por-la-noche-aunque-estes-solo-descubre-por-que-tu-wifi-va-mas-lento-de-noche-por-culpa-de-tus-vecinos-y-como-mejorarlo/ | FTTH download drops 20-25% between 8 and 11 pm in dense areas | article | internet lento por la noche | proposed (refresh) |
| undated | asked | Comunidad Movistar | https://comunidad.movistar.es/discussions/soporte-fibra-optica/internet-inestable-sobre-todo-por-la-noche-a-partir-de-las-8/5181542 | "Internet inestable sobre todo por la noche (a partir de las 8)" | thread (date blocked) | internet lento por la noche | proposed (refresh) |

## Seeds

| seed | communities | signals 30d | last hit | status |
|---|---|---|---|---|
| internet slow at night / internet lento por la noche | Xfinity, Movistar, ES press | 0 (4 in 12 mo) | 2026-06 | active |
| prove ISP throttling / reclamar velocidad al proveedor | Xfinity, Infobae | 0 (3 in 12 mo) | 2026-06-06 | active |
| video call stutters but speed test is fine / bufferbloat fix | Xfinity | 0 (3 in 12 mo) | 2026-05-21 | active |
| menu bar internet speed mac | MacRumors, App Store | 0 (1 in 12 mo) | 2026-08-15 | active |
| monitor internet speed over time mac / log internet speed history | Apple Community | 0 | 2023 | dormant |
| networkQuality mac terminal / responsiveness RPM low | Apple Community | 0 | 2024-03 | dormant |
| wifi drops randomly mac | Apple support | 0 | 2025-04 | dormant (owned by Apple/ISP support) |
| speed test results different every time | evergreen blogs | 0 | — | dormant |
| medir velocidad internet mac automático | ES how-to sites | 0 | — | dormant (covered by test-velocidad-mac) |
