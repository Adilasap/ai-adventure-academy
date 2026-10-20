import { EducatorSection } from "./components/EducatorSection";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeSection } from "./components/HomeSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { WorkshopsSection } from "./components/WorkshopsSection";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <HomeSection />
        <EducatorSection />
        <WorkshopsSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
