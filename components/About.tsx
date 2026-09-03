"use client";

import React from "react";

export default function About() {
  return (
    <section className="py-2">
      {/* Header */}
      <div className="pb-3 border-b border-dashed border-neutral-200 dark:border-neutral-800 mb-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight font-normal">
          About
        </h2>
      </div>

      {/* Bio bullet points */}
      <ul className="space-y-3 sm:space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200 font-sans">
        <li className="flex items-start gap-2.5">
          <span className="text-neutral-400 dark:text-neutral-500 select-none text-base leading-snug shrink-0">
            •
          </span>
          <p className="leading-relaxed">
            I’m a{" "}
            <strong className="font-bold underline underline-offset-[3px] decoration-current text-foreground">
              Full-Stack Developer
            </strong>{" "}
            who builds production software, from user-facing products and internal dashboards to backend APIs, AI-powered systems, and scalable web applications.
          </p>
        </li>

        <li className="flex items-start gap-2.5">
          <span className="text-neutral-400 dark:text-neutral-500 select-none text-base leading-snug shrink-0">
            •
          </span>
          <p className="leading-relaxed">
            Previously, I was a{" "}
            <strong className="font-bold underline underline-offset-[3px] decoration-current text-foreground">
              Frontend Developer Intern at Geekglory Pvt. Ltd.
            </strong>
            , where I built and deployed the Leadsfatafat website end-to-end and developed an internal admin platform with role-based access, CRUD workflows, and REST API integrations. I built 15+ reusable components, worked with 10+ third-party APIs, and improved frontend rendering performance by around 40%.
          </p>
        </li>

        <li className="flex items-start gap-2.5">
          <span className="text-neutral-400 dark:text-neutral-500 select-none text-base leading-snug shrink-0">
            •
          </span>
          <p className="leading-relaxed">
            Outside work, I’ve shipped products including{" "}
            <strong className="font-bold underline underline-offset-[3px] decoration-current text-foreground">
              EscrowX
            </strong>
            , a Stellar/Soroban freelance escrow platform backed by a $160 Stellar grant;{" "}
            <strong className="font-bold underline underline-offset-[3px] decoration-current text-foreground">
              GreenGrow
            </strong>
            , an AI crop advisory and disease-detection platform that won 3rd Prize at HackSpire; and{" "}
            <strong className="font-bold underline underline-offset-[3px] decoration-current text-foreground">
              FitMind AI
            </strong>
            , a real-time AI voice wellness platform that placed 1st among 100+ projects at Hack4Bihar 2025. Mostly{" "}
            <strong className="font-bold underline underline-offset-[3px] decoration-current text-foreground">
              TypeScript, Next.js, React, Node.js, PostgreSQL/MongoDB, Redis, REST APIs, Docker, and AI integrations
            </strong>
            .
          </p>
        </li>
      </ul>
    </section>
  );
}
