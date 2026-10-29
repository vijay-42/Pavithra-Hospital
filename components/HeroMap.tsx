"use client";
import { useLang } from "@/lib/lang";

// Hand-drawn style map of the hospital's surroundings. Illustrative, not to scale.
export default function HeroMap() {
  const { t, lang } = useLang();
  return (
    <svg className="heromap" viewBox="0 0 600 720" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${t.map.hospital}, ${t.map.road}, ${t.map.town}`}>
      <defs>
        <pattern id="grain" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="rgba(244,241,234,0.05)" />
        </pattern>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c2552c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c2552c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="720" fill="#16302a" />
      <rect width="600" height="720" fill="url(#grain)" />

      {/* Hill contours */}
      <g fill="none" stroke="rgba(169,191,179,0.13)" strokeWidth="1">
        <path d="M-20 120 C 90 60, 180 140, 300 90 S 520 40, 640 110" />
        <path d="M-20 150 C 100 95, 190 170, 300 125 S 520 80, 640 145" />
        <path d="M-20 180 C 110 130, 200 200, 300 160 S 520 120, 640 180" />
        <path d="M-20 600 C 120 560, 220 650, 360 600 S 540 560, 640 610" />
        <path d="M-20 635 C 130 595, 230 685, 360 635 S 540 600, 640 645" />
        <path d="M-20 670 C 140 630, 240 720, 360 670 S 540 640, 640 680" />
        <path d="M460 260 c 40 -20 100 -5 110 35 s -40 70 -90 60 s -60 -75 -20 -95z" />
        <path d="M470 275 c 30 -12 75 0 82 28 s -30 50 -66 43 s -44 -55 -16 -71z" />
      </g>

      {/* Minor streets */}
      <g fill="none" stroke="rgba(169,191,179,0.18)" strokeWidth="1.2" strokeLinecap="round">
        <path d="M150 250 L 190 470" />
        <path d="M210 240 L 250 330 L 240 470" />
        <path d="M330 250 L 345 340" />
        <path d="M120 330 L 270 315" />
        <path d="M380 420 L 470 500" />
        <path d="M200 420 L 330 410" />
        <path d="M420 300 L 400 400" />
      </g>

      {/* Main road: Hogenakkal ↔ Dharmapuri */}
      <path d="M-10 455 C 120 440, 200 390, 300 385 S 470 420, 610 360" fill="none" stroke="rgba(244,241,234,0.08)" strokeWidth="18" strokeLinecap="round" />
      <path d="M-10 455 C 120 440, 200 390, 300 385 S 470 420, 610 360" fill="none" stroke="rgba(244,241,234,0.55)" strokeWidth="2" strokeLinecap="round" />

      {/* Erikarai Road */}
      <path className="heromap__route" d="M300 385 C 305 330, 290 290, 312 230 S 360 170, 352 120" fill="none" stroke="#e4a84a" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 7" />

      {/* Labels */}
      <g fill="rgba(244,241,234,0.62)" fontFamily="var(--f-sans), var(--f-tamil-sans), sans-serif" fontSize="13" letterSpacing="0.5">
        <text x="24" y="485">← {t.map.west}</text>
        <text x="576" y="345" textAnchor="end">{t.map.east} →</text>
        <text x="316" y="345" fill="#e4a84a">{t.map.road}</text>
      </g>
      <text x="40" y="70" fill="rgba(244,241,234,0.4)" fontFamily="var(--f-sans), var(--f-tamil-sans), sans-serif" fontSize="12" letterSpacing={lang === "en" ? 4 : 0}>
        {lang === "en" ? t.map.town.toUpperCase() : t.map.town} · 636810
      </text>

      {/* Hospital pin */}
      <g transform="translate(312 262)">
        <circle r="70" fill="url(#glow)" />
        <circle className="heromap__pulse" r="16" fill="none" stroke="#c2552c" strokeWidth="1.5" />
        <circle r="11" fill="#c2552c" />
        <path d="M-1.6 -6h3.2v4.4h4.4v3.2h-4.4v4.4h-3.2v-4.4h-4.4v-3.2h4.4z" fill="#fff" />
        <g transform="translate(22 -14)">
          <rect width={t.map.hospital.length > 18 ? 190 : 150} height="30" rx="15" fill="#f4f1ea" />
          <text x="14" y="20" fill="#14201c" fontFamily="var(--f-sans), var(--f-tamil-sans), sans-serif" fontSize="13" fontWeight="600">
            {t.map.hospital}
          </text>
        </g>
      </g>
    </svg>
  );
}
