export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-crema">
      <div className="max-w-4xl mx-auto">
        {/* Etiqueta de sección */}
        <p className="text-sm uppercase tracking-widest text-mostaza mb-4">
          Sobre mí
        </p>

        <h2 className="font-serif-elegante text-3xl md:text-4xl lg:text-5xl text-verde-oscuro leading-tight mb-8">
          La seguridad alimentaria como prioridad real,{" "}
          <span className="text-verde">no solo un requisito</span>.
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-suave leading-relaxed">
          <p>
            Soy <span className="text-verde-oscuro font-medium">Camila Robert</span>,
            Técnica Superior en Bromatología graduada en la UNC (2016). Llevo más de
            8 años trabajando en sistemas de gestión de calidad e inocuidad
            alimentaria.
          </p>
          <p>
            Hoy estoy en Valencia con ganas de sumarme a equipos donde la seguridad
            alimentaria sea una prioridad real, no solo un requisito que hay que
            cumplir.
          </p>
        </div>
      </div>
    </section>
  );
}
