# VelociBar - Test de velocidad de internet continuo para macOS

> Versión en Markdown de https://velocibar.app/ · [English version](https://velocibar.app/en/index.md)

VelociBar es una app de barra de menú para macOS que mide tu velocidad real de internet a lo largo del tiempo, no solo en el momento en que ejecutas un test puntual. Vive en la barra de menú, mide sola en segundo plano y guarda un historial local que puedes exportar a CSV para reclamar a tu proveedor de internet (ISP).

- **Descarga**: https://apps.apple.com/us/app/velocibar/id6756196355 (App Store, 1,99 USD, pago único)
- **Requisitos**: macOS 26 o superior
- **Idiomas**: español (por defecto) e inglés

## De un vistazo

- **100 % en tu Mac, en local**: sin cuentas, sin nube, sin telemetría
- **2 motores de medición**: la herramienta `networkQuality` de Apple + descarga real desde una CDN global
- **Historial completo exportable a CSV**

## Qué mide

**Dos motores de medición, una sola verdad.** VelociBar alterna la herramienta `networkQuality` de Apple con una descarga real desde una CDN global. Mide el rendimiento que de verdad obtienes navegando, no un número idealizado de laboratorio:

- **Velocidad de descarga real** (Mbps)
- **Responsividad bajo carga** (RPM, roundtrips per minute): cuántas veces por minuto responde tu red mientras está saturada. Es la métrica del *bufferbloat*, y explica por qué una videollamada se entrecorta o un juego tiene lag aunque tu velocidad de descarga sea alta. Cada prueba se califica como **Baja / Media / Alta**, el mismo criterio que usa la herramienta de Apple.

## Historial y exportación

Cada prueba se guarda localmente y se dibuja en una línea de tiempo: descubre la caída de las 9 de la noche, la saturación del fin de semana o el día exacto en que tu conexión cambió. Exporta el historial completo con un clic a CSV con estas columnas: `timestamp`, `source` (motor), `download_mbps`, `latency_ms`, `responsiveness_rpm`. Evidencia objetiva para tu ISP, o solo para ti.

Las pruebas automáticas se ejecutan en segundo plano cada 15, 30 o 60 minutos (tú eliges), con un botón «Probar ahora» y un widget de escritorio con tu última medición.

## Privacidad

Tus datos nunca salen de tu Mac. **Sin cuentas, sin nube, sin telemetría.** Cada prueba, cada registro y cada exportación ocurren en local.

## ¿VelociBar o un test de velocidad puntual?

Speedtest o Fast.com son útiles para una foto del momento. VelociBar responde otra pregunta: cómo se comporta tu conexión a lo largo del día, todos los días.

| | Tests puntuales (Speedtest, Fast.com) | VelociBar |
|---|---|---|
| **Cuándo mide** | Solo cuando tú lo ejecutas | Automáticamente, cada 15, 30 o 60 minutos |
| **Qué revela** | Una foto de ese instante | El patrón real: la caída de las 21:00, la congestión del fin de semana |
| **Bufferbloat** | No siempre lo mide | Responsividad bajo carga (RPM), calificada Baja / Media / Alta |
| **Historial** | Limitado o requiere cuenta | Local en tu Mac, exportable a CSV con un clic |
| **Privacidad** | Servicio web, según cada proveedor | Sin cuentas, sin nube, sin telemetría |

No tienes que elegir: usa un test puntual para comprobar el momento y VelociBar para conocer —y demostrar— cómo es tu conexión de verdad.

## Preguntas frecuentes

### ¿Qué mide exactamente VelociBar?

VelociBar mide la velocidad de descarga real (Mbps) y la responsividad bajo carga (RPM). Alterna dos motores: la herramienta networkQuality de Apple y una descarga real desde una CDN global. Así refleja el rendimiento que de verdad experimentas, no un número de laboratorio en condiciones ideales.

### ¿Qué es la responsividad (RPM) y por qué importa?

La responsividad mide cuántos viajes de ida y vuelta completa tu red por minuto mientras está bajo carga. Es la métrica del bufferbloat: explica por qué una videollamada se entrecorta o un juego tiene lag aunque tu velocidad de descarga sea alta. VelociBar la clasifica como Baja, Media o Alta.

### ¿VelociBar sube mis datos a algún servidor?

No. Todos los resultados se almacenan únicamente en tu Mac. No hay cuentas, no hay nube y no hay telemetría. Tú tienes el control total de tus datos.

### ¿Puedo exportar el historial?

Sí. VelociBar guarda cada prueba en un archivo CSV con marca de tiempo, motor, descarga (Mbps), latencia (ms) y responsividad (RPM). Lo abres o lo exportas con un clic, lo que sirve como evidencia objetiva para tu proveedor de internet o para tu propio seguimiento.

### ¿Funciona en segundo plano?

Sí. VelociBar vive en la barra de menú y ejecuta pruebas automáticas en el intervalo que elijas: cada 15, 30 o 60 minutos. También incluye un widget para ver tu última medición de un vistazo.

### ¿Qué necesito para usar VelociBar?

macOS 26 o superior. Puedes descargar VelociBar desde la App Store de Apple.

### ¿Cómo demuestro a mi ISP que mi internet va lento?

Deja que VelociBar mida en segundo plano durante unos días y exporta el historial a CSV. El archivo incluye fecha y hora, motor de medición, descarga (Mbps), latencia (ms) y responsividad (RPM): evidencia objetiva de caídas recurrentes —por ejemplo, cada noche a las 21:00— que un test puntual no puede demostrar.

### ¿VelociBar reemplaza a Speedtest o Fast.com?

Los complementa. Un test puntual sirve para comprobar un momento concreto; VelociBar mide de forma continua y automática, guarda el historial en tu Mac y lo exporta a CSV, para que veas patrones a lo largo del tiempo y tengas evidencia objetiva. Muchos usuarios usan ambos.

## Enlaces

- Página principal (HTML): https://velocibar.app/
- English version (HTML): https://velocibar.app/en/
- Descargar en la App Store: https://apps.apple.com/us/app/velocibar/id6756196355
- Política de privacidad: https://velocibar.app/legal/privacy.html
- Términos de uso: https://velocibar.app/legal/terms.html
- Resumen del sitio para LLMs: https://velocibar.app/llms.txt
