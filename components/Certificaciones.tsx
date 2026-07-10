const normas = [
  { nombre: "ISO 22000", detalle: "Gestión de la inocuidad alimentaria" },
  { nombre: "BRCGS", detalle: "Global Standard for Food Safety" },
  { nombre: "IFS", detalle: "International Featured Standards" },
  { nombre: "ISO 9001:2015", detalle: "Gestión de la calidad" },
  { nombre: "APPCC", detalle: "Análisis de Peligros y Puntos de Control Críticos" },
];

const idiomas = [
  { nombre: "Español", detalle: "Nativo" },
  { nombre: "Inglés", detalle: "Profesional" },
  { nombre: "Italiano", detalle: "Intermedio" },
];

export default function Certificaciones() {
  return (
    <section id="certificaciones" className="py-24 px-6 bg-crema">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-mostaza mb-4">
            Formación y estándares
          </p>
          <h2 className="font-serif-elegante text-3xl md:text-4xl lg:text-5xl text-verde-oscuro leading-tight">
            Certificaciones e idiomas
          </h2>
        </div>

        {/* Normas y estándares */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {normas.map((norma) => (
            <div
              key={norma.nombre}
              className="flex items-start gap-4 bg-verde-suave/20 rounded-xl p-5 border border-verde/10"
            >
              <span
                aria-hidden="true"
                className="mt-1 flex-shrink-0 w-9 h-9 rounded-full bg-verde text-crema flex items-center justify-center text-sm"
              >
                ✓
              </span>
              <div>
                <p className="font-serif-elegante text-xl text-verde-oscuro">
                  {norma.nombre}
                </p>
                <p className="text-sm text-suave">{norma.detalle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Idiomas */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-suave mb-4">
            Idiomas
          </h3>
          <div className="flex flex-wrap gap-3">
            {idiomas.map((idioma) => (
              <span
                key={idioma.nombre}
                className="inline-flex items-baseline gap-2 bg-mostaza/15 border border-mostaza/40 text-verde-oscuro px-4 py-2 rounded-full"
              >
                <span className="font-medium">{idioma.nombre}</span>
                <span className="text-sm text-suave">· {idioma.detalle}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
