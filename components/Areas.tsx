const areas = [
  {
    numero: "01",
    titulo: "Prevención y Control",
    descripcion:
      "Experiencia en el diseño, implementación y seguimiento de sistemas APPCC para identificar, evaluar y controlar los peligros que afectan a la inocuidad de los alimentos.",
    etiqueta: "APPCC",
  },
  {
    numero: "02",
    titulo: "Garantía de Calidad",
    descripcion:
      "Trabajo con sistemas de gestión que aseguran que cada producto cumpla, de forma consistente, con los estándares de calidad definidos.",
    etiqueta: "Quality Assurance",
  },
  {
    numero: "03",
    titulo: "Cumplimiento Normativo",
    descripcion:
      "Experiencia en las principales normativas internacionales del sector alimentario y en la preparación y acompañamiento de auditorías.",
    etiqueta: "ISO 22000 · BRCGS · IFS",
  },
  {
    numero: "04",
    titulo: "Cultura de Seguridad",
    descripcion:
      "Formación y acompañamiento de equipos para que la seguridad alimentaria forme parte del día a día, no de un manual guardado en un cajón.",
    etiqueta: "Food Safety Culture",
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
