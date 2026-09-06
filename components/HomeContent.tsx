'use client'

import Link from 'next/link'
import PageNavigation from './Navigation'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import SectionBorder from './SectionBorder'
import About from './About'
import ContactLinks from './ContactLinks'
import ExperienceContent from './experience/ExperienceContent'
import Reachout from './Reachout'
import TechStackMarquee from './TechStackMarquee'
import TechStack from './TechStack'
import { Reveal } from './Reveal'
import GitHubActivity from './GitHubActivity'
import Projects from './projects/Projects'
import WorkTogether from './WorkTogether'
import Education from './Education'
import Achievements from './Achievements'
import SketchesCarousel from './SketchesCarousel'

export default function HomeContent() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      <div className="relative mx-auto max-w-5xl">
        <PageNavigation />
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0 pt-20">
          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection bannerImage="/banner.jpg" />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader
              name="Rimanshu Singh"
              age="20"
              title="Full-Stack Developer"
              location="West Bengal, IND"
              profileImage="/pfp.png"
            />
          </Reveal>

          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* About Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-10 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <About />
                  </div>

                  {/* Contact Section */}
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <ContactLinks />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-10 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <div className="pb-3 border-b border-dashed border-neutral-300 dark:border-neutral-800 mb-6">
                      <h2 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight font-normal">
                        Professional Experience
                      </h2>
                    </div>
                    <ExperienceContent />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-4" />
              </Reveal>

              {/* Projects / Works */}
              <Reveal delay={0.1}>
                <div className="sm:px-10 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <Projects />
                  </div>

                  {/* Tech Stack Section */}
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">

                    <TechStack />
                  </div>

                  {/* GitHub Activity Heatmap */}
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <GitHubActivity username="Rimanshu-Singh" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Education Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-10 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <Education />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Achievements Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-10 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <Achievements />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Sketches Carousel Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-10 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <SketchesCarousel />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1}>
                <div className="px-4 sm:px-0">
                  <WorkTogether />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="mt-4 sm:mt-6">
                  <Reachout
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
