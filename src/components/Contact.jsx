import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/content.js";

export default function Contact() {
  return (
    <footer id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/60 p-8 ring-glow sm:p-14">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan/15 blur-[100px]" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet/15 blur-[100px]" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Contact</span>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Let's build something that <span className="text-gradient">ships</span>.
            </h2>
            <p className="mt-4 max-w-xl text-soft">
              I'm open to Data Analyst and Analytics Engineer roles. The fastest way to reach me is email — I reply quickly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`}
                 className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-azure px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
                <Mail size={17} /> {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer"
                 className="group inline-flex items-center gap-2 rounded-xl border border-line-2 bg-ink/40 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-cyan/50">
                <Github size={17} /> GitHub
                <ArrowUpRight size={14} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"
                 className="group inline-flex items-center gap-2 rounded-xl border border-line-2 bg-ink/40 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-cyan/50">
                <Linkedin size={17} /> LinkedIn
                <ArrowUpRight size={14} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={`tel:${profile.phone}`}
                 className="inline-flex items-center gap-2 rounded-xl border border-line-2 bg-ink/40 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-cyan/50">
                <Phone size={17} /> {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
        <span className="font-mono">© {profile.name} — built with React, Vite & Tailwind</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
