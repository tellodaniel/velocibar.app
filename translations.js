/**
 * VelociBar — Translations
 * Spanish (es) and English (en)
 */

const translations = {
  es: {
    // Meta & SEO
    meta: {
      title: "VelociBar — Mide tu velocidad real de internet en macOS",
      description: "¿Tu internet es lento o es tu Mac? VelociBar monitorea tu conexión real minuto a minuto desde la barra de menú. Detecta caídas, guarda historial y expórtalo para reclamar a tu ISP.",
      ogTitle: "VelociBar — Tu velocidad real de internet",
      ogDescription: "App de barra de menú para macOS que mide tu velocidad de internet real a lo largo del tiempo. Guarda historial local y exporta CSV.",
      twitterDescription: "Mide tu velocidad de internet real a lo largo del tiempo. Sin cuentas, sin tracking.",
      ogImageAlt: "VelociBar — monitor de velocidad de internet en la barra de menú de macOS"
    },

    // Navigation
    nav: {
      measurement: "Medición",
      responsiveness: "Responsividad",
      history: "Historial",
      download: "Descargar"
    },

    // Hero
    hero: {
      eyebrow: "Monitor de red · macOS",
      title: "La velocidad real de tu internet, no la de la foto perfecta.",
      subtitle: "VelociBar vive en la barra de menú de macOS y mide tu conexión sola, en segundo plano: <strong>descarga real</strong> y <strong>responsividad bajo carga</strong>, con un historial local que puedes exportar.",
      downloadBtn: "Descargar para macOS",
      requirement: "Requiere macOS 26 o superior",
      panel: {
        time: "· hace 2 min",
        download: "Descarga",
        responsiveness: "Responsividad",
        high: "Alta",
        interval: "⏱ Intervalo",
        runNow: "▶ Probar ahora"
      }
    },

    // Stat strip
    stats: [
      "En tu Mac, en local",
      "Motores de medición: networkQuality de Apple + CDN",
      "Historial completo, exportable"
    ],

    // Feature — Measurement
    measurement: {
      eyebrow: "Medición",
      title: "Dos motores de medición, una sola verdad.",
      body: "VelociBar alterna la herramienta <span class=\"mono\">networkQuality</span> de Apple con una descarga real desde una CDN global. Mide el rendimiento que de verdad obtienes navegando, no un número idealizado de laboratorio.",
      mockHead: "Resultado",
      engine: "Motor",
      cdn: "Descarga CDN",
      sub: "descarga real<br>1240 RPM · resp."
    },

    // Feature — Responsiveness
    responsiveness: {
      eyebrow: "Responsividad",
      title: "Por qué tu videollamada se entrecorta con 300 Mbps.",
      body1: "La velocidad no lo es todo. VelociBar mide la <strong>responsividad bajo carga</strong> (RPM): cuántas veces por minuto responde tu red mientras está saturada. Es la métrica del <em>bufferbloat</em>, y es lo que decide si Zoom se congela.",
      body2: "Cada prueba se califica como Baja, Media o Alta — el mismo criterio que usa la herramienta de Apple — para que sepas de un vistazo si el problema es la velocidad o la estabilidad.",
      mockHead: "Responsividad bajo carga",
      low: "Baja",
      medium: "Media",
      high: "Alta"
    },

    // Feature — History
    history: {
      eyebrow: "Historial",
      title: "Ve el patrón, no solo el momento.",
      body: "Cada prueba se guarda localmente y se dibuja en una línea de tiempo. Descubre la caída de las 9 de la noche, la saturación del fin de semana o el día exacto en que tu conexión cambió.",
      mockHead: "Últimas 24 h · Mbps",
      flag: "Caída detectada · 21:00 – 23:00"
    },

    // Feature — Export
    export: {
      eyebrow: "Exportar",
      title: "Tus datos, en un CSV que habla por ti.",
      body: "Exporta el historial completo con un clic: marca de tiempo, motor, descarga, latencia y responsividad. Evidencia objetiva para tu proveedor de internet — o solo para ti.",
      drop: "← caída"
    },

    // Privacy line
    privacy: {
      line: "Tus datos nunca salen de tu Mac. <strong>Sin cuentas, sin nube, sin telemetría</strong> — cada prueba, cada registro y cada exportación ocurren en local."
    },

    // FAQ
    faq: {
      eyebrow: "Preguntas",
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Qué mide exactamente VelociBar?",
          answer: "VelociBar mide la velocidad de descarga real (Mbps) y la responsividad bajo carga (RPM). Alterna dos motores: la herramienta networkQuality de Apple y una descarga real desde una CDN global. Así refleja el rendimiento que de verdad experimentas, no un número de laboratorio en condiciones ideales."
        },
        {
          question: "¿Qué es la responsividad (RPM) y por qué importa?",
          answer: "La responsividad mide cuántos viajes de ida y vuelta completa tu red por minuto mientras está bajo carga. Es la métrica del bufferbloat: explica por qué una videollamada se entrecorta o un juego tiene lag aunque tu velocidad de descarga sea alta. VelociBar la clasifica como Baja, Media o Alta."
        },
        {
          question: "¿VelociBar sube mis datos a algún servidor?",
          answer: "No. Todos los resultados se almacenan únicamente en tu Mac. No hay cuentas, no hay nube y no hay telemetría. Tú tienes el control total de tus datos."
        },
        {
          question: "¿Puedo exportar el historial?",
          answer: "Sí. VelociBar guarda cada prueba en un archivo CSV con marca de tiempo, motor, descarga (Mbps), latencia (ms) y responsividad (RPM). Lo abres o lo exportas con un clic, lo que sirve como evidencia objetiva para tu proveedor de internet o para tu propio seguimiento."
        },
        {
          question: "¿Funciona en segundo plano?",
          answer: "Sí. VelociBar vive en la barra de menú y ejecuta pruebas automáticas en el intervalo que elijas: cada 15, 30 o 60 minutos. También incluye un widget para ver tu última medición de un vistazo."
        },
        {
          question: "¿Qué necesito para usar VelociBar?",
          answer: "macOS 26 o superior. Puedes descargar VelociBar desde la App Store de Apple."
        }
      ]
    },

    // CTA
    cta: {
      title: "Deja de adivinar. Empieza a medir.",
      button: "Descargar VelociBar",
      requirement: "Requiere macOS 26 o superior"
    },

    // Footer
    footer: {
      privacy: "Política de Privacidad",
      terms: "Términos de Uso",
      copyright: "© 2026 VelociBar. Todos los derechos reservados."
    },

    // Toast messages
    toast: {
      downloadSoon: "El enlace de descarga estará disponible pronto."
    },

    // Legal pages
    legal: {
      backHome: "← Volver al inicio"
    }
  },

  en: {
    // Meta & SEO
    meta: {
      title: "VelociBar — Measure your real internet speed on macOS",
      description: "Is your internet slow or is it your Mac? VelociBar monitors your real connection minute by minute from the menu bar. Detects drops, saves history and exports it to claim from your ISP.",
      ogTitle: "VelociBar — Your real internet speed",
      ogDescription: "Menu bar app for macOS that measures your real internet speed over time. Saves local history and exports to CSV.",
      twitterDescription: "Measure your real internet speed over time. No accounts, no tracking.",
      ogImageAlt: "VelociBar — internet speed monitor in the macOS menu bar"
    },

    // Navigation
    nav: {
      measurement: "Measurement",
      responsiveness: "Responsiveness",
      history: "History",
      download: "Download"
    },

    // Hero
    hero: {
      eyebrow: "Network monitor · macOS",
      title: "Your internet's real speed — not the perfect-snapshot one.",
      subtitle: "VelociBar lives in the macOS menu bar and measures your connection on its own, in the background: <strong>real download</strong> and <strong>responsiveness under load</strong>, with a local history you can export.",
      downloadBtn: "Download for macOS",
      requirement: "Requires macOS 26 or later",
      panel: {
        time: "· 2 min ago",
        download: "Download",
        responsiveness: "Responsiveness",
        high: "High",
        interval: "⏱ Interval",
        runNow: "▶ Run now"
      }
    },

    // Stat strip
    stats: [
      "On your Mac, on-device",
      "Measurement engines: Apple networkQuality + CDN",
      "Full history, exportable"
    ],

    // Feature — Measurement
    measurement: {
      eyebrow: "Measurement",
      title: "Two measurement engines, one honest number.",
      body: "VelociBar alternates Apple's <span class=\"mono\">networkQuality</span> tool with a real download from a global CDN. It measures the performance you actually get while browsing — not an idealized lab number.",
      mockHead: "Result",
      engine: "Engine",
      cdn: "CDN download",
      sub: "real download<br>1240 RPM · resp."
    },

    // Feature — Responsiveness
    responsiveness: {
      eyebrow: "Responsiveness",
      title: "Why your video call stutters on a 300 Mbps line.",
      body1: "Speed isn't everything. VelociBar measures <strong>responsiveness under load</strong> (RPM): how many times per minute your network answers while it's saturated. It's the <em>bufferbloat</em> metric — and it's what decides whether Zoom freezes.",
      body2: "Every test is rated Low, Medium or High — the same scale Apple's own tool uses — so you can tell at a glance whether the problem is speed or stability.",
      mockHead: "Responsiveness under load",
      low: "Low",
      medium: "Medium",
      high: "High"
    },

    // Feature — History
    history: {
      eyebrow: "History",
      title: "See the pattern, not just the moment.",
      body: "Every test is saved locally and plotted on a timeline. Spot the 9 p.m. drop, the weekend congestion, or the exact day your connection changed.",
      mockHead: "Last 24 h · Mbps",
      flag: "Drop detected · 21:00 – 23:00"
    },

    // Feature — Export
    export: {
      eyebrow: "Export",
      title: "Your data, in a CSV that speaks for itself.",
      body: "Export the full history in one click: timestamp, engine, download, latency and responsiveness. Objective evidence for your ISP — or just for you.",
      drop: "← drop"
    },

    // Privacy line
    privacy: {
      line: "Your data never leaves your Mac. <strong>No accounts, no cloud, no telemetry</strong> — every test, every log and every export runs locally."
    },

    // FAQ
    faq: {
      eyebrow: "Questions",
      title: "Frequently asked questions",
      items: [
        {
          question: "What exactly does VelociBar measure?",
          answer: "VelociBar measures real download speed (Mbps) and responsiveness under load (RPM). It alternates two engines: Apple's networkQuality tool and a real download from a global CDN — so it reflects the performance you actually experience, not a lab number under ideal conditions."
        },
        {
          question: "What is responsiveness (RPM), and why does it matter?",
          answer: "Responsiveness measures how many round trips your network completes per minute while under load. It's the bufferbloat metric: it explains why a video call stutters or a game lags even when your download speed is high. VelociBar rates it Low, Medium or High."
        },
        {
          question: "Does VelociBar upload my data anywhere?",
          answer: "No. All results are stored only on your Mac. There are no accounts, no cloud and no telemetry. You have full control of your data."
        },
        {
          question: "Can I export the history?",
          answer: "Yes. VelociBar saves every test to a CSV file with timestamp, engine, download (Mbps), latency (ms) and responsiveness (RPM). You can open or export it in one click — objective evidence for your ISP or for your own tracking."
        },
        {
          question: "Does it run in the background?",
          answer: "Yes. VelociBar lives in the menu bar and runs automatic tests at the interval you choose: every 15, 30 or 60 minutes. It also includes a widget so you can see your latest reading at a glance."
        },
        {
          question: "What do I need to run VelociBar?",
          answer: "macOS 26 or later. You can download VelociBar from the Apple App Store."
        }
      ]
    },

    // CTA
    cta: {
      title: "Stop guessing. Start measuring.",
      button: "Download VelociBar",
      requirement: "Requires macOS 26 or later"
    },

    // Footer
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      copyright: "© 2026 VelociBar. All rights reserved."
    },

    // Toast messages
    toast: {
      downloadSoon: "Download link will be available soon."
    },

    // Legal pages
    legal: {
      backHome: "← Back to home"
    }
  }
};

