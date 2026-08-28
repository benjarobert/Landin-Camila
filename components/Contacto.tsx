"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

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
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
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
          <p className="text-lg text-suave leading-relaxed mb-4 max-w-md">
            Si buscas incorporar a tu equipo a alguien que se tome en serio la
            seguridad alimentaria, escríbeme por el canal que prefieras y te
            respondo lo antes posible.
          </p>
          <p className="text-sm text-suave/80 leading-relaxed mb-8 max-w-md italic">
            También estoy abierta a colaboraciones puntuales o proyectos por
            encargo.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-verde-oscuro hover:text-verde transition"
            >
              <span
                aria-hidden="true"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-verde-suave/60 text-verde-oscuro text-sm"
              >
                ✉
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-suave">
                  Email
                </span>
                {SITE.email}
              </span>
            </a>

            <a
              href={`tel:${SITE.telefonoLink}`}
              className="flex items-center gap-3 text-verde-oscuro hover:text-verde transition"
            >
              <span
                aria-hidden="true"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-verde-suave/60 text-verde-oscuro text-sm"
              >
                ☎
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-suave">
                  Teléfono
                </span>
                {SITE.telefono}
              </span>
            </a>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-verde-oscuro hover:text-verde transition"
            >
              <span
                aria-hidden="true"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-verde text-crema text-[10px] font-bold"
              >
                in
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-suave">
                  LinkedIn
                </span>
                /in/camilarobert
              </span>
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
              autoComplete="name"
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
              autoComplete="organization"
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
              autoComplete="email"
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
              placeholder="Cuéntame en qué puedo ayudar…"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-verde text-crema px-8 py-4 rounded-full hover:bg-verde-oscuro transition"
          >
            Enviar mensaje
          </button>
          <p className="text-xs text-suave/70 text-center">
            Al enviar se abrirá tu aplicación de correo con el mensaje listo.
          </p>
        </form>
      </div>
    </section>
  );
}
