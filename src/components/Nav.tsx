"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/blog";
import { cn } from "@/lib/cn";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    navigation.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Основная навигация">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-md border border-amberplus/30 bg-amberplus/[0.15] text-amberplus shadow-glow">
            <span className="h-2.5 w-2.5 rounded-sm bg-amberplus" />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
            ОТК Плюс
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-white/[0.62] transition hover:bg-white/[0.08] hover:text-white",
                active === item.id && "bg-white/10 text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#tools"
          className="hidden rounded-md border border-amberplus/40 bg-amberplus px-4 py-2 text-sm font-semibold text-black shadow-glow transition hover:bg-white md:inline-flex"
        >
          К инструментам
        </a>

        <button
          className="grid size-10 place-items-center rounded-md border border-white/[0.12] bg-white/[0.08] text-white lg:hidden"
          type="button"
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn("border-t border-white/10 bg-graphite-900/95 px-4 py-3 backdrop-blur-2xl lg:hidden", !open && "hidden")}
      >
        <div className="mx-auto grid max-w-7xl gap-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-white/[0.76] transition hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <Icon size={18} className="text-amberplus" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
