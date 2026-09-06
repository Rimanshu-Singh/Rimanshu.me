'use client'

import React from 'react'
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"

interface ReachoutProps {
  title?: string
  subtitle?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
    mail?: string
  }
}

export default function Reachout({
  title = "Let's connect",
  subtitle = "Find me on these platforms",
  socialLinks = {
    twitter: "https://x.com/rimanshu_patel",
    github: "https://github.com/Rimanshu-Singh",
    linkedin: "https://www.linkedin.com/in/rimanshu-singh-009277356/",
  }
}: ReachoutProps) {
  return (
    <div className="sm:px-12 px-4 pb-24 sm:pb-28">
      <div className="text-center w-full">
        <div className="mb-5 sm:mb-6">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-lg sm:text-xl mb-1.5 opacity-20 mt-4 sm:mt-6">
            {title}
          </h2>
          <p className="opacity-20 text-sm sm:text-base mb-3 sm:mb-4">
            {subtitle}
          </p>
        </div>

        {/* Social Icon Links Centered */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
          {socialLinks.github && (
            <a
              className="size-10 sm:size-11 flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 hover:scale-105 transition-all duration-200 rounded-full touch-manipulation active:opacity-75 text-neutral-800 dark:text-neutral-200 shadow-xs"
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaGithub className="text-lg sm:text-xl shrink-0" />
            </a>
          )}

          {socialLinks.twitter && (
            <a
              className="size-10 sm:size-11 flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 hover:scale-105 transition-all duration-200 rounded-full touch-manipulation active:opacity-75 text-neutral-800 dark:text-neutral-200 shadow-xs"
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaXTwitter className="text-lg sm:text-xl shrink-0" />
            </a>
          )}

          {socialLinks.linkedin && (
            <a
              className="size-10 sm:size-11 flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 hover:scale-105 transition-all duration-200 rounded-full touch-manipulation active:opacity-75 text-neutral-800 dark:text-neutral-200 shadow-xs"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaLinkedin className="text-lg sm:text-xl shrink-0" />
            </a>
          )}

          {socialLinks.mail && (
            <a
              className="size-10 sm:size-11 flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 hover:scale-105 transition-all duration-200 rounded-full touch-manipulation active:opacity-75 text-neutral-800 dark:text-neutral-200 shadow-xs"
              href={socialLinks.mail}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
              title="Mail"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <IoMdMail className="text-lg sm:text-xl shrink-0" />
            </a>
          )}

          {socialLinks.resume && (
            <a
              className="size-10 sm:size-11 flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 hover:scale-105 transition-all duration-200 rounded-full touch-manipulation active:opacity-75 text-neutral-800 dark:text-neutral-200 shadow-xs"
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              title="Resume"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaPaperclip className="text-lg sm:text-xl shrink-0" />
            </a>
          )}
        </div>

        {/* Availability & Response Time */}
        <div className="mt-6 space-y-1.5 flex flex-col items-center justify-center text-center text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans">
          <p className="flex items-center justify-center gap-2 text-foreground font-medium">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Currently available for freelance work and internship opportunities
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs">
            Response time: Usually within 24 hours
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="text-sm dark:text-white/50 text-black/50 text-center sm:text-left">
              <p>Design & Developed by <span className="font-medium text-black/70 dark:text-white/70">Rimanshu</span></p>
              <p>© 2026. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