// Privacy page translations
const privacyTranslations = {
  es: {
    title: "Política de Privacidad — VelociBar",
    description: "Política de Privacidad de VelociBar. Conoce cómo protegemos tu información y respetamos tu privacidad.",
    ogDescription: "Conoce cómo VelociBar protege tu información y respeta tu privacidad.",
    heading: "Política de Privacidad",
    lastUpdated: "Última actualización: 24 de diciembre de 2024",
    summary: "<strong>Resumen:</strong> VelociBar está diseñado con la privacidad como principio fundamental. No recopilamos datos personales, no requerimos cuentas de usuario, y toda la información generada por la aplicación permanece almacenada exclusivamente en tu dispositivo.",
    sections: {
      intro: {
        title: "1. Introducción",
        content: [
          "Esta Política de Privacidad describe cómo VelociBar (\"nosotros\", \"nuestro\" o \"la Aplicación\") maneja la información cuando utilizas nuestra aplicación de medición de velocidad de internet para macOS. Esta política aplica a usuarios en México, Estados Unidos y cualquier otra jurisdicción donde la Aplicación esté disponible.",
          "Al descargar, instalar o utilizar VelociBar, aceptas las prácticas descritas en esta Política de Privacidad."
        ]
      },
      noCollect: {
        title: "2. Información que NO Recopilamos",
        intro: "VelociBar fue diseñado siguiendo el principio de minimización de datos. <strong>No recopilamos, almacenamos ni transmitimos:</strong>",
        items: [
          "Información personal identificable (nombre, correo electrónico, dirección, teléfono)",
          "Datos de ubicación geográfica",
          "Identificadores de dispositivo o direcciones IP",
          "Historial de navegación o uso de aplicaciones",
          "Información de tu proveedor de servicios de internet (ISP)",
          "Datos biométricos o de autenticación",
          "Información financiera o de pago"
        ]
      },
      generated: {
        title: "3. Información Generada por la Aplicación",
        intro: "VelociBar genera los siguientes datos durante su funcionamiento normal:",
        speedTests: {
          title: "3.1 Resultados de Pruebas de Velocidad",
          intro: "Cuando ejecutas una prueba de velocidad, la Aplicación registra:",
          items: [
            "Fecha y hora de la prueba",
            "Velocidad de descarga medida (en Mbps)",
            "Latencia o ping (en milisegundos)"
          ],
          note: "<strong>Estos datos se almacenan exclusivamente en tu Mac</strong>, en un archivo local que tú controlas completamente. Nunca se transmiten a nuestros servidores ni a terceros."
        },
        csvHistory: {
          title: "3.2 Archivo CSV de Historial",
          intro: "La Aplicación mantiene un archivo CSV con el historial de tus mediciones. Este archivo:",
          items: [
            "Se guarda en una ubicación de tu elección en tu sistema de archivos",
            "Puede ser exportado, compartido o eliminado por ti en cualquier momento",
            "No contiene información que permita identificarte personalmente",
            "Permanece bajo tu control exclusivo"
          ]
        }
      },
      howItWorks: {
        title: "4. Cómo Funcionan las Pruebas de Velocidad",
        intro: "Para medir la velocidad de tu conexión, VelociBar realiza una descarga de prueba desde servidores públicos de prueba. Durante este proceso:",
        items: [
          "Tu dirección IP es visible para el servidor de prueba (como ocurre con cualquier conexión a internet)",
          "No enviamos ningún identificador adicional ni información personal",
          "La conexión es temporal y solo para propósitos de medición",
          "No mantenemos registros de estas conexiones"
        ]
      },
      localStorage: {
        title: "5. Almacenamiento Local",
        intro: "Toda la información generada por VelociBar se almacena localmente en tu dispositivo:",
        items: [
          "<strong>Ubicación:</strong> Los datos se guardan en el directorio de la aplicación o en una ubicación que tú especifiques",
          "<strong>Formato:</strong> Archivos CSV de texto plano, legibles por cualquier aplicación de hojas de cálculo",
          "<strong>Seguridad:</strong> Los archivos están protegidos por los permisos de tu sistema operativo macOS",
          "<strong>Eliminación:</strong> Puedes eliminar estos archivos en cualquier momento usando el Finder o la Terminal"
        ]
      },
      noAccounts: {
        title: "6. Sin Cuentas de Usuario",
        intro: "VelociBar no requiere ni ofrece la creación de cuentas de usuario. Esto significa:",
        items: [
          "No necesitas proporcionar correo electrónico ni contraseña",
          "No existe un perfil de usuario asociado a tu uso",
          "No hay sincronización en la nube de tus datos",
          "No podemos recuperar tus datos si los eliminas, porque nunca los tenemos"
        ]
      },
      noAnalytics: {
        title: "7. Sin Análisis ni Telemetría",
        intro: "VelociBar <strong>no incluye</strong>:",
        items: [
          "Herramientas de análisis (Google Analytics, Mixpanel, etc.)",
          "SDKs de seguimiento o publicidad",
          "Telemetría de uso o comportamiento",
          "Reportes automáticos de errores que incluyan información personal"
        ]
      },
      thirdParty: {
        title: "8. Compartir Información con Terceros",
        content: [
          "<strong>No compartimos información con terceros</strong> porque no recopilamos información en primer lugar. No vendemos, alquilamos ni intercambiamos datos de usuarios.",
          "Si tú decides compartir tu archivo CSV de historial (por ejemplo, con tu proveedor de internet para documentar problemas de servicio), esa es tu decisión y está bajo tu control."
        ]
      },
      userRights: {
        title: "9. Derechos del Usuario",
        mexico: {
          title: "9.1 Para Usuarios en México",
          intro: "De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, tienes derecho a:",
          items: [
            "<strong>Acceso:</strong> Conocer qué datos tenemos sobre ti (en este caso, ninguno)",
            "<strong>Rectificación:</strong> Corregir datos inexactos",
            "<strong>Cancelación:</strong> Solicitar la eliminación de tus datos",
            "<strong>Oposición:</strong> Oponerte al tratamiento de tus datos"
          ],
          note: "Dado que VelociBar no recopila datos personales, estos derechos se ejercen automáticamente por diseño. Todos tus datos están bajo tu control local."
        },
        usa: {
          title: "9.2 Para Usuarios en Estados Unidos",
          intro: "Respetamos las leyes de privacidad aplicables en Estados Unidos, incluyendo:",
          items: [
            "<strong>California Consumer Privacy Act (CCPA):</strong> No vendemos información personal",
            "<strong>California Privacy Rights Act (CPRA):</strong> No compartimos información personal para publicidad dirigida",
            "<strong>Leyes estatales de privacidad:</strong> Cumplimos con regulaciones de Virginia, Colorado, Connecticut y otros estados"
          ],
          note: "Bajo estas leyes, tienes derecho a saber qué información personal recopilamos (ninguna), solicitar su eliminación (ya está en tu dispositivo), y optar por no participar en la venta de datos (no vendemos datos)."
        }
      },
      security: {
        title: "10. Seguridad",
        intro: "Aunque no almacenamos tus datos en nuestros servidores, reconocemos la importancia de la seguridad. VelociBar:",
        items: [
          "Está firmado digitalmente con certificado de desarrollador de Apple",
          "Pasa las verificaciones de seguridad de macOS Gatekeeper",
          "No requiere permisos especiales del sistema más allá de acceso a red",
          "No modifica archivos del sistema ni instala componentes adicionales"
        ]
      },
      minors: {
        title: "11. Menores de Edad",
        content: "VelociBar no está dirigido a menores de 13 años en Estados Unidos ni menores de 18 años en México. No recopilamos intencionalmente información de menores. Dado que la Aplicación no recopila datos personales, no existe riesgo de recopilación de información de menores."
      },
      changes: {
        title: "12. Cambios a esta Política",
        intro: "Podemos actualizar esta Política de Privacidad ocasionalmente. Cuando lo hagamos:",
        items: [
          "Actualizaremos la fecha de \"Última actualización\" al inicio del documento",
          "Los cambios significativos se comunicarán a través de nuestra página web",
          "El uso continuado de la Aplicación después de cambios constituye aceptación de la nueva política"
        ]
      },
      international: {
        title: "13. Transferencias Internacionales",
        content: "Dado que no recopilamos ni almacenamos datos en servidores, no realizamos transferencias internacionales de datos personales. Tus datos permanecen en tu dispositivo, en la jurisdicción donde te encuentres."
      },
      contact: {
        title: "14. Contacto",
        intro: "Si tienes preguntas sobre esta Política de Privacidad o sobre las prácticas de privacidad de VelociBar, puedes contactarnos a través de:",
        website: "<strong>Sitio web:</strong>",
        note: "Para usuarios en México que deseen ejercer sus derechos ARCO, o usuarios en Estados Unidos con solicitudes bajo CCPA/CPRA, responderemos dentro de los plazos establecidos por la ley aplicable, aunque reiteramos que no mantenemos datos personales que gestionar."
      },
      commitment: "<strong>Nuestro compromiso:</strong> La privacidad no es solo una política para nosotros, es un principio de diseño. VelociBar fue construido desde cero para que no necesites confiar en nosotros con tus datos — simplemente nunca los tenemos."
    }
  },
  en: {
    title: "Privacy Policy — VelociBar",
    description: "VelociBar Privacy Policy. Learn how we protect your information and respect your privacy.",
    ogDescription: "Learn how VelociBar protects your information and respects your privacy.",
    heading: "Privacy Policy",
    lastUpdated: "Last updated: December 24, 2024",
    summary: "<strong>Summary:</strong> VelociBar is designed with privacy as a fundamental principle. We don't collect personal data, we don't require user accounts, and all information generated by the app remains stored exclusively on your device.",
    sections: {
      intro: {
        title: "1. Introduction",
        content: [
          "This Privacy Policy describes how VelociBar (\"we\", \"our\" or \"the App\") handles information when you use our internet speed measurement application for macOS. This policy applies to users in Mexico, the United States, and any other jurisdiction where the App is available.",
          "By downloading, installing, or using VelociBar, you accept the practices described in this Privacy Policy."
        ]
      },
      noCollect: {
        title: "2. Information We Do NOT Collect",
        intro: "VelociBar was designed following the principle of data minimization. <strong>We do not collect, store, or transmit:</strong>",
        items: [
          "Personally identifiable information (name, email, address, phone)",
          "Geographic location data",
          "Device identifiers or IP addresses",
          "Browsing history or app usage",
          "Information about your internet service provider (ISP)",
          "Biometric or authentication data",
          "Financial or payment information"
        ]
      },
      generated: {
        title: "3. Information Generated by the App",
        intro: "VelociBar generates the following data during normal operation:",
        speedTests: {
          title: "3.1 Speed Test Results",
          intro: "When you run a speed test, the App records:",
          items: [
            "Date and time of the test",
            "Measured download speed (in Mbps)",
            "Latency or ping (in milliseconds)"
          ],
          note: "<strong>This data is stored exclusively on your Mac</strong>, in a local file that you completely control. It is never transmitted to our servers or third parties."
        },
        csvHistory: {
          title: "3.2 CSV History File",
          intro: "The App maintains a CSV file with your measurement history. This file:",
          items: [
            "Is saved in a location of your choice in your file system",
            "Can be exported, shared, or deleted by you at any time",
            "Does not contain information that can personally identify you",
            "Remains under your exclusive control"
          ]
        }
      },
      howItWorks: {
        title: "4. How Speed Tests Work",
        intro: "To measure your connection speed, VelociBar performs a test download from public test servers. During this process:",
        items: [
          "Your IP address is visible to the test server (as with any internet connection)",
          "We don't send any additional identifier or personal information",
          "The connection is temporary and only for measurement purposes",
          "We don't keep records of these connections"
        ]
      },
      localStorage: {
        title: "5. Local Storage",
        intro: "All information generated by VelociBar is stored locally on your device:",
        items: [
          "<strong>Location:</strong> Data is saved in the app directory or in a location you specify",
          "<strong>Format:</strong> Plain text CSV files, readable by any spreadsheet application",
          "<strong>Security:</strong> Files are protected by your macOS operating system permissions",
          "<strong>Deletion:</strong> You can delete these files at any time using Finder or Terminal"
        ]
      },
      noAccounts: {
        title: "6. No User Accounts",
        intro: "VelociBar does not require or offer user account creation. This means:",
        items: [
          "You don't need to provide email or password",
          "There is no user profile associated with your usage",
          "There is no cloud sync of your data",
          "We cannot recover your data if you delete it, because we never have it"
        ]
      },
      noAnalytics: {
        title: "7. No Analytics or Telemetry",
        intro: "VelociBar <strong>does not include</strong>:",
        items: [
          "Analytics tools (Google Analytics, Mixpanel, etc.)",
          "Tracking or advertising SDKs",
          "Usage or behavior telemetry",
          "Automatic error reports that include personal information"
        ]
      },
      thirdParty: {
        title: "8. Sharing Information with Third Parties",
        content: [
          "<strong>We don't share information with third parties</strong> because we don't collect information in the first place. We don't sell, rent, or trade user data.",
          "If you choose to share your CSV history file (for example, with your internet provider to document service issues), that is your decision and under your control."
        ]
      },
      userRights: {
        title: "9. User Rights",
        mexico: {
          title: "9.1 For Users in Mexico",
          intro: "In accordance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations, you have the right to:",
          items: [
            "<strong>Access:</strong> Know what data we have about you (in this case, none)",
            "<strong>Rectification:</strong> Correct inaccurate data",
            "<strong>Cancellation:</strong> Request deletion of your data",
            "<strong>Opposition:</strong> Object to the processing of your data"
          ],
          note: "Since VelociBar does not collect personal data, these rights are automatically exercised by design. All your data is under your local control."
        },
        usa: {
          title: "9.2 For Users in the United States",
          intro: "We respect applicable privacy laws in the United States, including:",
          items: [
            "<strong>California Consumer Privacy Act (CCPA):</strong> We don't sell personal information",
            "<strong>California Privacy Rights Act (CPRA):</strong> We don't share personal information for targeted advertising",
            "<strong>State privacy laws:</strong> We comply with regulations in Virginia, Colorado, Connecticut, and other states"
          ],
          note: "Under these laws, you have the right to know what personal information we collect (none), request its deletion (it's already on your device), and opt out of data sales (we don't sell data)."
        }
      },
      security: {
        title: "10. Security",
        intro: "Although we don't store your data on our servers, we recognize the importance of security. VelociBar:",
        items: [
          "Is digitally signed with an Apple developer certificate",
          "Passes macOS Gatekeeper security checks",
          "Does not require special system permissions beyond network access",
          "Does not modify system files or install additional components"
        ]
      },
      minors: {
        title: "11. Minors",
        content: "VelociBar is not intended for users under 13 in the United States or under 18 in Mexico. We do not intentionally collect information from minors. Since the App does not collect personal data, there is no risk of collecting information from minors."
      },
      changes: {
        title: "12. Changes to this Policy",
        intro: "We may update this Privacy Policy occasionally. When we do:",
        items: [
          "We will update the \"Last updated\" date at the beginning of the document",
          "Significant changes will be communicated through our website",
          "Continued use of the App after changes constitutes acceptance of the new policy"
        ]
      },
      international: {
        title: "13. International Transfers",
        content: "Since we don't collect or store data on servers, we don't make international transfers of personal data. Your data remains on your device, in the jurisdiction where you are located."
      },
      contact: {
        title: "14. Contact",
        intro: "If you have questions about this Privacy Policy or VelociBar's privacy practices, you can contact us through:",
        website: "<strong>Website:</strong>",
        note: "For users in Mexico who wish to exercise their ARCO rights, or users in the United States with requests under CCPA/CPRA, we will respond within the timeframes established by applicable law, although we reiterate that we do not maintain personal data to manage."
      },
      commitment: "<strong>Our commitment:</strong> Privacy is not just a policy for us, it's a design principle. VelociBar was built from the ground up so you don't need to trust us with your data — we simply never have it."
    }
  }
};

