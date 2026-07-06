import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Certificates } from "@/components/certificates/Certificates";
import { Resume } from "@/components/resume/Resume";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { SpotlightCursor } from "@/components/ui/effects";

/**
 * Komponen Halaman Utama (Home Page) portofolio.
 * Halaman ini menggabungkan seluruh komponen section portofolio seperti Hero, Skills,
 * Experience, Projects, Certificates, Resume, dan Contact dengan interaksi SpotlightCursor.
 * 
 * @returns Struktur halaman utama portofolio lengkap.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary relative">
      <SpotlightCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
