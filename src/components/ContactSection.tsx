import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/xojkqkbj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-secondary/40 border-b-2 border-concrete px-4 py-4 text-base text-foreground placeholder:text-base placeholder:text-concrete-light focus:outline-none focus:border-foreground focus:bg-secondary/60 transition-all duration-300";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-background" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm md:text-base tracking-[0.2em] uppercase text-concrete-light mb-6">
            04 — Contact
          </p>
          <div className="w-12 h-px bg-concrete mb-12" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Let's build something
            <br />
            <span className="text-concrete-light">extraordinary.</span>
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-md">
            Reach out to discuss your next project. We respond within 24 hours.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            className="py-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="w-10 h-10 text-foreground mx-auto mb-6" strokeWidth={1} />
            <p className="font-mono text-xs tracking-[0.45em] uppercase text-foreground">
              Transmission Received.
            </p>
            <p className="font-mono text-xs tracking-[0.45em] uppercase text-concrete-light mt-2">
              We will respond within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-2"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className={inputClasses} />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className={inputClasses} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={inputClasses} />
              <select name="projectType" value={formData.projectType} onChange={handleChange} required className={`${inputClasses} appearance-none cursor-pointer`}>
                <option value="" disabled className="bg-background text-muted-foreground">Project Type</option>
                <option value="commercial" className="bg-background text-foreground">Commercial</option>
                <option value="luxury-residential" className="bg-background text-foreground">Luxury Residential</option>
                <option value="interior-transformation" className="bg-background text-foreground">Interior Transformation</option>
              </select>
            </div>
            <textarea name="message" placeholder="Brief Project Description" value={formData.message} onChange={handleChange} rows={4} className={`${inputClasses} resize-none`} />

            {status === "error" && (
              <p className="font-mono text-xs tracking-widest uppercase text-red-400">
                Transmission failed. Please try again.
              </p>
            )}

            <div className="pt-8">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Transmitting..." : "Initiate Contact"}
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
