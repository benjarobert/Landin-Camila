const experiencias = [
  {
    bandera: "🇪🇸",
    puesto: "Especialista en Ventas & Experiencia de Cliente",
    empresa: "Apple",
    lugar: "Valencia, España",
    periodo: "Oct. 2024 – Actualidad",
    puntos: [
      "Formé a 17 colaboradores en producto y ventas, adaptando la formación inicial según sus necesidades y reduciendo un 20% el tiempo de onboarding.",
      "Mantuve un NPS (Net Promoter Score) de 98 sobre 100, auditado por Medallia, mediante el seguimiento de indicadores y estándares de servicio.",
    ],
  },
  {
    bandera: "🇮🇹",
    puesto: "Especialista en Seguridad Alimentaria",
    empresa: "I Parenti",
    lugar: "Sicilia, Italia",
    periodo: "Feb. 2024 – Sept. 2024",
    puntos: [
      "Supervisé y registré a diario los Puntos Críticos de Control (PCC) verificando su cumplimiento en planta.",
      "Controlé la gestión de alérgenos y el almacenamiento de producto mediante criterios FIFO/FEFO, reduciendo las mermas por caducidad en un 10%.",
      "Implanté y mantuve los protocolos POES de limpieza y desinfección, realizando el seguimiento de los registros asociados a los procedimientos de higiene.",
    ],
  },
  {
    bandera: "🇦🇹",
    puesto: "Técnica en Control de Calidad Alimentaria",
    empresa: "Flink SE",
    lugar: "Viena, Austria",
    periodo: "Ene. 2023 – Dic. 2023",
    puntos: [
      "Controlé las condiciones de almacenamiento y conservación del producto, dentro del seguimiento de la cadena de frío y los requisitos de seguridad alimentaria.",
      "Realicé check-lists periódicos de control en almacén y registré las desviaciones detectadas para su seguimiento, comunicándolas durante los controles de calidad.",
      "Supervisé el plan de control de plagas y la cadena de frío en almacén, manteniendo un 100% de eficacia y conformidad en los controles realizados.",
    ],
  },
  {
    bandera: "🇦🇷",
    puesto: "Técnica de Calidad y Seguridad Alimentaria",
    empresa: "La Nueva S.A.",
    lugar: "Córdoba, Argentina",
    periodo: "Feb. 2019 – Dic. 2021",
    puntos: [
      "Diseñé e implanté el sistema APPCC de la planta, elaborando fichas técnicas y determinando los Puntos Críticos de Control.",
      "Ejecuté el control de etiquetado y la toma de muestras, verificando los controles establecidos y coordinando análisis microbiológicos con laboratorios externos.",
      "Completé los registros y documentación del sistema de Calidad y Seguridad Alimentaria, asegurando la disponibilidad de la información necesaria para los controles y auditorías.",
    ],
  },
];

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="py-24 px-6 bg-verde-oscuro text-crema"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-mostaza mb-4">
            Trayectoria
          </p>
          <h2 className="font-serif-elegante text-3xl md:text-4xl lg:text-5xl leading-tight">
            Más de siete años de trabajo en cuatro países
          </h2>
        </div>

        <ol className="relative border-l-2 border-crema/15 pl-8 md:pl-12 space-y-12">
          {experiencias.map((exp) => (
            <li key={`${exp.empresa}-${exp.periodo}`} className="relative">
              {/* Marcador en la línea */}
              <span
                aria-hidden="true"
                className="absolute -left-[42px] md:-left-[58px] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-mostaza text-verde-oscuro text-lg shadow-md ring-4 ring-verde-oscuro"
              >
                {exp.bandera}
              </span>

              {/* Encabezado del puesto */}
              <div className="mb-4">
                <p className="text-sm uppercase tracking-wider text-mostaza mb-1">
                  {exp.periodo}
                </p>
                <h3 className="font-serif-elegante text-2xl md:text-3xl leading-tight mb-1">
                  {exp.puesto}
                </h3>
                <p className="text-crema/80">
                  <span className="font-medium">{exp.empresa}</span>
                  <span className="text-crema/50"> · {exp.lugar}</span>
                </p>
              </div>

              {/* Responsabilidades */}
              <ul className="space-y-2 text-crema/75 leading-relaxed">
                {exp.puntos.map((punto, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-mostaza"
                    />
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
