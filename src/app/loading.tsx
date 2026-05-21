export default function Loading() {
  return (
    <main className="min-h-screen bg-graphite-950 px-4 pt-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="h-10 w-2/3 max-w-xl animate-pulse rounded-md bg-white/10" />
        <div className="mt-6 h-5 w-full max-w-2xl animate-pulse rounded-md bg-white/[0.07]" />
        <div className="mt-3 h-5 w-5/6 max-w-xl animate-pulse rounded-md bg-white/[0.07]" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="h-72 animate-pulse rounded-lg border border-white/10 bg-white/[0.045]" />
          <div className="h-72 animate-pulse rounded-lg border border-white/10 bg-white/[0.045]" />
        </div>
      </div>
    </main>
  );
}
