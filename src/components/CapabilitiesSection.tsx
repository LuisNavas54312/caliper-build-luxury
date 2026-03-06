import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Blocks, Monitor } from "lucide-react";

const capabilities = [
  {
    icon: Building2,
    title: "Luxury Residential Shells",
    description: "Ground-up structural shells for high-end residential projects, engineered with uncompromising precision and premium material specifications.",
    label: "Residential",
  },
  {
    icon: Blocks,
    title: "Commercial Structural Concrete",
    description: "Large-scale commercial concrete work including foundations, columns, slabs, and structural cores — delivered on schedule with zero tolerance for error.",
    label: "Commercial",
  },
  {
    icon: Monitor,
    title: "Tech-Enabled Project Management",
    description: "Real-time project tracking, digital reporting, and data-driven scheduling that eliminates waste and maximizes transparency for every stakeholder.",
    label: "Technology",
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-elevated" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-concrete-light mb-6">
            02 — Core Capabilities
          </p>
          <div className="w-12 h-px bg-concrete mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="group bg-surface-elevated p-8 md:p-10 transition-colors duration-500 hover:bg-accent cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <div className="flex items-center justify-between mb-8">
                <cap.icon className="w-6 h-6 text-concrete-light transition-colors duration-300 group-hover:text-foreground" strokeWidth={1.5} />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-concrete">
                  {cap.label}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-dim">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
