import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border">
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-foreground">
          Caliper Build Partners
        </span>
        <a
          href="#contact"
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-concrete-light hover:text-foreground transition-colors duration-300"
        >
          Contact
        </a>
      </nav>

      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-concrete">
            © 2026 Caliper Build Partners LLC
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-concrete">
            Miami, Florida
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
