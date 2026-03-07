import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm md:text-base tracking-[0.2em] uppercase text-concrete-light mb-6">
            01 — The Firm
          </p>
          <div className="w-12 h-px bg-concrete mb-12" />
        </motion.div>

        <motion.p
          className="text-lg leading-relaxed text-dim"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-foreground font-bold">Caliper Build Partners LLC</span> is a tech-enabled General Contracting
          firm specializing in high-margin luxury residential builds and commercial structural concrete
          in Miami. Founded by <span className="text-foreground font-bold">Luis Navas</span>, we leverage extensive field experience at
          premier firms like L&R and KNM to deliver uncompromising precision. We bridge the gap between
          old-world craftsmanship and modern efficiency through advanced project management.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
