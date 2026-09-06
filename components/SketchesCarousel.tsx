'use client'

import React from 'react'
import Link from 'next/link'
import { Marquee } from '@/components/magicui/marquee'

interface SketchItem {
  id: string
  title: string
  src: string
}

const sketches: SketchItem[] = [
  { id: '1', title: 'Sketch 1', src: '/sketch/s5.webp' },
  { id: '2', title: 'Sketch 2', src: '/sketch/s2.webp' },
  { id: '3', title: 'Sketch 3', src: '/sketch/s9.webp' },
  { id: '4', title: 'Sketch 4', src: '/sketch/s1.webp' },
  { id: '5', title: 'Sketch 5', src: '/sketch/s7.webp' },
  { id: '6', title: 'Sketch 6', src: '/sketch/s10.webp' },
  { id: '7', title: 'Sketch 7', src: '/sketch/s3.webp' },
  { id: '8', title: 'Sketch 8', src: '/sketch/s6.webp' },
  { id: '9', title: 'Sketch 9', src: '/sketch/s8.webp' },
  { id: '10', title: 'Sketch 10', src: '/sketch/s4.webp' },
]

const firstRow = sketches.slice(0, 5)
const secondRow = sketches.slice(5, 10)

function SketchCard({ item }: { item: SketchItem }) {
  return (
    <div className="w-48 sm:w-60 md:w-68 aspect-[16/10] shrink-0 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl bg-neutral-200/70 dark:bg-neutral-900/60 overflow-hidden relative group transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-2xs">
      {/* Gray placeholder fallback with subtle label */}
      <div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-600 select-none">
        <span className="text-[11px] font-mono tracking-wider">{item.title}</span>
      </div>

      {/* Image (Loads automatically when present) */}
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
        className="w-full h-full object-cover relative z-10 transition-all duration-500 scale-[1.01] group-hover:scale-105"
      />
    </div>
  )
}

export default function SketchesCarousel() {
  return (
    <div className="w-full flex flex-col py-2">
      {/* Header bar with icon and link to full favourite page */}
      <div className="w-full flex items-center justify-between py-2.5 border-y border-dashed border-neutral-300 dark:border-neutral-800 mb-5 font-mono uppercase text-xs">
        <div className="flex items-center gap-2 font-semibold tracking-wider text-neutral-500 dark:text-neutral-400">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-base shrink-0"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="m18.85 10.39 1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06zm-5.66-2.83L4 16.76V21h4.24l9.19-9.19zM19 17.5c0 2.19-2.54 3.5-5 3.5-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5 0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68M4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1-1.26 0-1.8.61-1.83.64-.35.41-.98.46-1.4.12a.99.99 0 0 1-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86z" />
          </svg>
          Sketches
        </div>
        <Link
          href="/favourite"
          className="flex items-center gap-1 text-neutral-500 hover:text-foreground transition-colors group lowercase text-[11px] sm:text-xs font-mono"
        >
          view all
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>

      {/* Row-wise Moving Animated Marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-3 py-1">
        {/* Row 1 - Left to Right (Reverse direction) */}
        <Marquee reverse pauseOnHover className="[--duration:28s] [--gap:0.75rem]">
          {firstRow.map((item) => (
            <SketchCard key={item.id} item={item} />
          ))}
        </Marquee>

        {/* Row 2 - Right to Left (Opposite of first) */}
        <Marquee pauseOnHover className="[--duration:28s] [--gap:0.75rem]">
          {secondRow.map((item) => (
            <SketchCard key={item.id} item={item} />
          ))}
        </Marquee>

        {/* Left & right gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-20" />
      </div>
    </div>
  )
}
