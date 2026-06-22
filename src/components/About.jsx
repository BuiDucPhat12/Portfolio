import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { profile, education, certifications } from "../data/content.js";
import { GraduationCap, Award, Workflow, Database, LineChart } from "lucide-react";

const pillars = [
  { icon: Database, title: "Data Engineering", text: "Source-to-target mappings, ETL, lakehouse, dbt — production-grade pipelines." },
  { icon: Workflow, title: "Analytics Engineering", text: "Tested dbt models, data contracts, lineage — the bridge from raw data to business." },
  { icon: LineChart, title: "Insight → Action", text: "Dashboards, cockpits and forecasting that planners and procurement actually use." },
];

export default function About() {
  return (
    <Section id="about" index="02" eyebrow="About" title="A supply-chain analyst who builds the whole path">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-soft">{profile.intro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-surface/50 p-5">
                <p.icon size={20} className="text-cyan" />
                <div className="mt-3 text-sm font-semibold text-fg">{p.title}</div>
                <div className="mt-1.5 text-xs leading-relaxed text-muted">{p.text}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <div className="rounded-2xl border border-line bg-surface/50 p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
              <GraduationCap size={16} className="text-violet" /> Education
            </div>
            <div className="mt-3 text-sm font-semibold text-fg">{education.degree}</div>
            <div className="mt-1 text-sm text-soft">{education.school}</div>
            <div className="mt-1 font-mono text-xs text-muted">{education.period} · {education.note}</div>
          </div>
          <div className="rounded-2xl border border-line bg-surface/50 p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
              <Award size={16} className="text-violet" /> Certifications
            </div>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c.label} className="text-sm leading-relaxed text-soft">
                  {c.label}
                  {c.items && (
                    <ul className="mt-1.5 space-y-1 border-l border-line pl-3">
                      {c.items.map((it) => (
                        <li key={it.label} className="text-xs text-muted">
                          <a href={it.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan">
                            {it.label} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
