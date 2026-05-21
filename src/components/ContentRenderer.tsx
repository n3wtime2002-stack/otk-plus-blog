import type { ContentBlock } from "@/data/blog";
import { MagneticCard, Reveal } from "@/components/Motion";
import { SmartImage } from "@/components/SmartImage";
import { cn } from "@/lib/cn";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-7">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <Reveal key={`${block.type}-${index}`}>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{block.text}</h3>
            </Reveal>
          );
        }

        if (block.type === "paragraph") {
          return (
            <Reveal key={`${block.type}-${index}`}>
              <p
                className={cn(
                  "max-w-3xl whitespace-pre-line text-lg leading-8 text-white/[0.72]",
                  block.accent &&
                    "rounded-lg border border-amberplus/25 bg-amberplus/10 p-5 text-white shadow-glow"
                )}
              >
                {block.text}
              </p>
            </Reveal>
          );
        }

        if (block.type === "quote") {
          return (
            <Reveal key={`${block.type}-${index}`}>
              <blockquote className="relative max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-soft backdrop-blur-2xl">
                <div className="absolute left-0 top-0 h-full w-1 bg-amberplus" />
                <p className="whitespace-pre-line font-display text-xl font-medium leading-8 text-white sm:text-2xl">
                  {block.text}
                </p>
              </blockquote>
            </Reveal>
          );
        }

        if (block.type === "list") {
          return (
            <Reveal key={`${block.type}-${index}`}>
              <ul className="grid gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4 text-white/75 backdrop-blur-xl">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amberplus shadow-glow" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        }

        if (block.type === "numbered") {
          return (
            <Reveal key={`${block.type}-${index}`}>
              <ol className="grid gap-3">
                {block.items.map((item, itemIndex) => (
                  <li key={item} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 text-white/75 backdrop-blur-xl">
                    <span className="grid size-8 shrink-0 place-items-center rounded-md bg-amberplus text-sm font-bold text-black">
                      {itemIndex + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          );
        }

        if (block.type === "industryGrid") {
          return (
            <div key={`${block.type}-${index}`} className="grid gap-5 md:grid-cols-2">
              {block.items.map((item, itemIndex) => (
                <Reveal key={item.title} delay={itemIndex * 0.04}>
                  <MagneticCard className="group h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-soft backdrop-blur-2xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SmartImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>
                    <div className="space-y-4 p-5">
                      <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="whitespace-pre-line leading-7 text-white/70">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </MagneticCard>
                </Reveal>
              ))}
            </div>
          );
        }

        if (block.type === "toolGrid") {
          return (
            <div key={`${block.type}-${index}`} className="grid gap-5">
              {block.items.map((item, itemIndex) => (
                <Reveal key={item.title} delay={itemIndex * 0.05}>
                  <MagneticCard className="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-soft backdrop-blur-2xl lg:grid-cols-[0.82fr_1.18fr]">
                    <div className="relative min-h-72 overflow-hidden">
                      <SmartImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        className="object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="space-y-5 p-5 sm:p-7">
                      <h3 className="font-display text-3xl font-semibold text-white">{item.title}</h3>
                      <ContentRenderer blocks={item.body} />
                    </div>
                  </MagneticCard>
                </Reveal>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
