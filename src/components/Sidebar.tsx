import { BookImage, ClipboardCheck, FlaskConical } from "lucide-react";
import { publicAsset } from "@/lib/site";

const materials = [
  {
    label: "Лабораторная",
    href: publicAsset("/materials/laboratory.png"),
    icon: FlaskConical
  },
  {
    label: "Тестирование",
    href: "https://forms.gle/sFUiv6xRU87n4wyH7",
    icon: ClipboardCheck
  },
  {
    label: "Комикс",
    href: publicAsset("/materials/comic.jpg"),
    icon: BookImage
  }
];

export function Sidebar() {
  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-64 shrink-0 lg:block">
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3 shadow-soft backdrop-blur-2xl">
        <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Материалы</p>
        <nav className="grid gap-1" aria-label="Материалы блога">
          {materials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-md px-3 py-3 text-sm text-white/[0.65] transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={18} className="text-white/[0.35] transition group-hover:text-amberplus" />
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
