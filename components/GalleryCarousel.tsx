'use client'

import React from 'react'
import Link from 'next/link'
import { Marquee } from '@/components/magicui/marquee'
import { cn } from '@/lib/utils'

interface GalleryItem {
  id: string
  title: string
  src: string
  objectPosition?: string
}

const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Gallery 1', src: '/gallery/6.jpeg' },
  { id: '2', title: 'Gallery 2', src: '/gallery/2.jpeg', objectPosition: 'object-top' },
  { id: '3', title: 'Gallery 3', src: '/gallery/3.jpeg' },
  { id: '4', title: 'Gallery 4', src: '/gallery/4.jpeg' },
  { id: '5', title: 'Gallery 5', src: '/gallery/5.jpeg' },
  { id: '6', title: 'Gallery 6', src: '/gallery/1.jpeg' },
  { id: '7', title: 'Gallery 7', src: '/gallery/7.jpeg' },
  { id: '8', title: 'Gallery 8', src: '/gallery/8.jpeg' },
  { id: '9', title: 'Gallery 9', src: '/gallery/9.jpeg' },
]

const firstRow = galleryItems.slice(0, 5)
const secondRow = galleryItems.slice(4, 9)

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="w-48 sm:w-60 md:w-68 aspect-[16/10] shrink-0 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl bg-neutral-200/70 dark:bg-neutral-900/60 overflow-hidden relative group transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-2xs">
      {/* Gray placeholder fallback with subtle label */}
      <div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-600 select-none">
        <span className="text-[11px] font-mono tracking-wider">{item.title}</span>
      </div>

      {/* Image */}
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
        className={cn(
          "w-full h-full object-cover relative z-10 transition-all duration-500 scale-[1.01] group-hover:scale-105",
          item.objectPosition || "object-center"
        )}
      />
    </div>
  )
}

export default function GalleryCarousel() {
  return (
    <div className="w-full flex flex-col py-2">
      {/* Section Title Header */}
      <div className="pb-3 border-b border-dashed border-neutral-300 dark:border-neutral-800 mb-6 flex items-center justify-between">
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight font-normal">
          Gallery
        </h2>
        <Link
          href="/gallery"
          className="flex items-center gap-1 text-neutral-500 hover:text-foreground transition-colors group lowercase text-xs sm:text-sm font-mono"
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
            <GalleryCard key={item.id} item={item} />
          ))}
        </Marquee>

        {/* Row 2 - Right to Left (Opposite of first) */}
        <Marquee pauseOnHover className="[--duration:28s] [--gap:0.75rem]">
          {secondRow.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Marquee>

        {/* Left & right gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-20" />
      </div>
    </div>
  )
}
