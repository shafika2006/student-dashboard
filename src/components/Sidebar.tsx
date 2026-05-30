'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const navItems = [
  { id: 'dash', label: 'Dashboard', icon: Icons.LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: Icons.BookOpen },
  { id: 'analytics', label: 'Analytics', icon: Icons.BarChart3 },
  { id: 'settings', label: 'Settings', icon: Icons.Settings },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dash');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 border-t border-white/10 bg-zinc-950/80 backdrop-blur-lg px-4 md:sticky md:top-0 md:h-screen md:w-20 md:flex-col md:border-r md:border-t-0 md:p-4 lg:w-64 lg:p-6">
      {/* Brand Header */}
      <div className="hidden items-center gap-3 mb-8 md:flex lg:px-2">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        <span className="font-bold tracking-wider text-white uppercase text-xs font-mono hidden lg:block">Aether Lab</span>
      </div>

      {/* Navigation Deck */}
      <ul className="flex w-full items-center justify-around gap-1 md:flex-col md:justify-start md:gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <li key={item.id} className="relative w-full">
              <button
                onClick={() => setActiveTab(item.id)}
                className={`relative flex w-full flex-col items-center justify-center py-2 text-[10px] font-medium transition-colors md:h-12 md:rounded-xl lg:flex-row lg:justify-start lg:gap-4 lg:px-4 lg:text-sm ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-glow"
                    className="absolute inset-0 -z-10 bg-zinc-900 border border-white/5 rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
                <Icon className="h-5 w-5" strokeWidth={1.5} />
                <span className="mt-0.5 md:hidden lg:block lg:mt-0">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}