// Terms page translations
const termsTranslations = {
  es: {
    title: "Términos y Condiciones — VelociBar",
    description: "Términos y Condiciones de uso de VelociBar. Conoce las condiciones que rigen el uso de nuestra aplicación.",
    ogDescription: "Términos y Condiciones de uso de VelociBar.",
    heading: "Términos y Condiciones de Uso",
    lastUpdated: "Última actualización: 24 de diciembre de 2024",
    summary: "<strong>Resumen:</strong> VelociBar es una herramienta de medición de velocidad de internet proporcionada \"tal cual\". Los resultados son informativos y no constituyen garantía del rendimiento de tu conexión. Úsala de forma responsable y respeta estos términos.",
    sections: {
      acceptance: {
        title: "1. Aceptación de los Términos",
        content: [
          "Al descargar, instalar, acceder o utilizar VelociBar (\"la Aplicación\", \"el Software\" o \"el Servicio\"), aceptas quedar vinculado por estos Términos y Condiciones de Uso (\"Términos\"). Si no estás de acuerdo con estos Términos, no descargues, instales ni utilices la Aplicación.",
          "Estos Términos constituyen un acuerdo legal vinculante entre tú (\"Usuario\", \"tú\" o \"tu\") y VelociBar (\"nosotros\", \"nuestro\" o \"la Compañía\")."
        ]
      },
      description: {
        title: "2. Descripción del Servicio",
        intro: "VelociBar es una aplicación de barra de menú para macOS que permite:",
        items: [
          "Realizar pruebas de velocidad de descarga de tu conexión a internet",
          "Medir la latencia (ping) de tu conexión",
          "Programar pruebas automáticas a intervalos regulares",
          "Almacenar localmente un historial de resultados",
          "Exportar el historial en formato CSV"
        ]
      },
      requirements: {
        title: "3. Requisitos del Sistema",
        intro: "Para utilizar VelociBar necesitas:",
        items: [
          "Una computadora Mac con macOS 12.0 (Monterey) o posterior",
          "Conexión activa a internet",
          "Espacio suficiente en disco para la aplicación y los archivos de historial"
        ]
      },
      license: {
        title: "4. Licencia de Uso",
        grant: {
          title: "4.1 Concesión de Licencia",
          intro: "Sujeto al cumplimiento de estos Términos, te otorgamos una licencia limitada, no exclusiva, no transferible, no sublicenciable y revocable para:",
          items: [
            "Descargar e instalar la Aplicación en dispositivos Mac de tu propiedad o control",
            "Usar la Aplicación para propósitos personales y no comerciales",
            "Crear y mantener copias de seguridad de la Aplicación"
          ]
        },
        restrictions: {
          title: "4.2 Restricciones",
          intro: "No podrás:",
          items: [
            "Copiar, modificar, adaptar, traducir o crear obras derivadas de la Aplicación",
            "Realizar ingeniería inversa, descompilar, desensamblar o intentar obtener el código fuente",
            "Vender, revender, alquilar, arrendar o sublicenciar la Aplicación",
            "Usar la Aplicación para fines ilegales o no autorizados",
            "Interferir con o interrumpir la integridad o el rendimiento de la Aplicación",
            "Intentar eludir medidas de seguridad o autenticación",
            "Usar la Aplicación de manera que pueda dañar, deshabilitar o sobrecargar infraestructura de terceros"
          ]
        }
      },
      accuracy: {
        title: "5. Precisión de las Mediciones",
        warning: "<strong>Importante:</strong> Las mediciones de velocidad proporcionadas por VelociBar son aproximaciones y pueden variar debido a múltiples factores fuera de nuestro control.",
        factors: {
          title: "5.1 Factores que Afectan los Resultados",
          intro: "Los resultados de las pruebas de velocidad pueden verse afectados por:",
          items: [
            "Congestión de red en tu hogar, vecindario o proveedor de internet",
            "Distancia física a los servidores de prueba",
            "Calidad y configuración de tu router o módem",
            "Interferencia de Wi-Fi u otras señales inalámbricas",
            "Otros dispositivos o aplicaciones usando tu conexión simultáneamente",
            "Limitaciones técnicas de los servidores de prueba",
            "Hora del día y carga general de internet",
            "Tipo de conexión (fibra, cable, DSL, satelital, etc.)"
          ]
        },
        notOfficial: {
          title: "5.2 No es un Estándar Oficial",
          intro: "VelociBar <strong>no es una herramienta de medición certificada</strong> ni está avalada por organismos reguladores como el Instituto Federal de Telecomunicaciones (IFT) de México o la Federal Communications Commission (FCC) de Estados Unidos. Los resultados:",
          items: [
            "No deben considerarse como mediciones oficiales para disputas contractuales",
            "Pueden diferir de mediciones realizadas por otras herramientas",
            "Son informativos y para uso personal"
          ]
        },
        appropriate: {
          title: "5.3 Uso Apropiado del Historial",
          intro: "El historial CSV generado por VelociBar puede ser útil para:",
          items: [
            "Llevar un registro personal de tu experiencia de conectividad",
            "Identificar patrones o tendencias en tu conexión",
            "Documentar problemas recurrentes para conversaciones con tu ISP"
          ],
          note: "Sin embargo, no garantizamos que los ISPs acepten estos datos como evidencia formal ni que tengan obligación legal de actuar basándose en ellos."
        }
      },
      isp: {
        title: "6. Relación con Proveedores de Internet",
        intro: "VelociBar es una herramienta independiente y no tiene afiliación con ningún proveedor de servicios de internet (ISP). No hacemos afirmaciones sobre:",
        items: [
          "El cumplimiento de tu ISP con velocidades contratadas",
          "Prácticas de throttling o limitación de velocidad de ningún ISP",
          "La calidad del servicio de ningún proveedor específico"
        ],
        note: "Si tienes problemas con tu servicio de internet, te recomendamos contactar directamente a tu ISP y, si corresponde, a los organismos reguladores de tu país (IFT en México, FCC en Estados Unidos)."
      },
      ip: {
        title: "7. Propiedad Intelectual",
        intro: "VelociBar y todo su contenido, características y funcionalidad (incluyendo pero no limitado a diseño, código, gráficos, interfaces, logos y marcas) son propiedad de VelociBar o sus licenciantes y están protegidos por leyes de propiedad intelectual de México, Estados Unidos y tratados internacionales, incluyendo:",
        items: [
          "Ley Federal del Derecho de Autor (México)",
          "Ley de la Propiedad Industrial (México)",
          "Copyright Act (Estados Unidos)",
          "Lanham Act (Estados Unidos)",
          "Convenio de Berna y Acuerdo sobre los ADPIC"
        ]
      },
      warranty: {
        title: "8. Exclusión de Garantías",
        content: [
          "LA APLICACIÓN SE PROPORCIONA \"TAL CUAL\" Y \"SEGÚN DISPONIBILIDAD\", SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS.",
          "En la máxima medida permitida por la ley aplicable, rechazamos expresamente todas las garantías, incluyendo pero no limitado a:"
        ],
        items: [
          "Garantías implícitas de comerciabilidad",
          "Idoneidad para un propósito particular",
          "No infracción de derechos de terceros",
          "Que la Aplicación funcionará sin interrupciones o errores",
          "Que los resultados serán precisos o confiables",
          "Que los defectos serán corregidos"
        ]
      },
      liability: {
        title: "9. Limitación de Responsabilidad",
        intro: "EN NINGÚN CASO VELOCIBAR, SUS DIRECTORES, EMPLEADOS, SOCIOS, AGENTES, PROVEEDORES O AFILIADOS SERÁN RESPONSABLES POR:",
        items: [
          "Daños indirectos, incidentales, especiales, consecuentes o punitivos",
          "Pérdida de beneficios, datos, uso, fondo de comercio u otras pérdidas intangibles",
          "Daños resultantes del uso o la imposibilidad de usar la Aplicación",
          "Acceso no autorizado o alteración de tus transmisiones o datos",
          "Declaraciones o conducta de terceros en relación con la Aplicación"
        ],
        note: "Esta limitación aplica independientemente de la teoría legal bajo la cual se reclamen los daños (contrato, agravio, negligencia, responsabilidad objetiva u otra).",
        jurisdictions: {
          title: "9.1 Jurisdicciones Específicas",
          mexico: "<strong>México:</strong> De conformidad con el Código Civil Federal y legislación aplicable, algunas limitaciones pueden no aplicar. En tal caso, nuestra responsabilidad se limitará al máximo permitido por la ley.",
          usa: "<strong>Estados Unidos:</strong> Algunos estados no permiten la exclusión de garantías implícitas o la limitación de daños incidentales o consecuentes, por lo que las limitaciones anteriores pueden no aplicarte completamente."
        }
      },
      indemnification: {
        title: "10. Indemnización",
        intro: "Aceptas defender, indemnizar y mantener indemne a VelociBar de cualquier reclamación, daño, obligación, pérdida, responsabilidad, costo o deuda, y gastos (incluyendo honorarios de abogados) derivados de:",
        items: [
          "Tu uso de la Aplicación",
          "Tu violación de estos Términos",
          "Tu violación de derechos de terceros",
          "Cualquier contenido que generes o compartas usando la Aplicación"
        ]
      },
      modifications: {
        title: "11. Modificaciones a los Términos",
        intro: "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Cuando hagamos cambios:",
        items: [
          "Publicaremos los nuevos Términos en nuestro sitio web",
          "Actualizaremos la fecha de \"Última actualización\"",
          "Los cambios materiales se comunicarán de forma razonable"
        ],
        note: "El uso continuado de la Aplicación después de la publicación de cambios constituye tu aceptación de los nuevos Términos."
      },
      termination: {
        title: "12. Terminación",
        content: [
          "Podemos suspender o terminar tu acceso a la Aplicación inmediatamente, sin previo aviso, si incumples estos Términos. Puedes terminar tu uso de la Aplicación en cualquier momento desinstalándola de tu dispositivo.",
          "Tras la terminación:"
        ],
        items: [
          "Tu licencia de uso queda revocada",
          "Debes eliminar todas las copias de la Aplicación",
          "Tus datos locales permanecen bajo tu control y responsabilidad",
          "Las secciones que por su naturaleza deban sobrevivir, sobrevivirán"
        ]
      },
      law: {
        title: "13. Ley Aplicable y Jurisdicción",
        mexico: {
          title: "13.1 Para Usuarios en México",
          content: "Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles."
        },
        usa: {
          title: "13.2 Para Usuarios en Estados Unidos",
          content: "Estos Términos se regirán por las leyes del Estado de Delaware, sin dar efecto a principios de conflicto de leyes. Cualquier disputa se resolverá en los tribunales estatales o federales ubicados en Delaware."
        },
        alternative: {
          title: "13.3 Resolución Alternativa de Disputas",
          content: "Antes de iniciar cualquier procedimiento legal, las partes intentarán resolver la disputa de buena fe mediante negociación directa durante un período de treinta (30) días."
        }
      },
      general: {
        title: "14. Disposiciones Generales",
        complete: {
          title: "14.1 Acuerdo Completo",
          content: "Estos Términos, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre tú y VelociBar respecto al uso de la Aplicación."
        },
        severability: {
          title: "14.2 Divisibilidad",
          content: "Si alguna disposición de estos Términos se considera inválida o inaplicable, las disposiciones restantes permanecerán en pleno vigor y efecto."
        },
        waiver: {
          title: "14.3 Renuncia",
          content: "La falta de ejercicio de cualquier derecho bajo estos Términos no constituirá una renuncia a dicho derecho."
        },
        assignment: {
          title: "14.4 Cesión",
          content: "No puedes ceder ni transferir estos Términos sin nuestro consentimiento previo por escrito. Nosotros podemos ceder estos Términos sin restricción."
        },
        language: {
          title: "14.5 Idioma",
          content: "Estos Términos se han redactado en español. En caso de traducción a otros idiomas, la versión en español prevalecerá ante cualquier discrepancia."
        }
      },
      contact: {
        title: "15. Contacto",
        intro: "Para preguntas sobre estos Términos y Condiciones, contáctanos a través de:",
        website: "<strong>Sitio web:</strong>"
      },
      acceptance_final: "Al usar VelociBar, confirmas que has leído, entendido y aceptado estos Términos y Condiciones en su totalidad."
    }
  },
  en: {
    title: "Terms and Conditions — VelociBar",
    description: "VelociBar Terms and Conditions of Use. Learn the conditions that govern the use of our application.",
    ogDescription: "VelociBar Terms and Conditions of Use.",
    heading: "Terms and Conditions of Use",
    lastUpdated: "Last updated: December 24, 2024",
    summary: "<strong>Summary:</strong> VelociBar is an internet speed measurement tool provided \"as is\". Results are informational and do not constitute a guarantee of your connection's performance. Use it responsibly and respect these terms.",
    sections: {
      acceptance: {
        title: "1. Acceptance of Terms",
        content: [
          "By downloading, installing, accessing, or using VelociBar (\"the App\", \"the Software\" or \"the Service\"), you agree to be bound by these Terms and Conditions of Use (\"Terms\"). If you do not agree with these Terms, do not download, install, or use the App.",
          "These Terms constitute a binding legal agreement between you (\"User\", \"you\" or \"your\") and VelociBar (\"we\", \"our\" or \"the Company\")."
        ]
      },
      description: {
        title: "2. Service Description",
        intro: "VelociBar is a menu bar application for macOS that allows you to:",
        items: [
          "Run download speed tests of your internet connection",
          "Measure your connection's latency (ping)",
          "Schedule automatic tests at regular intervals",
          "Locally store a history of results",
          "Export history in CSV format"
        ]
      },
      requirements: {
        title: "3. System Requirements",
        intro: "To use VelociBar you need:",
        items: [
          "A Mac computer with macOS 12.0 (Monterey) or later",
          "Active internet connection",
          "Sufficient disk space for the app and history files"
        ]
      },
      license: {
        title: "4. License of Use",
        grant: {
          title: "4.1 License Grant",
          intro: "Subject to compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to:",
          items: [
            "Download and install the App on Mac devices you own or control",
            "Use the App for personal, non-commercial purposes",
            "Create and maintain backups of the App"
          ]
        },
        restrictions: {
          title: "4.2 Restrictions",
          intro: "You may not:",
          items: [
            "Copy, modify, adapt, translate, or create derivative works of the App",
            "Reverse engineer, decompile, disassemble, or attempt to obtain the source code",
            "Sell, resell, rent, lease, or sublicense the App",
            "Use the App for illegal or unauthorized purposes",
            "Interfere with or disrupt the integrity or performance of the App",
            "Attempt to circumvent security or authentication measures",
            "Use the App in a way that could damage, disable, or overload third-party infrastructure"
          ]
        }
      },
      accuracy: {
        title: "5. Measurement Accuracy",
        warning: "<strong>Important:</strong> Speed measurements provided by VelociBar are approximations and may vary due to multiple factors beyond our control.",
        factors: {
          title: "5.1 Factors Affecting Results",
          intro: "Speed test results may be affected by:",
          items: [
            "Network congestion in your home, neighborhood, or internet provider",
            "Physical distance to test servers",
            "Quality and configuration of your router or modem",
            "Wi-Fi interference or other wireless signals",
            "Other devices or applications using your connection simultaneously",
            "Technical limitations of test servers",
            "Time of day and general internet load",
            "Connection type (fiber, cable, DSL, satellite, etc.)"
          ]
        },
        notOfficial: {
          title: "5.2 Not an Official Standard",
          intro: "VelociBar <strong>is not a certified measurement tool</strong> nor is it endorsed by regulatory bodies such as Mexico's Instituto Federal de Telecomunicaciones (IFT) or the United States' Federal Communications Commission (FCC). Results:",
          items: [
            "Should not be considered official measurements for contractual disputes",
            "May differ from measurements made by other tools",
            "Are informational and for personal use"
          ]
        },
        appropriate: {
          title: "5.3 Appropriate Use of History",
          intro: "The CSV history generated by VelociBar can be useful for:",
          items: [
            "Keeping a personal record of your connectivity experience",
            "Identifying patterns or trends in your connection",
            "Documenting recurring problems for conversations with your ISP"
          ],
          note: "However, we do not guarantee that ISPs will accept this data as formal evidence or that they have a legal obligation to act based on it."
        }
      },
      isp: {
        title: "6. Relationship with Internet Providers",
        intro: "VelociBar is an independent tool and has no affiliation with any internet service provider (ISP). We make no claims about:",
        items: [
          "Your ISP's compliance with contracted speeds",
          "Throttling or speed limitation practices of any ISP",
          "The quality of service of any specific provider"
        ],
        note: "If you have problems with your internet service, we recommend contacting your ISP directly and, if applicable, the regulatory bodies in your country (IFT in Mexico, FCC in the United States)."
      },
      ip: {
        title: "7. Intellectual Property",
        intro: "VelociBar and all its content, features, and functionality (including but not limited to design, code, graphics, interfaces, logos, and trademarks) are the property of VelociBar or its licensors and are protected by intellectual property laws of Mexico, the United States, and international treaties, including:",
        items: [
          "Federal Copyright Law (Mexico)",
          "Industrial Property Law (Mexico)",
          "Copyright Act (United States)",
          "Lanham Act (United States)",
          "Berne Convention and TRIPS Agreement"
        ]
      },
      warranty: {
        title: "8. Disclaimer of Warranties",
        content: [
          "THE APP IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\", WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.",
          "To the maximum extent permitted by applicable law, we expressly disclaim all warranties, including but not limited to:"
        ],
        items: [
          "Implied warranties of merchantability",
          "Fitness for a particular purpose",
          "Non-infringement of third-party rights",
          "That the App will function without interruption or errors",
          "That results will be accurate or reliable",
          "That defects will be corrected"
        ]
      },
      liability: {
        title: "9. Limitation of Liability",
        intro: "IN NO EVENT SHALL VELOCIBAR, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR:",
        items: [
          "Indirect, incidental, special, consequential, or punitive damages",
          "Loss of profits, data, use, goodwill, or other intangible losses",
          "Damages resulting from the use or inability to use the App",
          "Unauthorized access to or alteration of your transmissions or data",
          "Statements or conduct of third parties in connection with the App"
        ],
        note: "This limitation applies regardless of the legal theory under which damages are claimed (contract, tort, negligence, strict liability, or otherwise).",
        jurisdictions: {
          title: "9.1 Specific Jurisdictions",
          mexico: "<strong>Mexico:</strong> In accordance with the Federal Civil Code and applicable legislation, some limitations may not apply. In such case, our liability will be limited to the maximum permitted by law.",
          usa: "<strong>United States:</strong> Some states do not allow the exclusion of implied warranties or the limitation of incidental or consequential damages, so the above limitations may not apply to you completely."
        }
      },
      indemnification: {
        title: "10. Indemnification",
        intro: "You agree to defend, indemnify, and hold harmless VelociBar from any claim, damage, obligation, loss, liability, cost or debt, and expenses (including attorney fees) arising from:",
        items: [
          "Your use of the App",
          "Your violation of these Terms",
          "Your violation of third-party rights",
          "Any content you generate or share using the App"
        ]
      },
      modifications: {
        title: "11. Modifications to Terms",
        intro: "We reserve the right to modify these Terms at any time. When we make changes:",
        items: [
          "We will post the new Terms on our website",
          "We will update the \"Last updated\" date",
          "Material changes will be communicated reasonably"
        ],
        note: "Continued use of the App after posting of changes constitutes your acceptance of the new Terms."
      },
      termination: {
        title: "12. Termination",
        content: [
          "We may suspend or terminate your access to the App immediately, without prior notice, if you breach these Terms. You may terminate your use of the App at any time by uninstalling it from your device.",
          "Upon termination:"
        ],
        items: [
          "Your license to use is revoked",
          "You must delete all copies of the App",
          "Your local data remains under your control and responsibility",
          "Sections that by their nature should survive will survive"
        ]
      },
      law: {
        title: "13. Governing Law and Jurisdiction",
        mexico: {
          title: "13.1 For Users in Mexico",
          content: "These Terms shall be governed by and construed in accordance with the laws of the United Mexican States. For any dispute, the parties submit to the jurisdiction of the competent courts of Mexico City, waiving any other jurisdiction that may correspond to them."
        },
        usa: {
          title: "13.2 For Users in the United States",
          content: "These Terms shall be governed by the laws of the State of Delaware, without giving effect to conflict of laws principles. Any dispute shall be resolved in state or federal courts located in Delaware."
        },
        alternative: {
          title: "13.3 Alternative Dispute Resolution",
          content: "Before initiating any legal proceedings, the parties will attempt to resolve the dispute in good faith through direct negotiation for a period of thirty (30) days."
        }
      },
      general: {
        title: "14. General Provisions",
        complete: {
          title: "14.1 Entire Agreement",
          content: "These Terms, together with our Privacy Policy, constitute the entire agreement between you and VelociBar regarding the use of the App."
        },
        severability: {
          title: "14.2 Severability",
          content: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect."
        },
        waiver: {
          title: "14.3 Waiver",
          content: "Failure to exercise any right under these Terms shall not constitute a waiver of that right."
        },
        assignment: {
          title: "14.4 Assignment",
          content: "You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction."
        },
        language: {
          title: "14.5 Language",
          content: "These Terms have been drafted in Spanish. In case of translation to other languages, the Spanish version shall prevail in case of any discrepancy."
        }
      },
      contact: {
        title: "15. Contact",
        intro: "For questions about these Terms and Conditions, contact us through:",
        website: "<strong>Website:</strong>"
      },
      acceptance_final: "By using VelociBar, you confirm that you have read, understood, and accepted these Terms and Conditions in their entirety."
    }
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, privacyTranslations, termsTranslations };
}

