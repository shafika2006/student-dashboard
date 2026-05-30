'use client';

import { motion } from 'framer-motion';
import { Course } from '../types/course';
import CourseCard from './CourseCard';
import * as Icons from 'lucide-react';

interface BentoGridProps {
  courses: Course[];
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
      
      {/* Hero Welcome Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:col-span-2 flex flex-col justify-between group"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px]" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 md:text-4xl">
            Welcome back, Student
          </h1>
          <p className="text-zinc-400 text-sm max-w-md">
            Your custom workspace telemetry is responsive. Ready to continue your active learning paths?
          </p>
        </div>

        <div className="flex items-center gap-4 mt-8 bg-white/5 border border-white/5 rounded-2xl p-4 w-fit">
          <Icons.Flame className="h-6 w-6 text-orange-500 fill-orange-500/10" />
          <div>
            <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Telemetry Metric</div>
            <div className="text-base font-bold text-zinc-200">14 Day Streak</div>
          </div>
        </div>
      </motion.section>

      {/* Activity Analytics Tile */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.4 }}
        className="rounded-3xl border border-white/10 bg-zinc-900/30 p-6 backdrop-blur-xl flex flex-col justify-between lg:col-span-1 md:col-span-2"
      >
        <div>
          <h4 className="text-zinc-400 text-sm font-medium mb-6 flex items-center gap-2">
            <Icons.Activity className="h-4 w-4 text-emerald-400" />
            Compilation Metrics
          </h4>
          <div className="flex items-end gap-2 h-24 pt-2">
            {[45, 85, 60, 100, 30, 75, 90].map((val, idx) => (
              <div key={idx} className="flex-1 bg-zinc-800/40 rounded-t-lg h-full flex items-end overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-[10px] text-zinc-500 font-mono mt-6">
          System Status: Stable
        </div>
      </motion.section>

      {/* Isolated Map Row wrapper to prevent double grids */}
      <>
        {courses && courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index + 1} />
        ))}
      </>

    </div>
  );
}