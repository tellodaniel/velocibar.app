> Versión en Markdown de https://velocibar.app/blog/test-velocidad-mac.html · [English version](https://velocibar.app/en/blog/speed-test-mac.html)

# Cómo hacer un test de velocidad en tu Mac: 3 métodos

Por [VelociBar](https://velocibar.app/) · Publicado el 4 de septiembre de 2026 · Actualizado el 10 de septiembre de 2026 · 6 min de lectura

**Para medir la velocidad de internet en Mac, abre un test web, ejecuta `networkQuality` en la Terminal o usa VelociBar para programar mediciones.** Un test web da una lectura puntual; la herramienta de Apple también reporta responsividad bajo carga. Repetir las pruebas permite comparar la conexión entre horas y días.

## Método 1: Test de velocidad web (Speedtest.net, Fast.com)

Abrir Speedtest.net o Fast.com y esperar unos segundos es la forma más rápida de comprobar tu conexión. Para una revisión puntual —¿funciona el wifi ahora mismo?, ¿el técnico dejó la línea bien tras la visita?— es más que suficiente, y no necesitas instalar nada.

Pero conviene conocer sus límites:

- **El destino importa.** Los servidores, las rutas y la configuración pueden producir resultados distintos. Usa el mismo método para comparar tendencias y otro destino para contrastar un problema.
- **El dispositivo también importa.** El navegador, el procesador, el adaptador y el WiFi pueden limitar el resultado. Un test web sigue siendo útil para medir la conexión disponible en ese equipo.
- **Solo mide ese instante.** Un test a las 11:00 de la mañana no dice nada sobre lo que pasa a las 21:30, cuando toda tu casa —y tu barrio— están conectados a la vez.

Perfecto para saber si tu wifi funciona ahora mismo. Insuficiente para saber si tu internet [va lento por la noche](https://velocibar.app/blog/internet-lento-por-la-noche.html) o solo en ciertos momentos. Para eso necesitas algo más.

## Método 2: La herramienta integrada de Apple: networkQuality

macOS Monterey 12 y posteriores incluyen `networkQuality`. [Apple la describe como una prueba de responsividad en condiciones de uso.](https://developer.apple.com/videos/play/wwdc2021/10239/) Respeta las mayúsculas del comando, especialmente si tu sistema de archivos distingue entre mayúsculas y minúsculas.

Así se usa:

1. Abre **Terminal** (Aplicaciones → Utilidades → Terminal, o pulsa ⌘+Espacio y escribe "Terminal").
2. Escribe el comando y pulsa Return:

```
networkQuality
```

Espera a que termine. La duración y los campos de salida dependen de la versión de macOS y de la red. Este resultado es ilustrativo; no es un benchmark de VelociBar:

```
==== SUMMARY ====
Uplink capacity: 18.220 Mbps
Downlink capacity: 245.981 Mbps
Responsiveness: Medium (612 RPM)
Idle Latency: 14.353 milliseconds
```

Cada línea te dice algo distinto:

- **Uplink / Downlink capacity.** La velocidad real de subida y bajada, medida mientras la red está bajo carga de trabajo, no en una ráfaga aislada.
- **Responsiveness.** Apple reporta cómo responde la red bajo carga, con una clasificación Low, Medium o High. Otras pruebas también miden latencia bajo carga; sus unidades y métodos pueden ser diferentes.
- **RPM (viajes de ida y vuelta por minuto).** Un RPM más alto significa respuestas más rápidas bajo la carga de esta prueba. Un resultado bajo puede ser compatible con [bufferbloat](https://velocibar.app/blog/que-es-bufferbloat.html), pero no identifica la causa por sí solo.
- **Idle Latency.** La latencia con la red en reposo, sin carga. Es tu punto de partida: compárala con lo que ocurre bajo carga para ver cuánto se degrada tu conexión cuando de verdad la exiges.

El comando tiene dos variantes útiles:

- `networkQuality -v`: versión detallada (verbose), con más desglose de cada fase de la prueba.
- `networkQuality -s`: ejecuta subida y bajada de forma secuencial. Cambia la carga de trabajo, así que compáralo con otras pruebas secuenciales. Consulta `man networkQuality` para revisar las opciones de tu versión.

La herramienta integrada no requiere otra instalación. Las pruebas generan tráfico y pueden afectar otras actividades mientras se ejecutan. Evita superponer pruebas y elige un momento adecuado si tu conexión tiene límite de datos.

## Método 3: Medición continua desde la barra de menú (VelociBar)

Los métodos 1 y 2 tienen algo en común: son una foto fija. Te dicen cómo está tu conexión ahora mismo, a las 11:00 de la mañana, con la casa vacía. No pueden responder a la pregunta que de verdad te preocupa: "¿por qué mi internet va lento todas las noches sobre las 21:00?"

Para eso necesitas ejecutar el mismo tipo de prueba una y otra vez, a lo largo de todo el día, y comparar los resultados. Es exactamente lo que hace [VelociBar](https://velocibar.app/): una app de barra de menú para Mac que ejecuta pruebas automáticas cada 15, 30 o 60 minutos —tú eliges el intervalo—, guarda cada resultado en un historial local y te deja exportarlo a CSV cuando quieras.

Con ese historial puedes ver de un vistazo si tu velocidad cae de forma sistemática cada noche, si el problema es puntual o constante, y si tu responsividad (RPM) se desploma en las horas de más tráfico aunque la velocidad de descarga siga pareciendo aceptable. Es la diferencia entre sospechar algo y demostrarlo con datos.

Ninguno de los tres métodos sobra: usa Speedtest o Fast.com para una comprobación rápida, `networkQuality` cuando quieras un dato técnico preciso sin salir de la Terminal, y VelociBar cuando necesites ver el patrón completo a lo largo de los días.

## Consejos para que el resultado sea fiable

Sea cual sea el método que uses, estos detalles cambian el resultado más de lo que crees:

- **Usa cable ethernet si puedes**, o siéntate cerca del router en la banda de 5 GHz. El wifi de 2,4 GHz y la distancia añaden variables que no tienen nada que ver con tu proveedor.
- **Pausa descargas, backups y VPN** antes de medir. Una copia de seguridad en la nube corriendo en segundo plano puede consumir gran parte de tu ancho de banda sin que lo notes.
- **Repite la prueba a distintas horas del día**, no solo una vez por la mañana. El patrón —si existe— solo aparece cuando comparas varios momentos.
- **No te fíes de una sola medición.** Tanto los tests web como `networkQuality` pueden variar de una ejecución a otra por motivos ajenos a tu conexión —congestión momentánea de un servidor, por ejemplo—. Ejecuta la prueba dos o tres veces y quédate con la tendencia, no con el número aislado.

VelociBar ejecuta pruebas activas mientras la app funciona y el Mac está despierto. Las pruebas transfieren datos y pueden afectar llamadas o descargas. Compara resultados del mismo motor; las pruebas ausentes o fallidas no son muestras válidas de velocidad cero.

## Fuentes

- [Apple: networkQuality y responsividad](https://developer.apple.com/videos/play/wwdc2021/10239/)
- [Fast.com: mediciones de velocidad y latencia](https://fast.com/)

## Deja que VelociBar mida por ti

Ejecuta tests automáticos desde la barra de menú de tu Mac, guarda el historial en local y expórtalo a CSV cuando lo necesites. Sin cuentas, sin nube: todo en tu Mac.

[↓ Descargar VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← Todos los artículos](https://velocibar.app/blog/)
