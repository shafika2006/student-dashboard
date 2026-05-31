import { supabase } from "../../lib/supabase";
import { Course } from "../../types/course";
import CourseCard from "../../components/CourseCard";

export default async function CoursesPage() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-2">Courses</h1>
      <p className="text-zinc-400 mb-8">
        All active courses from Supabase.
      </p>

      {error && (
        <div className="text-red-500">
          Failed to load courses.
        </div>
      )}

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {(courses as Course[] | null)?.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}