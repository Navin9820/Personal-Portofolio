import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const categories = [
  "Frontend",
  "UI Development",
  "State Management",
  "API Integration",
  "Backend & Data",
  "Practices",
] as const;

type Category = (typeof categories)[number];

const styles: Record<Category, string> = {
  Frontend: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300",
  "UI Development": "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300",
  "State Management": "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300",
  "API Integration": "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300",
  "Backend & Data": "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300",
  Practices: "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            03 — Toolkit
          </p>
          <h2 className="font-display text-3xl font-bold dark:text-white text-slate-900 sm:text-4xl">
            Technical skills
          </h2>
        </Reveal>

        <div className="mt-12 space-y-10">
          {categories.map((category, index) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            return (
              <Reveal key={category} delay={index * 80}>
                <div>
                  <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider dark:text-slate-500 text-slate-400">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all hover:scale-105 ${styles[skill.category as Category]}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
