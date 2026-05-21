import { ArrowDown, ChevronRight } from "lucide-react";
import { hero, heroImage } from "@/data/blog";
import { Reveal } from "@/components/Motion";
import { SmartImage } from "@/components/SmartImage";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
              {hero.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl font-display text-2xl leading-9 text-amberplus sm:text-3xl">
              {hero.slogan}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-white/[0.72]">
              {hero.intro.map((paragraph) => (
                <p key={paragraph} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#where"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-amberplus px-6 py-3 font-semibold text-black shadow-glow transition hover:bg-white"
              >
                Начать читать
                <ChevronRight size={18} />
              </a>
              <a
                href="#defects"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.06] px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Топ причин брака
                <ArrowDown size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-soft backdrop-blur-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <SmartImage
                src={heroImage}
                alt="Анна, автор блога «Контроль со знаком “Плюс”»"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
