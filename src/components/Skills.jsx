import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { skillGroups } from "../data/content.js";

export default function Skills() {
  return (
    <Section id="skills" index="03" eyebrow="Toolbox" title="What I work with">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06} className="rounded-2xl border border-line bg-surface/50 p-6">
            <h3 className="font-mono text-sm font-semibold text-cyan">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-lg border border-line bg-ink/40 px-3 py-1.5 text-sm text-soft transition-colors hover:border-line-2 hover:text-fg">
                  {it}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
