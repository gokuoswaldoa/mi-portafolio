import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function EmpresasPage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About variant="tech" />
      <Services />
      <Projects variant="tech" />
      <Contact />
    </main>
  );
}
