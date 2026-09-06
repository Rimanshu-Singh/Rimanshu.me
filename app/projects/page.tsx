'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageNavigation from '@/components/Navigation'
import DiagonalPattern from '@/components/DiagonalPattern'
import { Reveal } from '@/components/Reveal'

export default function ProjectsPage() {
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
                Projects
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
                A curated showcase of my projects and designs.
              </p>
            </div>
          </Reveal>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Card 1: Timmo */}
            <Reveal delay={0.15}>
              <div className="w-full h-full flex flex-col justify-between rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700">
                <div>
                  <a
                    href="https://timmo.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="w-full h-52 sm:h-56 rounded-lg bg-neutral-900 cursor-pointer overflow-hidden relative group bg-gradient-to-br from-white via-lime-400 to-slate-950 transition-colors duration-700">
                      {/* Ribbon */}
                      <div className="absolute -right-20 top-8 rotate-45 overflow-hidden h-10 z-10 pointer-events-none">
                        <div className="w-full bg-amber-900 z-30">
                          <p className="text-black font-semibold tracking-tight text-xs mt-3 mb-2 bg-amber-300 py-1 px-20 border border-dashed border-neutral-500 flex items-center gap-1 overflow-hidden relative shadow-sm">
                            <span className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-[350px] transition-transform duration-1000 ease-out -skew-x-20 z-20 pointer-events-none" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            600+ active users
                          </p>
                        </div>
                      </div>
                      {/* Image Preview */}
                      <div className="border-4 border-white/20 absolute rounded-xl -right-10 -bottom-4 group-hover:-right-8 group-hover:-bottom-2 transition-all duration-300 overflow-hidden shadow-2xl w-[280px] sm:w-[320px]">
                        <Image
                          alt="Timmo"
                          width={360}
                          height={400}
                          className="rounded-lg object-cover w-full h-auto"
                          src="/images/obsidianui.png"
                        />
                      </div>
                    </div>
                  </a>

                  {/* Title & Subtitle */}
                  <div className="flex justify-between items-start mt-4 gap-2">
                    <div>
                      <h3 className="text-foreground text-lg sm:text-xl font-semibold tracking-tight">
                        Timmo
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                        Timer with leaderboard and analytics.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5">
                      <span className="text-emerald-500 text-lg leading-none">•</span> Live
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-sans">
                    A clean productivity app for time tracking and leaders. Focus, manage tasks, and visualize consistency stats.
                  </p>
                </div>

                {/* Footer: Tech tags + Actions */}
                <div className="mt-5 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-2">
                  <div className="flex gap-1.5 items-center flex-wrap">
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      React
                    </span>
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      Tailwind CSS
                    </span>
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      Shadcn UI
                    </span>
                  </div>
                  <div className="flex justify-end items-center gap-1 shrink-0">
                    <a
                      href="https://timmo.co.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-100 text-neutral-500 hover:text-foreground"
                      aria-label="Timmo Website"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Sam721166/timmo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-100 text-neutral-500 hover:text-foreground"
                      aria-label="Timmo GitHub"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Retro Photo Card */}
            <Reveal delay={0.2}>
              <div className="w-full h-full flex flex-col justify-between rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700">
                <div>
                  <a
                    href="https://retro-photo-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="w-full h-52 sm:h-56 rounded-lg bg-neutral-900 cursor-pointer overflow-hidden relative group bg-gradient-to-br from-white via-rose-400 to-slate-950 transition-colors duration-700">
                      {/* Viewfinder overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 font-mono text-[9px] text-white">
                        <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/60" />
                        <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/60" />
                        <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/60" />
                        <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/60" />
                        <div className="absolute top-4 left-9 flex items-center gap-1 text-[8px] font-semibold text-white/70">
                          <span className="size-1.5 rounded-full bg-rose-500 animate-pulse" />
                          REC
                        </div>
                        <div className="absolute top-4 right-9 text-[8px] text-white/70 font-semibold">ISO 400</div>
                        <div className="absolute inset-0 m-auto w-4 h-4 flex items-center justify-center opacity-40">
                          <div className="w-4 h-[1px] bg-white absolute" />
                          <div className="h-4 w-[1px] bg-white absolute" />
                        </div>
                      </div>

                      {/* Image Preview */}
                      <div className="border-4 border-white/20 absolute rounded-xl -right-10 -bottom-4 group-hover:-right-8 group-hover:-bottom-2 transition-all duration-300 overflow-hidden shadow-2xl w-[280px] sm:w-[320px]">
                        <Image
                          alt="Retro Photo Card"
                          width={360}
                          height={400}
                          className="rounded-lg object-cover w-full h-auto"
                          src="/images/typegpt.png"
                        />
                      </div>
                    </div>
                  </a>

                  {/* Title & Subtitle */}
                  <div className="flex justify-between items-start mt-4 gap-2">
                    <div>
                      <h3 className="text-foreground text-lg sm:text-xl font-semibold tracking-tight">
                        Retro Photo Card
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                        Create nostalgic photo cards in seconds.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5">
                      <span className="text-emerald-500 text-lg leading-none">•</span> Live
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-sans">
                    A retro photo card generator with customizable colors, vintage fonts, themes, dates, and captions.
                  </p>
                </div>

                {/* Footer: Tech tags + Actions */}
                <div className="mt-5 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-2">
                  <div className="flex gap-1.5 items-center flex-wrap">
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      React
                    </span>
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="flex justify-end items-center gap-1 shrink-0">
                    <a
                      href="https://retro-photo-ten.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-100 text-neutral-500 hover:text-foreground"
                      aria-label="Retro Photo Card Website"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Sam721166/retro-photo-card"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-100 text-neutral-500 hover:text-foreground"
                      aria-label="Retro Photo Card GitHub"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: JSON Card Generator */}
            <Reveal delay={0.25}>
              <div className="w-full h-full flex flex-col justify-between rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700">
                <div>
                  <a
                    href="https://make-your-card-sam.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="w-full h-52 sm:h-56 rounded-lg bg-neutral-900 cursor-pointer overflow-hidden relative group bg-gradient-to-br from-white via-orange-400 to-slate-950 transition-colors duration-700">
                      {/* JSON Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                        <div className="absolute inset-0 border border-orange-500 ring-1 ring-orange-500/20" />
                        <div className="absolute -top-0.5 -left-0.5 size-1.5 bg-white dark:bg-black border border-orange-500" />
                        <div className="absolute -top-0.5 -right-0.5 size-1.5 bg-white dark:bg-black border border-orange-500" />
                        <div className="absolute -bottom-0.5 -left-0.5 size-1.5 bg-white dark:bg-black border border-orange-500" />
                        <div className="absolute -bottom-0.5 -right-0.5 size-1.5 bg-white dark:bg-black border border-orange-500" />
                        <div className="absolute top-0 left-0 bg-orange-500 text-white font-mono text-[8px] px-1.5 py-0.5 rounded-br-xs font-semibold tracking-wide select-none">
                          JSONCard
                        </div>
                        <div className="absolute bottom-1 right-2 text-orange-400 font-mono text-[7px] opacity-90 select-none">
                          flex h-58 w-full gap-4
                        </div>
                      </div>

                      {/* Image Preview */}
                      <div className="border-4 border-white/20 absolute rounded-xl -right-10 -bottom-4 group-hover:-right-8 group-hover:-bottom-2 transition-all duration-300 overflow-hidden shadow-2xl w-[280px] sm:w-[320px]">
                        <Image
                          alt="JSON Card Generator"
                          width={360}
                          height={400}
                          className="rounded-lg object-cover w-full h-auto"
                          src="/images/agenv.png"
                        />
                      </div>
                    </div>
                  </a>

                  {/* Title & Subtitle */}
                  <div className="flex justify-between items-start mt-4 gap-2">
                    <div>
                      <h3 className="text-foreground text-lg sm:text-xl font-semibold tracking-tight">
                        JSON Card Generator
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                        Card generator from basic JSON details.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5">
                      <span className="text-emerald-500 text-lg leading-none">•</span> Live
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-sans">
                    Create a modern business card using simple JSON configurations. Share on social media or portfolios.
                  </p>
                </div>

                {/* Footer: Tech tags + Actions */}
                <div className="mt-5 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-2">
                  <div className="flex gap-1.5 items-center flex-wrap">
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      React
                    </span>
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="flex justify-end items-center gap-1 shrink-0">
                    <a
                      href="https://make-your-card-sam.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-100 text-neutral-500 hover:text-foreground"
                      aria-label="JSON Card Generator Website"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Sam721166/make-your-card"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-100 text-neutral-500 hover:text-foreground"
                      aria-label="JSON Card Generator GitHub"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4: UI Components */}
            <Reveal delay={0.3}>
              <div className="w-full h-full flex flex-col justify-between rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700">
                <div>
                  <a
                    href="https://components-eta-lime.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="w-full h-52 sm:h-56 rounded-lg bg-neutral-900 cursor-pointer overflow-hidden relative group bg-gradient-to-br from-white via-sky-400 to-slate-950 transition-colors duration-700">
                      {/* Design Cursor */}
                      <div className="absolute -left-10 -top-10 opacity-0 group-hover:left-[45%] group-hover:top-[35%] group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none z-10 flex flex-col items-start gap-0.5">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-400 drop-shadow-md rotate-[-15deg]">
                          <path d="M3.5 2V12L6.7 8.8H11.5L3.5 2Z" fill="currentColor" stroke="white" strokeWidth="1.2" />
                        </svg>
                        <span className="bg-sky-500 text-white font-mono text-[8px] px-1 py-0.5 rounded-xs shadow-md font-bold tracking-wide select-none translate-x-2">
                          design
                        </span>
                      </div>

                      {/* Image Preview */}
                      <div className="border-4 border-white/20 absolute rounded-xl -right-10 -bottom-4 group-hover:-right-8 group-hover:-bottom-2 transition-all duration-300 overflow-hidden shadow-2xl w-[280px] sm:w-[320px]">
                        <Image
                          alt="UI Components"
                          width={360}
                          height={400}
                          className="rounded-lg object-cover w-full h-auto"
                          src="/images/codedevs.png"
                        />
                      </div>
                    </div>
                  </a>

                  {/* Title & Subtitle */}
                  <div className="flex justify-between items-start mt-4 gap-2">
                    <div>
                      <h3 className="text-foreground text-lg sm:text-xl font-semibold tracking-tight">
                        UI Components
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                        UI Components Gallery
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5">
                      <span className="text-emerald-500 text-lg leading-none">•</span> Live
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-sans">
                    A gallery of modern components showcasing minimal visual animations and tactile design patterns.
                  </p>
                </div>

                {/* Footer: Tech tags + Actions */}
                <div className="mt-5 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-2">
                  <div className="flex gap-1.5 items-center flex-wrap">
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      React
                    </span>
                    <span className="text-[11px] px-2 py-0.5 border border-dashed bg-black/[0.02] dark:bg-white/[0.02] border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="flex justify-end items-center gap-1 shrink-0">
                    <a
                      href="https://components-eta-lime.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-100 text-neutral-500 hover:text-foreground"
                      aria-label="UI Components Website"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Sam721166/components"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-100 text-neutral-500 hover:text-foreground"
                      aria-label="UI Components GitHub"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Section Divider & Footer */}
          <Reveal delay={0.35}>
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
