import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Trends from "./components/Trends";
import Uniqueness from "./components/Uniqueness";
import Business from "./components/Business";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight">PLUTO</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200">
            <a href="#problem" className="hover:text-white">Problem</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#trends" className="hover:text-white">Trends</a>
            <a href="#uniqueness" className="hover:text-white">Uniqueness</a>
            <a href="#business" className="hover:text-white">Business</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <Services />
        <Trends />
        <Uniqueness />
        <Business />
      </main>

      <footer className="mt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-blue-300/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Pluto. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
