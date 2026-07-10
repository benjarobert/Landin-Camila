export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-crema border-t border-verde/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-suave">
        <a
          href="#inicio"
          className="font-serif-elegante text-lg text-verde-oscuro"
        >
          Camila Robert
        </a>
        <p>
          © {anio} Camila Robert · Calidad y Seguridad Alimentaria
        </p>
      </div>
    </footer>
  );
}
