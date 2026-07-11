'use client'

import PageNavigation from '@/components/Navigation'
import DiagonalPattern from '@/components/DiagonalPattern'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative pb-20">
      <div className="relative mx-auto max-w-5xl">
        <PageNavigation />
        
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl px-4 sm:px-0 pt-24">
          <Reveal delay={0.1}>
            <div className="mb-10 text-center sm:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Projects
              </h1>
              <p className="text-muted-foreground max-w-2xl text-sm sm:text-base font-mono">
                A selection of decentralized applications, AI platforms, and voice agents built with production-ready architectures.
              </p>
            </div>
          </Reveal>

          {/* Project List */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={0.15 + index * 0.05}>
                <motion.article 
                  id={project.id}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-2xl border border-border/40 bg-card/60 dark:border-white/10 dark:bg-neutral-900/60 shadow-sm transition-all duration-300 hover:shadow-lg scroll-mt-24"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Left: Project Image & Quick Links */}
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted border border-border/30 dark:border-white/5">
                      <Image
                        src={project.image || "/images/obsidianui.png"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    
                    {/* Live & Code Action Buttons */}
                    <div className="flex gap-3">
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-border bg-background hover:bg-muted text-sm font-medium transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Link>
                      )}
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-sm font-bold transition-colors"
                        >
                          Live Demo
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right: Project Details */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h2>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground dark:border-white/10 dark:bg-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <div className="text-sm leading-relaxed text-muted-foreground font-sans space-y-2 whitespace-pre-line">
                        {project.longDescription || project.description}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
