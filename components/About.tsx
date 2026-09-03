"use client";

import React from "react";

export default function About() {
  return (
    <section className="py-2">
      {/* Header */}
      <div className="pb-3 border-b border-dashed border-black/10 dark:border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight font-normal">
          About
        </h2>
      </div>

      {/* Bullet points */}
      <ul className="mt-4 space-y-2 sm:space-y-2.5 text-sm sm:text-base leading-normal sm:leading-snug text-neutral-800 dark:text-neutral-200 font-sans">
        <li className="flex items-start gap-2.5">
          <span className="text-neutral-400 dark:text-neutral-500 select-none text-base leading-snug shrink-0">
            •
          </span>
          <p className="leading-normal">
            I&apos;m a{" "}
            <strong className="font-bold underline underline-offset-[3px] decoration-current text-foreground">
              Design Engineer
            </strong>{" "}
            passionate about crafting digital products where thoughtful design meets clean, scalable code.
          </p>
        </li>

        <li className="flex items-start gap-2.5">
          <span className="text-neutral-400 dark:text-neutral-500 select-none text-base leading-snug shrink-0">
            •
          </span>
          <p className="leading-normal">
            I design and develop modern interfaces with{" "}
            <strong className="font-bold underline underline-offset-[3px] decoration-current text-foreground">
              React, Tailwind, Motion
            </strong>{" "}
            focusing on usability, performance, and delightful interactions.
          </p>
        </li>

        <li className="flex items-start gap-2.5">
          <span className="text-neutral-400 dark:text-neutral-500 select-none text-base leading-snug shrink-0">
            •
          </span>
          <p className="leading-normal">
            Currently a 2nd-year B.Tech CSE student, I enjoy transforming ideas into polished products, exploring new technologies, refining details, and creating intuitive and memorable experiences.
          </p>
        </li>
      </ul>
    </section>
  );
}
