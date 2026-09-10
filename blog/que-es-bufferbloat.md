> Versión en Markdown de https://velocibar.app/blog/que-es-bufferbloat.html · [English version](https://velocibar.app/en/blog/what-is-bufferbloat.html)

# Qué es el bufferbloat (y por qué tu videollamada se congela con 300 Mbps)

Por [VelociBar](https://velocibar.app/) · Publicado el 4 de septiembre de 2026 · Actualizado el 10 de septiembre de 2026 · 5 min de lectura

**El bufferbloat es una demora excesiva en las colas de paquetes cuando la red está ocupada.** Puede provocar lag en llamadas y juegos aunque la descarga sea rápida. Revisa la latencia bajo carga además de los Mbps; una gestión de colas adecuada puede ayudar. Las interferencias WiFi, la pérdida de paquetes y otras fallas pueden producir síntomas parecidos.

## Qué es el bufferbloat

Cada router y cada módem tiene un pequeño almacén de memoria (un **buffer**) donde guarda los paquetes que están a punto de salir por tu línea. Existe por una buena razón: si dos paquetes llegan a la vez, uno espera un instante en vez de perderse. Pero muchos fabricantes, para evitar a toda costa que se descarte un solo paquete, hicieron ese almacén enorme. Y ahí empieza el problema.

Imagina la caja de un supermercado con una cinta transportadora kilométrica detrás. Mientras la cola sea corta, todo va rápido. Pero si entra más gente de la que la caja puede atender, la cinta no dice "no caben más": simplemente se llena y se llena, y cada persona nueva espera detrás de todas las anteriores. Nadie se queda sin pasar, pero la espera se dispara.

Durante una transferencia grande, los paquetes de una llamada o un juego pueden esperar detrás del tráfico pesado. La velocidad puede seguir alta mientras empeoran los tiempos de respuesta. Mirar solo los Mbps no revela esa demora, pero una prueba de latencia bajo carga sí puede detectarla. [El IETF explica cómo el exceso de colas añade demora y recomienda su gestión activa.](https://www.rfc-editor.org/rfc/rfc7567.html)

## Los síntomas: el test da bien, pero todo se traba

El bufferbloat tiene una firma muy reconocible una vez que sabes buscarla:

- El test de velocidad da un resultado excelente (a veces mejor que nunca) y aun así la videollamada se congela.
- Las partidas online tienen lag intermitente, no constante: bien la mayor parte del tiempo, terrible en ráfagas.
- Las páginas web tardan en empezar a cargar, aunque luego bajen rápido.
- El problema aparece siempre que **alguien en la red sube algo pesado**: una copia de seguridad en la nube, una foto de 4K, una actualización de consola, un torrent. En cuanto esa subida o descarga termina, todo vuelve a la normalidad.

Si el lag aparece durante transferencias pesadas, compara la latencia en reposo y bajo carga y repite por ethernet. El patrón es compatible con demora por colas, pero no aísla el router ni descarta [congestión del ISP](https://velocibar.app/blog/internet-lento-por-la-noche.html).

## Cómo medirlo: la responsividad en RPM

Mide cuánto aumenta la demora bajo carga, además de la descarga. [La herramienta networkQuality de Apple expresa la responsividad en RPM](https://developer.apple.com/videos/play/wwdc2021/10239/) (viajes de ida y vuelta por minuto): más es mejor. [Fast.com también muestra latencia en reposo y bajo carga](https://fast.com/) en milisegundos, donde menos es mejor.

Usa como orientación la clasificación Low, Medium o High que reporte tu versión de la herramienta de Apple. No existe un valor de RPM que garantice una llamada o partida fluida. Compara pruebas equivalentes antes y después de un cambio: el destino, el método, la conexión inalámbrica y la aplicación influyen.

Una prueba puntual describe un momento. [VelociBar](https://velocibar.app/) conserva mediciones repetidas para investigar cambios a lo largo del tiempo. Sus motores Apple y CDN usan métodos diferentes: compara resultados del mismo motor en lugar de tratar sus RPM como intercambiables. Consulta la [guía de pruebas de velocidad en Mac](https://velocibar.app/blog/test-velocidad-mac.html).

## Cómo solucionarlo, de mayor a menor impacto

### 1. Activa Smart Queue Management (SQM) en el router

SQM puede ayudar cuando tu router controla el cuello de botella. Combina regulación de tráfico con gestión de colas, frecuentemente mediante fq_codel o CAKE. Sigue las instrucciones del router, mide antes y después del cambio y comprueba que el equipo soporte la velocidad de tu conexión.

### 2. Configura QoS para priorizar tráfico sensible a la latencia

Si tu router ofrece QoS (Quality of Service), prioriza videollamadas y juego online por encima de descargas y backups. No elimina el bufferbloat por sí solo, pero decide quién espera en la cola primero.

### 3. Usa cable ethernet para lo que no puede esperar

El WiFi añade su propia cola y su propia variabilidad encima de la del router. Para la máquina de trabajo, las videollamadas importantes o el equipo de juego, un cable ethernet elimina una fuente entera de latencia añadida.

### 4. Evita subidas pesadas simultáneas

Programa los backups en la nube y las subidas grandes para cuando no los necesites en tiempo real, o para cuando nadie más en casa esté en una videollamada. Es la solución más simple y no cuesta nada.

### 5. Revisa la compatibilidad antes de cambiar el router

Si el router no puede gestionar las colas de forma eficaz, investiga equipos o firmware compatibles. Verifica el modelo exacto, la capacidad de procesamiento y la configuración que requiere el ISP. Cambiar el router no resuelve un cuello de botella fuera de tu casa.

VelociBar ejecuta pruebas activas mientras la app funciona y el Mac está despierto. Las pruebas transfieren datos y pueden afectar llamadas o descargas. Compara resultados del mismo motor; las pruebas ausentes o fallidas no son muestras válidas de velocidad cero.

## Fuentes

- [IETF RFC 7567: gestión activa de colas](https://www.rfc-editor.org/rfc/rfc7567.html)
- [Apple: demoras de red y RPM](https://developer.apple.com/videos/play/wwdc2021/10239/)
- [Fast.com: latencia en reposo y bajo carga](https://fast.com/)

## Mide tu bufferbloat a lo largo del tiempo

VelociBar registra tu responsividad en RPM automáticamente desde la barra de menú de macOS, para que veas exactamente cuándo se dispara la latencia bajo carga, no solo cuánto marca ahora mismo. Sin cuentas, sin nube: todo en tu Mac.

[↓ Descargar VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← Todos los artículos](https://velocibar.app/blog/)
