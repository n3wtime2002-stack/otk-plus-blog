import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Контроль со знаком “Плюс” | Блог контролёра ОТК",
    template: "%s | Контроль со знаком “Плюс”"
  },
  description:
    "Современный блог на русском языке о профессии контролёра ОТК: где нужен ОТК, техника безопасности, инструменты, чтение чертежей и причины брака.",
  keywords: [
    "ОТК",
    "контролёр ОТК",
    "контроль качества",
    "техника безопасности",
    "штангенциркуль",
    "микрометр",
    "чертежи",
    "производственный брак"
  ],
  authors: [{ name: "Анна" }],
  creator: "Анна",
  twitter: {
    card: "summary_large_image",
    title: "Контроль со знаком “Плюс”",
    description: "Блог женщины-контролёра ОТК с 20-летним опытом работы."
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Контроль со знаком “Плюс”",
    description: "Не пропустить брак — значит, создать будущее.",
    siteName: "Контроль со знаком “Плюс”",
    images: [
      {
        url: `${siteUrl}/images/anna-portrait.jpg`,
        width: 1123,
        height: 1301,
        alt: "Анна, автор блога «Контроль со знаком “Плюс”»"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070707"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <a
          href="#content"
          className="sr-only z-[60] rounded-md bg-amberplus px-4 py-3 font-semibold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Перейти к содержанию
        </a>
        <Background />
        <Nav />
        {children}
      </body>
    </html>
  );
}
