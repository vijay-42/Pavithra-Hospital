"use client";
import { useState } from "react";
import { site } from "@/lib/site";
import { useLang } from "@/lib/lang";

export default function BookingForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) || "").trim();
    const text = t.book.msg(get("name"), get("phone"), get("service"), get("day"), get("note"));
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>{t.book.name}</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label className="field">
        <span>{t.book.phone}</span>
        <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+ ]{10,15}" />
      </label>
      <label className="field">
        <span>{t.book.service}</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>{t.book.servicePick}</option>
          {t.care.items.map((s, i) => (
            <option key={i} value={s.title}>{s.title}</option>
          ))}
          <option value={t.book.other}>{t.book.other}</option>
        </select>
      </label>
      <label className="field">
        <span>{t.book.day}</span>
        <input name="day" type="date" min={today} required />
      </label>
      <label className="field field--wide">
        <span>{t.book.note}</span>
        <textarea name="note" rows={3} />
      </label>
      <div className="form__foot">
        <button type="submit" className="btn btn--accent">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.7-.1 1.2z"/></svg>
          {t.book.submit}
        </button>
        <p className="form__small">{sent ? "✓" : ""} {t.book.small}</p>
      </div>
    </form>
  );
}
