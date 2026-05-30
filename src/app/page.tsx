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
    console.error("Supabase Connection Error:", error);
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