export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row">
      <div className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-white/5 bg-zinc-950 md:sticky md:top-0 md:h-screen md:w-20 lg:w-64" />
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full overflow-x-hidden">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          <div className="h-60 rounded-3xl bg-zinc-900/40 border border-white/5 p-8 md:col-span-2 animate-pulse" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-52 rounded-3xl bg-zinc-900/40 border border-white/5 p-6 animate-pulse" />
          ))}
          <div className="h-52 rounded-3xl bg-zinc-900/40 border border-white/5 p-6 lg:col-span-1 md:col-span-2 animate-pulse" />
        </div>
      </main>
    </div>
  );
}