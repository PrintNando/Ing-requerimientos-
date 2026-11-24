# MASS / INSIGHTS — Guía para una exposición de 30 minutos

**Curso:** Ingeniería de Requerimientos · EC3 · Grupo 3 · UCSUR, 2026-II  
**Base documental:** `informe-tiendas-mass.pdf` (25 páginas).  
**Formato:** 20 escenas web, cuatro por integrante, seis minutos por integrante.

> Esta es una presentación académica no oficial. El informe plantea un caso y algunos supuestos sobre Tiendas Mass. El dashboard usa tiendas, nombres, números y expedientes ficticios; no se integra con sistemas reales de la compañía.

## Antes de entrar al aula

1. Descomprimir el ZIP en una carpeta (no abrir la presentación dentro del ZIP).
2. Abrir `index.html` en Chrome o Edge. Seleccionar **Iniciar presentación interactiva**.
3. En `presentacion.html`, usar **F** para pantalla completa, **→/←** para avanzar y retroceder y **N** para notas.
4. Iniciar el cronómetro con el botón **Iniciar** (o la barra espaciadora) justo antes del primer expositor.
5. Abrir el dashboard desde el enlace de la presentación: se abre en otra pestaña, de modo que las escenas no se reinician.
6. En el dashboard, pulsar **Restablecer datos** para ensayar desde los 12 tickets ficticios originales.
7. Mantener un navegador y la carpeta ZIP como respaldo. No hace falta internet; la aplicación funciona localmente.

## Distribución exacta del tiempo

| Tiempo acumulado | Responsable | Diapositivas | Tema | Duración |
|---|---|---:|---|---:|
| 00:00–06:00 | Luiz Angel Espejo Cabello | 1–4 | Empresa, problema y propuesta | 06:00 |
| 06:00–12:00 | Sergio Mars Freitas Huarcaya | 5–8 | Stakeholders y AS-IS | 06:00 |
| 12:00–18:00 | Amira Valery Fuster Rojas | 9–12 | TO-BE, RF y RNF | 06:00 |
| 18:00–24:00 | Fernando Ernesto Huallanca Espinoza | 13–16 | Priorización, UML y diseño | 06:00 |
| 24:00–30:00 | Luis Fernando Ramos Carhuas | 17–20 | Dashboard funcional y conclusiones | 06:00 |

### Integrante 1 · Luiz Angel · 00:00 a 06:00

**Diapositiva 1 — Portada (01:10).** Presentar el curso y el caso. «Nuestro proyecto propone un sistema de información para dar seguimiento a reclamos e incidentes y convertir esos registros en información útil para la toma de decisiones. La exposición tendrá dos partes: explicaremos el análisis realizado en el informe y después mostraremos un prototipo de dashboard que permite recorrer un caso». Señalar que es un trabajo académico, no una plataforma oficial de Tiendas Mass.

**Diapositiva 2 — La organización (01:25).** Explicar el modelo hard discount y el papel del personal de tienda. «El valor de este formato está en las compras ágiles y la cercanía. Al operar varios establecimientos, se vuelve útil consolidar la información de gestión que nace en cada tienda». Relacionar esta operación con la necesidad de herramientas sencillas.

**Diapositiva 3 — La problemática (01:50).** Presentar las tres fricciones del escenario analizado: captura heterogénea, seguimiento limitado y dificultad de consolidar indicadores. «Un reporte disperso no solo retrasa una respuesta: también dificulta reconstruir quién lo recibió, qué se hizo y cuánto tardó». Aclarar que parte del diagnóstico se formula mediante supuestos académicos y una entrevista, no una auditoría de la infraestructura de toda la compañía.

**Diapositiva 4 — La propuesta (01:35).** Explicar la arquitectura a nivel conceptual: múltiples canales de entrada y una gestión centralizada. «Nuestro objetivo no es reemplazar todo el software de la empresa; es diseñar un flujo que permita registrar, clasificar, monitorear y analizar los casos». Distinguir integraciones planteadas (WhatsApp, POS) de la demostración web local.

**Transición:** «Para justificar cada función, primero identificamos las personas que intervienen y cómo se realiza el proceso actual. Sergio explicará ese diagnóstico».

### Integrante 2 · Sergio Mars · 06:00 a 12:00

