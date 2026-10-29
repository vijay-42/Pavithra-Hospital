"use client";
import { useEffect } from "react";

// Fades elements with the .reveal class in as they scroll into view.
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    document.documentElement.classList.add("js");
    return () => io.disconnect();
  }, []);
  return null;
}
