> Versión en Markdown de https://velocibar.app/blog/reclamar-isp-internet-lento.html · [English version](https://velocibar.app/en/blog/prove-isp-throttling.html)

# Cómo reclamar a tu ISP por internet lento: la guía con evidencia

Por [VelociBar](https://velocibar.app/) · Publicado el 4 de septiembre de 2026 · Actualizado el 10 de septiembre de 2026 · 5 min de lectura

**Para documentar internet lento ante tu ISP, reúne pruebas repetibles por cable, registra las condiciones y comparte un resumen fechado con soporte.** Incluye horas tranquilas y ocupadas. El historial puede demostrar caídas recurrentes; por sí solo no prueba una limitación deliberada del ISP ni un incumplimiento contractual.

## Paso 0: Descarta primero tu propio lado

Empieza por ethernet y pausa el tráfico de otros equipos. Comprueba que el adaptador, el cable, los puertos del router y el dispositivo soporten la velocidad del plan. Repite con otro equipo y destino de prueba. Si por cable mejora y por WiFi no, investiga el tramo inalámbrico; el ISP también podría ayudarte si suministró el router.

## Paso 1: Ten claro qué contrataste de verdad

Revisa las definiciones de velocidad, las condiciones de conexión y el procedimiento de reclamación de tu plan o contrato. La velocidad anunciada, la habitual y la mínima garantizada son medidas diferentes. Determinar un incumplimiento depende del contrato y de las reglas locales aplicables; un resultado bajo no resuelve esa cuestión por sí solo.

## Paso 2: Reúne mediciones comparables a lo largo del tiempo

Reporta la falla cuanto antes; no necesitas esperar dos semanas para contactar a soporte. Varios días de mediciones pueden revelar un patrón, y una muestra más larga puede ayudar con problemas intermitentes. Una prueba suelta sigue siendo útil para documentar ese momento, aunque no establezca una tendencia.

Lo que cambia la conversación es un historial con marca de tiempo generado automáticamente, sin que tú intervengas. Una app como [VelociBar](https://velocibar.app/) ejecuta un test cada 15, 30 o 60 minutos desde la barra de menú de tu Mac —tú eliges el intervalo— y guarda cada resultado en local. Al cabo de una o dos semanas tienes algo que una captura suelta no puede ofrecer: una curva que muestra si el problema es sistemático (por ejemplo, todas las noches entre las 21:00 y las 23:00, como describimos en [por qué tu internet va lento por la noche](https://velocibar.app/blog/internet-lento-por-la-noche.html)) o si son caídas puntuales y aisladas. Un proveedor puede ignorar una queja; le cuesta mucho más ignorar dos semanas de datos con la misma caída repetida cada noche a la misma hora.

## Paso 3: Arma el expediente de evidencia

Exporta el CSV original y conserva los nombres de sus columnas. El registro actual de VelociBar incluye `timestamp`, `source`, `is_error`, `download_mbps`, `latency_ms`, `duration_s`, `bytes_downloaded` y `responsiveness_rpm`. Separa las pruebas exitosas de los errores y agrupa por `source` antes de calcular resúmenes. Las versiones anteriores pueden incluir menos campos.

- **Velocidad del plan y distribución de resultados.** Reporta mediana, rango y número de pruebas exitosas por motor y franja horaria. Incluye periodos normales y malos para evitar una selección sesgada.
- **Horas peores**: el rango horario en el que la velocidad cae de forma repetida, y en cuántos días de la muestra ocurre.
- **Responsividad y latencia.** Separa los motores. En Apple, `latency_ms` se deriva de RPM; en el motor CDN, esa columna registra el tiempo de respuesta HTTP inicial. Un RPM de cero puede significar que no se midió, y no debe interpretarse como una puntuación válida.

Si además quieres contrastar con una herramienta externa reconocida, complementa tu expediente con un test puntual —tienes el paso a paso en [cómo medir la velocidad de tu Mac](https://velocibar.app/blog/test-velocidad-mac.html)— pero que sea el complemento, no la base: la base es tu historial continuo.

## Paso 4: Contacta a soporte de la forma correcta

Cuando contactes a soporte técnico, comparte las mediciones que tengas hasta ese momento:

1. Indica la velocidad contratada y la mediana real que has medido, con el periodo exacto (por ejemplo: «contratados 500 Mbps, mediana real 210 Mbps entre el 1 y el 14 de septiembre»).
2. Adjunta el CSV exportado o el resumen; no te limites a describir el problema de palabra.
3. Pide una revisión de la línea y del horario recurrente, incluyendo posibles problemas de capacidad o rutas. Evita presentar una sospecha como un diagnóstico confirmado.
4. Exige un número de ticket o referencia de la incidencia en cada contacto, y anota la fecha, el canal (teléfono, chat, email) y el nombre de quien te atendió.

Ese registro de fechas es tan importante como los datos de velocidad: si acabas escalando, demuestra que ya le diste al proveedor la oportunidad de arreglarlo.

## Paso 5: Escala si te ignoran

Si el problema continúa, sigue el procedimiento formal del proveedor y después la vía que corresponda a tu país. Consulta la [Oficina de Atención al Usuario de Telecomunicaciones](https://usuariosteleco.digital.gob.es/reclamaciones) en España, el [portal de quejas de la FCC](https://consumercomplaints.fcc.gov/hc/en-us) en Estados Unidos y la [orientación de Ofcom](https://www.ofcom.org.uk/make-a-complaint/complain-about-mobile-phone-or-internet-services) para la vía aplicable en el Reino Unido. Los requisitos y las posibles soluciones varían.

No asumas que un historial de velocidad elimina automáticamente una penalización por permanencia. Revisa el contrato y las reglas de reclamación aplicables antes de solicitar una cancelación, compensación u otra solución.

VelociBar ejecuta pruebas activas mientras la app funciona y el Mac está despierto. Las pruebas transfieren datos y pueden afectar llamadas o descargas. Compara resultados del mismo motor; las pruebas ausentes o fallidas no son muestras válidas de velocidad cero.

## Fuentes

- [España: reclamaciones de telecomunicaciones](https://usuariosteleco.digital.gob.es/reclamaciones)
- [FCC: quejas sobre el servicio de internet](https://consumercomplaints.fcc.gov/hc/en-us)
- [Ofcom: fallas, reclamaciones y resolución de disputas](https://www.ofcom.org.uk/phones-and-broadband/service-quality/broadband-wifi-help)

## Construye tu expediente sin esfuerzo

VelociBar mide tu conexión automáticamente desde la barra de menú de macOS y guarda cada resultado en un historial local exportable a CSV. Cuando necesites reclamar, la evidencia ya está lista.

[↓ Descargar VelociBar](https://apps.apple.com/us/app/velocibar/id6756196355)

[← Todos los artículos](https://velocibar.app/blog/)
