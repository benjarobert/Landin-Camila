import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // ⚠️ Cambiar por el dominio real cuando el sitio esté publicado
  metadataBase: new URL("https://camilarobert.example.com"),
  title: `${SITE.nombre} · ${SITE.rol}`,
  description: SITE.descripcion,
  keywords: [
    "calidad alimentaria",
    "seguridad alimentaria",
    "bromatología",
    "APPCC",
    "ISO 22000",
    "BRCGS",
    "IFS",
    "Valencia",
    "Alicante",
  ],
  authors: [{ name: SITE.nombre }],
  openGraph: {
    title: `${SITE.nombre} · ${SITE.rol}`,
    description: SITE.descripcion,
    type: "profile",
    locale: "es_ES",
    siteName: SITE.nombre,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.nombre} · ${SITE.rol}`,
    description: SITE.descripcion,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#3F5B2B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.nombre,
  jobTitle: SITE.rol,
  description: SITE.descripcion,
  email: `mailto:${SITE.email}`,
  sameAs: [SITE.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valencia",
    addressCountry: "ES",
  },
  knowsLanguage: ["es", "en", "it"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <a href="#inicio" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
