import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/content.js";

function StackPills({ stack }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((s) => (
        <span key={s} className="rounded-md border border-line bg-ink/40 px-2 py-0.5 font-mono text-[11px] text-soft">
          {s}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({ p }) {
  const [active, setActive] = useState(0);
  return (
    <Reveal className="group overflow-hidden rounded-3xl border border-line bg-surface/50 ring-glow">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* gallery */}
        <div className="relative order-1 border-b border-line bg-ink/50 p-4 lg:order-none lg:border-b-0 lg:border-r">
          <div className="overflow-hidden rounded-xl border border-line">
            <img
              key={p.gallery[active].src}
              src={p.gallery[active].src}
              alt={p.gallery[active].caption}
              className="aspect-[16/10] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <p className="mt-2.5 px-1 text-xs text-muted">{p.gallery[active].caption}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.gallery.map((g, i) => (
              <button
                key={g.src}
                onClick={() => setActive(i)}
                className={`h-12 w-16 overflow-hidden rounded-md border transition-all ${
                  i === active ? "border-cyan ring-1 ring-cyan/50" : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                <img src={g.src} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="rounded-full bg-cyan/15 px-2.5 py-1 font-semibold text-cyan">Featured</span>
            <span className="text-muted">{p.kicker} · {p.year}</span>
          </div>
          <h3 className="mt-4 text-3xl font-bold tracking-tight">{p.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-soft">{p.blurb}</p>

          <ul className="mt-5 space-y-2.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-soft">
                <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-4 gap-px overflow-hidden rounded-xl border border-line bg-line/60">
            {p.metrics.map((m) => (
              <div key={m.label} className="bg-surface/80 p-3 text-center">
                <div className="font-mono text-lg font-semibold text-fg">{m.value}</div>
                <div className="mt-0.5 text-[11px] leading-tight text-muted">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6"><StackPills stack={p.stack} /></div>

          <div className="mt-6 flex flex-wrap gap-3">
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                 className="group/btn inline-flex items-center gap-1.5 rounded-lg border border-line-2 bg-ink/40 px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-cyan/50">
                {l.label}
                <ArrowUpRight size={15} className="text-muted transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ p, delay }) {
  return (
    <Reveal delay={delay} className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:-translate-y-1 hover:border-line-2">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-medium text-muted">{p.kicker} · {p.year}</div>
          <h3 className="mt-1.5 text-xl font-bold tracking-tight">{p.name}</h3>
        </div>
        {p.links[0] && (
          <a href={p.links[0].href} target="_blank" rel="noreferrer"
             className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-cyan/50 hover:text-cyan">
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-soft">{p.blurb}</p>
      <ul className="mt-4 space-y-2">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-[13px] leading-relaxed text-muted">
            <Check size={14} className="mt-0.5 shrink-0 text-cyan/80" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        {p.metrics.length > 0 && (
          <div className="mb-4 flex gap-4">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-mono text-base font-semibold text-gradient">{m.value}</div>
                <div className="text-[11px] text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        )}
        <StackPills stack={p.stack} />
      </div>
    </Reveal>
  );
}

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="work" index="01" eyebrow="Selected Work" title="Pipelines and products, not just dashboards">
      <div className="space-y-6">
        {featured.map((p) => (
          <FeaturedProject key={p.id} p={p} />
        ))}
      </div>
      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} p={p} delay={i * 0.08} />
          ))}
        </div>
      )}
    </Section>
  );
}
