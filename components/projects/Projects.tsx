"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="w-full mt-2">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-3 border-b border-dashed border-neutral-300 dark:border-neutral-800 mb-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
          Projects
        </h2>
        <Link href="/projects">
          <div className="flex gap-1 items-center group cursor-pointer px-2 py-1">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-foreground transition-all duration-200">
              View all
            </p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-neutral-500 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 group-hover:text-foreground"
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
                d="m268 112 144 144-144 144m124-144H100"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Grid Container with equal-height cards, clear spacing & individual borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Card 1: Timmo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="group flex flex-col justify-between w-full h-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 sm:p-5 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700"
        >
          <div>
            <a
              href="https://timmo.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full h-52 sm:h-56 rounded-xl bg-neutral-900 dark:bg-neutral-200 cursor-pointer overflow-hidden relative group bg-gradient-to-br from-white via-lime-400 to-slate-950 transition-colors duration-700 shadow-xs">
                {/* Corner Ribbon */}
                <div className="absolute -right-16 top-6 rotate-45 overflow-hidden h-9 z-10 pointer-events-none">
                  <div className="bg-amber-900">
                    <p className="text-black font-semibold tracking-tight text-[11px] bg-amber-300 py-0.5 px-16 border border-dashed border-neutral-600 flex items-center gap-1.5 overflow-hidden relative shadow-sm">
                      <span className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-[250px] transition-transform duration-1000 ease-out -skew-x-20 pointer-events-none" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600" />
                      600+ active users
                    </p>
                  </div>
                </div>

                {/* Mockup Preview */}
                <div className="border-4 border-white/30 absolute rounded-xl -right-8 -bottom-4 sm:-right-10 sm:-bottom-3 group-hover:-right-7 group-hover:-bottom-2 transition-all duration-300 shadow-xl overflow-hidden w-[280px] sm:w-[320px]">
                  <Image
                    alt="Timmo Preview"
                    src="/images/obsidianui.png"
                    width={360}
                    height={240}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </a>

            {/* Title & Subtitle */}
            <div className="flex justify-between items-start mt-4 gap-2">
              <div>
                <h3 className="text-foreground text-base sm:text-lg font-semibold tracking-tight">
                  Timmo
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                  Timmer with leaderboard and analytics.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5">
                <span className="text-emerald-500 text-lg leading-none">•</span> Live
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-[13px] mt-2.5 leading-relaxed font-sans line-clamp-3">
              A clean productivity app for tracking time and staying consistent. Focus, manage tasks, and visualize your progress with insightful stats.
            </p>
          </div>

          {/* Footer: Tags & Actions */}
          <div className="mt-5 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                React
              </span>
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                Tailwind CSS
              </span>
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                Shadcn UI
              </span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <a
                href="https://timmo.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded flex items-center justify-center text-neutral-500 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Timmo Live Website"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href="https://github.com/Rimanshu-Singh"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded flex items-center justify-center text-neutral-500 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Timmo GitHub"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Retro Photo Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="group flex flex-col justify-between w-full h-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 sm:p-5 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700"
        >
          <div>
            <a
              href="https://retro-photo-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full h-52 sm:h-56 rounded-xl bg-neutral-900 dark:bg-neutral-200 cursor-pointer overflow-hidden relative group bg-gradient-to-br from-white via-rose-400 to-slate-950 transition-colors duration-700 shadow-xs">
                {/* Photo Frame Camera Overlay */}
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

                {/* Mockup Preview */}
                <div className="border-4 border-white/20 absolute rounded-xl -right-8 -bottom-4 sm:-right-10 sm:-bottom-3 group-hover:-right-7 group-hover:-bottom-2 transition-all duration-300 shadow-xl overflow-hidden w-[280px] sm:w-[320px]">
                  <Image
                    alt="Retro Photo Card Preview"
                    src="/images/typegpt.png"
                    width={360}
                    height={240}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </a>

            {/* Title & Subtitle */}
            <div className="flex justify-between items-start mt-4 gap-2">
              <div>
                <h3 className="text-foreground text-base sm:text-lg font-semibold tracking-tight">
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
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-[13px] mt-2.5 leading-relaxed font-sans line-clamp-3">
              A retro photo card generator with customizable colors, vintage fonts, themes, dates, and captions. Create and download aesthetic photo cards.
            </p>
          </div>

          {/* Footer: Tags & Actions */}
          <div className="mt-5 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                React
              </span>
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                Tailwind CSS
              </span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <a
                href="https://retro-photo-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded flex items-center justify-center text-neutral-500 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Retro Photo Card Live"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href="https://github.com/Rimanshu-Singh"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded flex items-center justify-center text-neutral-500 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Retro Photo Card GitHub"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 3: JSON Card Generator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="group flex flex-col justify-between w-full h-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 sm:p-5 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700"
        >
          <div>
            <a
              href="https://make-your-card-sam.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full h-52 sm:h-56 rounded-xl bg-neutral-900 dark:bg-neutral-200 cursor-pointer overflow-hidden relative group bg-gradient-to-br from-white via-orange-400 to-slate-950 transition-colors duration-700 shadow-xs">
                {/* JSON Inspector Overlay */}
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

                {/* Mockup Preview */}
                <div className="border-4 border-white/20 absolute rounded-xl -right-8 -bottom-4 sm:-right-10 sm:-bottom-3 group-hover:-right-7 group-hover:-bottom-2 transition-all duration-300 shadow-xl overflow-hidden w-[280px] sm:w-[320px]">
                  <Image
                    alt="JSON Card Generator Preview"
                    src="/images/agenv.png"
                    width={360}
                    height={240}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </a>

            {/* Title & Subtitle */}
            <div className="flex justify-between items-start mt-4 gap-2">
              <div>
                <h3 className="text-foreground text-base sm:text-lg font-semibold tracking-tight">
                  JSON Card Generator
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                  Create a modern JSON business card.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5">
                <span className="text-emerald-500 text-lg leading-none">•</span> Live
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-[13px] mt-2.5 leading-relaxed font-sans line-clamp-3">
              Create a modern JSON business card using only your basic details. Perfect for sharing on social media, portfolios, or personal branding.
            </p>
          </div>

          {/* Footer: Tags & Actions */}
          <div className="mt-5 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                React
              </span>
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                Tailwind CSS
              </span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <a
                href="https://make-your-card-sam.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded flex items-center justify-center text-neutral-500 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="JSON Card Generator Live"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href="https://github.com/Rimanshu-Singh"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded flex items-center justify-center text-neutral-500 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="JSON Card Generator GitHub"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 4: UI Components */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.16 }}
          className="group flex flex-col justify-between w-full h-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 sm:p-5 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700"
        >
          <div>
            <a
              href="https://components-eta-lime.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full h-52 sm:h-56 rounded-xl bg-neutral-900 dark:bg-neutral-200 cursor-pointer overflow-hidden relative group bg-gradient-to-br from-white via-sky-400 to-slate-950 transition-colors duration-700 shadow-xs">
                {/* Design Cursor Pointer Animation */}
                <div className="absolute -left-10 -top-10 opacity-0 group-hover:left-[45%] group-hover:top-[35%] group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none z-10 flex flex-col items-start gap-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-400 drop-shadow-md rotate-[-15deg]">
                    <path d="M3.5 2V12L6.7 8.8H11.5L3.5 2Z" fill="currentColor" stroke="white" strokeWidth="1.2" />
                  </svg>
                  <span className="bg-sky-500 text-white font-mono text-[8px] px-1 py-0.5 rounded-xs shadow-md font-bold tracking-wide select-none translate-x-2">
                    design
                  </span>
                </div>

                {/* Mockup Preview */}
                <div className="border-4 border-white/20 absolute rounded-xl -right-8 -bottom-4 sm:-right-10 sm:-bottom-3 group-hover:-right-7 group-hover:-bottom-2 transition-all duration-300 shadow-xl overflow-hidden w-[280px] sm:w-[320px]">
                  <Image
                    alt="UI Components Preview"
                    src="/images/codedevs.png"
                    width={360}
                    height={240}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </a>

            {/* Title & Subtitle */}
            <div className="flex justify-between items-start mt-4 gap-2">
              <div>
                <h3 className="text-foreground text-base sm:text-lg font-semibold tracking-tight">
                  UI Components
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                  UI Components gallery
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5">
                <span className="text-emerald-500 text-lg leading-none">•</span> Live
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-[13px] mt-2.5 leading-relaxed font-sans line-clamp-3">
              A gallery of modern UI components highlighting clean visuals, subtle animations, and consistent design patterns.
            </p>
          </div>

          {/* Footer: Tags & Actions */}
          <div className="mt-5 pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                React
              </span>
              <span className="text-[11px] px-2 py-0.5 border border-dashed border-neutral-300 dark:border-neutral-700 bg-black/5 dark:bg-white/5 rounded text-neutral-700 dark:text-neutral-300">
                Tailwind CSS
              </span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <a
                href="https://components-eta-lime.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded flex items-center justify-center text-neutral-500 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="UI Components Live"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href="https://github.com/Rimanshu-Singh"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded flex items-center justify-center text-neutral-500 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="UI Components GitHub"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
