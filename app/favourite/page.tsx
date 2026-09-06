'use client'

import React from 'react'
import Link from 'next/link'
import PageNavigation from '@/components/Navigation'
import DiagonalPattern from '@/components/DiagonalPattern'
import SketchesGallery from '@/components/SketchesGallery'
import { Reveal } from '@/components/Reveal'

export default function FavouritePage() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative bg-background">
      <div className="relative mx-auto max-w-5xl">
        {/* Navigation Bar */}
        <PageNavigation />

        {/* Diagonal Side Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Page Container */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl px-4 sm:px-0 pt-24 pb-16 relative z-10">
          {/* Back to Home Link */}
          <Reveal delay={0.05}>
            <div className="flex items-center justify-between w-full mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-foreground transition-colors font-mono tracking-wider uppercase group"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-sm animate-pulse group-hover:-translate-x-0.5 transition-transform"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M244 400 100 256l144-144M120 256h292"
                  />
                </svg>
                Home
              </Link>
            </div>
          </Reveal>

          {/* Header Section */}
          <Reveal delay={0.1}>
            <div className="w-full flex flex-col mb-8 pb-5 border-b border-dashed border-neutral-300 dark:border-neutral-800">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-2">
                Favourites
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
                A personal collection of my favorite sketches, artworks, and creative experiments.
              </p>
            </div>
          </Reveal>

          {/* Sketches Gallery Collage */}
          <Reveal delay={0.15}>
            <SketchesGallery />
          </Reveal>

          {/* Section Divider & Footer */}
          <Reveal delay={0.25}>
            <div className="border-b border-dashed border-neutral-300 dark:border-neutral-800 mt-12 mb-8" />
            <div className="flex flex-col items-center justify-center gap-1.5 text-center py-2">
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
                Designed &amp; Developed by <span className="font-semibold text-neutral-800 dark:text-neutral-200">Rimanshu</span>
              </p>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
