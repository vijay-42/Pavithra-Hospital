"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { useLang } from "@/lib/lang";

const toMin = (s: string) => s.split(":").map(Number).reduce((h, m) => h * 60 + m);
const parts = (s: string) => s.split(":").map(Number) as [number, number];

export default function OpenStatus({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    // Always use India time, wherever the visitor is.
    const tick = () => {
      const d = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      setNow(d.getHours() * 60 + d.getMinutes());
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  const openT = t.status.time(...parts(site.hours.open));
  const closeT = t.status.time(...parts(site.hours.close));
  const open = toMin(site.hours.open);
  const close = toMin(site.hours.close);

  let state = "";
  let text = t.status.fallback(closeT);
  if (now !== null) {
    if (now >= open && now < close) {
      state = "is-open";
      text = close - now <= 60 ? t.status.soon(closeT) : t.status.open(closeT);
    } else {
      state = "is-closed";
      text = t.status.closed(openT);
    }
  }

  return (
    <span className={`status ${state} ${className}`}>
      <i className="dot" />
      {text}
    </span>
  );
}
