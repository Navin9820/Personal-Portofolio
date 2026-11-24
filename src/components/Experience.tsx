import { experiences } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Briefcase, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            04 — Career
          </p>
          <h2 className="font-display text-3xl font-bold dark:text-white text-slate-900 sm:text-4xl">
            Professional experience
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {experiences.map((experience) => (
            <Reveal key={`${experience.company}-${experience.role}`}>
              <article className="group relative rounded-2xl border dark:border-white/10 dark:bg-white/[0.02] border-slate-200 bg-white p-6 transition-all dark:hover:border-white/20 dark:hover:bg-white/[0.04] hover:border-slate-300 hover:shadow-lg sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border dark:border-white/10 dark:bg-white/5 border-slate-200 bg-slate-100 text-accent-cyan transition-colors group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold dark:text-white text-slate-900">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-sm dark:text-slate-400 text-slate-600">
                        <span className="font-medium dark:text-slate-200 text-slate-800">
                          {experience.company}
                        </span>{" "}
                        · {experience.type}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-sm dark:text-slate-500 text-slate-500">
                        <MapPin size={13} /> {experience.location}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border dark:border-white/10 dark:bg-white/5 dark:text-slate-300 border-slate-200 bg-slate-100 text-slate-600 px-4 py-1.5 text-xs font-medium">
                    {experience.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed dark:text-slate-400 text-slate-600">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
