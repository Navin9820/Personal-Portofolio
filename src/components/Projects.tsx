import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import * as Icons from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            02 — Work
          </p>
          <h2 className="font-display text-3xl font-bold dark:text-white text-slate-900 sm:text-4xl">
            My projects
          </h2>
          <p className="mt-4 max-w-2xl dark:text-slate-400 text-slate-600">
            A selection of applications and systems I've designed and built
            across mobile, web, and AI.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[project.icon] ?? Icons.Folder;
            return (
              <Reveal key={project.title} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border dark:border-white/10 dark:bg-white/[0.02] border-slate-200 bg-white transition-all duration-300 dark:hover:border-white/20 dark:hover:bg-white/[0.04] hover:border-slate-300 hover:shadow-lg hover:-translate-y-1">
                  {/* project image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t dark:from-ink-900 dark:via-ink-900/20 from-white/80 via-transparent to-transparent" />
                    <div
                      className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${project.gradient} shadow-lg`}
                    >
                      <Icon className="text-white" size={18} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold dark:text-white text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed dark:text-slate-400 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border dark:border-white/10 dark:bg-white/5 dark:text-slate-400 border-slate-200 bg-slate-100 text-slate-500 px-2 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
