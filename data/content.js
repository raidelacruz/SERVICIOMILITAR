/**
 * Base de datos oficial del Portal del Servicio Militar - Cuartel Fuerte Hoyos
 * Fuerte General de División Rafael Hoyos Rubio (Rímac, Lima - II División de Ejército)
 * Letras 100% COMPLETAS, Videos Oficiales de YouTube integrados para reproducción de audio real
 */

const FUERTE_HOYOS_INFO = {
  name: "Fuerte General de División Rafael Hoyos Rubio",
  location: "Rímac, Lima - Perú",
  division: "II División de Ejército",
  brigade: "1ra Brigada Multipropósito 'Mariscal del Perú Eloy G. Ureta'",
  motto: "¡Siempre Listos por la Patria!",
  description:
    "Gran instalación militar estratégica del Ejército del Perú en el Rímac. Cuna de instrucción del Servicio Militar Voluntario y centro neurálgico de operaciones, logística y apoyo humanitario ante desastres.",
};

const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: "Fuerte Gral. Div. Rafael Hoyos Rubio",
    subtitle: "Rímac, Lima • Sede de la II División de Ejército",
    tag: "Gran Cuartel Militar del Rímac",
    description:
      "Instalación militar estratégica del Ejército del Perú. Cuna de instrucción del Servicio Militar Voluntario y sede de la 1ra Brigada Multipropósito.",
    imageUrl:
      "https://gestion.pe/resizer/v2/YZ62PZOLNNCOVIDEC6QVMK5DWQ.jpg?auth=d8041552b132ddf0cb26845834fa0a8a5289343fc2ac70ab11964bb5b94c0e14&width=1800&height=1200&quality=75&smart=true",
    badgeIcon: "🏛️",
  },
  {
    id: 2,
    title: "1ra Brigada Multipropósito",
    subtitle: "Mariscal del Perú Eloy G. Ureta • Base Fuerte Hoyos",
    tag: "Fuerza Operativa y Rescate",
    description:
      "Unidad militar de primera respuesta acantonada en el Rímac, altamente preparada para la defensa nacional, rescate y auxilio inmediato ante desastres.",
    imageUrl:
      "https://tse4.mm.bing.net/th/id/OIP.3WDhtyqf7Y_I-TGQFMHlegHaDH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    badgeIcon: "🛡️",
  },
  {
    id: 3,
    title: "Servicio Militar Voluntario (SMV)",
    subtitle: "Honor, Disciplina y Superación Personal",
    tag: "Oportunidad de Futuro",
    description:
      "Beneficios exclusivos en el Fuerte Hoyos: asignación económica mensual, alimentación, Beca 18 FFAA y convenios con universidades e institutos técnicos.",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.06deezStx3wmyJQlbHBx_wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    badgeIcon: "🎖️",
  },
  {
    id: 4,
    title: "Herederos de Francisco Bolognesi",
    subtitle: "'Hasta quemar el último cartucho'",
    tag: "Honor y Gloria Castrense",
    description:
      "Custodiando con fervor patriótico el legado de los héroes de Arica y la Breña. El soldado peruano defiende la soberanía nacional con valor inquebrantable.",
    imageUrl:
      "https://tse4.mm.bing.net/th/id/OIP.qsMoZrhXciNaRB5KvaHKDAHaE3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    badgeIcon: "🇵🇪",
  },
];

