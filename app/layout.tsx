import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, Noto_Serif_Tamil, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], axes: ["opsz"], variable: "--f-serif", display: "swap" });
const sans = Inter_Tight({ subsets: ["latin"], variable: "--f-sans", display: "swap" });
const tamilSans = Noto_Sans_Tamil({ subsets: ["tamil"], weight: ["400", "500", "600"], variable: "--f-tamil-sans", display: "swap" });
const tamil = Noto_Serif_Tamil({ subsets: ["tamil"], weight: ["400", "500"], variable: "--f-tamil", display: "swap" });

export const metadata: Metadata = {
  title: "Pavithra Hospital, Pennagaram · Emergency, Maternity & Family Care",
  description:
    "Pavithra Hospital on Erikarai Road, Pennagaram. Emergency care, maternity, paediatrics, general check-ups, outpatient and nursing services. Call 063831 20033.",
};

export const viewport: Viewport = { themeColor: "#16302a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${tamil.variable} ${tamilSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
