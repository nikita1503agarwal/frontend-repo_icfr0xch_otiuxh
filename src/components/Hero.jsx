import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              PLUTO
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-xl sm:text-2xl text-blue-200 max-w-2xl"
            >
              “Your Pet’s unexpected Best Friend”
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-blue-100/90 leading-relaxed max-w-xl"
            >
              A digital platform providing reliable dog care services—walking, grooming, boarding, fresh meals, and specialized workouts—while building a vibrant community of dog owners and lovers.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-3 text-white font-semibold shadow hover:bg-blue-400 transition">Explore Services</a>
              <a href="#business" className="inline-flex items-center rounded-lg bg-white/10 px-5 py-3 text-blue-100 font-semibold hover:bg-white/15 transition">Business Model</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-teal-500/10 border border-blue-500/20 p-1">
              <div className="h-full w-full rounded-2xl bg-slate-900/60 backdrop-blur">
                <div className="h-full w-full grid grid-cols-2 gap-2 p-4">
                  {[
                    "Verified Walkers",
                    "GPS + Live POV",
                    "Community Boarding",
                    "Discounted Grooming",
                    "Extensive Workouts",
                    "Healthy Meal/Tiffin",
                    "Pet Social Community",
                    "Trust-First Platform",
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border border-blue-500/20 bg-slate-800/40 p-4 text-center text-blue-100 text-sm font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
