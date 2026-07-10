const pasos = [
  {
    numero: "1",
    titulo: "Diagnóstico inicial",
    descripcion:
      "Analizo la situación actual de la empresa: procesos, riesgos y estado del sistema de calidad, para saber desde dónde partimos.",
  },
  {
    numero: "2",
    titulo: "Diseño del sistema",
    descripcion:
      "Defino los procedimientos, controles y documentación a medida de la operación y de la normativa que aplique.",
  },
  {
    numero: "3",
    titulo: "Implementación",
    descripcion:
      "Pongo el sistema en marcha junto al equipo, formando a las personas y ajustando lo necesario en planta.",
  },
  {
    numero: "4",
    titulo: "Seguimiento",
    descripcion:
      "Reviso, mido y mejoro de forma continua para mantener el sistema vivo y preparado ante cualquier auditoría.",
  },
];

export default function ComoTrabajo() {
  return (
    <section id="como-trabajo" className="py-24 px-6 bg-verde-oscuro text-crema">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-mostaza mb-4">
            Cómo trabajo
          </p>
          <h2 className="font-serif-elegante text-3xl md:text-4xl lg:text-5xl leading-tight">
            Un proceso claro, de principio a fin
          </h2>
        </div>

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso) => (
            <li key={paso.numero} className="relative">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-mostaza text-verde-oscuro font-serif-elegante text-2xl mb-5">
                {paso.numero}
              </div>
              <h3 className="font-serif-elegante text-xl mb-3">{paso.titulo}</h3>
              <p className="text-crema/70 leading-relaxed">{paso.descripcion}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
