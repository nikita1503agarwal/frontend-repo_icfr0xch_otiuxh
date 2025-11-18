import { motion } from "framer-motion";

export default function Problem() {
  const items = [
    "Insufficient and misrepresented dog walks",
    "Hard to find reliable boarding or grooming",
    "Lack of transparency and trust",
    "Nutritious meals are costly or preserved",
    "Limited options for specialized workouts",
  ];

  return (
    <section id="problem" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8"
        >
          The Problem
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