const MILITARY_DATA = {
  hymns: [
    {
      id: "hymn-1",
      category: "himnos",
      type: "Himno Oficial",
      title: "Himno Nacional del Perú",
      subtitle: "Símbolo Patrio Oficial (Coro y Estrofa VI)",
      author: "Letra: José de la Torre Ugarte | Música: José Bernardo Alcedo",
      duration: "02:15",
      badge: "Patrio",
      youtubeId: "tYYdXLOiZrI",
      youtubeSearchUrl: "https://youtu.be/tYYdXLOiZrI?list=RDtYYdXLOiZrI",
      melodyPattern: "himno_nacional",
      description:
        "Emblema sonoro de la soberanía de la Nación Peruana. Entonado obligatoriamente en toda ceremonia militar e izamiento del Pabellón Nacional.",
      lyrics: ` ¡Somos libres! ¡seámoslo siempre!
        Y antes niegue sus luces el Sol,
        Que faltemos al voto solemne
        Que la Patria al Eterno elevó.

        Estrofa I
        Largo tiempo el peruano oprimido
        La ominosa cadena arrastró
        Condenado a una cruel servidumbre,
        Largo tiempo en silencio gimió.
        Mas apenas el grito sagrado
        ¡Libertad! En sus costas se oyó.
        La indolencia de esclavo sacude,
        La humillada cerviz levantó.

            Estrofa II

        Ya el estruendo de roncas cadenas
        Que escucharon tres siglos de horror
        De los libres, al grito sagrado
        Que oyó atónito el mundo, cesó.
        Por doquier San Martín inflamado,
        ¡Libertad! ¡libertad! pronunció:
        Y meciendo su base los Andes,
        La enunciaron también a una voz.

            Estrofa III

        Con su influjo los pueblos despiertan
        Y cual rayo, corrió la opinión,
        Desde el Istmo a las tierras del fuego
        Desde el fuego a la helada región.
        Todos juran romper el enlace,
        Que Natura a ambos mundos negó,
        Y quebrar ese cetro que España
        Reclinaba orgullosa en los dos.

            Estrofa IV

        Lima, cumple su voto solemne,
        Y severa su enojo mostró,
        Al tirano potente lanzando,
        Que intentaba alargar su opresión.
        A su esfuerzo, saltaron los hierros
        Y los surcos que en sí reparó
        Le atizaron el odio y venganza
        Que heredó de su Inca y Señor.

            Estrofa V

        Compatriotas, no más verla esclava
        Si humillada tres siglos gimió,
        Para siempre jurémosla libre,
        Manteniendo su propio esplendor
        Nuestros brazos, hasta hoy desarmados,
        Estén siempre cebando el cañón,
        Que algún día las playas de Iberia,
        Sentirán de su estruendo el terror.


            Estrofa VI

        En su cima los Andes sostengan
        La bandera o pendón bicolor,
        Que a los siglos anuncie el esfuerzo
        Que ser libres, por siempre nos dio.
        A su sombra vivamos tranquilos,
        Y al nacer por sus cumbres el Sol,
        Renovemos el gran juramento
        Que rendimos al Dios de Jacob`,
    },
    {
      id: "hymn-2",
      category: "himnos",
      type: "Himno Institucional",
      title: "Himno del Ejército del Perú",
      subtitle: "Marcha solemne de las fuerzas terrestres (Letra Completa)",
      author: "Letra y Música: Pedro Schmitt Aicardi",
      duration: "02:30",
      badge: "Ejército del Perú",
      youtubeId: "GdN6FseR90U",
      youtubeSearchUrl:
        "https://www.youtube.com/watch?v=GdN6FseR90U&list=RDGdN6FseR90U&start_radio=1",
      melodyPattern: "himno_ejercito",
      description:
        "Himno oficial completo del Ejército del Perú que exalta la memoria de los héroes y el juramento del soldado peruano ante la Patria.",
      lyrics: `(CORO)
El Ejército unido a la historia,
por fecunda y viril tradición,
se corona con lauros de gloria
al forjar una libre nación.

(ESTROFA I)
Evocando un pasado glorioso
del Incario su antiguo esplendor,
Ayacucho, Junín, Dos de Mayo
libertad conquistó con valor.
Zarumilla, la Breña y Arica,
gestas son que a la historia legó.
Bolognesi ¡Oh sublime soldado!
por patrono ejemplar te aclamó.

(CORO)
El Ejército unido a la historia,
por fecunda y viril tradición,
se corona con lauros de gloria
al forjar una libre nación.

(ESTROFA II)
Las fronteras altivo defiende,
cual guardián del honor nacional.
De su pueblo recibe las armas
y es bastión de justicia social.
Soy soldado que en filas milito,
y un deber tengo yo que cumplir:
A la patria vivir consagrado
y por ella luchar o morir.

(CORO FINAL)
El Ejército unido a la historia,
por fecunda y viril tradición,
se corona con lauros de gloria
al forjar una libre nación.
¡Viva el Ejército del Perú!`,
    },
    {
      id: "hymn-3",
      category: "himnos",
      type: "Marcha Patriótica",
      title: "Marcha de Banderas",
      subtitle: "Marcha solemne de honores a la Bandera de Guerra",
      author: "Letra: Ludovico María | Música: José Sabas Libornio Ibarra",
      duration: "02:00",
      badge: "Honores Militares",
      youtubeId: "WbDFRkPq9YE",
      youtubeSearchUrl:
        "https://www.youtube.com/watch?v=WbDFRkPq9YE&list=RDWbDFRkPq9YE&start_radio=1",
      melodyPattern: "marcha_banderas",
      description:
        "Marcha de honores reglamentaria para el izamiento del Pabellón Nacional y saludo a la Bandera de Guerra en cuarteles de la República.",
      lyrics: `Arriba, arriba, arriba el Perú
y su enseña gloriosa e inmortal,
llevad en alto siempre la Bandera Nacional.
Tal la llevaron con gloria y honor,
héroes peruanos de invencible ardor.
Arriba, arriba siempre, la Bandera Nacional.

Es la Bandera del Perú,
de blanco y rojo color,
cual la llamarada de amor,
que en Ayacucho y en Junín
victoriosa amaneció
con el sol de la Libertad.

Todo peruano ha de sentir
vibrar en su corazón
amor al patrio pendón,
y bajo sus pliegues luchar,
y si fuera menester
por sus lauros y honor morir.

¡Viva el Perú! ¡Viva la Bandera Nacional!`,
    },
    {
      id: "hymn-4",
      category: "himnos",
      type: "Marcha Militar",
      title: "Los Gigantes del Cenepa",
      subtitle: "Homenaje a los Defensores de la Patria (1995)",
      author: "Letra y Música: José Escajadillo Farro",
      duration: "02:10",
      badge: "Gesta Heroica",
      youtubeId: "MbWuNZGlkMk",
      youtubeSearchUrl:
        "https://www.youtube.com/watch?v=MbWuNZGlkMk&list=RDMbWuNZGlkMk&start_radio=1",
      melodyPattern: "gigantes_cenepa",
      description:
        "Marcha patriótica oficial compuesta en tributo a los combatientes del Alto Cenepa que defendieron la soberanía nacional en Tiwinza y Base Sur.",
      lyrics: `Victoria, Victoria,
de los guerreros de nuestro Perú
que ofrendaron su sangre y la vida
en defensa de su integridad

Victoria, Victoria,
para la amada y hermosa nación
por la grandeza de la raza Inca
y la nobleza de su corazón

Gloria eterna a los defensores
que volaron a la eternidad
en las alas de la roja y blanca,
cual flamencos del sueño inmortal

Sobre la sangre de los que cayeron
al final de la lucha tenaz
ojalá que germine en el mundo
la semilla de unión y de paz

Victoria, Victoria, y a sus
Gigantes el Cenepa vió
defender nuestra soberanía
con gratitud, heroísmo y valor

Victoria, Victoria, del
soldado peruano en acción
de un pueblo y su fuerza armada,
siempre unidos, siempre alertas,
para arrojar a cualquier invasor

Victoria, Victoria, por la gloria del Perú

¡¡¡Viva el Perú!!!`,
    },
    {
      id: "hymn-5",
      category: "himnos",
      type: "Marcha Militar",
      title: "Marcha El Chorrillano",
      subtitle: "Marcha tradicional de la Escuela Militar de Chorrillos",
      author: "Tradición de Bandas Militares del Ejército del Perú",
      duration: "01:50",
      badge: "Desfile Marcial",
      youtubeId: "4L_Tj5b0-2g",
      youtubeSearchUrl:
        "https://www.youtube.com/results?search_query=Marcha+El+Chorrillano+Escuela+Militar+Chorrillos",
      melodyPattern: "chorrillano",
      description:
        "Marcha marcial clásica obligatoria en los desfiles del patio de honor del Cuartel Fuerte Hoyos Rubio.",
      lyrics: `Adelante cadetes y soldados
con el pecho henchido de honor,
por las pampas del cuartel marchamos
a la voz del clarín y tambor.

Firme el paso, mirando al futuro,
disciplina, lealtad y deber,
el soldado peruano es seguro
de su patria y su pueblo defender.

¡Paso marcial, la frente en alto!
¡Por el Ejército del Perú!`,
    },
  ],

  chants: [
    {
      id: "chant-1",
      category: "canticos",
      type: "Cántico de Trote",
      unit: "Paracaidistas y Comandos del EP",
      title: "Miren al Cielo: Cántico del Paracaidista y Comando",
      cadence: "Cadencia de trote veloz - 145 BPM",
      badge: "Fuerzas Especiales",
      youtubeId: "V-n7gN20c1Y",
      youtubeSearchUrl:
        "https://www.youtube.com/results?search_query=cantico+paracaidista+comando+ejercito+peruano",
      melodyPattern: "trote_rapido",
      description:
        "Cántico clásico de trote militar que describe el salto, arrojo y temple del soldado comando en operaciones de alto riesgo.",
      lyrics: `(Voz de mando): ¡Miren al cielo, se divisa un punto negro!
(Tropa): ¡Miren al cielo, se divisa un punto negro!

(Voz de mando): ¡Es un comando que se lanza desde el vuelo!
(Tropa): ¡Es un comando que se lanza desde el vuelo!

(Voz de mando): ¡Abre su seda de color blanco y bandera!
(Tropa): ¡Abre su seda de color blanco y bandera!

(Voz de mando): ¡Cae en la selva, en la costa y cordillera!
(Tropa): ¡Cae en la selva, en la costa y cordillera!

(Voz de mando): ¡Lleva en el pecho la insignia de la gloria!
(Tropa): ¡Lleva en el pecho la insignia de la gloria!

(Voz de mando): ¡Para escribir con su sangre la victoria!
(Tropa): ¡Para escribir con su sangre la victoria!

(Todos al unísono):
¡Soy soldado del Perú, soy guerrero sin igual!
¡En el Fuerte Hoyos aprendí a triunfar!
¡Con mi boina bien puesta y fusil en mano!
¡Por mi bandera lucho como buen peruano!
¡Uno, dos... tres, cuatro!
¡Ejército del Perú... viva el Perú!`,
    },
    {
      id: "chant-2",
      category: "canticos",
      type: "Cántico de Trote",
      unit: "Arma de Infantería",
      title: "Infantería Reina de las Batallas",
      cadence: "Cadencia de trote sostenido - 130 BPM",
      badge: "Infantería EP",
      youtubeId: "q8N9Z_i0T54",
      youtubeSearchUrl:
        "https://www.youtube.com/results?search_query=cantico+infanteria+ejercito+peruano+trote",
      melodyPattern: "trote_infanteria",
      description:
        "Canto que fortalece la resistencia y el espíritu combativo del infante de a pie en las marchas de campaña.",
      lyrics: `(Voz de mando): ¡Infantería, arma bravía!
(Tropa): ¡Infantería, arma bravía!

(Voz de mando): ¡Que marcha de noche, que trota de día!
(Tropa): ¡Que marcha de noche, que trota de día!

(Voz de mando): ¡No teme a la lluvia, no teme al desierto!
(Tropa): ¡No teme a la lluvia, no teme al desierto!

(Voz de mando): ¡Vigila la patria despierto y despierto!
(Tropa): ¡Vigila la patria despierto y despierto!

(Voz de mando): ¡Con mochila pesada y el fusil terciado!
(Tropa): ¡Con mochila pesada y el fusil terciado!

(Voz de mando): ¡Avanza seguro el infante esforzado!
(Tropa): ¡Avanza seguro el infante esforzado!

(Todos al unísono):
¡Paso firme, pecho erguido!
¡El infante nunca ha sido vencido!
¡Heredero de Bolognesi en el morro y trinchera!
¡Hasta quemar el último cartucho por mi bandera!`,
    },
    {
      id: "chant-3",
      category: "canticos",
      type: "Cántico de Trote",
      unit: "Unidades Blindadas y Mecanizadas",
      title: "Rugido de Acero en el Rímac",
      cadence: "Cadencia pesada y enérgica - 128 BPM",
      badge: "Blindados Hoyos",
      youtubeId: "7b7mF89o45w",
      youtubeSearchUrl:
        "https://www.youtube.com/results?search_query=canticos+blindados+ejercito+peru",
      melodyPattern: "trote_blindados",
      description:
        "Canto marcial que acompaña la preparación técnica de los vehículos y tanques motorizados de la II División de Ejército.",
      lyrics: `(Voz de mando): ¡Escuchen rugir el motor de combate!
(Tropa): ¡Escuchen rugir el motor de combate!

(Voz de mando): ¡Orugas de acero que van al embate!
(Tropa): ¡Orugas de acero que van al embate!

(Voz de mando): ¡Desde el Rímac salimos a paso triunfal!
(Tropa): ¡Desde el Rímac salimos a paso triunfal!

(Voz de mando): ¡Custodiando la paz y el honor nacional!
(Tropa): ¡Custodiando la paz y el honor nacional!

(Todos al unísono):
¡Fuerza, blindaje y cañón certero!
¡En la II División el blindado es primero!
¡Desde el cuartel del Rímac a la vanguardia,
por el suelo patrio hacemos la guardia!
¡Blindados del Perú... adelante!`,
    },
    {
      id: "chant-4",
      category: "canticos",
      type: "Cántico de Trote",
      unit: "1ra Brigada Multipropósito (Fuerte Hoyos)",
      title: "Brigada de Rescate y Auxilio a la Nación",
      cadence: "Cadencia marcial - 125 BPM",
      badge: "1ra Brigada",
      youtubeId: "Jm-3v933zYk",
      youtubeSearchUrl:
        "https://www.youtube.com/results?search_query=brigada+multiproposito+ejercito+peru",
      melodyPattern: "trote_rescatistas",
      description:
        "Himno de trote que resalta la vocación humanitaria y el espíritu de auxilio inmediato de la 1ra Brigada Multipropósito con base en el Fuerte Hoyos.",
      lyrics: `(Voz de mando): ¡Cuando ruge la tierra y el peligro asoma!
(Tropa): ¡Cuando ruge la tierra y el peligro asoma!

(Voz de mando): ¡La 1ra Brigada su puesto toma!
(Tropa): ¡La 1ra Brigada su puesto toma!

(Voz de mando): ¡Cruza los ríos, escala el volcán!
(Tropa): ¡Cruza los ríos, escala el volcán!

(Voz de mando): ¡Los hombres de Hoyos con fe vencerán!
(Tropa): ¡Los hombres de Hoyos con fe vencerán!

(Todos al unísono):
¡Salvamos vidas con honor y pasión,
somos el brazo fuerte de nuestra nación!
¡Solidarios en la paz, bravos en la acción,
el Ejército del pueblo con todo el corazón!`,
    },
  ],

  books: [
    {
      id: "book-1",
      category: "libros",
      type: "Manual de Doctrina",
      title: "Manual del Recluta: Servicio Militar Voluntario en Fuerte Hoyos",
      code: "ME-HOYOS-01",
      pages: "190 páginas",
      badge: "Imprescindible SMV",
      description:
        "Guía oficial para los jóvenes incorporados al Servicio Militar en el Cuartel Fuerte Hoyos Rubio (Rímac). Normas de convivencia, orden cerrado y disciplina militar.",
      topics: [
        "1. Bienvenida al Cuartel Fuerte Rafael Hoyos Rubio y su historia",
        "2. Deberes, disciplina militar y horarios de diana a retreta",
        "3. Manejo seguro del armamento individual reglamentario",
        "4. Instrucción técnica y capacitación en talleres del cuartel",
        "5. Higiene militar, acondicionamiento físico y primeros auxilios",
      ],
      downloadName: "Manual_Recluta_Fuerte_Hoyos.pdf",
    },
    {
      id: "book-2",
      category: "libros",
      type: "Reglamento Oficial",
      title: "Reglamento del Servicio en Guarnición y Campaña (RAG-01)",
      code: "RAG-01",
      pages: "240 páginas",
      badge: "Reglamento",
      description:
        "Normativa militar vigente para el servicio de guardia, retenes, centinelas, consignas y toques de corneta en todas las instalaciones del Ejército del Perú.",
      topics: [
        "Capítulo I: Guardias de prevención en el cuartel",
        "Capítulo II: Obligaciones del centinela, cabo y oficial de guardia",
        "Capítulo III: Santo y Seña militar, inspecciones y relevos",
        "Capítulo IV: Ceremonias de lista de retreta y toque de silencio",
      ],
      downloadName: "Reglamento_Servicio_Guarnicion_RAG01.pdf",
    },
    {
      id: "book-3",
      category: "libros",
      type: "Historia Militar",
      title:
        "Biografía del Gral. Div. Rafael Hoyos Rubio y Tradición de la II División",
      code: "HIST-HOYOS-02",
      pages: "165 páginas",
      badge: "Historia del Fuerte",
      description:
        "Recorrido por la vida del ilustre General de División Rafael Hoyos Rubio, la creación del gran cuartel en el Rímac y las misiones históricas de la II División.",
      topics: [
        "1. Vida, carrera y legado del Gral. Div. Rafael Hoyos Rubio",
        "2. Historia del distrito del Rímac como bastión militar",
        "3. La 1ra Brigada Multipropósito 'Mariscal Eloy Ureta'",
        "4. El Proyecto Kuntur de modernización de cuarteles del Perú",
      ],
      downloadName: "Historia_Fuerte_Hoyos_Rubio.pdf",
    },
    {
      id: "book-4",
      category: "libros",
      type: "Manual Técnico",
      title: "Manual de Primeros Auxilios y Rescate en Emergencias (TCCC)",
      code: "SAN-05-EP",
      pages: "135 páginas",
      badge: "Sanidad y Rescate",
      description:
        "Guía de procedimientos de atención prehospitalaria táctica, vendajes de emergencia, control de hemorragias y rescate urbano ante desastres naturales.",
      topics: [
        "Fase 1: Atención bajo fuego y situaciones de alto riesgo",
        "Fase 2: Protocolo MARCH (Hemorragia masiva, vía aérea, respiración)",
        "Fase 3: Evacuación médica y primeros auxilios a la población civil",
      ],
      downloadName: "Manual_Primeros_Auxilios_TCCC_EP.pdf",
    },
  ],

  documents: [
    {
      id: "doc-1",
      category: "documentos",
      type: "Normativa Legal",
      title: "Ley N° 29248 del Servicio Militar y sus Reglamentos Vigentes",
      code: "LEY-29248",
      badge: "Norma Vigente",
      description:
        "Marco legal nacional que garantiza los derechos, deberes, beneficios y asignaciones de los reclutas del Servicio Militar Voluntario.",
      details: [
        "Edad de ingreso: De 18 a 30 años de edad.",
        "Asignación económica mensual, alimentación balanceada y seguro de salud.",
        "Alojamiento, dotación completa de uniformes y calzado militar.",
        "Certificación laboral y técnica al culminar el servicio militar.",
      ],
      downloadName: "Ley_29248_Servicio_Militar_Peru.pdf",
    },
    {
      id: "doc-2",
      category: "documentos",
      type: "Beneficios Educativos",
      title: "Guía de Beca 18 FFAA y Convenios Técnicos (Fuerte Hoyos)",
      code: "BENEF-HOYOS-2026",
      badge: "Beca 18 FFAA",
      description:
        "Información detallada de postulaciones exclusivas a Beca 18 para licenciados del Servicio Militar, convenios con SENCICO, SENATI y universidades.",
      details: [
        "Modalidad especial y cupos reservados en Beca 18 - FFAA vía PRONABEC.",
        "Estudios superiores universitarios o técnicos 100% financiados por el Estado.",
        "Bonificación del 10% en puntaje para postular a la Escuela Militar y PNP.",
        "Talleres de capacitación técnico-productiva dentro del Fuerte Hoyos.",
      ],
      downloadName: "Guia_Beneficios_Beca18_FFAA_Hoyos.pdf",
    },
    {
      id: "doc-3",
      category: "documentos",
      type: "Formulario de Trámite",
      title: "Ficha de Inscripción y Declaración Jurada SMV (Sede Rímac)",
      code: "FORM-SMV-RIMAC",
      badge: "Inscripción",
      description:
        "Ficha digital de postulación para el proceso de llamamiento del Servicio Militar Voluntario en la Oficina de Registro Militar del Fuerte Hoyos.",
      details: [
        "Requisitos: DNI azul o electrónico vigente y copia de certificado de estudios.",
        "Evaluación médica odontológica y psicológica gratuita en el cuartel.",
        "Firma de declaración jurada de compromiso patriótico.",
      ],
      downloadName: "Ficha_Inscripcion_SMV_Fuerte_Hoyos.pdf",
    },
    {
      id: "doc-4",
      category: "documentos",
      type: "Directorio Oficial",
      title:
        "Directorio de Oficinas de Registro Militar (ORM) - II División Lima",
      code: "DIR-ORM-LIMA",
      badge: "Directorio",
      description:
        "Contactos de atención, módulos de orientación en el Fuerte Rafael Hoyos Rubio (Rímac) y centros de reclutamiento en Lima Metropolitana y Callao.",
      details: [
        "Sede Principal: Fuerte Gral. Div. Rafael Hoyos Rubio, Av. Prolongación Tacna / Rímac.",
        "Horario de atención SMV: Lunes a Viernes de 08:00 a 16:30 hrs.",
        "Línea de orientación al postulante: (01) 317-1700 anexo II División.",
        "Atención personalizada a padres de familia y postulantes.",
      ],
      downloadName: "Directorio_ORM_Fuerte_Hoyos_Lima.pdf",
    },
  ],
};

const ALL_RESOURCES = [
  ...MILITARY_DATA.hymns,
  ...MILITARY_DATA.chants,
  ...MILITARY_DATA.books,
  ...MILITARY_DATA.documents,
];
