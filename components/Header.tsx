export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crema/90 backdrop-blur-md border-b border-verde/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Nombre */}
        <a href="#inicio" className="font-serif-elegante text-xl text-verde-oscuro">
          Camila Robert
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre-mi" className="text-sm text-suave hover:text-verde transition">
            Sobre mí
          </a>
          <a href="#servicios" className="text-sm text-suave hover:text-verde transition">
            Servicios
          </a>
          <a href="#certificaciones" className="text-sm text-suave hover:text-verde transition">
            Certificaciones
          </a>
          <a href="#contacto" className="text-sm text-suave hover:text-verde transition">
            Contacto
          </a>
        </nav>

        {/* Botón CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-block bg-verde text-crema px-5 py-2 rounded-full text-sm hover:bg-verde-oscuro transition"
        >
          ¿Hablamos?
        </a>
      </div>
    </header>
  );
}