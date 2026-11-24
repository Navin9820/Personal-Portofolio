import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden grid-bg"
    >
      {/* glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent-cyan/20 blur-[120px] animate-pulse-glow" />
      <div
        className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-accent-indigo/20 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-blue/15 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28">
        <div className="max-w-3xl">
          <div
            className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border dark:border-white/10 dark:bg-white/5 border-slate-200 bg-white/60 px-4 py-1.5 text-sm dark:text-slate-300 text-slate-600"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Frontend / UI Developer
          </div>

          <h1
            className="animate-fade-up font-display text-5xl font-bold leading-[1.05] tracking-tight dark:text-white text-slate-900 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.2s" }}
          >
            Hello, I'm <span className="text-gradient">Navin</span>.
          </h1>

          <p
            className="animate-fade-up mt-6 text-lg dark:text-slate-400 text-slate-600 sm:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            I'm a <span className="font-medium dark:text-slate-200 text-slate-800">Frontend / UI Developer</span> based in Chennai, India. I build responsive interfaces that feel clear, fast, and dependable.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] hover:brightness-110"
            >
              <Mail size={16} />
              Contact me here
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border dark:border-white/15 dark:text-white border-slate-300 text-slate-700 px-6 py-3 text-sm font-semibold transition-all dark:hover:border-white/30 dark:hover:bg-white/5 hover:border-slate-400 hover:bg-slate-100"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 dark:text-slate-500 text-slate-400 transition-colors dark:hover:text-slate-300 hover:text-slate-600 sm:flex"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-float" />
        </a>
      </div>
    </section>
  );
}
