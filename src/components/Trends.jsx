import { motion } from "framer-motion";

export default function Trends() {
  const items = [
    "India pet care ~20% CAGR; $1.5B+ by 2030",
    "Rise of working professionals with pets",
    "Shift to premium care and healthy diets",
    "Growing adoption of pet tech and GPS",
    "Opportunity: first integrated pet-care + community platform",
  ];

  return (
    <section id="trends" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8"
        >
          Industry Trends & Opportunity
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-blue-500/20 bg-slate-800/40 p-5 text-blue-100"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
