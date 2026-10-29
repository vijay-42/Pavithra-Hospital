"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { useLang } from "@/lib/lang";

export default function Header() {
  const { t, toggle, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#care", label: t.nav.care },
    { href: "#visit", label: t.nav.visit },
    { href: "#book", label: t.nav.book },
    { href: "#faq", label: t.nav.faq },
    { href: "#find", label: t.nav.find },
  ];

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="brand" aria-label={site.name} onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32"><path d="M13 4h6v9h9v6h-9v9h-6v-9H4v-6h9z" /></svg>
          </span>
          <span className="brand__text">
            <strong>{site.name}</strong>
            <em lang="ta">{site.nameTa}</em>
          </span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <button className="lang" onClick={toggle} aria-label="Switch language" lang={lang === "en" ? "ta" : "en"}>
          {t.langLabel}
        </button>
        <a href={site.phoneHref} className="btn btn--dark nav__cta">{t.nav.call}</a>
        <button
          className="nav__toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
      <div className="nav__drawer">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href={site.phoneHref} className="btn btn--accent">{t.nav.call} · {site.phoneDisplay}</a>
      </div>
    </header>
  );
}
