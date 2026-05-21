import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/blog";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-3xl font-semibold text-white">Контроль со знаком “Плюс”</p>
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {navigation.slice(1).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-white/[0.62] transition hover:border-amberplus/40 hover:text-white"
            >
              {item.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
