# Cómo hacer un test de velocidad en tu Mac: 3 métodos (incluido el que Apple esconde en la Terminal)

4 de septiembre de 2026 · 6 min de lectura

> Versión en Markdown de https://velocibar.app/blog/test-velocidad-mac.html · [English version](https://velocibar.app/en/blog/speed-test-mac.md)

Buscas "test de velocidad" en Google, entras al primer resultado, esperas quince segundos y aparece un número en Mbps. ¿Ya está? No del todo. Ese número describe cómo estaba tu conexión en ese instante concreto, en ese navegador, contra ese servidor. Si quieres saber de verdad qué tan rápida —y qué tan estable— es tu conexión, tu Mac te ofrece tres formas de comprobarlo, y la más reveladora ni siquiera pasa por un navegador. Aquí tienes las tres, de la más rápida a la más completa.

## Método 1 — Test de velocidad web (Speedtest.net, Fast.com)

Abrir Speedtest.net o Fast.com y esperar unos segundos es la forma más rápida de comprobar tu conexión. Para una revisión puntual —¿funciona el wifi ahora mismo?, ¿el técnico dejó la línea bien tras la visita?— es más que suficiente, y no necesitas instalar nada.

Pero conviene conocer sus límites:

- **Es un número de mejor caso.** El test elige el servidor más cercano y con menos carga, y mide en condiciones casi ideales, no en las condiciones reales bajo las que trabajas, juegas o haces una videollamada.
- **Añade overhead de navegador.** El JavaScript corriendo en una pestaña introduce su propia varianza; no es una medición pura a nivel de red.
- **Solo mide ese instante.** Un test a las 11:00 de la mañana no dice nada sobre lo que pasa a las 21:30, cuando toda tu casa —y tu barrio— están conectados a la vez.

Perfecto para saber si tu wifi funciona ahora mismo. Insuficiente para saber si tu internet [va lento por la noche](https://velocibar.app/blog/internet-lento-por-la-noche.html) o solo en ciertos momentos. Para eso necesitas algo más.

## Método 2 — El test que Apple esconde en la Terminal: `networkquality`

Desde macOS Monterey, tu Mac trae integrado el mismo motor de medición que Apple usa para calificar la calidad de tu red. Se llama `networkquality`, vive en la Terminal, no tiene interfaz gráfica y casi nadie sabe que existe.

Así se usa:

1. Abre **Terminal** (Aplicaciones → Utilidades → Terminal, o pulsa ⌘+Espacio y escribe "Terminal").
2. Escribe el comando y pulsa Return:

```
networkquality
```

Espera unos 20-30 segundos. Verás un resultado parecido a este:

```
==== SUMMARY ====
Uplink capacity: 18.220 Mbps
Downlink capacity: 245.981 Mbps
Responsiveness: Medium (612 RPM)
Idle Latency: 14.353 milliseconds
```

Cada línea te dice algo distinto:

- **Uplink / Downlink capacity.** La velocidad real de subida y bajada, medida mientras la red está bajo carga de trabajo, no en una ráfaga aislada.
- **Responsiveness.** Aquí está lo interesante. Apple no solo mide Mbps: mide cómo responde tu red mientras está saturada, y la califica como **Low, Medium o High**. Es el dato que un test de velocidad tradicional no te da.
- **RPM (roundtrips per minute).** El número entre paréntesis junto a Responsiveness. Indica cuántos viajes de ida y vuelta completa tu conexión por minuto mientras hay tráfico pesado circulando a la vez. Es el indicador directo de [bufferbloat](https://velocibar.app/blog/que-es-bufferbloat.html): cuanto más bajo el RPM, más se acumula tu tráfico en cola detrás de una descarga o subida grande, y más notas el lag en una videollamada o una partida online aunque tu velocidad de descarga sea alta.
- **Idle Latency.** La latencia con la red en reposo, sin carga. Es tu punto de partida: compárala con lo que ocurre bajo carga para ver cuánto se degrada tu conexión cuando de verdad la exiges.

El comando tiene dos variantes útiles:

- `networkquality -v` — versión detallada (verbose), con más desglose de cada fase de la prueba.
- `networkquality -s` — ejecuta las pruebas de subida y bajada de forma secuencial en vez de simultánea, útil si sospechas que se están interfiriendo entre sí y quieres una lectura más limpia de cada sentido.

Es gratis, no requiere abrir un navegador ni instalar nada, y te da un dato —la responsividad— que la mayoría de tests web ni siquiera menciona.

## Método 3 — Medición continua desde la barra de menú (VelociBar)

Los métodos 1 y 2 tienen algo en común: son una foto fija. Te dicen cómo está tu conexión ahora mismo, a las 11:00 de la mañana, con la casa vacía. No pueden responder a la pregunta que de verdad te preocupa: "¿por qué mi internet va lento todas las noches sobre las 21:00?"

Para eso necesitas ejecutar el mismo tipo de prueba una y otra vez, a lo largo de todo el día, y comparar los resultados. Es exactamente lo que hace [VelociBar](https://velocibar.app/): una app de barra de menú para Mac que ejecuta pruebas automáticas cada 15, 30 o 60 minutos —tú eliges el intervalo—, guarda cada resultado en un historial local y te deja exportarlo a CSV cuando quieras.

Con ese historial puedes ver de un vistazo si tu velocidad cae de forma sistemática cada noche, si el problema es puntual o constante, y si tu responsividad (RPM) se desploma en las horas de más tráfico aunque la velocidad de descarga siga pareciendo aceptable. Es la diferencia entre sospechar algo y demostrarlo con datos.

Ninguno de los tres métodos sobra: usa Speedtest o Fast.com para una comprobación rápida, `networkquality` cuando quieras un dato técnico preciso sin salir de la Terminal, y VelociBar cuando necesites ver el patrón completo a lo largo de los días.

## Consejos para que el resultado sea fiable

Sea cual sea el método que uses, estos detalles cambian el resultado más de lo que crees:

- **Usa cable ethernet si puedes**, o siéntate cerca del router en la banda de 5 GHz. El wifi de 2,4 GHz y la distancia añaden variables que no tienen nada que ver con tu proveedor.
- **Pausa descargas, backups y VPN** antes de medir. Una copia de seguridad en la nube corriendo en segundo plano puede consumir gran parte de tu ancho de banda sin que lo notes.
- **Repite la prueba a distintas horas del día**, no solo una vez por la mañana. El patrón —si existe— solo aparece cuando comparas varios momentos.
- **No te fíes de una sola medición.** Tanto los tests web como `networkquality` pueden variar de una ejecución a otra por motivos ajenos a tu conexión —congestión momentánea de un servidor, por ejemplo—. Ejecuta la prueba dos o tres veces y quédate con la tendencia, no con el número aislado.

## Enlaces

- Todos los artículos: https://velocibar.app/blog/
- Descargar VelociBar (App Store): https://apps.apple.com/us/app/velocibar/id6756196355
