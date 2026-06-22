import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { profile, heroMetrics } from "../data/content.js";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
      <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
        {/* left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Open to Data Analyst / Analytics Engineer roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-7 text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl"
          >
            {profile.name}.
            <span className="mt-2 block text-gradient">{profile.role}.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-soft"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-cyan" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={15} className="text-violet" /> {profile.focus}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#work"
               className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-azure px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
              View selected work
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={`mailto:${profile.email}`}
               className="inline-flex items-center gap-2 rounded-xl border border-line-2 bg-surface/50 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-cyan/50">
              Email me
            </a>
            <div className="flex items-center gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer"
                 className="grid h-11 w-11 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-line-2 hover:text-fg">
                <Github size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"
                 className="grid h-11 w-11 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-line-2 hover:text-fg">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* glow behind */}
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan/30 via-azure/10 to-violet/30 blur-2xl" />
          <div className="relative rounded-[1.6rem] bg-gradient-to-br from-cyan/60 via-line-2 to-violet/60 p-px">
            <div className="overflow-hidden rounded-[1.55rem] bg-surface">
              <img
                src={import.meta.env.BASE_URL + "portrait.png"}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover"
              />
              {/* subtle bottom fade to blend into theme */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
            </div>
          </div>

          {/* floating chip */}
          <div className="glass absolute -bottom-4 -left-4 rounded-2xl border border-line-2 px-4 py-3 shadow-xl sm:-left-6">
            <div className="font-mono text-lg font-semibold text-gradient">SAP → dbt → ML</div>
            <div className="text-[11px] text-muted">end-to-end data pipelines</div>
          </div>
        </motion.div>
      </div>

      {/* metric strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/60 sm:grid-cols-4"
      >
        {heroMetrics.map((m) => (
          <div key={m.label} className="group bg-surface/70 p-5 transition-colors hover:bg-surface-2/70">
            <div className="font-mono text-2xl font-semibold text-gradient sm:text-3xl">{m.value}</div>
            <div className="mt-1 text-sm font-medium text-fg">{m.label}</div>
            <div className="mt-0.5 text-xs leading-snug text-muted">{m.hint}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
