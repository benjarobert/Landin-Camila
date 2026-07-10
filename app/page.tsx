import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Areas from "@/components/Areas";
import Certificaciones from "@/components/Certificaciones";
import ComoTrabajo from "@/components/ComoTrabajo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SobreMi />
      <Areas />
      <Certificaciones />
      <ComoTrabajo />
      <Contacto />
      <Footer />
    </main>
  );
}