**Diapositiva 5 — Stakeholders (01:35).** Hacer clic en cuatro actores del mapa: clientes, personal, jefaturas y gerencia. Explicar que sus necesidades no son idénticas. Legal y Cumplimiento necesita trazabilidad; TI necesita un sistema mantenible; Indecopi se incluye como regulador, no como usuario del dashboard.

**Diapositiva 6 — Necesidades y requisitos (01:25).** Usar la matriz visual de cuatro perfiles. «El personal de tienda necesita registrar sin interrumpir su actividad, que relacionamos con RF-01, RF-03 y RNF-09. La jefatura necesita saber qué ocurre con un caso; gerencia necesita un panel consolidado; y el consumidor necesita un canal para comunicar su disconformidad». Aclarar que esos códigos proceden del informe original.

**Diapositiva 7 — AS-IS (01:30).** Contar un ejemplo: el cliente manifiesta un problema, el colaborador anota la información, la jefatura la deriva y Legal la revisa. «El diagrama AS-IS describe el escenario modelado por nuestro trabajo; la entrevista también registra coordinación cotidiana mediante WhatsApp y presencia del Libro de Reclamaciones físico». Diferenciar ese libro de incidencias internas.

**Diapositiva 8 — Reproceso (01:30).** Pulsar **Activar / quitar reproceso**. «Si un caso llega incompleto, una persona debe solicitar datos adicionales y retomar su revisión. La oportunidad de mejora consiste en validar los campos mínimos desde la captura y preservar una trazabilidad única». Cerrar indicando que los problemas se convierten en requerimientos.

**Transición:** «Ya vimos el escenario actual y sus fricciones. Amira mostrará el proceso propuesto y los criterios que debe cumplir».

### Integrante 3 · Amira Valery · 12:00 a 18:00

**Diapositiva 9 — TO-BE (01:25).** Explicar cinco etapas: captura, validación, derivación, resolución y análisis. «Con el TO-BE dejamos de ver incidentes sueltos: cada registro recibe un identificador y se transforma en un caso que puede seguirse». El cierre conserva el historial para el dashboard.

**Diapositiva 10 — Funcionales (01:35).** Señalar los 11 RF. No leer uno por uno; agruparlos: registro y validación (RF-01 a RF-05 y RF-07), seguimiento (RF-06, RF-08 y RF-10) y análisis (RF-09, RF-11). «Un RF describe lo que el sistema deberá hacer. Por ejemplo, RF-09 solicita centralizar reportes para la gerencia». La interfaz no significa que todos los RF estén implementados.

**Diapositiva 11 — No funcionales (01:35).** Explicar los 12 RNF como expectativas de calidad. Usar tres valores del informe: 3 segundos para el canal WhatsApp, 99,9 % de disponibilidad del libro virtual y hasta 24 horas de derivación interna. «Son objetivos de especificación, no mediciones obtenidas con este prototipo». Mencionar seguridad, usabilidad, auditoría y mantenibilidad.

**Diapositiva 12 — Trazabilidad (01:25).** Seguir la cadena visual: problema → necesidad → RF-09 → dashboard. «No diseñamos una pantalla porque resulte bonita, sino porque responde a un problema y a un requisito trazable». La idea es mostrar al docente la relación entre análisis y solución.

**Transición:** «Fernando continuará con la priorización, la estructura UML y el diseño que implementamos parcialmente».

### Integrante 4 · Fernando Ernesto · 18:00 a 24:00

**Diapositiva 13 — Priorización (01:25).** Mostrar la distribución original: 7 RF altos, 3 medios y 1 bajo; 7 RNF altos, 4 medios y 1 bajo. «La prioridad se decidió considerando impacto operativo, riesgo legal y viabilidad técnica». Distinguir requisitos documentados de funciones de la demo.

**Diapositiva 14 — Casos de uso (01:25).** Explicar que los diagramas representan interacciones entre actores y sistema. «El personal y el cliente registran; las jefaturas monitorean; la gerencia consulta reportes». Señalar que el dibujo de la escena es una simplificación explicativa y que los diagramas originales están en el PDF.

**Diapositiva 15 — Cuatro capas (01:40).** Pulsar al menos dos capas: entrada y persistencia. Explicar las cuatro: canales, procesamiento, control y persistencia/integración. «Esta separación permite razonar sobre seguridad, trazabilidad y modularidad sin depender de una tecnología concreta». El prototipo actual guarda datos localmente, no en una base corporativa.

