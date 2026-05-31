export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-4xl font-bold">Settings</h1>
      <p className="text-zinc-400 mt-2">
        User preferences and account settings.
      </p>

      <section className="grid gap-6 mt-8 md:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
          <h2 className="font-semibold">Theme</h2>
          <p className="text-zinc-400 mt-2">Dark Mode</p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
          <h2 className="font-semibold">Notifications</h2>
          <p className="text-zinc-400 mt-2">Enabled</p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
          <h2 className="font-semibold">Account</h2>
          <p className="text-zinc-400 mt-2">Student Demo</p>
        </article>
      </section>
    </main>
  );
}