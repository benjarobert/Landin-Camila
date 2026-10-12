const educacion = {
  titulo: "Técnica Superior en Calidad y Seguridad Alimentaria",
  institucion: "Universidad Nacional de Córdoba, Argentina",
  periodo: "2014 – 2016",
};

const cursos = [
  {
    titulo: "Protocolo IFS y BRC en SGSA",
    institucion: "COREMSA · Madrid",
    anio: "2026",
  },
  {
    titulo: "Microbiología de los Alimentos",
    institucion: "FEMXA · Vigo",
    anio: "2026",
  },
  {
    titulo: "ISO 22000/2005 Gestión de la seguridad alimentaria",
    institucion: "FEMXA · Vigo",
    anio: "2026",
  },
  {
    titulo: "Normativa de Calidad Alimentaria BRCGS v9",
    institucion: "FEMXA · Vigo",
    anio: "2026",
  },
];

const habilidades = [
  {
    titulo: "Sistemas de gestión y normativa",
    items: ["APPCC/HACCP", "ISO 22000", "FSSC 22000", "BRCGS v9", "IFS v8"],
  },
  {
    titulo: "Herramientas digitales",
    items: ["Office 365", "ERP de gestión", "Salesforce CRM", "Slack"],
  },
];

const idiomas = [
  { nombre: "Español", detalle: "Nativo" },
  { nombre: "Italiano", detalle: "Básico" },
  { nombre: "Inglés", detalle: "B1 (MCER)" },
];

export default function Formacion() {
  return (
    <section id="formacion" className="py-24 px-6 bg-crema">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-mostaza mb-4">
            Formación y habilidades
          </p>
          <h2 className="font-serif-elegante text-3xl md:text-4xl lg:text-5xl text-verde-oscuro leading-tight">
            Estudios, cursos y herramientas
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda: educación + habilidades + idiomas */}
          <div className="space-y-10">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-suave mb-4">
                Educación
              </h3>
              <div className="bg-verde-suave/20 rounded-xl p-5 border border-verde/10">
                <p className="font-serif-elegante text-xl text-verde-oscuro mb-1">
                  {educacion.titulo}
                </p>
                <p className="text-sm text-suave">
                  {educacion.institucion} · {educacion.periodo}
                </p>
              </div>
            </div>

            {habilidades.map((grupo) => (
              <div key={grupo.titulo}>
                <h3 className="text-sm uppercase tracking-widest text-suave mb-4">
                  {grupo.titulo}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {grupo.items.map((item) => (
                    <li
                      key={item}
                      className="bg-verde-suave/50 text-verde-oscuro px-4 py-2 rounded-full text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-sm uppercase tracking-widest text-suave mb-4">
                Idiomas
              </h3>
              <ul className="flex flex-wrap gap-3">
                {idiomas.map((idioma) => (
                  <li
                    key={idioma.nombre}
                    className="inline-flex items-baseline gap-2 bg-mostaza/15 border border-mostaza/40 text-verde-oscuro px-4 py-2 rounded-full"
                  >
                    <span className="font-medium">{idioma.nombre}</span>
                    <span className="text-sm text-suave">· {idioma.detalle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna derecha: cursos y certificaciones */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-suave mb-4">
              Cursos y certificaciones
            </h3>
            <ul className="space-y-4">
              {cursos.map((curso) => (
                <li
                  key={curso.titulo}
                  className="flex items-start gap-4 bg-verde-suave/20 rounded-xl p-5 border border-verde/10"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 flex-shrink-0 w-9 h-9 rounded-full bg-verde text-crema flex items-center justify-center text-sm"
                  >
                    ✓
                  </span>
                  <div className="flex-1">
                    <p className="font-serif-elegante text-xl text-verde-oscuro leading-snug">
                      {curso.titulo}
                    </p>
                    <p className="text-sm text-suave mt-1">
                      {curso.institucion}
                    </p>
                  </div>
                  <span className="text-sm text-verde font-medium tabular-nums">
                    {curso.anio}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