**Diapositiva 16 — Diseño preliminar y límites (01:30).** Mostrar las dos columnas: «Demostración funcional» y «Diseñado/simulado». «Podemos crear tickets, filtrarlos, cambiar estados, consultar historial y exportar un CSV. No tenemos autenticación real, POS, WhatsApp ni servidor en producción». Esta honestidad evita preguntas de integración no resueltas. Dejar preparado el enlace **Entrar al diseño en vivo**.

**Transición:** «Luis Fernando utilizará el prototipo para recorrer el proceso y mostrar cómo los requisitos se reflejan en la interfaz».

### Integrante 5 · Luis Fernando · 24:00 a 30:00

**Diapositiva 17 — Dashboard (00:55).** Abrir el panel desde la escena. Identificar los KPI principales: total de casos, en seguimiento, resueltos/cerrados y prioridad alta. «Los indicadores se calculan desde registros ficticios de esta sesión y pueden cambiar durante la demo».

**Diapositiva 18 — Ticket y ciclo completo (01:55).** Abrir **Demo del flujo** → **Iniciar demostración**. Mostrar el identificador nuevo, pasar por *Recibido → En revisión → Derivado → Resuelto → Cerrado*. Abrir el expediente y enseñar el historial. Si el tiempo se acorta, mencionar algunos estados antes de pulsar rápidamente el botón.

**Diapositiva 19 — Gestión y métricas (01:55).** Volver a **Vista general**, señalar cómo aumentó el total. En **Gestión de casos**, filtrar por tienda y estado; abrir un expediente; añadir responsable o nota y guardar. Exportar CSV y explicar que la descarga sale de los datos actuales del navegador. Los roles son vistas simuladas, no permisos empresariales reales.

**Diapositiva 20 — Conclusión (01:15).** Volver a la pestaña de presentación y cerrar: «El trabajo conecta una problemática, los actores afectados, los requerimientos que la describen y una propuesta de diseño. El prototipo permite demostrar una parte del flujo y ofrece una visión concreta de cómo un sistema de información puede mejorar la trazabilidad». Agradecer y abrir preguntas.

## Preguntas que podrían hacerles

**¿El sistema se conecta a Tiendas Mass?** No. Es un prototipo académico con datos ficticios basado en el caso del informe. Sus integraciones reales son parte de la propuesta conceptual.

**¿Por qué usar un dashboard web?** Porque permite consolidar registros de múltiples tiendas y visualizar el estado de los casos mediante una interfaz coherente con el RF-09.

**¿Qué requisitos demuestra el prototipo?** Permite ejemplificar registro, clasificación, consulta de estado, centralización de indicadores y exportación CSV, así como el seguimiento de un caso; no valida íntegramente los 23 requisitos.

**¿La firma digital o el WhatsApp funcionan de verdad?** No. El sistema conserva estos conceptos en la especificación; su integración no está implementada en la demo local.

**¿La cifra de disponibilidad es una medición?** No. Es un objetivo RNF recogido del informe, no una medición de producción.

**¿Qué base de datos utilizan?** Esta demo usa `localStorage`, almacenamiento del navegador. Una implementación real requeriría una base de datos persistente y centralizada con autenticación y controles de acceso.

**¿Cómo saben que el sistema resuelve el problema?** Los requisitos se relacionan con necesidades identificadas; el prototipo permite validar visualmente el recorrido. El impacto real requeriría pruebas con usuarios, indicadores de negocio y un entorno real.

## Plan de contingencia

- Si la web no se abre, usar Chrome/Edge y abrir los archivos extraídos, no el ZIP.
- Si la demo conserva casos de un ensayo, entrar a **Gestión de casos** y usar **Restablecer datos** antes de empezar.
- Si falla internet, no afecta el funcionamiento básico. Abrir todo desde el disco local.
- Si el botón de pantalla completa falla por permisos del navegador, pulsar `F11` en Windows.
- Si hay una interrupción durante la exposición, abrir el **mapa** con `M` y elegir directamente la diapositiva pendiente.
- No escribir DNI, teléfonos ni datos de clientes reales en este prototipo.
