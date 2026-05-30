'use client';

import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export default function DynamicIcon({ name, className }: DynamicIconProps) {
  // Pull the component dynamically from Lucide tokens
  const IconComponent = (Icons as any)[name] || Icons.BookOpen;

  return <IconComponent className={className} strokeWidth={1.5} />;
}