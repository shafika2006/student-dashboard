'use client';

import { motion } from 'framer-motion';
import { Course } from '../types/course';
import DynamicIcon from './DynamicIcon';

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 25px rgba(59, 130, 246, 0.2)"
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-xl group cursor-pointer transition-colors duration-300 hover:border-blue-500/30"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/5 opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="flex items-start justify-between mb-4">
        <div className="rounded-2xl bg-zinc-800 p-3 text-blue-400 group-hover:text-blue-300 transition-colors">
          <DynamicIcon name={course.icon_name || 'BookOpen'} className="h-6 w-6" />
        </div>
        <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded-md">
          {course.progress || 0}%
        </span>
      </div>

      <h3 className="text-base font-medium text-zinc-200 tracking-tight mb-6">
        {course.title}
      </h3>

      <div className="w-full h-1.5 bg-zinc-800/60 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${course.progress || 0}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>
    </motion.article>
  );
}