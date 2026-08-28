const experiencias = [
  {
    bandera: "🇪🇸",
    puesto: "Técnica de Calidad y Operaciones",
    empresa: "Apple Retail Store",
    lugar: "España",
    periodo: "Oct. 2024 – Actualidad",
    puntos: [
      "Gestión, seguimiento y resolución de no conformidades mediante análisis de causa raíz y planes de acciones correctivas y preventivas (Ciclo CAPA).",
      "Monitoreo de auditorías internas de procesos y cumplimiento de estándares de calidad.",
      "Análisis de datos operativos con Excel y herramientas digitales para optimizar los flujos de calidad.",
    ],
  },
  {
    bandera: "🇮🇹",
    puesto: "Especialista en Seguridad Alimentaria",
    empresa: "I Parenti",
    lugar: "Sicilia, Italia",
    periodo: "Feb. 2024 – Sept. 2024",
    puntos: [
      "Control diario, supervisión y registro de Puntos Críticos de Control (APPCC) garantizando la seguridad alimentaria.",
      "Supervisión del cumplimiento de la normativa de alérgenos y gestión rigurosa de stock (FIFO/FEFO).",
      "Mantenimiento e implantación de protocolos POES de limpieza y desinfección en planta.",
    ],
  },
  {
    bandera: "🇦🇹",
    puesto: "Técnica de Control de Calidad Alimentaria",
    empresa: "Flink SE",
    lugar: "Viena, Austria",
    periodo: "Ene. 2023 – Dic. 2023",
    puntos: [
      "Monitoreo estricto de registros técnicos del sistema de gestión bajo normas APPCC e IFS/BRC, garantizando la trazabilidad documental.",
      "Gestión y supervisión del plan de control de plagas y cadenas de frío en almacén.",
    ],
  },
  {
    bandera: "🇦🇷",
    puesto: "Técnica de Calidad y Seguridad Alimentaria",
    empresa: "La Nueva S.A.",
    lugar: "Córdoba, Argentina",
    periodo: "Feb. 2024 – Sept. 2024",
    puntos: [
      "Diseño e implantación integral del sistema APPCC, definición de fichas técnicas y determinación de Puntos Críticos de Control (PCC).",
      "Coordinación y soporte en auditorías internas y externas de certificación bajo normativas de seguridad alimentaria.",
      "Control de etiquetado, toma de muestras y gestión de análisis microbiológicos con laboratorios externos.",
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
            Ocho años de trabajo en cuatro países
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
