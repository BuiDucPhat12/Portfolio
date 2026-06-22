import Reveal from "./Reveal.jsx";

// Consistent section wrapper with an eyebrow + heading.
export default function Section({ id, index, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <Reveal>
        <div className="flex items-center gap-3">
          {index && <span className="font-mono text-sm text-cyan">{index}</span>}
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{eyebrow}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-line-2 to-transparent" />
        </div>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
