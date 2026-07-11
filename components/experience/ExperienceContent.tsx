'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

interface ExperienceItem {
  id: string
  company: string
  position: string
  duration: string
  description: string
  achievements?: string[]
  href?: string
  logoUrl?: string
}

export default function ExperienceContent() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const experiences: ExperienceItem[] = [
    {
      id: 'geekglory',
      company: 'Geekglory Pvt. Ltd.',
      position: 'Frontend Developer Intern — Full Stack Contributions',
      duration: 'June 2025 – October 2025',
      description: 'Developed complete web applications and modular design systems.',
      achievements: [
        'Built and deployed the complete Leadsfatafat website end-to-end and developed the internal admin panel with role-based access, CRUD operations, and RESTful API integration.',
        'Engineered 15+ reusable frontend components and a modular design system using React.js, Next.js, TypeScript, and OOP principles, improving rendering performance by 40% and increasing code reuse by 60%.',
        'Implemented SSR/SSG in Next.js, integrated 10+ third-party APIs, and followed Agile/Scrum with Git-based version control, cutting UI bugs by 35% through unit testing.'
      ]
    }
  ]

  const toggleExpanded = (company: string) => {
    setExpanded(prev => ({
      ...prev,
      [company]: !prev[company]
    }))
  }

  return (
    <div className="space-y-4 pb-4">
      {experiences.map(exp => {
        const isExpanded = expanded[exp.company]

        return (
          <div
            key={exp.company}
            className="
              rounded-xl
              border border-neutral-200/70 dark:border-neutral-800/70
              card-bg
              transition-all duration-300
              hover:border-neutral-300 dark:hover:border-neutral-600 
            "
          >
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-4 sm:p-5">
              <div className="flex items-start gap-4 flex-1 min-w-0">
                {/* LOGO */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden shrink-0">
                  {exp.logoUrl ? (
                    <Image
                      src={exp.logoUrl}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm sm:text-lg font-medium text-black dark:text-white">
                      {exp.company.charAt(0)}
                    </span>
                  )}
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-lg text-black dark:text-white truncate">
                    {exp.href ? (
                      <Link
                        href={exp.href}
                        target="_blank"
                        className="hover:text-[#006FEE] transition-colors"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      exp.company
                    )}
                  </h3>

                  <p className="text-[11px] sm:text-sm opacity-70">
                    {exp.position}
                  </p>

                  {/* KNOW MORE */}
                  {exp.achievements?.length && (
                    <button
                      onClick={() => toggleExpanded(exp.company)}
                      className="
                        mt-2 inline-flex items-center gap-1.5
                        text-[11px] sm:text-sm
                        opacity-70
                        text-[#787572]
                       
                        transition-opacity
                        cursor-pointer
                      "
                      aria-expanded={isExpanded}
                    >
                      Know more
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* DURATION */}
              <p className="text-[11px] sm:text-sm opacity-50 whitespace-nowrap">
                {exp.duration}
              </p>
            </div>

            {/* ACCORDION CONTENT */}
            <div
              className={`
                overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="px-4 sm:px-5 pb-5">
                <div className="pt-4 border-t border-neutral-200 dark:border-slate-700">
                  <ul className="space-y-3 text-xs sm:text-sm opacity-80">
                    {exp.achievements?.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-[#006FEE] mt-[6px] shrink-0">
                          ●
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
