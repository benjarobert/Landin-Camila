"use client";

import { useEffect, useState } from "react";

const enlaces = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#areas", label: "Áreas" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const cerrarConEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", cerrarConEscape);
    return () => window.removeEventListener("keydown", cerrarConEscape);
  }, [abierto]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crema/90 backdrop-blur-md border-b border-verde/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Nombre */}
        <a
          href="#inicio"
          className="font-serif-elegante text-xl text-verde-oscuro"
          onClick={() => setAbierto(false)}
        >
          Camila Robert
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="text-sm text-suave hover:text-verde transition"
            >
              {enlace.label}
            </a>
          ))}
        </nav>

        {/* Botón CTA desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-block bg-verde text-crema px-5 py-2 rounded-full text-sm hover:bg-verde-oscuro transition"
        >
          Contactar
        </a>

        {/* Botón hamburguesa (mobile) */}
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-verde-oscuro hover:bg-verde-suave/50 transition"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          aria-controls="menu-mobile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {abierto ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Panel mobile desplegable */}
      {abierto && (
        <nav
          id="menu-mobile"
          className="md:hidden border-t border-verde/10 bg-crema/95 backdrop-blur-md"
          aria-label="Navegación principal"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {enlaces.map((enlace) => (
              <a
                key={enlace.href}
                href={enlace.href}
                onClick={() => setAbierto(false)}
                className="py-3 text-base text-suave hover:text-verde transition border-b border-verde/5 last:border-none"
              >
                {enlace.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setAbierto(false)}
              className="mt-3 bg-verde text-crema px-5 py-3 rounded-full text-sm text-center hover:bg-verde-oscuro transition"
            >
              Contactar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
