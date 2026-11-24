import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useThemeContext } from "@/context/ThemeContext";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.querySelector(l.href));
      const current = sections.findIndex((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current !== -1) setActive(links[current].label);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-ink-900/80 dark:border-white/5 bg-white/80 border-slate-200 backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight dark:text-white text-slate-900"
        >
          Navin<span className="text-accent-cyan">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.label
                    ? "dark:text-white text-slate-900"
                    : "dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900"
                }`}
              >
                {link.label}
                {active === link.label && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border dark:border-white/10 dark:bg-white/5 dark:text-slate-300 border-slate-200 bg-slate-100 text-slate-600 transition-all hover:scale-110 dark:hover:border-accent-cyan/40 dark:hover:bg-accent-cyan/10 hover:border-accent-cyan/40 hover:bg-accent-cyan/10"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full border dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-accent-cyan/40 dark:hover:bg-accent-cyan/10 border-slate-200 bg-slate-100 text-slate-700 hover:border-accent-cyan/40 hover:bg-accent-cyan/10 px-5 py-2 text-sm font-medium transition-all md:block"
          >
            Get in touch
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="dark:text-slate-300 text-slate-600 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t dark:border-white/5 dark:bg-ink-900/95 border-slate-200 bg-white/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium dark:text-slate-300 text-slate-600 transition-colors dark:hover:bg-white/5 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
