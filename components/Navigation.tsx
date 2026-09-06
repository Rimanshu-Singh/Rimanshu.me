'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { ModeToggle } from '@/components/theme-toggle'
import IndiaTime from '@/components/IndiaTime'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export default function PageNavigation() {
  const pathname = usePathname()

  const isMoreActive =
    pathname.startsWith('/blogs') ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/favourite') ||
    pathname.startsWith('/favorite') ||
    pathname.startsWith('/gallery')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-transparent bg-white/50 dark:bg-black/50 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Left: Logo & Name */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-lg text-black dark:text-white group-hover:opacity-80 transition-opacity">
              Rimanshu
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-0.5 sm:gap-1 bg-black/5 dark:bg-white/5 rounded-full p-1 border border-black/5 dark:border-white/5 relative">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href))

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 relative",
                  isActive
                    ? "text-black dark:text-white bg-white dark:bg-neutral-800 shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            )
          })}

          {/* More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 relative inline-flex items-center gap-1 cursor-pointer outline-hidden group",
                  isMoreActive
                    ? "text-black dark:text-white bg-white dark:bg-neutral-800 shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                <span>More</span>
                <ChevronDown className="size-3 sm:size-3.5 opacity-60 group-data-[state=open]:rotate-180 transition-transform duration-200" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-40 rounded-xl p-1 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-lg z-50 animate-in fade-in-0 zoom-in-95"
            >
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer focus:bg-neutral-100 dark:focus:bg-neutral-800">
                <Link
                  href="/blogs"
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-medium transition-colors",
                    pathname.startsWith('/blog')
                      ? "text-black dark:text-white font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  )}
                >
                  <span>Blogs</span>
                  <span className="text-[10px] text-neutral-400 font-mono">01</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="rounded-lg cursor-pointer focus:bg-neutral-100 dark:focus:bg-neutral-800">
                <Link
                  href="/favourite"
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-medium transition-colors",
                    pathname.startsWith('/favourite') || pathname.startsWith('/favorite') || pathname.startsWith('/gallery')
                      ? "text-black dark:text-white font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  )}
                >
                  <span>Favourite</span>
                  <span className="text-[10px] text-neutral-400 font-mono">02</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right: Time & Theme */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <IndiaTime />
          </div>
          <div className="pl-1 sm:pl-2 border-l border-neutral-200 dark:border-neutral-800">
            <ModeToggle />
          </div>
        </div>

      </div>
    </nav>
  )
}
