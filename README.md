Aether Student Terminal

A futuristic, animated Student Dashboard built with Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

Features

- Dark Mode Bento Grid Dashboard
- Responsive Sidebar Navigation
- Dynamic Course Cards
- Animated Progress Bars
- Framer Motion Micro-interactions
- Activity Analytics Section
- Loading Skeletons
- Mobile, Tablet, and Desktop Responsive Layout
- Supabase Integration
- Dynamic Lucide Icons

Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Lucide React

Architecture

Server Components

Course data is fetched from Supabase using Next.js Server Components to reduce client-side JavaScript and improve performance.

Client Components

Interactive UI elements such as:

- Sidebar Navigation
- Course Card Animations
- Progress Bar Animations
- Hover Effects

are implemented as Client Components using Framer Motion.

Loading States

A custom loading.tsx file provides animated skeleton placeholders while data is loading.

Responsive Design

Desktop (>1024px)

- Full sidebar visible
- 3-column Bento layout

Tablet (768px–1024px)

- Sidebar collapses to icons only
- 2-column Bento layout

Mobile (<768px)

- Bottom navigation
- Single-column layout

Environment Variables

Create a ".env.local" file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Installation

npm install
npm run dev

Deployment

The application is deployed using Vercel.

Challenges Faced

- Maintaining zero layout shifts during animations
- Creating reusable Bento Grid components
- Dynamically rendering Lucide icons from database values
- Building responsive navigation for all screen sizes

Author

Akeel