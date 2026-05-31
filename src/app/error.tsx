'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white">
      <h2 className="text-3xl font-bold mb-4">
        Something went wrong
      </h2>

      <p className="text-zinc-400 mb-6">
        Failed to load data from Supabase.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-xl bg-blue-600 px-4 py-2 hover:bg-blue-500"
      >
        Try Again
      </button>
    </main>
  );
}