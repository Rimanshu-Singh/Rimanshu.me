"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

interface ContactLinkItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
}

const contactLinks: ContactLinkItem[] = [
  {
    name: "GitHub",
    href: "https://github.com/Rimanshu-Singh",
    icon: <FaGithub className="w-4 h-4" />,
    isExternal: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rimanshu-singh-246a79245/",
    icon: <FaLinkedin className="w-4 h-4" />,
    isExternal: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/RimanshuSingh0",
    icon: <FaXTwitter className="w-4 h-4" />,
    isExternal: true,
  },
  {
    name: "Mail",
    href: "mailto:rimanshusingh0000@gmail.com",
    icon: <HiOutlineMail className="w-4 h-4" />,
    isExternal: true,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: <FaPaperclip className="w-4 h-4" />,
    isExternal: false,
  },
];

export default function ContactLinks() {
  return (
    <section className="py-2">
      {/* Header */}
      <div className="pb-3 border-b border-dashed border-neutral-200 dark:border-neutral-800 mb-0">
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight font-normal">
          Contact
        </h2>
      </div>

      {/* Dashed Matrix Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border border-dashed border-neutral-200 dark:border-neutral-800 mt-2">
        {contactLinks.map((link, index) => {
          const isLastCol = (index + 1) % 5 === 0;
          const isLastItem = index === contactLinks.length - 1;

          const content = (
            <div className={`flex items-center gap-2.5 p-3 sm:p-3.5 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors group cursor-pointer h-full ${
              !isLastCol ? "md:border-r md:border-dashed md:border-neutral-200 md:dark:border-neutral-800" : ""
            } ${
              !isLastItem ? "border-b md:border-b-0 border-dashed border-neutral-200 dark:border-neutral-800" : ""
            } ${
              index % 2 === 0 ? "border-r sm:border-r-0 border-dashed border-neutral-200 dark:border-neutral-800" : ""
            } ${
              (index + 1) % 3 !== 0 && index < 3 ? "sm:border-r sm:border-dashed sm:border-neutral-200 sm:dark:border-neutral-800" : ""
            }`}>
              {/* Icon badge */}
              <div className="w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-700/80 bg-neutral-100/90 dark:bg-neutral-800/80 flex items-center justify-center text-neutral-800 dark:text-neutral-200 shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                {link.icon}
              </div>

              {/* Name & Arrow */}
              <div className="flex items-center gap-1 min-w-0">
                <span className="font-semibold text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 group-hover:text-foreground transition-colors truncate">
                  {link.name}
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 text-neutral-400 group-hover:text-foreground -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
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
            </div>
          );

          if (link.isExternal) {
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={link.name} href={link.href} className="block">
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
