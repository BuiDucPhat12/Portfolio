import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <Section id="experience" index="04" eyebrow="Experience" title="Two years across retail, aviation & manufacturing">
      <div className="relative">
        {/* timeline rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/60 via-line-2 to-transparent md:left-[9px]" />
        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06} className="relative pl-8 md:pl-10">
              <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-cyan/50 bg-ink md:h-[18px] md:w-[18px]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              <div className="rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:border-line-2">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-bold text-fg">{job.role}</h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <div className="mt-0.5 text-sm font-medium text-cyan">{job.company} · {job.location}</div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-soft">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
