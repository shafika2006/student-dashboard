import { supabase } from "../lib/supabase";
import { Course } from "../types/course";
import Sidebar from "../components/Sidebar";
import BentoGrid from "../components/BentoGrid";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <article className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
          <h2 className="text-red-400 text-xl font-semibold">
            Unable to load courses
          </h2>
          <p className="mt-2 text-zinc-400">
            Please try again later.
          </p>
        </article>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full overflow-x-hidden">
        <BentoGrid courses={(courses as Course[]) || []} />
      </main>
    </div>
  );
}