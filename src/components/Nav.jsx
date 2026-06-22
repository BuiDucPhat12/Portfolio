import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { nav, profile } from "../data/content.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-line/80" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan to-violet font-mono text-sm font-bold text-ink shadow-lg shadow-cyan/20">
            P
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-soft transition-colors group-hover:text-fg">
            buiducphat<span className="text-cyan">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-lg px-3.5 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href={profile.github} target="_blank" rel="noreferrer"
             className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-2 hover:text-fg">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
             className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-2 hover:text-fg">
            <Linkedin size={17} />
          </a>
          <a href="#contact"
             className="rounded-lg bg-fg px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
            Get in touch
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-line text-fg md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-line px-5 py-3 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-soft hover:bg-white/5 hover:text-fg"
            >
              {n.label}
            </a>
          ))}
          <div className="mt-2 flex gap-2 px-1">
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex-1 rounded-lg border border-line py-2 text-center text-sm text-soft">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex-1 rounded-lg border border-line py-2 text-center text-sm text-soft">LinkedIn</a>
          </div>
        </div>
      )}
    </header>
  );
}
