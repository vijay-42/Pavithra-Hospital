"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { dict, type Dict, type Lang } from "./content";

const Ctx = createContext<{ lang: Lang; t: Dict; toggle: () => void }>({
  lang: "en",
  t: dict.en,
  toggle: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    const saved = fromUrl || localStorage.getItem("lang");
    if (saved === "ta" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, t: dict[lang], toggle: () => setLang((l) => (l === "en" ? "ta" : "en")) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
