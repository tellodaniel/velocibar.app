> Versión en Markdown de https://velocibar.app/blog/videollamadas-se-cortan-test-velocidad-bien.html · [English version](https://velocibar.app/en/blog/video-calls-lag-speed-test-fine.html)

# ¿El test de velocidad da bien pero la videollamada se corta? Mira la responsividad, no los Mbps

Por [VelociBar](https://velocibar.app/) · Publicado el 16 de septiembre de 2026 · 11 min de lectura

**Un test de velocidad mide cuántos datos puede mover tu línea. Una videollamada necesita que los paquetes lleguen a tiempo.** Cuando las llamadas se congelan en una conexión que da bien en el test, la causa habitual es la latencia bajo carga: viajes de ida y vuelta que pasan de decenas de milisegundos a cientos mientras la línea está ocupada. La herramienta networkQuality de Apple lo reporta como responsividad (RPM), y puedes leerla en tu Mac en un minuto.

## Por qué un test rápido y una llamada congelada son ciertos a la vez

Una videollamada usa muy poco de una línea moderna. [Zoom indica 1,2 Mbps de subida y bajada para una llamada 720p entre dos personas](https://support.zoom.com/hc/es/article?id=zm_kb&sysparm_article=KB0060748), y 3,8 Mbps de subida y 3,0 de bajada para 1080p. [Microsoft dice que Teams puede dar video HD con menos de 1,5 Mbps](https://learn.microsoft.com/es-es/microsoftteams/prepare-network), y [Google Meet pide alrededor de 1 Mbps de salida y 1,3 Mbps de entrada por participante](https://knowledge.workspace.google.com/admin/meet/prepare-your-network-for-meet-meetings-and-live-streams?hl=es) en HD. En un plan de 300 Mbps, el ancho de banda no es el límite. Un test que marca 300 dice la verdad. Solo que no es el número del que depende una llamada.

La pregunta de la llamada es otra: ¿cada paquete pequeño de audio y video llega en unas decenas de milisegundos, todas las veces, en ambas direcciones? Las estadísticas de Zoom durante la reunión miden exactamente eso. [Zoom recomienda una latencia de 150 ms o menos, un jitter de 40 ms o menos y una pérdida de paquetes del 2% o menos](https://support.zoom.com/hc/es/article?id=zm_kb&sysparm_article=KB0070504). Ninguno de esos tres números es una velocidad. Una línea puede mover 500 Mbps y aun así fallar los tres en cuanto alguien en la red inicia una transferencia grande.

## Lo que el test de velocidad no muestra: latencia bajo carga

La mayoría de los tests de velocidad reportan tu **latencia en reposo**: el tiempo de ida y vuelta medido antes de que empiece la transferencia, con la línea tranquila. Suele ser un número agradable, de 10 a 40 ms en cable o fibra. Lo que importa para una llamada es el tiempo de ida y vuelta **mientras la línea está ocupada**, porque tu línea está ocupada cada vez que alguien en casa respalda fotos, una consola descarga una actualización o tu propio Mac sincroniza una carpeta.

En muchos routers y módems ese número se dispara. El equipo retiene los paquetes salientes en una cola sobredimensionada en vez de descartar unos pocos, y los paquetes de tu llamada esperan detrás de todo lo demás. Esa demora en cola tiene nombre, [bufferbloat](https://velocibar.app/blog/que-es-bufferbloat.html), que bufferbloat.net define como “la latencia indeseable que proviene de un router u otro equipo de red que almacena demasiados datos en búfer”. La IETF recomienda gestión activa de colas contra ese problema desde el [RFC 7567 de 2015](https://www.rfc-editor.org/rfc/rfc7567), y el informe Measuring Broadband America de la FCC encontró que la latencia bajo carga de descarga “generalmente es significativamente mayor que la latencia en reposo” en los proveedores de EE. UU., con la mayor diferencia en DSL.

La forma más limpia de medirlo es la que Apple integró en macOS. Desde Monterey, todo Mac trae [el comando networkQuality](https://velocibar.app/blog/test-velocidad-mac.html), que satura la línea a propósito y cuenta cuántos viajes de ida y vuelta todavía puede completar. [Apple llama al resultado responsividad, en viajes de ida y vuelta por minuto (RPM)](https://support.apple.com/es-es/HT212313): la cantidad de viajes de ida y vuelta secuenciales, o transacciones, que una red puede hacer en un minuto en condiciones normales de trabajo. El método se está estandarizando en la IETF como [Responsiveness under Working Conditions](https://datatracker.ietf.org/doc/draft-ietf-ippm-responsiveness/), que define las condiciones de trabajo como una ruta totalmente utilizada, de modo que se forma una cola en el cuello de botella. Dicho de otro modo, la prueba crea la situación exacta que rompe tu llamada y luego la mide.

RPM y milisegundos son la misma medida, vista desde dos ángulos distintos. Divide 60.000 entre el RPM y obtienes el viaje de ida y vuelta promedio en milisegundos bajo carga: 1.000 RPM son 60 ms, 500 RPM son 120 ms, 200 RPM son 300 ms. Apple etiqueta el resultado como Low, Medium o High, y describe Medium como una conexión donde puedes ver pausas o congelamientos momentáneos, por ejemplo durante llamadas de audio o video de FaceTime. Esa frase describe el mecanismo detrás del congelamiento.

## Cómo se ve en una línea real

Para mostrar la brecha en vez de describirla, ejecutamos networkQuality cuatro veces seguidas en una conexión Wi-Fi doméstica la tarde del 16 de septiembre de 2026, desde el Mac en el que se escribió este artículo. La salida original está guardada junto al artículo. Es una línea en una tarde, medida frente a los servidores de Apple, así que no dice nada sobre tu proveedor. Sí muestra lo lejos que pueden estar “rápida” y “responsiva” en la misma conexión.

Cuatro ejecuciones consecutivas de networkQuality, una línea Wi-Fi doméstica, 16-09-2026. Los viajes bajo carga son las muestras de petición y respuesta tomadas mientras la fase de descarga saturaba la línea. La prueba 4 usó la salida resumida, que solo reporta el RPM y su equivalente en milisegundos.

| Prueba | Descarga | Subida | Ida y vuelta en reposo | Ida y vuelta bajo carga (mediana / peor) | Responsividad |
| --- | --- | --- | --- | --- | --- |
| 1 | 320 Mbps | 154 Mbps | 40 ms | 59 ms / 618 ms | 470 RPM, Medium |
| 2 | 547 Mbps | 158 Mbps | 46 ms | 82 ms / 787 ms | 560 RPM, Medium |
| 3 | 496 Mbps | 149 Mbps | 44 ms | 145 ms / 1.150 ms | 420 RPM, Medium |
| 4 | 626 Mbps | 143 Mbps | 42 ms | 109 ms (derivado del RPM; sin muestras) | 549 RPM, Medium |

Cualquiera de las cuatro pasaría un test de velocidad de sobra. Las cuatro quedaron también en Medium, con la mediana del viaje de ida y vuelta bajo carga entre 1,5 y más de 3 veces el valor en reposo, y las peores muestras entre 618 y 1.150 ms. Fíjate en la prueba 3: la descarga más alta de las tres primeras y la peor responsividad, con una mediana de 145 ms bajo carga, justo al borde de los 150 ms que recomienda Zoom, y una de cada diez muestras por encima de 263 ms. Una llamada durante esa prueba se habría congelado un instante cada vez que una cola así se vaciaba, y un test de velocidad un minuto después habría dicho que todo está bien.

Dos salvedades honestas. El Wi-Fi añade su propia variación, así que por cable el resultado seguramente sería más estable. Y cuatro pruebas son una foto, no un patrón. El patrón es lo que importa cuando intentas saber si esto pasa a las 9 de la noche todos los días o solo cuando arranca el respaldo, y por eso el último paso de abajo es registrarlo.

## Cómo revisar tu conexión en cinco minutos

1. **Ejecuta networkQuality en tu Mac.** Abre la Terminal, escribe `networkQuality`, pulsa Intro y espera unos 20 segundos. Lee la línea Responsiveness: la etiqueta y el RPM (las versiones recientes de macOS también imprimen los milisegundos). Low o Medium con una descarga sana es la firma de la que trata este artículo.
2. **Compara latencia en reposo y bajo carga en un test web.** El botón “Show more info” de Fast.com muestra por separado la latencia sin carga y con carga; la propia guía de Netflix es que ambas deberían estar cerca. El test de velocidad de Cloudflare hace lo mismo y mete esa diferencia en su puntuación para videollamadas. Un valor con carga varias veces mayor que el de reposo es el mismo hallazgo desde otro servidor.
3. **Lee las estadísticas de la propia llamada.** Durante una llamada de Zoom, abre Configuración, luego Estadísticas, y observa latencia, jitter y pérdida de paquetes mientras ocurre el congelamiento. Si latencia y jitter saltan cuando empieza una transferencia en otra parte de la casa, encontraste la cola.
4. **Repite por cable.** Si la latencia bajo carga vuelve a acercarse a la de reposo con un cable Ethernet, la cola está en tu Wi-Fi, no en tu router ni en tu proveedor. Si sigue alta, el cuello de botella está más allá del cable.
5. **Regístralo durante varios días.** Una sola prueba dice lo que hizo la línea en ese minuto. Para saber si el problema es un patrón nocturno, un horario de respaldo o algo aleatorio, necesitas la responsividad medida con un horario. [VelociBar](https://velocibar.app/) ejecuta una prueba cada 15, 30 o 60 minutos desde la barra de menú, alterna el motor de Apple con una descarga desde una CDN y escribe cada resultado, incluido el RPM, en un CSV local. VelociBar etiqueta el RPM que registra con las bandas menos de 200 (Low), de 200 a 999 (Medium) y 1.000 o más (High).

## Cuándo no es la responsividad

La demora en cola es la explicación más común de un test rápido y una llamada mala, y no es la única. Antes de cambiar de router, descarta estas, porque cada una tiene un arreglo distinto.

| Lo que ves | Causa probable | Cómo comprobarlo |
| --- | --- | --- |
| Se congela por Wi-Fi, va bien por cable | Interferencia inalámbrica o una banda de 2,4 GHz saturada. [El consejo de la propia Apple](https://support.apple.com/es-es/102319) es pasar los dispositivos a 5 GHz y reducir lo que comparte la banda. | Paso 4 de arriba |
| El video se congela pero el audio sobrevive; los ventiladores se aceleran | El propio Mac. Zoom atribuye muchos problemas de video a la configuración del dispositivo, apps que compiten por recursos o problemas de calidad, y señala que los portátiles de dos núcleos bajan a unos 5 cuadros por segundo al compartir pantalla. | Cierra apps pesadas; mira la CPU en Monitor de Actividad durante la llamada |
| Solo va mal con la VPN del trabajo | Sobrecarga de la VPN. [Microsoft recomienda no enviar tráfico en tiempo real por una VPN](https://learn.microsoft.com/es-es/microsoftteams/qos-in-teams) porque añade sobrecarga a los paquetes y crea retrasos en el tráfico en tiempo real. | Prueba la misma llamada sin la VPN |
| Solo una persona se congela para todos los demás | La conexión de esa persona, no la tuya. | Pídele que haga las mismas comprobaciones |
| Se congela cuando subes o sincronizas | Saturación de la subida. Los planes domésticos tienen mucha menos subida que bajada, y un respaldo en la nube la llena. A menudo es bufferbloat del lado de subida. En las cuatro pruebas de arriba, la mediana del viaje de ida y vuelta durante la fase de subida fue mayor que durante la de descarga en todos los casos: 173 ms frente a 59 ms en la prueba 1, 151 frente a 82 en la 2, 214 frente a 145 en la 3. | Pausa la sincronización y vuelve a probar |

El RPM tiene sus propios límites. Es un número de una ruta hacia los servidores de Apple, y como [señala Cloudflare](https://blog.cloudflare.com/aim-database-for-internet-quality/), la ruta que toma un test de velocidad puede ser muy distinta de la que toman tus llamadas. Dos herramientas que siguen el mismo método deberían coincidir en la etiqueta, no en el RPM exacto. Tómalo como un indicador fiable de colas en tu línea, no como un veredicto sobre una llamada concreta.

## Qué lo soluciona, en orden

1. **Conéctate por cable en las llamadas que importan.** Ethernet elimina la cola del Wi-Fi por completo y es el único arreglo que no cuesta nada y funciona hoy.
2. **Mueve las transferencias pesadas fuera del horario de llamadas.** Programa respaldos en la nube, sincronización de fotos y actualizaciones de consola para la noche. La mayor parte de la cola la causa tráfico que tú controlas.
3. **Activa la gestión de colas en el router.** Si tu router ofrece Smart Queue Management (SQM, normalmente fq_codel o CAKE), actívalo y configúralo un poco por debajo de tus velocidades medidas. El firmware antiguo a menudo no incluye SQM, así que busca una actualización antes de dar por hecho que tu router no puede. Si solo ofrece QoS, prioriza tu Mac o tu app de llamadas. [La guía de bufferbloat](https://velocibar.app/blog/que-es-bufferbloat.html) ordena estas opciones en detalle.
4. **Sal de los 2,4 GHz.** Usa la banda de 5 GHz o 6 GHz para el equipo desde el que haces llamadas, y mantén el router a la vista si puedes.
5. **Si solo pasa a las mismas horas cada día, mide y documenta.** La congestión en el nodo del proveedor tiene su pico por la noche, y un registro de responsividad por hora es la evidencia que separa la [congestión de hora pico](https://velocibar.app/blog/internet-lento-por-la-noche.html) de un problema dentro de tu casa. [Así se convierte ese registro en una solicitud a soporte](https://velocibar.app/blog/reclamar-isp-internet-lento.html).

## Preguntas frecuentes

### ¿Por qué Zoom se congela si mi internet es rápido?

Porque Zoom necesita paquetes a tiempo, no en volumen. Una llamada 720p usa alrededor de 1,2 Mbps, así que un plan de 300 Mbps tiene capacidad de sobra. Los congelamientos vienen de la latencia, el jitter y la pérdida de paquetes, que suben cuando la línea está ocupada con otro tráfico. Mide la responsividad bajo carga, no la velocidad de descarga.

### ¿Es más importante la velocidad de subida que la de bajada para las videollamadas?

Ninguna importa mucho una vez que tienes unos pocos Mbps en cada dirección. Lo que importa es que la menor de las dos, casi siempre la subida en planes domésticos, no se sature con un respaldo o una sincronización durante la llamada. Cuando eso pasa, la cola de subida retrasa tu audio y video salientes y el otro lado te ve congelado.

### ¿Qué velocidad de internet necesito para Zoom?

Las cifras publicadas por Zoom son 1,2 Mbps de subida y bajada para una llamada 720p entre dos personas y 3,8 Mbps de subida y 3,0 de bajada para 1080p. Casi cualquier plan de banda ancha lo cumple. Una buena conexión para Zoom es la que mantiene la latencia en 150 ms o menos y el jitter en 40 ms o menos mientras el resto de la casa está en línea.

### ¿Por qué la llamada se corta para mí y no para los demás?

Todos los participantes comparten el mismo servidor de reunión, así que si solo tu imagen se corta, el problema está entre tu Mac y ese servidor: tu Wi-Fi, la cola de tu router, tu subida o tu VPN. Ejecuta networkQuality y la comparación por cable de arriba para acotarlo.

VelociBar ejecuta pruebas activas mientras la app funciona y el Mac está despierto. Las pruebas transfieren datos y pueden afectar llamadas o descargas. Compara resultados del mismo motor; las pruebas ausentes o fallidas no son muestras válidas de velocidad cero. Las mediciones de este artículo son de una conexión en un día y no son una afirmación sobre ningún proveedor.

## Fuentes

- [Apple: prueba la responsividad de tu red con networkQuality (RPM, Low/Medium/High)](https://support.apple.com/es-es/HT212313)
- [IETF: Responsiveness under Working Conditions (draft-ietf-ippm-responsiveness)](https://datatracker.ietf.org/doc/draft-ietf-ippm-responsiveness/)
- [Zoom: estadísticas de la reunión y latencia, jitter y pérdida de paquetes recomendados](https://support.zoom.com/hc/es/article?id=zm_kb&sysparm_article=KB0070504)
- [Zoom: requisitos del sistema y ancho de banda](https://support.zoom.com/hc/es/article?id=zm_kb&sysparm_article=KB0060748)
- [Microsoft: preparar la red para Teams](https://learn.microsoft.com/es-es/microsoftteams/prepare-network)
- [Microsoft: calidad de servicio en Teams (guía sobre VPN)](https://learn.microsoft.com/es-es/microsoftteams/qos-in-teams)
- [Google: preparar la red para Meet](https://knowledge.workspace.google.com/admin/meet/prepare-your-network-for-meet-meetings-and-live-streams?hl=es)
- [Apple: resolver problemas de Wi-Fi y Bluetooth por interferencias inalámbricas](https://support.apple.com/es-es/102319)
- [Cloudflare: latencia en reposo y bajo carga en el test AIM](https://blog.cloudflare.com/aim-database-for-internet-quality/)
- [Netflix: latencia sin carga y con carga en Fast.com](https://about.netflix.com/en/news/fast-com-now-measures-latency-and-upload-speed)
- [Bufferbloat.net: introducción](https://www.bufferbloat.net/projects/bloat/wiki/Introduction/)
- [IETF RFC 7567: gestión activa de colas](https://www.rfc-editor.org/rfc/rfc7567)
- [FCC: Measuring Broadband America, latencia bajo carga](https://data.fcc.gov/download/measuring-broadband-america/2023/2023-Fixed-Measuring-Broadband-America-Report.pdf)

## Registra tu responsividad a lo largo del tiempo

VelociBar mide la velocidad de descarga y la responsividad en RPM con un horario desde la barra de menú de macOS y guarda el historial en tu Mac, para que veas las horas en las que los viajes de ida y vuelta se disparan, no solo el minuto en que hiciste un test. Sin cuentas, sin nube.

[↓ Descargar VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← Todos los artículos](https://velocibar.app/blog/)
