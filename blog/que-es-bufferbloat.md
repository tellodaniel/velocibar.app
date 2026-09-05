# Qué es el bufferbloat (y por qué tu videollamada se congela con 300 Mbps)

4 de septiembre de 2026 · 7 min de lectura

> Versión en Markdown de https://velocibar.app/blog/que-es-bufferbloat.html · [English version](https://velocibar.app/en/blog/what-is-bufferbloat.md)

Tienes 300 Mbps contratados, el test de velocidad marca 290, y aun así el Zoom se congela justo cuando alguien en casa sube fotos a la nube o hace una copia de seguridad. No es una avería, no es tu WiFi y el test de velocidad no miente: el problema tiene nombre, se llama **bufferbloat**, y es uno de los defectos de red más comunes precisamente porque es invisible para un test de velocidad normal.

## Qué es el bufferbloat

Cada router y cada módem tiene un pequeño almacén de memoria — un **buffer** — donde guarda los paquetes que están a punto de salir por tu línea. Existe por una buena razón: si dos paquetes llegan a la vez, uno espera un instante en vez de perderse. Pero muchos fabricantes, para evitar a toda costa que se descarte un solo paquete, hicieron ese almacén enorme. Y ahí empieza el problema.

Imagina la caja de un supermercado con una cinta transportadora kilométrica detrás. Mientras la cola sea corta, todo va rápido. Pero si entra más gente de la que la caja puede atender, la cinta no dice "no caben más": simplemente se llena y se llena, y cada persona nueva espera detrás de todas las anteriores. Nadie se queda sin pasar, pero la espera se dispara.

Eso es exactamente lo que ocurre en tu router cuando la línea está saturada — por ejemplo, subiendo un vídeo grande o haciendo una copia de seguridad en la nube. El buffer sobredimensionado acepta cientos de paquetes de más en vez de descartarlos, así que la **velocidad de subida o bajada apenas se resiente**. Pero cada paquete nuevo — el de tu videollamada, el de tu partida online, el de la página que intentas cargar — tiene que esperar su turno detrás de una cola larguísima. El resultado es **latencia altísima con throughput perfecto**: exactamente la combinación que un test de velocidad normal no detecta, porque solo mide cuántos megabits caben por el tubo, no cuánto tardan en llegar.

## Los síntomas: el test da bien, pero todo se traba

El bufferbloat tiene una firma muy reconocible una vez que sabes buscarla:

- El test de velocidad da un resultado excelente — a veces mejor que nunca — y aun así la videollamada se congela.
- Las partidas online tienen lag intermitente, no constante: bien la mayor parte del tiempo, terrible en ráfagas.
- Las páginas web tardan en empezar a cargar, aunque luego bajen rápido.
- El problema aparece siempre que **alguien en la red sube algo pesado**: una copia de seguridad en la nube, una foto de 4K, una actualización de consola, un torrent. En cuanto esa subida o descarga termina, todo vuelve a la normalidad.

Si reconoces este patrón — sobre todo la parte de "coincide con que alguien sube algo" — es casi con seguridad bufferbloat, no un problema de tu proveedor ni de tu [horario de congestión nocturna](https://velocibar.app/blog/internet-lento-por-la-noche.html), aunque ambos problemas pueden convivir en la misma casa.

## Cómo medirlo: la responsividad en RPM

La forma correcta de medir el bufferbloat no es la velocidad, sino la **responsividad bajo carga**, expresada en **RPM (roundtrips per minute)**: cuántas veces por minuto tu red es capaz de completar un viaje de ida y vuelta mientras está saturada de tráfico. Es la métrica que reporta la herramienta `networkQuality` de Apple, y la clasifica en tres niveles: **Baja, Media o Alta**.

No hace falta memorizar un número exacto — y conviene desconfiar de cualquiera que te dé un umbral demasiado preciso. Lo que sí puedes esperar, en términos generales: con unos pocos cientos de RPM, las videollamadas y las partidas online van a sufrir en cuanto la línea se sature; por encima de mil, la experiencia suele ser cómoda incluso con tráfico pesado de fondo. Lo importante no es el número aislado, sino verlo **a lo largo del tiempo**: si tu responsividad se desploma cada noche a las 22:00, cada vez que arranca el backup automático, o cada fin de semana, ahí tienes la causa.

Un test puntual solo te da una foto del RPM en ese instante — lo mismo que ocurre si solo [haces un test de velocidad en tu Mac](https://velocibar.app/blog/test-velocidad-mac.html) una vez y confías en ese número. [VelociBar](https://velocibar.app/) mide la responsividad automáticamente varias veces al día desde la barra de menú de tu Mac y guarda el historial en local, así que puedes ver exactamente cuándo golpea el bufferbloat — por la noche, durante el backup, cuando hay clases online en otra habitación — en vez de adivinarlo.

## Cómo solucionarlo, de mayor a menor impacto

### 1. Activa Smart Queue Management (SQM) en el router

Es, con diferencia, la solución más efectiva. SQM combina un límite de velocidad ligeramente por debajo de tu línea real con un algoritmo de gestión de colas moderno — **fq_codel** o **CAKE** — que reparte el ancho de banda de forma justa entre flujos y evita que la cola crezca sin control. La mayoría de los routers de fabricante no lo traen activado por defecto, o directamente no lo incluyen.

### 2. Configura QoS para priorizar tráfico sensible a la latencia

Si tu router ofrece QoS (Quality of Service), prioriza videollamadas y juego online por encima de descargas y backups. No elimina el bufferbloat por sí solo, pero decide quién espera en la cola primero.

### 3. Usa cable ethernet para lo que no puede esperar

El WiFi añade su propia cola y su propia variabilidad encima de la del router. Para la máquina de trabajo, las videollamadas importantes o el equipo de juego, un cable ethernet elimina una fuente entera de latencia añadida.

### 4. Evita subidas pesadas simultáneas

Programa los backups en la nube y las subidas grandes para cuando no los necesites en tiempo real, o para cuando nadie más en casa esté en una videollamada. Es la solución más simple y no cuesta nada.

### 5. Si el router del ISP no trae SQM, cámbialo

Muchos routers de operador no permiten activar SQM. Un firmware abierto como **OpenWrt**, instalado en un router compatible, trae fq_codel o CAKE listos para activar en minutos y suele ser la mejora más notable que puedes hacer en toda tu red doméstica.

## Mide tu bufferbloat a lo largo del tiempo

VelociBar registra tu responsividad en RPM automáticamente desde la barra de menú de macOS, para que veas exactamente cuándo se dispara la latencia bajo carga — no solo cuánto marca ahora mismo. Sin cuentas, sin nube: todo en tu Mac.

**Descargar:** https://apps.apple.com/us/app/velocibar/id6756196355

## Enlaces

- Blog: https://velocibar.app/blog/
- Descargar en la App Store: https://apps.apple.com/us/app/velocibar/id6756196355
