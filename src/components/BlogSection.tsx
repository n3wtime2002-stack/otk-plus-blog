import type { BlogSection as BlogSectionType } from "@/data/blog";
import { ContentRenderer } from "@/components/ContentRenderer";
import { Reveal } from "@/components/Motion";
import { SmartImage } from "@/components/SmartImage";

export function BlogSection({ section }: { section: BlogSectionType }) {
  const Icon = section.icon;

  return (
    <section id={section.id} className="scroll-mt-24 py-12 sm:py-16">
      <Reveal>
        <div className="mb-8 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-soft backdrop-blur-2xl">
          <div className="grid lg:grid-cols-[1fr_0.62fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-amberplus/25 bg-amberplus/10 px-3 py-2 text-sm text-amberplus">
                <Icon size={18} />
                {section.eyebrow}
              </div>
              <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {section.title}
              </h2>
            </div>
            {section.image ? (
              <div className="relative min-h-72 overflow-hidden lg:min-h-full">
                <SmartImage src={section.image} alt={section.title} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-graphite-900/80" />
              </div>
            ) : (
              <div className="relative hidden overflow-hidden lg:block">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,174,54,0.22),transparent_35%),repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_14px)]" />
                <div className="absolute bottom-8 right-8 grid size-28 place-items-center rounded-lg border border-amberplus/25 bg-black/[0.35] text-amberplus shadow-glow backdrop-blur-xl">
                  <Icon size={48} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      <ContentRenderer blocks={section.blocks} />
    </section>
  );
}
