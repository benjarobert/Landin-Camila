export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-crema">
      <div className="max-w-4xl mx-auto">
        {/* Etiqueta de sección */}
        <p className="text-sm uppercase tracking-widest text-mostaza mb-4">
          Sobre mí
        </p>

        <h2 className="font-serif-elegante text-3xl md:text-4xl lg:text-5xl text-verde-oscuro leading-tight mb-8">
          ¿Qué tienen en común industrias en Argentina, plataformas de
          distribución en Austria, restaurantes en Sicilia y retail en{" "}
          <span className="text-verde">España</span>?
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-suave leading-relaxed">
          <p>
            En todas aplico el mismo rigor: procesos claros, registros
            trazables y cumplimiento de estándares. Es lo que hago desde hace
            más de <span className="text-verde-oscuro font-medium">7 años</span>.
          </p>
          <p>
            Soy <span className="text-verde-oscuro font-medium">Camila Robert</span>,
            Bromatóloga y Técnica Superior en Calidad y Seguridad Alimentaria,
            graduada en la Universidad Nacional de Córdoba, Argentina (2016).
            He trabajado con sistemas APPCC, IFS, BRCGS e ISO 22000 en plantas
            y almacenes de Argentina, Austria e Italia.
          </p>
          <p>
            Hoy estoy en Valencia con ganas de sumarme a una empresa del sector
            alimentario donde la seguridad y la calidad sean una prioridad real,
            no solo un requisito que hay que cumplir.
          </p>
        </div>

        {/* Perfil profesional (resumen del CV) */}
        <div className="mt-12 rounded-2xl border border-verde/15 bg-verde-suave/20 p-6 md:p-8">
          <h3 className="text-sm uppercase tracking-widest text-suave mb-3">
            Perfil profesional
          </h3>
          <p className="text-suave leading-relaxed">
            Técnica de Calidad y Seguridad Alimentaria con experiencia en
            entornos industriales de alimentación y en la implantación y
            seguimiento de sistemas APPCC/HACCP, IFS, BRCGS e ISO 22000.
            Experiencia en control de Puntos Críticos de Control (PCC),
            trazabilidad documental, gestión de alérgenos, control de plagas,
            cadena de frío, limpieza y desinfección mediante protocolos POES,
            etiquetado, toma de muestras y análisis microbiológicos. También
            cuento con experiencia en gestión de no conformidades, análisis de
            causa raíz y acciones correctivas.
          </p>
        </div>
      </div>
    </section>
  );
}
