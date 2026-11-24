import { aboutParagraphs, certifications, coreCompetencies, education, languages } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Code2, GraduationCap, Award, Languages } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            01 — About
          </p>
          <h2 className="font-display text-3xl font-bold dark:text-white text-slate-900 sm:text-4xl">
            About me
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2" delay={100}>
            <div className="space-y-5 text-lg leading-relaxed dark:text-slate-400 text-slate-600">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {coreCompetencies.slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border dark:border-white/10 dark:bg-white/5 dark:text-slate-300 border-slate-200 bg-slate-100 text-slate-600 px-3 py-1.5 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-5 rounded-2xl border dark:border-white/10 dark:bg-white/[0.02] border-slate-200 bg-white/60 p-6">
              <div>
                <div className="mb-3 flex items-center gap-2 dark:text-slate-200 text-slate-800">
                  <Code2 size={18} className="text-accent-cyan" />
                  <span className="font-display text-sm font-semibold uppercase tracking-wider">
                    Core stack
                  </span>
                </div>
                <p className="text-sm leading-relaxed dark:text-slate-400 text-slate-600">
                  React.js, Angular, Next.js, Vue.js, JavaScript, HTML5, CSS3,
                  Material UI, Tailwind CSS, Redux, and Context API.
                </p>
              </div>

              <div className="h-px dark:bg-white/10 bg-slate-200" />

              <div>
                <div className="mb-3 flex items-center gap-2 dark:text-slate-200 text-slate-800">
                  <GraduationCap size={18} className="text-accent-cyan" />
                  <span className="font-display text-sm font-semibold uppercase tracking-wider">
                    Education
                  </span>
                </div>
                <p className="text-sm font-medium dark:text-slate-200 text-slate-800">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm dark:text-slate-400 text-slate-600">
                  {education.institution} · {education.period}
                </p>
              </div>

              <div className="h-px dark:bg-white/10 bg-slate-200" />

              <div>
                <div className="mb-3 flex items-center gap-2 dark:text-slate-200 text-slate-800">
                  <Award size={18} className="text-accent-cyan" />
                  <span className="font-display text-sm font-semibold uppercase tracking-wider">
                    Certifications
                  </span>
                </div>
                <ul className="space-y-2 text-sm dark:text-slate-400 text-slate-600">
                  {certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </div>

              <div className="h-px dark:bg-white/10 bg-slate-200" />

              <div className="flex items-start gap-3">
                <Languages size={18} className="mt-0.5 text-accent-cyan" />
                <div>
                  <p className="text-sm font-semibold dark:text-slate-200 text-slate-800">
                    Languages
                  </p>
                  <p className="mt-1 text-sm dark:text-slate-400 text-slate-600">
                    {languages.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
