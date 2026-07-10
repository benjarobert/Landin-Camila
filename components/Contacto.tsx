"use client";

import { useState } from "react";

// ⚠️ Reemplazar por los datos reales de Camila
const EMAIL = "camila.robert@email.com";
const LINKEDIN = "https://www.linkedin.com/in/camila-robert";

export default function Contacto() {
  const [datos, setDatos] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  const actualizar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDatos((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const asunto = `Contacto desde la web${
      datos.empresa ? ` · ${datos.empresa}` : ""
    }`;
    const cuerpo = `Nombre: ${datos.nombre}\nEmpresa: ${datos.empresa}\nEmail: ${datos.email}\n\n${datos.mensaje}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;
  };

  const inputClass =
    "w-full rounded-xl border border-verde/15 bg-crema px-4 py-3 text-verde-oscuro placeholder:text-suave/60 focus:outline-none focus:ring-2 focus:ring-verde/40 transition";

  return (
    <section id="contacto" className="py-24 px-6 bg-verde-suave/25">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Columna izquierda: invitación + datos directos */}
        <div>
          <p className="text-sm uppercase tracking-widest text-mostaza mb-4">
            Contacto
          </p>
          <h2 className="font-serif-elegante text-3xl md:text-4xl lg:text-5xl text-verde-oscuro leading-tight mb-6">
            Hablemos
          </h2>
          <p className="text-lg text-suave leading-relaxed mb-8 max-w-md">
            ¿Buscás sumar a tu equipo a alguien que se tome en serio la seguridad
            alimentaria? Escribime y te respondo lo antes posible.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-verde-oscuro hover:text-verde transition"
            >
              <span aria-hidden="true">✉️</span>
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-verde-oscuro hover:text-verde transition"
            >
              <span aria-hidden="true">in</span>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <form
          onSubmit={enviar}
          className="bg-crema rounded-2xl p-8 border border-verde/10 shadow-sm space-y-5"
        >
          <div>
            <label htmlFor="nombre" className="block text-sm text-suave mb-2">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={datos.nombre}
              onChange={actualizar}
              className={inputClass}
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="empresa" className="block text-sm text-suave mb-2">
              Empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              value={datos.empresa}
              onChange={actualizar}
              className={inputClass}
              placeholder="Nombre de la empresa (opcional)"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-suave mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={datos.email}
              onChange={actualizar}
              className={inputClass}
              placeholder="tucorreo@empresa.com"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm text-suave mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              value={datos.mensaje}
              onChange={actualizar}
              className={`${inputClass} resize-y`}
              placeholder="Contame en qué puedo ayudar…"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-verde text-crema px-8 py-4 rounded-full hover:bg-verde-oscuro transition"
          >
            Hablemos
          </button>
        </form>
      </div>
    </section>
  );
}
