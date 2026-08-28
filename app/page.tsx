import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Areas from "@/components/Areas";
import Experiencia from "@/components/Experiencia";
import Certificaciones from "@/components/Certificaciones";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SobreMi />
      <Experiencia />
      <Areas />
      <Certificaciones />
      <Contacto />
      <Footer />
    </main>
  );
}
