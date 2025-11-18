import { motion } from "framer-motion";

export default function Business() {
  const canvas = {
    segments: ["Pet owners (urban)", "Grooming salons", "Kitchens"],
    value: [
      "Reliable, transparent, affordable care",
      "Community + all-in-one app",
    ],
    channels: ["Mobile app", "Social media", "Partnerships"],
    relationships: ["Subscriptions", "Reviews/ratings", "Loyalty"],
    revenue: [
      "Commission on grooming/boarding",
      "Premium subscription",
      "Delivery/tiffin margin",
      "Workout service fees",
    ],
    resources: ["App", "Partnerships", "Verified providers"],
    activities: ["App dev", "Verification", "Community mgmt"],
    partners: ["Salons", "Kitchens", "Trainers"],
    costs: ["Tech dev", "Operations", "Marketing"],
  };

  return (
    <section id="business" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8"
        >
          Business Model Canvas
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {Object.entries(canvas).map(([key, arr], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="rounded-2xl border border-blue-500/20 bg-slate-800/40 p-6"
            >
              <h3 className="text-lg font-semibold text-white capitalize">{key}</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc list-inside">
                {arr.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
