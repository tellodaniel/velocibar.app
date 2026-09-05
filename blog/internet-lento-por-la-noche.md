# ¿Por qué tu internet va lento por la noche? Causas y solución

4 de septiembre de 2026 · Blog de VelociBar

> Versión en Markdown de https://velocibar.app/blog/internet-lento-por-la-noche.html · [English version](https://velocibar.app/en/blog/internet-slow-at-night.md)

Es un patrón que millones de personas conocen sin saber que tiene nombre: a las 15:00 tu conexión vuela, y a las 21:30 una videollamada se congela y Netflix baja de calidad. No es tu imaginación y, casi seguro, tampoco es tu router. Se llama **congestión de hora pico**.

## La causa principal: compartes red con tus vecinos

Tu conexión no es un carril privado hasta el proveedor. En la mayoría de tecnologías de acceso —cable coaxial (DOCSIS), fibra GPON e internet móvil— el último tramo de la red se comparte entre decenas o cientos de hogares de tu zona.

Los proveedores dimensionan esa red compartida con un **ratio de contención**: venden más capacidad de la que existe, asumiendo que no todos la usan a la vez. De día funciona. Pero entre las 20:00 y las 23:00 —cuando todo el barrio está en el sofá con streaming, juegos y videollamadas— la demanda simultánea supera la capacidad del nodo, y la velocidad de todos cae.

Por eso el patrón es tan reconocible: **lento cada noche a la misma hora, rápido de madrugada y a media mañana**. Una avería no entiende de horarios; la congestión, sí.

## Otras causas con el mismo síntoma

- **Interferencia WiFi vecinal.** Por la noche también se encienden los routers de tus vecinos. Si usas la banda de 2,4 GHz, los canales saturados degradan tu red local aunque tu línea esté bien. Prueba con cable o en la banda de 5 GHz para descartarlo.
- **Congestión dentro de tu propia casa.** Backups en la nube, actualizaciones de consolas y streaming en 4K en otra habitación compiten contigo. Es [bufferbloat](https://velocibar.app/blog/que-es-bufferbloat.md) doméstico: la línea está llena y tu tráfico espera en cola.
- **Gestión de tráfico del proveedor.** Algunos ISP priorizan o limitan ciertos tráficos en horas de carga. Es difícil de ver desde fuera — precisamente por eso necesitas un historial de mediciones y no una prueba suelta.

## Cómo comprobarlo con datos (no con sensaciones)

Un test de velocidad puntual no puede demostrar un problema que solo existe a ciertas horas: si lo ejecutas a las 11:00 dará un resultado perfecto. Lo que necesitas es la **curva del día completo**:

1. **Mide de forma continua durante al menos una semana.** Una app como [VelociBar](https://velocibar.app/) ejecuta un test automático cada 15, 30 o 60 minutos desde la barra de menú de tu Mac y guarda el historial en local.
2. **Busca el patrón.** Si la velocidad cae de forma sistemática entre las 20:00 y las 23:00 y se recupera de madrugada, tienes congestión de hora pico. Si las caídas son aleatorias, sospecha de tu WiFi o del cableado.
3. **Mira también la responsividad, no solo los Mbps.** En horas de carga, la latencia bajo carga (medida en RPM) suele desplomarse antes que la velocidad de descarga. Es lo que hace que Zoom se entrecorte aunque el test "dé bien".
4. **Exporta la evidencia.** Un CSV con fecha, hora y velocidad de cada medición convierte "mi internet va lento por la noche" en un dato verificable que el soporte técnico no puede despachar con un reinicio de router.

## Qué puedes hacer al respecto

### 1. Reclama con datos

Si pagas 300 Mbps y cada noche recibes 40, tu proveedor está incumpliendo de forma sistemática. Envía el historial exportado a soporte y pide que revisen la saturación del nodo de tu zona. Guía completa: [cómo reclamar a tu ISP por internet lento](https://velocibar.app/blog/reclamar-isp-internet-lento.md).

### 2. Considera cambiar de tecnología, no solo de plan

Contratar más megas en un nodo saturado no arregla nada: la congestión limita a todos por igual. Cambiar de cable a fibra —o de un proveedor masificado a uno con menos clientes en tu zona— suele dar mejor resultado que subir de plan.

### 3. Optimiza lo que controlas

- Programa backups y descargas grandes para la madrugada.
- Usa cable ethernet para el equipo de trabajo y las videollamadas.
- Activa Smart Queue Management (SQM/QoS) en tu router para que la congestión doméstica no añada lag propio.

## Enlaces

- Este artículo (HTML): https://velocibar.app/blog/internet-lento-por-la-noche.html
- Blog de VelociBar: https://velocibar.app/blog/
- VelociBar para macOS: https://apps.apple.com/us/app/velocibar/id6756196355
