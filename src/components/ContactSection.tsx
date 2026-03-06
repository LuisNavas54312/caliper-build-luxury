import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClasses =
    "w-full bg-secondary/40 border-b-2 border-concrete px-4 py-4 text-sm text-foreground placeholder:text-concrete-light focus:outline-none focus:border-foreground focus:bg-secondary/60 transition-all duration-300 font-light";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-background" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[11px] tracking-[0.45em] uppercase text-concrete-light mb-6">
            03 — Contact
          </p>
          <div className="w-12 h-px bg-concrete mb-12" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Let's build something
            <br />
            <span className="text-concrete-light">extraordinary.</span>
          </h2>
          <p className="text-dim text-sm mb-16 max-w-md">
            Reach out to discuss your next project. We respond within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-2"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" disabled className="bg-background text-muted-foreground">
                Project Type
              </option>
              <option value="commercial" className="bg-background text-foreground">Commercial</option>
              <option value="luxury-residential" className="bg-background text-foreground">Luxury Residential</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Brief Project Description"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputClasses} resize-none`}
          />

          <div className="pt-8">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Initiate Contact
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
