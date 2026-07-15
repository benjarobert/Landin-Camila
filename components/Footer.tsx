import { SITE } from "@/lib/site";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-crema border-t border-verde/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-suave">
        <a
          href="#inicio"
          className="font-serif-elegante text-lg text-verde-oscuro"
        >
          {SITE.nombre}
        </a>

        <nav aria-label="Contacto" className="flex items-center gap-6">
          <a
            href={`mailto:${SITE.email}`}
            className="hover:text-verde transition"
          >
            Email
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-verde transition"
          >
            LinkedIn
          </a>
        </nav>

        <p>
          © {anio} {SITE.nombre} · Calidad y Seguridad Alimentaria
        </p>
      </div>
    </footer>
  );
}
