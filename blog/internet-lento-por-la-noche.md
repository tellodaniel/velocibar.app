> Versión en Markdown de https://velocibar.app/blog/internet-lento-por-la-noche.html · [English version](https://velocibar.app/en/blog/internet-slow-at-night.html)

# ¿Por qué tu internet va lento por la noche? Causas y solución

Por [VelociBar](https://velocibar.app/) · Publicado el 4 de septiembre de 2026 · Actualizado el 10 de septiembre de 2026 · 4 min de lectura

**El internet lento por la noche puede deberse a congestión en hora pico, descargas en casa o interferencias WiFi.** Compara pruebas por cable en horas tranquilas y ocupadas antes de atribuirlo al ISP. Una caída recurrente documenta un problema, pero no demuestra su causa ni una limitación deliberada del proveedor.

## Una posible causa: capacidad de red compartida

Tu conexión no es un carril privado hasta el proveedor. En la mayoría de tecnologías de acceso —cable coaxial (DOCSIS), fibra GPON e internet móvil— el último tramo de la red se comparte entre decenas o cientos de hogares de tu zona.

La capacidad compartida puede convertirse en un cuello de botella si la demanda simultánea supera lo que puede entregar un tramo de red. El streaming, las descargas y las llamadas pueden aumentar esa demanda por la tarde o noche. El horario y el impacto dependen del proveedor y la zona; una red compartida no está necesariamente saturada.

Una caída repetida por la noche te da un horario que investigar. Los backups programados y las interferencias locales también pueden seguir un horario: ese patrón, por sí solo, no distingue un problema del ISP de uno en casa.

## Otras causas con el mismo síntoma

- **Interferencia WiFi vecinal.** Las redes cercanas pueden competir por el tiempo de transmisión. Compara WiFi con ethernet a la misma hora; un mejor resultado por cable apunta al tramo inalámbrico.
- **Congestión dentro de tu propia casa.** Backups, actualizaciones y streaming comparten capacidad. Si las colas añaden demasiada demora, también puede haber [bufferbloat](https://velocibar.app/blog/que-es-bufferbloat.html).
- **Gestión de tráfico del proveedor.** Algunos ISP priorizan o limitan ciertos tráficos en horas de carga. Es difícil de ver desde fuera; precisamente por eso necesitas un historial de mediciones y no una prueba suelta.

## Cómo comprobarlo con datos (no con sensaciones)

Un test de velocidad puntual no puede demostrar un problema que solo existe a ciertas horas: si lo ejecutas a las 11:00 dará un resultado perfecto. Lo que necesitas es la **curva del día completo**:

1. **Mide de forma continua durante al menos una semana.** Una app como [VelociBar](https://velocibar.app/) ejecuta un test automático cada 15, 30 o 60 minutos desde la barra de menú de tu Mac y guarda el historial en local.
2. **Busca el patrón.** Mantén comparables el equipo, la conexión, el motor y el tráfico de fondo. Repite pruebas por cable en horas tranquilas y ocupadas. Si varios destinos se ralentizan con el tráfico doméstico en pausa, pide al ISP revisar capacidad compartida o rutas.
3. **Mira también la responsividad, no solo los Mbps.** La latencia se mide en milisegundos: menos es mejor. La responsividad se mide en RPM: más es mejor. Una caída de RPM indica respuestas más lentas bajo la carga de la prueba; no identifica dónde ocurre la demora.
4. **Exporta la evidencia.** Conserva un CSV con fechas y condiciones de prueba para que soporte revise las caídas recurrentes. Separa los resultados por motor y marca las pruebas fallidas en lugar de tratarlas como mediciones válidas de velocidad cero.

## Qué puedes hacer al respecto

### 1. Reclama con datos

Si varias pruebas por cable quedan muy por debajo de la velocidad del plan, comparte el historial y pide una revisión. Incluye resultados de horas tranquilas como comparación. Consulta [cómo documentar internet lento para tu ISP](https://velocibar.app/blog/reclamar-isp-internet-lento.html).

### 2. Considera cambiar de tecnología, no solo de plan

Un plan más rápido puede no resolver la congestión en otro tramo de la red. Pregunta dónde está el cuello de botella antes de pagar una mejora. La fibra también puede tener limitaciones de capacidad compartida; cambiar de tecnología no garantiza la solución.

### 3. Optimiza lo que controlas

- Programa backups y descargas grandes para la madrugada.
- Usa cable ethernet para el equipo de trabajo y las videollamadas.
- Activa Smart Queue Management (SQM/QoS) en tu router para que la congestión doméstica no añada lag propio.

VelociBar ejecuta pruebas activas mientras la app funciona y el Mac está despierto. Las pruebas transfieren datos y pueden afectar llamadas o descargas. Compara resultados del mismo motor; las pruebas ausentes o fallidas no son muestras válidas de velocidad cero.

## Fuentes

- [Ofcom: diagnóstico de banda ancha y WiFi](https://www.ofcom.org.uk/phones-and-broadband/service-quality/broadband-wifi-help)
- [Apple: responsividad en condiciones de uso](https://developer.apple.com/videos/play/wwdc2021/10239/)

## Descubre tu patrón nocturno

VelociBar mide tu conexión automáticamente desde la barra de menú de macOS y dibuja la curva completa del día. Sin cuentas, sin nube: todo en tu Mac.

[↓ Descargar VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← Todos los artículos](https://velocibar.app/blog/)
