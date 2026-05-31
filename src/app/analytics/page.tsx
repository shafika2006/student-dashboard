export default function AnalyticsPage() {
  const data = [40, 70, 30, 90, 60, 80, 50];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-4xl font-bold">Analytics</h1>
      <p className="text-zinc-400 mt-2">
        Student performance analytics.
      </p>

      <section className="mt-10 rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
        <h2 className="mb-6 text-xl font-semibold">
          Weekly Activity
        </h2>

        <div className="flex items-end gap-4 h-64">
          {data.map((value, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-500 to-purple-500"
              style={{ height: `${value * 2}px` }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}