import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen pt-32 pb-20 px-6 bg-crema">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda: texto */}
        <div>
          {/* Etiqueta arriba */}
          <div className="inline-flex items-center gap-2 bg-verde-suave text-verde-oscuro px-4 py-1 rounded-full text-sm mb-6">
            <span aria-hidden="true">📍</span> Valencia · Disponible ahora
          </div>

          {/* Título principal */}
          <h1 className="font-serif-elegante text-5xl md:text-6xl lg:text-7xl text-verde-oscuro leading-tight mb-6">
            Hola, soy <span className="text-mostaza">Camila Robert</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-suave mb-8 leading-relaxed">
            Bromatóloga con más de 8 años de experiencia en calidad y seguridad
            alimentaria en Argentina, Austria, Italia y España. Busco sumarme a
            un equipo en la Comunidad Valenciana donde aportar rigor, formación
            y cuidado por el detalle.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-verde text-crema px-8 py-4 rounded-full text-center hover:bg-verde-oscuro transition"
            >
              Contactar
            </a>
            <a
              href="#experiencia"
              className="border-2 border-verde text-verde px-8 py-4 rounded-full text-center hover:bg-verde-suave transition"
            >
              Ver mi experiencia
            </a>
          </div>
        </div>

        {/* Columna derecha: foto */}
        <div className="relative mt-8 md:mt-0 mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
          {/* Acento decorativo cálido detrás de la foto */}
          <div
            aria-hidden="true"
            className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-mostaza/30 blur-2xl"
          />

          <div className="relative aspect-square rounded-3xl overflow-hidden bg-verde-suave ring-1 ring-verde/10 shadow-xl">
            <Image
              src="/camila.jpg"
              alt="Camila Robert, técnica en calidad y seguridad alimentaria"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 90vw"
              className="object-cover object-[50%_60%]"
            />
          </div>

          {/* Badge flotante */}
          <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-mostaza text-verde-oscuro px-6 py-4 rounded-2xl shadow-lg">
            <div className="text-3xl font-serif-elegante">8+</div>
            <div className="text-sm">años de experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
}
