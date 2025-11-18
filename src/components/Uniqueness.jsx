import { motion } from "framer-motion";

export default function Uniqueness() {
  const sections = [
    {
      title: "Trust & Transparency (USP)",
      points: [
        "Live POV + GPS tracking for walks",
        "Verification-first: background checks, badges, insurance",
        "Pet Parent Dashboard: activity, food, health logs",
      ],
    },
    {
      title: "Holistic Pet Lifestyle",
      points: [
        "Specialized workouts: cycling, swimming, agility, playdates",
        "Healthy Meal/Tiffin: affordable, preservative-free",
        "Pet Social Community: boarding swaps, advice, meetups",
      ],
    },
    {
      title: "Affordable Premium",
      points: [
        "Tiered options: budget to premium",
        "Partnerships with local supply = better prices",
      ],
    },
    {
      title: "Future-Proof Tech",
      points: [
        "AI health insights from activity + meal data",
        "Wearables integration",
        "Gamified rewards for consistency",
      ],
    },
  ];

  return (
    <section id="uniqueness" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Differentiation: How Pluto Stands Out
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-blue-500/20 bg-slate-800/40 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc list-inside">
                {s.points.map((p) => (
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
