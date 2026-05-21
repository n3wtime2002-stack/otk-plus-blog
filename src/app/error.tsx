"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-graphite-950 px-4 text-center text-white">
      <div className="max-w-md">
        <h1 className="font-display text-4xl font-semibold">Что-то пошло не так</h1>
        <button
          type="button"
          className="mt-6 rounded-md bg-amberplus px-5 py-3 font-semibold text-black transition hover:bg-white"
          onClick={reset}
        >
          Повторить
        </button>
      </div>
    </main>
  );
}
