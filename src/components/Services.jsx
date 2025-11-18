import { motion } from "framer-motion";

const services = [
  {
    title: "Verified Dog Walking",
    desc: "GPS tracking with optional live POV camera for complete transparency.",
  },
  {
    title: "Community Boarding",
    desc: "Connect with trusted dog lovers for safe, homely stays.",
  },
  {
    title: "Grooming Services",
    desc: "Discounted partner salons with home pick-up and drop.",
  },
  {
    title: "Extensive Workouts",
    desc: "Cycling runs, swimming, park playdates, and puppy training.",
  },
  {
    title: "Healthy Meal/Tiffin",
    desc: "Fresh, preservative-free meals prepared by partner kitchens.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Services Offered
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-blue-500/20 bg-slate-800/40 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-100/90">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
