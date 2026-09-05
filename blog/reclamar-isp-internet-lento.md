# Cómo reclamar a tu ISP por internet lento: la guía con evidencia

4 de septiembre de 2026 · 7 min de lectura

> Versión en Markdown de https://velocibar.app/blog/reclamar-isp-internet-lento.html · [English version](https://velocibar.app/en/blog/prove-isp-throttling.md)

Pagas por 500 Mbps y el test te da 180. Llamas a soporte, te piden reiniciar el router, la velocidad sube durante cinco minutos y vuelve a caer por la noche. Si esto te suena familiar, el problema no es tu paciencia: es que estás discutiendo con datos anecdóticos contra un guion de atención al cliente. Esta guía te explica, paso a paso, cómo convertir "mi internet va lento" en un caso que un proveedor no puede despachar con un reinicio.

## Paso 0 — Descarta primero tu propio lado

Antes de reclamar nada, comprueba que el problema no está entre tu router y tu portátil. Conecta un equipo por cable ethernet directamente al router y repite la prueba en más de un dispositivo, con el resto del tráfico en pausa: nadie descargando, ningún backup en curso, ninguna consola actualizándose. Si por cable obtienes lo que contrataste, el problema es tu WiFi —canal saturado, router viejo, paredes gruesas— y ningún reclamo al proveedor lo va a arreglar. Si incluso por cable la velocidad es sistemáticamente inferior a lo contratado, sigue leyendo: ahí sí hay un caso contra tu ISP.

## Paso 1 — Ten claro qué contrataste de verdad

Revisa el contrato o la web de tu tarifa antes de discutir cifras. La mayoría de proveedores no prometen una velocidad fija, sino "hasta" tantos Mbps —una cifra máxima teórica, no garantizada—, y casi siempre esa cifra se refiere a una conexión por cable, no por WiFi. Sin embargo, "hasta 500 Mbps" no es una licencia para entregar 50 de forma constante: el criterio habitual (y el que usan los reguladores) es que la velocidad real debe acercarse de forma razonable a la contratada la mayor parte del tiempo, no solo en condiciones ideales de laboratorio.

## Paso 2 — Mide de forma continua durante 1–2 semanas

Aquí es donde la mayoría de reclamaciones se hunden. Envías una captura de un test de velocidad y soporte responde: "ejecútalo ahora, a ver" — y, cómo no, en ese momento da bien. Un test puntual no demuestra nada porque no puede probar un patrón: solo describe un instante, y un instante siempre se puede repetir hasta que salga bien.

Lo que cambia la conversación es un historial con marca de tiempo generado automáticamente, sin que tú intervengas. Una app como [VelociBar](https://velocibar.app/) ejecuta un test cada 15, 30 o 60 minutos desde la barra de menú de tu Mac —tú eliges el intervalo— y guarda cada resultado en local. Al cabo de una o dos semanas tienes algo que una captura suelta no puede ofrecer: una curva que muestra si el problema es sistemático (por ejemplo, todas las noches entre las 21:00 y las 23:00, como describimos en [por qué tu internet va lento por la noche](https://velocibar.app/blog/internet-lento-por-la-noche.html)) o si son caídas puntuales y aisladas. Un proveedor puede ignorar una queja; le cuesta mucho más ignorar dos semanas de datos con la misma caída repetida cada noche a la misma hora.

## Paso 3 — Arma el expediente de evidencia

Con el historial acumulado, exporta el CSV completo. VelociBar guarda cada medición con `timestamp`, `engine` (el motor usado), `download_mbps`, `latency_ms` y `responsiveness_rpm`. Ese archivo, tal cual, ya es evidencia — pero un resumen de una página convence más rápido que una hoja de cálculo:

- **Velocidad contratada** vs. **mediana real** medida en el periodo (usa la mediana, no la media: unos pocos picos buenos no deben tapar el problema).
- **Horas peores**: el rango horario en el que la velocidad cae de forma repetida, y en cuántos días de la muestra ocurre.
- **Responsividad (RPM)** en esas mismas horas, si además de la descarga notas cortes en videollamadas o partidas online — es el indicador de bufferbloat, y suele desplomarse antes que los Mbps.

Si además quieres contrastar con una herramienta externa reconocida, complementa tu expediente con un test puntual — tienes el paso a paso en [cómo medir la velocidad de tu Mac](https://velocibar.app/blog/test-velocidad-mac.html) — pero que sea el complemento, no la base: la base es tu historial continuo.

## Paso 4 — Contacta a soporte de la forma correcta

Ahora sí, llama o escribe a soporte técnico, y hazlo con el expediente en la mano:

1. Indica la velocidad contratada y la mediana real que has medido, con el periodo exacto (por ejemplo: «contratados 500 Mbps, mediana real 210 Mbps entre el 1 y el 14 de septiembre»).
2. Adjunta el CSV exportado o el resumen; no te limites a describir el problema de palabra.
3. Pide explícitamente una revisión de línea y de saturación del nodo de tu zona — son las dos causas técnicas más habituales, y nombrarlas evita que te respondan con el guion genérico de «reinicia el router».
4. Exige un número de ticket o referencia de la incidencia en cada contacto, y anota la fecha, el canal (teléfono, chat, email) y el nombre de quien te atendió.

Ese registro de fechas es tan importante como los datos de velocidad: si acabas escalando, demuestra que ya le diste al proveedor la oportunidad de arreglarlo.

## Paso 5 — Escala si te ignoran

Si soporte cierra el ticket sin resolver nada, o el problema persiste tras varias visitas técnicas, el siguiente paso es salir de la conversación con el proveedor. En España, la Oficina de Atención al Usuario de Telecomunicaciones (OAUT) admite reclamaciones formales una vez agotada la vía del proveedor; en Estados Unidos existen las quejas informales ante la FCC; en el Reino Unido, Ofcom. La mayoría de países tienen un regulador de telecomunicaciones o una agencia de protección al consumidor con un proceso equivalente, y todos valoran mucho más una reclamación con un CSV de dos semanas que un «se me corta mucho».

Revisa también tu contrato: muchas permanencias se anulan si el proveedor incumple de forma sistemática lo prometido, precisamente el escenario que tu historial demuestra. Esto no es asesoría legal —las condiciones varían según el país y el contrato—, pero sí es el argumento con el que puedes abrir esa conversación, ya sea para renegociar, para salir sin penalización o para presentar una reclamación formal.

## Construye tu expediente sin esfuerzo

VelociBar mide tu conexión automáticamente desde la barra de menú de macOS y guarda cada resultado en un historial local exportable a CSV. Cuando necesites reclamar, la evidencia ya está lista. [Descargar VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355).

## Enlaces

- Blog: https://velocibar.app/blog/
- Descargar en la App Store: https://apps.apple.com/us/app/velocibar/id6756196355
