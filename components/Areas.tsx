const areas = [
  {
    numero: "01",
    titulo: "Prevención y Control",
    descripcion:
      "Diseño, implantación y seguimiento de sistemas APPCC: determinación y supervisión diaria de los Puntos Críticos de Control y protocolos POES de limpieza y desinfección.",
    etiqueta: "APPCC · PCC · POES",
  },
  {
    numero: "02",
    titulo: "Garantía de Calidad",
    descripcion:
      "Registros y documentación del sistema de calidad, check-lists de control y gestión de no conformidades con análisis de causa raíz y acciones correctivas.",
    etiqueta: "No conformidades · Causa raíz",
  },
  {
    numero: "03",
    titulo: "Cumplimiento Normativo",
    descripcion:
      "Trabajo con los principales estándares del sector alimentario y apoyo en auditorías internas y externas, con la información siempre disponible y trazable.",
    etiqueta: "ISO 22000 · FSSC 22000 · BRCGS v9 · IFS v8",
  },
  {
    numero: "04",
    titulo: "Control Operativo",
    descripcion:
      "Gestión de alérgenos, almacenamiento FIFO/FEFO, control de plagas y cadena de frío, etiquetado, toma de muestras y coordinación de análisis microbiológicos.",
    etiqueta: "Alérgenos · Cadena de frío · Trazabilidad",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-24 px-6 bg-verde-suave/25">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-mostaza mb-4">
            Áreas de expertise
          </p>
          <h2 className="font-serif-elegante text-3xl md:text-4xl lg:text-5xl text-verde-oscuro leading-tight">
            Cuatro pilares de mi trabajo
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {areas.map((area) => (
            <article
              key={area.numero}
              className="group bg-crema rounded-2xl p-8 border border-verde/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
            >
              <span className="font-serif-elegante text-4xl text-mostaza">
                {area.numero}
              </span>
              <h3 className="font-serif-elegante text-2xl text-verde-oscuro mt-4 mb-3">
                {area.titulo}
              </h3>
              <p className="text-suave leading-relaxed mb-5">{area.descripcion}</p>
              <span className="inline-block text-xs uppercase tracking-wider text-verde bg-verde-suave/50 px-3 py-1 rounded-full">
                {area.etiqueta}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
