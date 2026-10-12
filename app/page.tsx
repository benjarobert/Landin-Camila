import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Areas from "@/components/Areas";
import Experiencia from "@/components/Experiencia";
import Formacion from "@/components/Formacion";
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
      <Formacion />
      <Contacto />
      <Footer />
    </main>
  );
}
