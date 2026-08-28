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
            Todas necesitan que alguien se ocupe de la calidad y la seguridad
            alimentaria con el mismo rigor. Es lo que hago desde hace más de{" "}
            <span className="text-verde-oscuro font-medium">8 años</span>.
          </p>
          <p>
            Soy <span className="text-verde-oscuro font-medium">Camila Robert</span>,
            Bromatóloga y Técnica Superior en Calidad y Seguridad Alimentaria,
            graduada en la Universidad Nacional de Córdoba, Argentina (2016).
            He trabajado implementando y manteniendo sistemas APPCC, ISO 22000,
            BRCGS e IFS en cuatro países.
          </p>
          <p>
            Hoy estoy en Valencia con ganas de sumarme a una empresa del sector
            alimentario donde la seguridad y la calidad sean una prioridad real,
            no solo un requisito que hay que cumplir.
          </p>
        </div>
      </div>
    </section>
  );
}
