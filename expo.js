/* MASS / INSIGHTS · Presentación guiada para 5 personas · 30 minutos
   Prototipo académico. Datos y operaciones de las pantallas: simulados. Sin librerías externas. */
(() => {
  'use strict';
  const el = document.querySelector('#expo-app');
  const logo = '<img src="mass-logo-azul.png" alt="Mass" class="mass-wordmark">';
  const chapters = [
    {label:'Contexto',role:'Organización y problema',name:'Luiz Angel Espejo Cabello',first:0,last:3,number:'01'},
    {label:'Diagnóstico',role:'Stakeholders y proceso actual',name:'Sergio Mars Freitas Huarcaya',first:4,last:7,number:'02'},
    {label:'Requerimientos',role:'TO-BE, RF y RNF',name:'Amira Valery Fuster Rojas',first:8,last:11,number:'03'},
    {label:'Diseño',role:'Priorización, UML y arquitectura',name:'Fernando Ernesto Huallanca Espinoza',first:12,last:15,number:'04'},
    {label:'Demostración',role:'Dashboard y conclusiones',name:'Luis Fernando Ramos Carhuas',first:16,last:19,number:'05'}
  ];
  const rf = [
    ['RF-01','Registro vía WhatsApp'],['RF-02','Falta de sencillo'],['RF-03','Validación mínima'],['RF-04','Clasificación'],
    ['RF-05','Firma de conformidad'],['RF-06','Aviso a jefatura'],['RF-07','Libro virtual QR'],['RF-08','Incidencia de personal'],
    ['RF-09','Centralización de reportes'],['RF-10','Consultar estado'],['RF-11','Exportar reportes']
  ];
  const rnf = [
    ['RNF-01','Respuesta WhatsApp ≤3 s'],['RNF-02','Disponibilidad 99,9 %'],['RNF-03','Formulario adaptable'],['RNF-04','Respaldo offline'],
    ['RNF-05','Derivación ≤24 h'],['RNF-06','Permisos por rol'],['RNF-07','Concurrencia'],['RNF-08','Protección de datos'],
    ['RNF-09','Registro en ≤3 clics'],['RNF-10','Alertas automáticas'],['RNF-11','Diseño modular'],['RNF-12','Auditoría']
  ];
  const e = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = (name,cls='') => {
    const paths = {
      arrow:'<path d="M4 12h16m-7-7 7 7-7 7"/>',left:'<path d="M20 12H4m7-7-7 7 7 7"/>',
      play:'<path d="m8 5 12 7-12 7z"/>',pause:'<path d="M7 5v14M17 5v14"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
      check:'<path d="m4 12 5 5L20 6"/>',shield:'<path d="m12 2 8 4v6c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/>',
      database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
      users:'<circle cx="9" cy="8" r="3"/><path d="M3 19v-2a6 6 0 0 1 12 0v2zM18 8a3 3 0 1 1 0 6m1 1c2.5.3 3 2 3 4"/>',
      chart:'<path d="M3 3v18h18M7 16v-4m5 4V8m5 8V5"/>',
      search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
      link:'<path d="M10 13a5 5 0 0 0 7.5.4l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7M14 11a5 5 0 0 0-7.5-.4l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7"/>',
      box:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/>',
      alert:'<path d="m12 3 10 18H2z"/><path d="M12 9v5m0 3h.01"/>',
      fullscreen:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
      notes:'<path d="M5 3h14v18H5zM9 8h6m-6 4h6m-6 4h4"/>',
      grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      bolt:'<path d="m14 2-9 12h7l-2 8 9-12h-7z"/>',
      gear:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.2 2.2m9.8 9.8 2.2 2.2m0-14.2-2.2 2.2M7.1 16.9l-2.2 2.2"/>',
      mouse:'<rect x="7" y="2" width="10" height="20" rx="5"/><path d="M12 6v5"/>',
      home:'<path d="m3 11 9-8 9 8v10H3zM9 21v-8h6v8"/>',
      info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10v1"/>'
    };
    return `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name]||paths.box}</svg>`;
  };
  const chip = (t,cls='') => `<span class="tag-chip ${cls}">${t}</span>`;
  const metric = (num,title,sub) => `<div class="metric"><strong data-count="${num}">0</strong><span>${title}</span><small>${sub||''}</small></div>`;
  const title = (k,h,p='') => `<div class="slide-head"><span class="kicker">${k}</span><h2>${h}</h2>${p?`<p>${p}</p>`:''}</div>`;
  const statusCircle = (i,label,caption) => `<div class="stage-node"><span>${i}</span><strong>${label}</strong><small>${caption||''}</small></div>`;
  const card = (n,h,p,cls='') => `<article class="info-card ${cls}"><div class="info-n">${n}</div><h3>${h}</h3><p>${p}</p></article>`;
  const reportLink = '<a class="outline-button" href="informe-tiendas-mass.pdf" target="_blank" rel="noopener">Consultar informe original '+icon('arrow')+'</a>';
  const demoLink = (route='overview',text='Abrir diseño preliminar') => `<a class="primary-action" target="_blank" rel="noopener" href="index.html#/app/${route}">${text} ${icon('arrow')}</a>`;
  const slides = [
    {chapter:0,tag:'APERTURA · INGENIERÍA DE REQUERIMIENTOS',style:'cover',duration:70,
      html:`<div class="cover-layout"><div class="cover-copy"><div class="cover-badge">${chip('TRABAJO INTEGRADOR · EC3')}${chip('UCSUR · 2026-II','soft')}</div><div class="cover-mass">MASS <span class="accent-slash">/</span> INSIGHTS<span class="title-period">.</span></div><h1>De la incidencia<br>a la <em>decisión.</em></h1><p>Un sistema de información que conecta el registro, seguimiento y análisis de reclamos e incidentes en Tiendas Mass.</p><div class="cover-actions"><button class="primary-action" data-cmd="next">Comenzar exposición ${icon('arrow')}</button>${demoLink('overview','Explorar dashboard')}</div><div class="cover-footer">GRUPO 3 <span>·</span> 5 INTEGRANTES <span>·</span> 30 MINUTOS</div></div><div class="cover-display"><div class="sun-disc"></div><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="cover-display-card front"><span class="small-overline">PANEL GERENCIAL</span><div class="mini-head">Visión de operaciones ${icon('chart')}</div><div class="mini-digits"><b>11</b><b>12</b><b>04</b></div><div class="mini-labels"><span>RF</span><span>RNF</span><span>CAPAS</span></div><div class="mini-graph"><i style="--hh:42%"></i><i style="--hh:72%"></i><i style="--hh:57%"></i><i style="--hh:96%"></i><i style="--hh:65%"></i><i style="--hh:83%"></i><i style="--hh:52%"></i></div></div><div class="cover-display-card floating">${icon('check')} <span>Del registro al cierre</span></div><span class="orbit-caption">INTELIGENCIA OPERATIVA · 2026</span></div></div>`,
      note:'Luiz Angel: presenta el curso, el caso Tiendas Mass y el objetivo de la exposición. Explica que se trata de una propuesta académica basada en el informe, con un prototipo funcional de demostración. Evita afirmar que este software está conectado con la empresa.'},
    {chapter:0,tag:'01 / ORGANIZACIÓN',style:'cream',duration:85,
      html:`${title('EL CLIENTE','Una cadena pensada para la <mark>cercanía.</mark>','El informe sitúa a Tiendas Mass en el formato hard discount del retail peruano: compras ágiles, oferta concentrada y precios accesibles.')}
        <div class="company-layout"><div class="company-brand"><span class="brand-sun"></span>${logo}<div class="vertical-writing">RETAIL · HARD DISCOUNT</div></div><div class="company-points">${card('01','Modelo comercial','Tiendas de proximidad, surtido optimizado y compra cotidiana.')}${card('02','Operación distribuida','Múltiples establecimientos con personal de atención y jefaturas.')}${card('03','Necesidad transversal','Gestionar reportes sin perder continuidad de atención al cliente.')}</div></div><p class="source-note">Base: informe, capítulo 1, pp. 2–3; capítulo 3, pp. 5–6.</p>`,
      note:'Luiz Angel: explica el sector retail hard discount y por qué importa la operación de múltiples tiendas. Aclara que misión y visión recogidas son las formulaciones usadas en el trabajo y no necesariamente declaraciones corporativas oficiales.'},
    {chapter:0,tag:'01 / SITUACIÓN PROBLEMÁTICA',style:'ink',duration:110,
      html:`${title('PUNTO DE PARTIDA','Cuando los reportes se <span class="yellow-underline">dispersan</span>,<br>la respuesta pierde claridad.','El informe modela tres fricciones operativas que justifican explorar un sistema de información integrado.')}
        <div class="problem-grid">${card('01','Registro heterogéneo','Información recibida por distintos canales y formatos, con riesgo de reproceso.','problem-card')}${card('02','Seguimiento limitado','Visibilidad insuficiente de responsables, estados y decisiones.','problem-card')}${card('03','Lectura gerencial fragmentada','Dificultad para consolidar patrones y convertir incidencias en decisiones.','problem-card')}</div><div class="flow-band"><span>CAPTURA</span><span class="motion-line"></span><span>SEGUIMIENTO</span><span class="motion-line"></span><span>ANÁLISIS</span></div><p class="source-note">Diagnóstico propuesto y supuestos del estudio, no auditoría corporativa.</p>`,
      note:'Luiz Angel: plantea la problemática como escenario analizado por el grupo. Evita presentar como hecho verificado que Mass no tenga software corporativo. Señala el vínculo entre calidad de información y decisiones.'},
    {chapter:0,tag:'01 / PROPUESTA Y ALCANCE',style:'yellow',duration:95,
      html:`${title('NUESTRA PROPUESTA','Una plataforma.<br><span class="outlined">Un historial.</span> Mejores decisiones.','El objetivo es centralizar los registros, apoyar su gestión y ofrecer información consolidada a quienes supervisan operaciones.')}
        <div class="hub-grid"><div class="hub-input"><span>FORMULARIO / QR</span><span>POS PROPUESTO</span><span>WHATSAPP PROPUESTO</span></div><div class="hub-core"><span class="hub-ring"></span>${icon('database')}<strong>SISTEMA INTEGRADO</strong><small>Registro · trazabilidad · análisis</small></div><div class="hub-output"><span>JEFATURA</span><span>LEGAL</span><span>GERENCIA</span></div></div><div class="slide-bottom-statement">La demostración implementa el flujo mediante formularios y panel web; los canales POS y WhatsApp son <strong>integraciones simuladas.</strong></div>`,
      note:'Luiz Angel: define el alcance conceptual. Tres canales previstos, una plataforma central; la demo usa ingreso de casos web. Cierra entregando a Sergio el diagnóstico y los actores.'},
    {chapter:1,tag:'02 / STAKEHOLDERS',style:'blue',duration:95,
      html:`${title('ACTORES DEL SISTEMA','Siete perspectivas.<br><span class="yellow-text">Un mismo proceso.</span>','Los actores internos y externos tienen responsabilidades distintas y necesidades de información diferentes.')}
      <div class="actors-map"><div class="actor-orbit"><div class="actor-core">${icon('users')}<strong>Gestión de casos</strong></div><button class="actor-pin" data-actor="0" style="--x:13%;--y:18%">Gerencia</button><button class="actor-pin" data-actor="1" style="--x:82%;--y:15%">Jefe de tienda</button><button class="actor-pin" data-actor="2" style="--x:94%;--y:54%">Personal</button><button class="actor-pin" data-actor="3" style="--x:73%;--y:90%">Legal</button><button class="actor-pin" data-actor="4" style="--x:25%;--y:88%">TI</button><button class="actor-pin" data-actor="5" style="--x:6%;--y:57%">Clientes</button><button class="actor-pin" data-actor="6" style="--x:47%;--y:5%">Indecopi</button></div><div class="actor-profile" id="actor-profile"><span>SELECCIONA UN ACTOR</span><h3>¿Quién participa y para qué?</h3><p>Pulsa cualquier actor del mapa para explorar su responsabilidad en el proceso.</p></div></div><p class="source-note">Base: capítulo 2, pp. 3–5. Haz clic en los actores.</p>`,
      note:'Sergio Mars: explica stakeholder interno versus externo. Selecciona gerencia, personal de tienda, cliente y área legal. Evita indicar que Indecopi usará la aplicación: es un regulador externo.'},
    {chapter:1,tag:'02 / NECESIDADES',style:'light',duration:85,
      html:`${title('DE NECESIDAD A FUNCIÓN','Primero escuchamos.<br>Después <mark>especificamos.</mark>','Cada perfil da lugar a necesidades operativas que se traducen en funcionalidades y restricciones del sistema.')}
      <div class="need-grid"><div class="need-card"><span>PERSONAL DE TIENDA</span><h3>Registrar sin perder tiempo</h3><div class="need-link">${icon('arrow')} RF-01 / RF-03 / RNF-09</div></div><div class="need-card"><span>JEFATURAS</span><h3>Recibir y seguir cada caso</h3><div class="need-link">${icon('arrow')} RF-06 / RF-10</div></div><div class="need-card"><span>GERENCIA</span><h3>Detectar patrones y decidir</h3><div class="need-link">${icon('arrow')} RF-09 / RF-11</div></div><div class="need-card"><span>CLIENTE</span><h3>Presentar su disconformidad</h3><div class="need-link">${icon('arrow')} RF-07 / RNF-03</div></div></div><p class="source-note">Correspondencias explicativas tomadas de la matriz RF/RNF del informe.</p>`,
      note:'Sergio Mars: interpreta las necesidades de cuatro perfiles relevantes. Ejemplifica cómo una necesidad operativa se vuelve requerimiento identificable y verificable.'},
    {chapter:1,tag:'02 / ANÁLISIS DE PROCESO',style:'cream',duration:90,
      html:`${title('PROCESO AS-IS','El recorrido de un caso,<br><span class="hand-underline">antes de la propuesta.</span>','El flujo modelado en el informe incluye recepción, registro manual, derivación y revisión centralizada.')}
      <div class="steps-asis"><div class="asis-track">${[['01','Cliente','Presenta disconformidad'],['02','Tienda','Anota información'],['03','Jefatura','Comunica a central'],['04','Legal','Revisa datos'],['05','Respuesta','Cierre manual']].map(([n,h,p],i)=>`<div class="asis-node"><b>${n}</b><strong>${h}</strong><small>${p}</small>${i<4?'<span class="flow-chevron">→</span>':''}</div>`).join('')}</div></div><div class="explain-strip">${icon('info')} La entrevista distingue WhatsApp para coordinación cotidiana y el Libro de Reclamaciones físico; el AS-IS representa el escenario modelado en el trabajo.</div>`,
      note:'Sergio Mars: relata una reclamación desde que el cliente la expresa hasta que llega a Legal. Diferencia los procedimientos formales de las comunicaciones internas. No confundir entrevista con prueba de todos los procesos corporativos.'},
    {chapter:1,tag:'02 / CUELLOS DE BOTELLA',style:'ink',duration:90,
      html:`${title('DIAGNÓSTICO OPERATIVO','Cuando falta un dato,<br>aparece el <span class="yellow-text">reproceso.</span>','El informe identifica posibles demoras por captura incompleta, derivaciones manuales y dificultad de seguimiento.')}
      <div class="bottleneck"><div class="bottleneck-visual"><div class="bottleneck-step on">RECIBIR CASO ${icon('check')}</div><div class="bottleneck-connector"></div><div class="bottleneck-step fail">¿DATOS COMPLETOS? ${icon('alert')}</div><div class="bottleneck-connector"></div><div class="bottleneck-step">DERIVAR A RESPONSABLE</div><div class="bottleneck-loop" id="bottleneck-loop">${icon('left')} Solicitar información adicional → reproceso</div></div><div class="bottleneck-copy"><h3>El punto crítico no es solo recibir información.</h3><p>Es poder confiar en ella para procesar el caso sin reconstruir su historia.</p><button class="outline-button inverse" data-cmd="bottleneck">${icon('bolt')} Activar / quitar reproceso</button></div></div>`,
      note:'Sergio Mars: pulsa el botón de reproceso para ilustrar la pérdida de continuidad. Da paso a Amira, quien explicará cómo el flujo futuro y los requisitos lo solucionan.'},
    {chapter:2,tag:'03 / PROCESO PROPUESTO',style:'yellow',duration:85,
      html:`${title('TRANSFORMACIÓN TO-BE','Cada caso deja una <span class="outlined">huella digital.</span>','El proceso futuro propuesto conecta recepción, validación, seguimiento, resolución y análisis gerencial.')}
      <div class="future-stages">${[['Captura','Formulario y canales propuestos'],['Validación','Datos mínimos y ticket'],['Derivación','Jefatura y seguimiento'],['Resolución','Registro de respuesta'],['Análisis','Dashboard gerencial']].map(([h,p],i)=>`<div class="future-stage"><span class="future-num">0${i+1}</span><span class="future-icon">${icon(['box','check','users','shield','chart'][i])}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}</div><div class="future-bottom">Un identificador permite vincular los cambios de estado y su historial dentro de la demostración.</div>`,
      note:'Amira: recorre el TO-BE de izquierda a derecha. Enfatiza que cada acción responde a una necesidad documentada. Los canales externos están diseñados pero no implementados mediante servicios oficiales.'},
    {chapter:2,tag:'03 / REQUERIMIENTOS FUNCIONALES',style:'light',duration:95,
      html:`${title('ESPECIFICACIÓN FUNCIONAL','11 maneras de transformar<br>una necesidad en <mark>función.</mark>','Los RF originales del informe se agrupan aquí para facilitar su explicación; se mantienen sus identificadores.')}
      <div class="requirements-wall">${rf.map(([code,name],i)=>`<div class="requirement-tile"><span>${code}</span><strong>${name}</strong><i>${String(i+1).padStart(2,'0')}</i></div>`).join('')}</div><p class="source-note">RF-01 a RF-11 · Informe, pp. 12–13. La presencia en esta presentación no significa implementación completa.</p>`,
      note:'Amira: explica la diferencia entre RF y RNF. Destaca RF-01 registro, RF-03 validación, RF-07 QR, RF-09 panel, RF-10 seguimiento y RF-11 reportes. El resto se puede mencionar por grupos sin leer las once tarjetas.'},
    {chapter:2,tag:'03 / REQUERIMIENTOS NO FUNCIONALES',style:'blue',duration:95,
      html:`${title('ESPECIFICACIÓN DE CALIDAD','No basta con que funcione.<br><span class="yellow-text">Importa cómo funciona.</span>','Los 12 RNF expresan restricciones o atributos de calidad previstos para la solución.')}
      <div class="rnf-layout"><div class="rnf-spotlight"><span>VALORES DEFINIDOS EN EL INFORME</span><div class="rnf-nums"><strong>3 <small>seg</small></strong><strong>99,9 <small>%</small></strong><strong>24 <small>h</small></strong></div><p>Respuesta WhatsApp · disponibilidad del libro virtual · entrega a jefatura. Son objetivos de especificación, no resultados medidos en el prototipo.</p></div><div class="rnf-list">${rnf.map(([code,name])=>`<div><b>${code}</b><span>${name}</span></div>`).join('')}</div></div>`,
      note:'Amira: distingue desempeño, disponibilidad, usabilidad, seguridad, mantenibilidad y auditoría. Aclara que las métricas del informe no están todas probadas en esta simulación local.'},
    {chapter:2,tag:'03 / CRITERIOS DE VALOR',style:'cream',duration:85,
      html:`${title('REQUISITOS EN ACCIÓN','Cómo sabemos que el<br>diseño <mark>tiene sentido.</mark>','La correspondencia entre problema, necesidad, requisito y módulo es la base de una buena ingeniería de requerimientos.')}
      <div class="trace-line"><div><span>PROBLEMA</span><strong>Reportes dispersos</strong></div>${icon('arrow')}<div><span>NECESIDAD</span><strong>Consolidar datos</strong></div>${icon('arrow')}<div><span>REQUISITO</span><strong>RF-09</strong></div>${icon('arrow')}<div class="trace-highlight"><span>EVIDENCIA</span><strong>Dashboard</strong></div></div><div class="takeaway"><strong>Regla de oro:</strong> cada componente debe poder justificarse con un requerimiento del informe.</div>`,
      note:'Amira: usa RF-09 como ejemplo de trazabilidad. Explica que el sistema debe satisfacer necesidades, no solo mostrar pantallas bonitas. Cede el turno a Fernando para el diseño.'},
    {chapter:3,tag:'04 / PRIORIZACIÓN',style:'cream',duration:85,
      html:`${title('DECIDIR QUÉ CONSTRUIR','El valor primero.<br>La complejidad, <mark>después.</mark>','La priorización del informe contempla impacto operativo, riesgo legal y viabilidad técnica.')}
      <div class="priority-layout"><div class="prio-matrix"><div><strong>07</strong><span>RF altos</span><i>CRÍTICOS PARA EL FLUJO</i></div><div><strong>03</strong><span>RF medios</span><i>MEJORAS DE GESTIÓN</i></div><div><strong>01</strong><span>RF bajo</span><i>EVOLUCIÓN</i></div></div><div class="prio-matrix alt"><div><strong>07</strong><span>RNF altos</span><i>CALIDAD BASE</i></div><div><strong>04</strong><span>RNF medios</span><i>ROBUSTEZ</i></div><div><strong>01</strong><span>RNF bajo</span><i>MEJORAS</i></div></div></div><p class="source-note">Distribución de prioridades registrada en el capítulo 9 del informe, pp. 15–17.</p>`,
      note:'Fernando: muestra cómo se usan prioridades para un MVP. Aclara que el software presentado cubre una parte demostrable del flujo, aunque la especificación incluya integraciones futuras y RNF no validados.'},
    {chapter:3,tag:'04 / MODELADO UML',style:'blue',duration:85,
      html:`${title('MODELO DE INTERACCIONES','Los casos de uso trazan<br>las <span class="yellow-text">acciones del sistema.</span>','El informe documenta casos de uso para registro, validación, notificación, seguimiento y reportes.')}
      <div class="uml-stage"><div class="uml-actor a1">${icon('users')}<strong>Personal</strong><span>Registro y consulta</span></div><div class="uml-actor a2">${icon('users')}<strong>Cliente</strong><span>Formulario QR</span></div><div class="uml-system"><small>SISTEMA PROPUESTO</small><div class="uml-oval">Registrar caso</div><div class="uml-oval">Validar y clasificar</div><div class="uml-oval">Notificar / seguimiento</div><div class="uml-oval">Centralizar reportes</div></div><div class="uml-actor a3">${icon('shield')}<strong>Jefatura</strong><span>Monitoreo</span></div><div class="uml-actor a4">${icon('chart')}<strong>Gerencia</strong><span>Indicadores</span></div></div><p class="source-note">Esquema de lectura simplificado para exposición; diagramas UML originales: pp. 17–18 y 20–22.</p>`,
      note:'Fernando: explica quién interactúa con qué caso de uso. Indica que es un esquema didáctico basado en los diagramas UML existentes, no un sustituto del diagrama formal.'},
    {chapter:3,tag:'04 / ARQUITECTURA',style:'light',duration:100,
      html:`${title('DISEÑO PRELIMINAR','Cuatro capas.<br><mark>Una ruta de información.</mark>','El diagrama de paquetes del informe propone separar entradas, procesamiento, control e integración/persistencia.')}
      <div class="architecture-grid"><div class="layer-stack">${[
        ['01','CAPA DE ENTRADA','Panel · POS · QR · WhatsApp'],['02','PROCESAMIENTO','Registro · seguimiento · reportes'],['03','CONTROL','Seguridad · auditoría · alertas'],['04','PERSISTENCIA E INTEGRACIÓN','Datos · respaldo local · APIs propuestas']
      ].map(([n,h,p],i)=>`<button class="arch-layer ${i===0?'selected':''}" data-layer="${i}"><b>${n}</b><span><strong>${h}</strong><small>${p}</small></span>${icon('arrow')}</button>`).join('')}</div><div class="layer-detail" id="layer-detail"><div class="layer-circle">01</div><span>CAPA SELECCIONADA</span><h3>Canales de entrada</h3><p>El sistema recibe información desde distintos puntos de contacto contemplados por el informe. En la demo se utiliza un formulario web.</p></div></div>`,
      note:'Fernando: explica las cuatro capas sin confundir diagrama de paquetes con despliegue real. Pulsa dos capas para mostrar separación de responsabilidades. La persistencia de la demo es localStorage, no una base central en la nube.'},
    {chapter:3,tag:'04 / ALCANCE DEL PROTOTIPO',style:'ink',duration:90,
      html:`${title('DE LOS DIAGRAMAS A LA INTERFAZ','La teoría ahora<br><span class="yellow-text">se puede recorrer.</span>','El prototipo académico pone en pantalla una parte del proceso diseñado y permite manipular tickets con datos de ejemplo.')}
      <div class="scope-grid"><div class="scope-panel"><span class="scope-label active">DEMOSTRACIÓN FUNCIONAL</span>${['Dashboard de indicadores','Registro de casos simulados','Consulta y filtros','Cambio de estado / responsable','Historial local y exportación CSV'].map(x=>`<div>${icon('check')} ${x}</div>`).join('')}</div><div class="scope-panel secondary"><span class="scope-label">DISEÑADO / SIMULADO</span>${['Integración real con POS','Conexión oficial de WhatsApp','SMS y correo electrónico','Autenticación empresarial','Base de datos corporativa'].map(x=>`<div>${icon('info')} ${x}</div>`).join('')}</div></div><div class="scope-cta">${demoLink('overview','Entrar al diseño en vivo')}<span>Se abrirá una pestaña nueva para conservar esta presentación.</span></div>`,
      note:'Fernando: enumera lo implementado frente a lo diseñado o simulado. Ser transparente aquí mejora la credibilidad del proyecto. Introduce al último expositor y abre el dashboard en otra pestaña.'},
    {chapter:4,tag:'05 / PRODUCTO INTERACTIVO',style:'yellow',duration:55,
      html:`${title('EL DASHBOARD GERENCIAL','De información aislada<br>a una <span class="outlined">visión compartida.</span>','Una interfaz para observar los casos del prototipo, sus categorías, estados y actividad reciente.')}
      <div class="demo-feature-grid"><div class="feature-screenshot"><div class="fake-dashboard-head"><span>MASS <i>/ PANEL GERENCIAL</i></span><span>● DEMO</span></div><div class="fake-dashboard-kpis"><div>CASOS<strong data-count="12">0</strong></div><div>RF<strong data-count="11">0</strong></div><div>RNF<strong data-count="12">0</strong></div></div><div class="fake-bars"><i style="--hh:40%"></i><i style="--hh:65%"></i><i style="--hh:84%"></i><i style="--hh:56%"></i><i style="--hh:95%"></i><i style="--hh:72%"></i><i style="--hh:53%"></i></div></div><div class="feature-copy"><span>PRUEBA EN VIVO</span><h3>No es una captura de pantalla.</h3><p>Los indicadores del panel se calculan a partir de tickets que podemos crear y modificar durante la sustentación.</p>${demoLink('overview','Abrir dashboard')}</div></div>`,
      note:'Luis Fernando: introduce el software y explica que los KPI muestran datos simulados. Abre el dashboard. Muestra brevemente gráficos y cuatro indicadores. Tiempo de exposición: alrededor de un minuto.'},
    {chapter:4,tag:'05 / DEMOSTRACIÓN PASO A PASO',style:'light',duration:115,
      html:`${title('DEMO / PASO 01','Un caso nuevo.<br>Un <mark>ticket trazable.</mark>','Durante la demostración se crea un registro ficticio, se clasifica y aparece inmediatamente en el listado del panel.')}
      <div class="demo-steps"><div class="demo-step"><b>01</b><span>Iniciar recorrido</span><p>Genera un ticket de prueba.</p></div><div class="demo-step"><b>02</b><span>Avanzar estado</span><p>Recibido → En revisión → Derivado.</p></div><div class="demo-step"><b>03</b><span>Finalizar</span><p>Resuelto → Cerrado; revisar historial.</p></div></div><div class="demo-large-action">${demoLink('flow','Abrir recorrido guiado')}${chip('FUNCIONAL · DATOS FICTICIOS')}</div>`,
      note:'Luis Fernando: abre "Demo del flujo", pulsa iniciar demostración, avanza cada uno de los cinco estados, inspecciona el expediente y explica la trazabilidad. Abre la aplicación en pestaña nueva; vuelve al presentador sin perder el tiempo de exposición.'},
    {chapter:4,tag:'05 / DEMOSTRACIÓN DE VALOR',style:'blue',duration:115,
      html:`${title('DEMO / PASO 02','El resultado ya no queda<br>en un <span class="yellow-text">mensaje aislado.</span>','Al cerrar un caso se actualizan los indicadores. Los filtros y la exportación permiten explicar la visión operativa de la gerencia.')}
      <div class="demo-value"><div class="value-graphic"><div class="value-ring"><span>${icon('chart')}</span><strong>DATOS → DECISIÓN</strong></div><div class="value-bubbles"><span>Estados</span><span>Tiendas</span><span>Categorías</span><span>Historial</span></div></div><div class="value-checklist">${[['01','Volver a Vista general','Observar la variación de métricas'],['02','Abrir Gestión de casos','Filtrar por tipo, estado o tienda'],['03','Abrir un expediente','Cambiar responsable y registrar nota'],['04','Exportar CSV','Mostrar el resultado real']].map(([n,h,p])=>`<div><b>${n}</b><span><strong>${h}</strong><small>${p}</small></span></div>`).join('')}</div></div><div class="demo-actions">${demoLink('cases','Abrir gestión de casos')}${demoLink('overview','Ver indicadores')}</div>`,
      note:'Luis Fernando: muestra la actualización del panel, filtros, cambio de responsable, anotaciones y CSV. Si sobra tiempo, abre el formulario de consumidor desde la interfaz del proyecto. Aclara que permisos de roles y notificaciones externas están simulados.'},
    {chapter:4,tag:'05 / CIERRE',style:'finale',duration:75,
      html:`<div class="finale-content"><div class="finale-eyebrow">GRUPO 3 · EC3 · INGENIERÍA DE REQUERIMIENTOS</div><h2>La ingeniería empieza<br>cuando entendemos<br><em>el problema.</em></h2><p>Analizamos un escenario de Tiendas Mass, documentamos 11 RF y 12 RNF, modelamos procesos y transformamos parte de ese diseño en una experiencia demostrable.</p><div class="finale-conclusions"><span>01 / NECESIDADES</span><span>02 / REQUISITOS</span><span>03 / DISEÑO</span><span>04 / DEMOSTRACIÓN</span></div><div class="finale-cta">${reportLink}<a href="index.html" class="outline-button">Visitar sitio del proyecto ${icon('arrow')}</a></div><div class="finale-thanks">¡Gracias! <span>¿Preguntas?</span></div></div><div class="finale-logo">${logo}<div class="finale-rings"></div></div>`,
      note:'Luis Fernando: cierra conectando requisitos, diseño y demostración. Puedes repartir las conclusiones entre integrantes en forma de preguntas. Abre el informe original si el docente solicita verificar algún elemento.'}
  ];
  const actorDetails = [
    ['Gerencia de operaciones','Consulta información consolidada y detecta categorías frecuentes.'],
    ['Jefe de tienda','Coordina la atención inicial, verifica casos y decide derivaciones.'],
    ['Personal de tienda','Captura incidencias de forma rápida mientras continúa la atención.'],
    ['Legal y Cumplimiento','Revisa antecedentes, monitorea casos y gestiona su tratamiento.'],
    ['Área de TI','Administra y mantiene la solución tecnológica prevista.'],
    ['Clientes','Presentan reclamos y necesitan información sobre sus casos.'],
    ['Indecopi','Entidad reguladora; no es usuario operativo del prototipo.']
  ];
  const layerDetails = [
    ['Canales de entrada','El informe contempla POS, WhatsApp, QR y panel interno. La demo utiliza formularios web sin conexión a esos servicios externos.'],
    ['Procesamiento de negocio','Los módulos de registro, clasificación, seguimiento y reportes articulan el ciclo de gestión.'],
    ['Control y comunicación','La arquitectura propuesta contempla seguridad, auditoría y notificaciones. La demo muestra historial local y selección de roles sin autenticación real.'],
    ['Persistencia e integración','Se prevén base central, almacenamiento provisional e integraciones. Esta versión funciona con almacenamiento local del navegador.']
  ];
  const savedMotion=(()=>{try{return localStorage.getItem('mass-expo-motion')!=='off'}catch{return true}})();
  const state = {index:0,notes:false,map:false,help:false,motion:savedMotion,elapsed:0,running:false,last:0};
  const pad = s => String(Math.floor(s)).padStart(2,'0');
  const fmt = s => `${pad(s/60)}:${pad(s%60)}`;
  function currentChapter(){return chapters[slides[state.index].chapter]}
  function shell(){
    const ch=currentChapter();
    document.body.classList.toggle('motion-off',!state.motion);
    el.innerHTML = `<div class="expo-shell">
      <div class="ambient-grain"></div><div class="expo-topbar">
       <a href="index.html" class="brand-lockup" aria-label="Volver al sitio web">${logo}<span class="brand-divider"></span><span>INSIGHTS <small>/ EC3</small></span></a>
       <div class="expo-chapter"><span class="chapter-dot"></span> ${e(ch.number)} / ${e(ch.label)} <span class="chapter-person">· ${e(ch.name.split(' ')[0])}</span></div>
       <div class="expo-top-actions"><span class="clock-display" aria-label="Tiempo transcurrido">${icon('clock')} <b id="global-clock">${fmt(state.elapsed)}</b><small>/ 30:00</small></span>
         <button class="control-btn" id="play-clock" data-cmd="timer" aria-label="Iniciar o pausar cronómetro" title="Iniciar / pausar cronómetro">${icon(state.running?'pause':'play')}<span>${state.running?'Pausar':'Iniciar'}</span></button>
         <button class="control-btn icon-only" data-cmd="notes" aria-label="Notas del expositor" title="Notas del expositor (N)">${icon('notes')}</button>
         <button class="control-btn icon-only" data-cmd="overview" aria-label="Ver mapa de diapositivas" title="Mapa de diapositivas (M)">${icon('grid')}</button>
         <button class="control-btn icon-only" data-cmd="fullscreen" aria-label="Pantalla completa" title="Pantalla completa (F)">${icon('fullscreen')}</button>
       </div>
      </div>
      <main class="stage" id="stage" aria-live="polite"><section class="expo-slide slide-${slides[state.index].style}" aria-label="Diapositiva ${state.index+1} de ${slides.length}">
        <div class="slide-decoration"><span></span><span></span><span></span></div>
        <div class="slide-inner">${slides[state.index].html}</div>
        <div class="slide-corner"><span>MASS / INSIGHTS</span><span>${pad(state.index+1)} / ${pad(slides.length)}</span></div>
      </section></main>
      <footer class="expo-footer"><div class="footer-track"><span id="deck-progress" style="width:${(state.index+1)/slides.length*100}%"></span></div><div class="footer-main"><div class="footer-person"><div class="speaker-avatar">${e(ch.name.split(' ').slice(0,2).map(x=>x[0]).join(''))}</div><div><b>${e(ch.name)}</b><small>${e(ch.role)} · 6 min asignados</small></div></div><div class="chapter-pills">${chapters.map((c,i)=>`<button data-cmd="goto" data-slide="${c.first}" class="chapter-pill ${i===slides[state.index].chapter?'active':''}" title="Ir al bloque de ${e(c.name)}"><span>0${i+1}</span>${e(c.label)}</button>`).join('')}</div><div class="slide-controls"><span class="slide-position"><b>${pad(state.index+1)}</b> / ${pad(slides.length)}</span><button data-cmd="prev" class="arrow-control" aria-label="Diapositiva anterior" ${state.index===0?'disabled':''}>${icon('left')}</button><button data-cmd="next" class="arrow-control primary" aria-label="Siguiente diapositiva" ${state.index===slides.length-1?'disabled':''}>${icon('arrow')}</button></div></div></footer>
      ${state.notes?`<aside class="notes-panel" role="complementary"><div class="notes-head"><strong>NOTAS PARA EXPONER</strong><button data-cmd="notes" aria-label="Cerrar notas">×</button></div><p>${e(slides[state.index].note)}</p><div class="notes-time">${icon('clock')} Tiempo orientativo: ${fmt(slides[state.index].duration)} de esta diapositiva. El bloque completo dispone de 6:00.</div><p class="notes-tip">Atajos: → siguiente · ← anterior · N notas · M índice · F pantalla completa · espacio temporizador · ? ayuda.</p></aside>`:''}
      ${state.map?`<div class="scrim" data-cmd="overview"><div class="overview-modal" role="dialog" aria-modal="true" aria-label="Mapa de presentación" data-block="1"><div class="overlay-head"><div><b>Mapa de la exposición</b><p>20 diapositivas · 5 integrantes · 30 minutos</p></div><button data-cmd="overview">×</button></div><div class="slide-map-grid">${chapters.map((c,i)=>`<div class="map-chapter"><strong>0${i+1} ${e(c.label)}</strong><small>${e(c.name)}</small><div>${slides.map((s,idx)=>s.chapter===i?`<button class="map-slide ${idx===state.index?'selected':''}" data-cmd="goto" data-slide="${idx}"><b>${pad(idx+1)}</b><span>${e(s.tag)}</span></button>`:'').join('')}</div></div>`).join('')}</div></div></div>`:''}
      ${state.help?`<div class="scrim" data-cmd="help"><div class="help-modal" role="dialog" aria-modal="true" aria-label="Ayuda" data-block="1"><div class="overlay-head"><b>Modo presentación</b><button data-cmd="help">×</button></div><div class="shortcut-grid"><div><kbd>→</kbd> Siguiente diapositiva</div><div><kbd>←</kbd> Diapositiva anterior</div><div><kbd>F</kbd> Pantalla completa</div><div><kbd>N</kbd> Mostrar notas</div><div><kbd>M</kbd> Ver índice</div><div><kbd>Espacio</kbd> Iniciar / pausar tiempo</div><div><kbd>?</kbd> Abrir ayuda</div></div><button class="motion-button" data-cmd="motion">${icon('bolt')} Animaciones: ${state.motion?'activadas':'reducidas'}</button><button class="motion-button" data-cmd="timer-reset">Reiniciar cronómetro</button><p class="help-disclaimer">El sitio utiliza datos ficticios y no representa un sistema oficial de Tiendas Mass.</p></div></div>`:''}
    </div>`;
    afterRender();
  }
  function afterRender(){
    const cards = el.querySelectorAll('[data-count]');
    cards.forEach(card=>{
      const target=Number(card.dataset.count);
      if(!state.motion){card.textContent=target;return}
      const start=performance.now(),dur=800;
      function tick(now){if(!card.isConnected)return;const f=Math.min(1,(now-start)/dur);card.textContent=Math.round(target*(1-Math.pow(1-f,3)));if(f<1)requestAnimationFrame(tick)}
      requestAnimationFrame(tick);
    });
    el.querySelectorAll('.actor-pin').forEach((b,i)=>b.addEventListener('click',()=>{
      el.querySelectorAll('.actor-pin').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const a=actorDetails[i];el.querySelector('#actor-profile').innerHTML=`<span>STAKEHOLDER 0${i+1}</span><h3>${e(a[0])}</h3><p>${e(a[1])}</p>`;
    }));
    el.querySelectorAll('[data-layer]').forEach((b,i)=>b.addEventListener('click',()=>{
      el.querySelectorAll('[data-layer]').forEach(x=>x.classList.remove('selected'));
      b.classList.add('selected');const a=layerDetails[i];
      el.querySelector('#layer-detail').innerHTML=`<div class="layer-circle">0${i+1}</div><span>CAPA SELECCIONADA</span><h3>${e(a[0])}</h3><p>${e(a[1])}</p>`;
    }));
    syncClock();
  }
  function goto(i){
    const next=Math.max(0,Math.min(slides.length-1,i));if(next===state.index&&!state.map)return;
    state.index=next;state.map=false;state.notes=false;state.help=false;document.title=`${pad(next+1)} / 20 · MASS / INSIGHTS`;
    shell();
  }
  function command(cmd,button){
    switch(cmd){
      case 'next':goto(state.index+1);break;
      case 'prev':goto(state.index-1);break;
      case 'goto':goto(Number(button.dataset.slide));break;
      case 'notes':state.notes=!state.notes;state.map=false;state.help=false;shell();break;
      case 'overview':state.map=!state.map;state.notes=false;state.help=false;shell();break;
      case 'help':state.help=!state.help;state.notes=false;state.map=false;shell();break;
      case 'motion':state.motion=!state.motion;try{localStorage.setItem('mass-expo-motion',state.motion?'on':'off')}catch{}shell();break;
      case 'timer':state.running=!state.running;state.last=performance.now();shell();break;
      case 'timer-reset':state.elapsed=0;state.running=false;state.last=performance.now();state.help=false;shell();break;
      case 'fullscreen':if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.().catch(()=>{});break;
      case 'bottleneck':el.querySelector('#bottleneck-loop')?.classList.toggle('active');el.querySelector('.bottleneck-step.fail')?.classList.toggle('highlight');break;
    }
  }
  function syncClock(){let c=el.querySelector('#global-clock');if(c)c.textContent=fmt(state.elapsed)}
  let last=performance.now();
  function raf(now){
    if(state.running)state.elapsed+=Math.min((now-last)/1000,5);
    last=now;syncClock();
    const clock=el.querySelector('.clock-display');if(clock)clock.classList.toggle('clock-warning',state.elapsed>=1800);
    requestAnimationFrame(raf);
  }
  el.addEventListener('click',event=>{
    const button=event.target.closest('[data-cmd]');if(!button)return;
    if(event.target.closest('[data-block]')&&button.classList.contains('scrim'))return;
    if(button.classList.contains('scrim')&&event.target!==button)return;
    event.preventDefault();command(button.dataset.cmd,button);
  });
  document.addEventListener('keydown',event=>{
    const isForm=/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName||'');if(isForm)return;
    if(event.key==='Escape'){if(state.map||state.help||state.notes){state.map=false;state.help=false;state.notes=false;shell();}return}
    if(state.map||state.help)return;
    const cmd={ArrowRight:'next',PageDown:'next',ArrowLeft:'prev',PageUp:'prev',f:'fullscreen',F:'fullscreen',n:'notes',N:'notes',m:'overview',M:'overview','?':'help',' ':'timer'}[event.key];
    if(cmd){event.preventDefault();command(cmd,{})}
  });
  let touchStart=null;
  el.addEventListener('touchstart',evt=>{if(evt.touches.length===1)touchStart={x:evt.touches[0].clientX,y:evt.touches[0].clientY}},{passive:true});
  el.addEventListener('touchend',evt=>{if(!touchStart||state.map||state.help)return;const dx=evt.changedTouches[0].clientX-touchStart.x;const dy=evt.changedTouches[0].clientY-touchStart.y;if(Math.abs(dx)>85&&Math.abs(dx)>Math.abs(dy)*1.4)goto(state.index+(dx<0?1:-1));touchStart=null},{passive:true});
  shell();requestAnimationFrame(raf);
})();
