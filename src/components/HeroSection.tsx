import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 96%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 96%) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Horizontal rule accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-concrete to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-concrete-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Miami, Florida — General Contracting
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Executing Architectural
          <br />
          Visions with Mathematical
          <br />
          <span className="text-concrete-light">Tolerance.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-dim max-w-2xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          High-margin luxury residential builds and commercial structural concrete in Miami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Discuss a Project
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
