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
    title: "Coral Gables Estate Shell",
    subtitle: "12,000 SF ground-up luxury residential structure with reinforced concrete core and custom formwork.",
    sector: "residential",
    tag: "Ground-Up",
  },
  {
    title: "Coconut Grove Waterfront",
    subtitle: "8,500 SF zero-to-one-hundred build on Biscayne Bay. Cast-in-place concrete with post-tension slab system.",
    sector: "residential",
    tag: "Waterfront",
  },
  {
    title: "Pinecrest Modern Villa",
    subtitle: "6,200 SF custom residential shell featuring cantilevered concrete balconies and structural steel hybrid.",
    sector: "residential",
    tag: "Custom Shell",
  },
  {
    title: "Brickell Tower Podium",
    subtitle: "Commercial structural concrete for a 42-story mixed-use tower. Foundations, columns, and elevator cores.",
    sector: "commercial",
    tag: "High-Rise",
  },
  {
    title: "Wynwood Warehouse Conversion",
    subtitle: "Structural reinforcement and concrete rehabilitation for a 28,000 SF commercial adaptive reuse project.",
    sector: "commercial",
    tag: "Adaptive Reuse",
  },
  {
    title: "Doral Distribution Center",
    subtitle: "Tilt-up concrete construction for a 65,000 SF industrial distribution facility with loading dock infrastructure.",
    sector: "commercial",
    tag: "Industrial",
  },
  {
    title: "Fisher Island Penthouse Renovation",
    subtitle: "Full-scale gut renovation of a 4,800 SF penthouse. Bespoke Italian marble, custom millwork, and integrated smart home systems.",
    sector: "interiors",
    tag: "Penthouse",
  },
  {
    title: "Aventura Medical Suite TI",
    subtitle: "Premium tenant improvement for a 3,200 SF medical office. Precision finishes and specialty MEP coordination.",
    sector: "interiors",
    tag: "Commercial TI",
  },
  {
    title: "Key Biscayne Residence Remodel",
    subtitle: "Luxury kitchen and living space transformation with imported stone surfaces, concealed appliances, and architectural lighting.",
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
            Selected Work
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-1 mb-16 border-b border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveSector(filter.value)}
              className={`font-mono text-[10px] tracking-[0.3em] uppercase px-6 py-4 transition-all duration-300 border-b-2 -mb-px ${
                activeSector === filter.value
                  ? "text-foreground border-foreground"
                  : "text-concrete-light border-transparent hover:text-foreground hover:border-concrete"
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
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
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
                <p className="text-sm leading-relaxed text-dim">
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
