export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen pt-32 pb-20 px-6 bg-crema">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda: texto */}
        <div>
          {/* Etiqueta arriba */}
          <div className="inline-block bg-verde-suave text-verde-oscuro px-4 py-1 rounded-full text-sm mb-6">
            📍 Comunidad Valenciana y Alicante
          </div>

          {/* Título principal */}
          <h1 className="font-serif-elegante text-5xl md:text-6xl lg:text-7xl text-verde-oscuro leading-tight mb-6">
            Hola, soy <span className="text-mostaza">Camila Robert</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-suave mb-8 leading-relaxed">
            Técnica en Calidad y Seguridad Alimentaria. Ayudo a empresas del sector alimentario a producir con seguridad y cumplir con las principales normativas internacionales.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-verde text-crema px-8 py-4 rounded-full text-center hover:bg-verde-oscuro transition"
            >
              ¿Hablamos?
            </a>
            <a
              href="#sobre-mi"
              className="border-2 border-verde text-verde px-8 py-4 rounded-full text-center hover:bg-verde-suave transition"
            >
              Conoceme
            </a>
          </div>
        </div>

        {/* Columna derecha: foto */}
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden bg-verde-suave">
            {/* Cuando tengas la foto de Camila, la ponés acá */}
            <div className="w-full h-full flex items-center justify-center text-verde-oscuro text-lg">
              [Foto de Camila]
            </div>
          </div>

          {/* Badge flotante */}
          <div className="absolute -bottom-6 -left-6 bg-mostaza text-verde-oscuro px-6 py-4 rounded-2xl shadow-lg">
            <div className="text-3xl font-serif-elegante">8+</div>
            <div className="text-sm">años de experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
}