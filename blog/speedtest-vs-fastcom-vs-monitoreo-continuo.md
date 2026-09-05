# Speedtest vs Fast.com: qué mide cada uno (y lo que ninguno te cuenta)

4 de septiembre de 2026 · 7 min de lectura

> Versión en Markdown de https://velocibar.app/blog/speedtest-vs-fastcom-vs-monitoreo-continuo.html · [English version](https://velocibar.app/en/blog/speedtest-vs-fastcom-vs-continuous-monitoring.md)

«Cuál es el mejor test de velocidad, Speedtest o Fast.com» es la pregunta equivocada. Los dos son herramientas fiables, pero miden cosas distintas, con métodos distintos y para propósitos distintos. Ninguno miente, pero ninguno te da tampoco el cuadro completo. Vamos a ver exactamente qué hace cada uno, dónde se parecen y qué información se te queda fuera pases el test que pases.

## Cómo funciona Speedtest de Ookla

Speedtest busca, entre miles de servidores repartidos por el mundo, uno cercano a ti y con muy buena conectividad: normalmente alojado en la infraestructura de un operador o un datacenter con mucho ancho de banda disponible. Después abre varias conexiones en paralelo contra ese servidor y suma el rendimiento de todas ellas.

Ese diseño no es casualidad: Speedtest está pensado para encontrar el **techo** de tu línea. Si contratas 500 Mbps, quieres un test que sea capaz de exprimir esos 500 Mbps si tu línea los da, y las conexiones múltiples contra un servidor óptimo son la forma de conseguirlo. Es la herramienta correcta para una pregunta muy concreta: *¿mi proveedor me está dando lo que contraté?*

Lo que Speedtest no está diseñado para representar es tu **experiencia habitual**. Cuando ves una serie de TV, descargas un archivo o cargas una página, casi nunca hablas con un servidor óptimo por varias conexiones en paralelo: hablas con un único servidor, con una única conexión, que puede estar más lejos o peor dimensionado. El número que ves en Speedtest es real, pero es tu mejor caso, no tu caso típico.

## Cómo funciona Fast.com

Fast.com, de Netflix, nació con un propósito mucho más concreto: dejar que cualquiera comprobara si su proveedor estaba **limitando el tráfico hacia Netflix**. Por eso, en lugar de servidores genéricos de test, Fast.com mide contra la propia infraestructura de Netflix: la misma red de servidores (Open Connect) que te sirve las películas y series.

Es una herramienta deliberadamente simple: pocos parámetros, poca configuración, un número grande en el centro de la pantalla. Eso la hace muy accesible, pero también más limitada como diagnóstico general: mide bien el escenario «tráfico hacia Netflix», que sirve como aproximación razonable a tu velocidad de descarga general, aunque no es exactamente lo mismo que hablar con cualquier otro servicio.

## Lo que Speedtest y Fast.com tienen en común

Más allá de sus diferencias, ambos comparten una limitación estructural: son una **fotografía de un instante**, tomada justo en el momento en que tú, de forma consciente, decides mirar. Y ese detalle importa más de lo que parece.

Algunos proveedores han sido señalados por gestionar de forma más favorable el tráfico dirigido a servidores de test conocidos: los de Speedtest y Fast.com son, por definición, de los más reconocibles que existen. No es una acusación generalizada ni demostrable en cada caso individual, pero sí es una razón plausible por la que un resultado puede verse mejor en el test de lo que se siente navegando a diario. Y aunque no hubiera ningún trato especial, el simple hecho de que el resultado dependa de un único momento —justo cuando abres la app— ya deja fuera todo lo que pasa el resto del día.

## Comparativa: Speedtest, Fast.com y monitoreo continuo

| | Speedtest | Fast.com | Monitoreo continuo |
|---|---|---|---|
| **Qué mide** | El techo de tu línea: máximo rendimiento posible con conexiones en paralelo | Rendimiento real contra la red de Netflix (Open Connect) | Tu velocidad y responsividad reales a lo largo del día, medición tras medición |
| **Servidores de test** | Red global de servidores de terceros, elige el más óptimo cerca de ti | Infraestructura propia de Netflix (Open Connect) | CDN global + la herramienta networkQuality de Apple |
| **Mejor uso** | Verificar la velocidad contratada frente a tu ISP | Comprobar si se limita el tráfico hacia Netflix | Entender el patrón real de tu conexión, día y noche |
| **Latencia bajo carga** | Incluye una métrica de latencia bajo carga, pero solo en ese instante | Incluye una métrica de latencia bajo carga, pero solo en ese instante | Responsividad (RPM) medida en cada prueba, con historial |
| **Historial en el tiempo** | No, salvo que crees una cuenta y lo repitas manualmente | No | Sí, automático, cada 15/30/60 minutos |
| **Evidencia exportable** | Captura de pantalla o cuenta con historial limitado | Captura de pantalla | CSV local con fecha, hora, Mbps y RPM de cada test |

## Lo que ninguno de los dos te cuenta

Ni Speedtest ni Fast.com pueden responder a preguntas que dependen del tiempo: ¿cómo se comporta tu conexión a las 21:00 comparado con las 9:00? ¿Hay caídas que se repiten cada noche o cada fin de semana? ¿Mejoró de verdad tu conexión después de que cambiaras de plan o de router, o solo lo parece porque hiciste el test una vez en un buen momento?

Esas preguntas no se responden con un test puntual, por bueno que sea el test. Se responden con **monitoreo continuo**: mediciones automáticas y repetidas que dibujan una curva, no un punto. Es exactamente para eso que existe [VelociBar](https://velocibar.app/), una app de barra de menú para macOS que ejecuta un test automático cada 15, 30 o 60 minutos, mide tanto la velocidad de descarga como la responsividad bajo carga (RPM) y guarda todo el historial en local, exportable a CSV.

La conclusión honesta es que no compiten entre sí: se complementan. Usa Speedtest o Fast.com para una comprobación puntual: por ejemplo, para [hacer un test de velocidad en tu Mac](https://velocibar.app/blog/test-velocidad-mac.html) antes de una videollamada importante. Y si sospechas que tu conexión empeora en ciertos momentos o quieres [reclamar a tu ISP con datos](https://velocibar.app/blog/reclamar-isp-internet-lento.html), necesitas el patrón completo que solo da el monitoreo continuo.

## Enlaces

- Blog: https://velocibar.app/blog/
- Descargar VelociBar (App Store): https://apps.apple.com/us/app/velocibar/id6756196355
