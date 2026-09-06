'use client'

import React, { useState } from 'react'

interface SketchItem {
  id: string
  title: string
  src: string
  gridClass: string
}

const sketches: SketchItem[] = [
  // Left Column - Top
  {
    id: '1',
    title: 'Sketch 1',
    src: '/sketch/s5.webp',
    gridClass: 'col-span-1 md:col-start-1 md:row-start-1 md:row-span-2 aspect-[4/5] md:aspect-auto',
  },
  // Left Column - Bottom
  {
    id: '2',
    title: 'Sketch 2',
    src: '/sketch/s2.webp',
    gridClass: 'col-span-1 md:col-start-1 md:row-start-3 md:row-span-2 aspect-[4/5] md:aspect-auto',
  },
  // Center - Top Left
  {
    id: '3',
    title: 'Sketch 3',
    src: '/sketch/s9.webp',
    gridClass: 'col-span-1 md:col-start-2 md:row-start-1 md:row-span-1 aspect-[4/3] md:aspect-auto',
  },
  // Center - Top Right
  {
    id: '4',
    title: 'Sketch 4',
    src: '/sketch/s1.webp',
    gridClass: 'col-span-1 md:col-start-3 md:row-start-1 md:row-span-1 aspect-[4/3] md:aspect-auto',
  },
  // Center - Hero Landscape Middle
  {
    id: '5',
    title: 'Sketch 5',
    src: '/sketch/s7.webp',
    gridClass: 'col-span-2 md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2 aspect-[16/9] md:aspect-auto',
  },
  // Center - Bottom Left
  {
    id: '6',
    title: 'Sketch 6',
    src: '/sketch/s10.webp',
    gridClass: 'col-span-1 md:col-start-2 md:row-start-4 md:row-span-1 aspect-[4/3] md:aspect-auto',
  },
  // Center - Bottom Right
  {
    id: '7',
    title: 'Sketch 7',
    src: '/sketch/s3.webp',
    gridClass: 'col-span-1 md:col-start-3 md:row-start-4 md:row-span-1 aspect-[4/3] md:aspect-auto',
  },
  // Right Column - Top
  {
    id: '8',
    title: 'Sketch 8',
    src: '/sketch/s6.webp',
    gridClass: 'col-span-1 md:col-start-4 md:row-start-1 md:row-span-2 aspect-[4/5] md:aspect-auto',
  },
  // Right Column - Bottom
  {
    id: '9',
    title: 'Sketch 9',
    src: '/sketch/s8.webp',
    gridClass: 'col-span-1 md:col-start-4 md:row-start-3 md:row-span-2 aspect-[4/5] md:aspect-auto',
  },
]

export default function SketchesGallery() {
  const [activeImage, setActiveImage] = useState<SketchItem | null>(null)

  return (
    <div className="w-full flex flex-col py-2">
      {/* Header bar with icon */}
      <div className="w-full flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 py-2.5 border-y border-dashed border-neutral-300 dark:border-neutral-800 mb-5 font-mono uppercase">
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

      {/* Collage Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-2.5 sm:gap-3 md:h-[460px] lg:h-[500px] w-full">
        {sketches.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className={`w-full h-full border border-dashed border-neutral-300 dark:border-neutral-800 rounded-lg bg-neutral-200/80 dark:bg-neutral-900/60 overflow-hidden relative group cursor-pointer transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700 shadow-2xs ${item.gridClass}`}
          >
            {/* Gray placeholder fallback with subtle label */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-600 select-none">
              <span className="text-[11px] font-mono tracking-wider">{item.title}</span>
            </div>

            {/* Image (Loads automatically when file is added) */}
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
        ))}
      </div>

      {/* Lightbox preview on click */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full aspect-[16/10] rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-2xl flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-mono text-sm">
              {activeImage.title}
            </div>
            <img
              src={activeImage.src}
              alt={activeImage.title}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
              className="w-full h-full object-contain relative z-10"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-20 size-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-sm font-mono transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
