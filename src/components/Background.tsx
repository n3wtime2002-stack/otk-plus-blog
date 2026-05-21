export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-graphite-950">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-steel-grid bg-[size:44px_44px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-amberplus/10 to-transparent blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(135deg,transparent_0,transparent_7px,rgba(255,255,255,.7)_8px,transparent_9px)]" />
    </div>
  );
}
