'use client'

import React from 'react'
import Link from 'next/link'
import PageNavigation from '@/components/Navigation'
import DiagonalPattern from '@/components/DiagonalPattern'
import { Reveal } from '@/components/Reveal'

export default function BlogsPage() {
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
                Blogs &amp; Writing
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
                Thoughts on full-stack engineering, web development, architecture, and developer tooling.
              </p>
            </div>
          </Reveal>

          {/* Blog Content Placeholder */}
          <Reveal delay={0.15}>
            <div className="w-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 p-8 sm:p-12 flex flex-col items-center justify-center text-center bg-neutral-100/50 dark:bg-neutral-900/40">
              <div className="size-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xl mb-4 text-neutral-500">
                ✍️
              </div>
              <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
                Articles in progress
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-md mb-6 font-sans">
                I am currently writing in-depth articles about building scalable web applications, modern frontends, and backend engineering. Stay tuned!
              </p>
              <Link
                href="/"
                className="px-4 py-2 rounded-full border border-dashed border-neutral-400 dark:border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-foreground hover:border-foreground transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </Reveal>

          {/* Footer */}
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
