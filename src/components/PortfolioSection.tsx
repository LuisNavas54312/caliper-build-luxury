import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

type Sector = "all" | "residential" | "commercial" | "interiors";

interface PortfolioItem {
  title: string;
  subtitle: string;
  sector: Exclude<Sector, "all">;
  tag: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Waterfront Estate Foundations",
    subtitle: "Cast-in-place concrete foundations and post-tension slab systems engineered for Miami's coastal soil conditions. Zero-day-delay execution with full structural integrity certification.",
    sector: "residential",
    tag: "Foundations",
  },
  {
    title: "Custom Architectural Shells",
    subtitle: "Ground-up structural shells featuring cantilevered concrete balconies, steel-hybrid framing, and custom formwork for architecturally complex residential designs.",
    sector: "residential",
    tag: "Shell Construction",
  },
  {
    title: "Reinforced Concrete Cores",
    subtitle: "High-tolerance vertical concrete cores for luxury residences requiring seismic and hurricane-grade structural performance. Architectural concrete finish standards.",
    sector: "residential",
    tag: "Structural Core",
  },
  {
    title: "High-Rise Concrete Shells",
    subtitle: "Large-scale structural concrete packages for mixed-use towers — foundations, columns, elevator cores, and podium structures. AIA A201 compliant with aggressive scheduling protocols.",
    sector: "commercial",
    tag: "High-Rise",
  },
  {
    title: "Industrial & Distribution Facilities",
    subtitle: "Tilt-up concrete construction and structural reinforcement for commercial distribution centers. Strategic mobilization and critical-path delivery for large-footprint builds.",
    sector: "commercial",
    tag: "Industrial",
  },
  {
    title: "Adaptive Reuse & Rehabilitation",
    subtitle: "Structural concrete rehabilitation and reinforcement for commercial adaptive reuse projects. Full engineering coordination with existing load-bearing systems.",
    sector: "commercial",
    tag: "Rehabilitation",
  },
  {
    title: "Luxury Interior Reconfigurations",
    subtitle: "Full-scale gut renovations providing the structural oversight that cosmetic contractors lack. Premium material integration with bespoke millwork and architectural lighting systems.",
    sector: "interiors",
    tag: "Gut Renovation",
  },
  {
    title: "Commercial Tenant Improvements",
    subtitle: "High-end tenant improvement build-outs with precision finishes and specialty MEP coordination. Technical finish standards that exceed conventional TI specifications.",
    sector: "interiors",
    tag: "Commercial TI",
  },
  {
    title: "Estate Living Transformations",
    subtitle: "Structural rebirth of luxury residential interiors — imported stone surfaces, concealed systems integration, and architectural detailing that demands engineering-grade execution.",
    sector: "interiors",
    tag: "Remodel",
  },
];

const filters: { label: string; value: Sector }[] = [
  { label: "All Projects", value: "all" },
  { label: "Ground-Up Residential", value: "residential" },
  { label: "Commercial & Concrete", value: "commercial" },
  { label: "Interior Transformations", value: "interiors" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSector, setActiveSector] = useState<Sector>("all");

  const filtered = activeSector === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.sector === activeSector);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[11px] tracking-[0.45em] uppercase text-concrete-light mb-6">
            03 — Portfolio
          </p>
          <div className="w-12 h-px bg-concrete mb-12" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
            Capabilities Showcase
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-row justify-center items-center gap-6 md:gap-8 w-full overflow-x-auto whitespace-nowrap mb-16 border-b border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveSector(filter.value)}
              className={`text-sm tracking-wider uppercase font-semibold px-4 py-5 transition-all duration-300 border-b-[3px] -mb-px whitespace-nowrap ${
                activeSector === filter.value
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:border-concrete"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="group bg-background p-8 md:p-10 cursor-default transition-colors duration-500 hover:bg-accent"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-concrete">
                    {item.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-concrete-light transition-colors duration-300 group-hover:bg-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed opacity-90 text-dim">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
