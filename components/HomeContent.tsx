'use client'

import Link from 'next/link'
import PageNavigation from './Navigation'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import SectionBorder from './SectionBorder'
import About from './About'
import ExperienceContent from './experience/ExperienceContent'
import Reachout from './Reachout'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'
import GitHubActivity from './GitHubActivity'
import Projects from './projects/Projects'
import WorkTogether from './WorkTogether'
import Education from './Education'
import Achievements from './Achievements'

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
            <BannerSection
              bannerImage="/banner.jpg"
              quote="You make your own luck if you stay at it long enough."
            />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader
              name="Rimanshu Singh"
              age="20"
              title="Engineer • Developer • Builder"
              profileImage="/pfp.png"
              socialLinks={{
                twitter: "https://x.com/RimanshuSingh0",
                github: "https://github.com/Rimanshu-Singh",
                linkedin: "https://www.linkedin.com/in/rimanshu-singh-246a79245/",
              }}
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
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-10 py-2">
                  <h2 className="text-xl sm:text-2xl mb-3 mt-4 sm:mt-6 font-serif text-foreground font-normal">Professional Experience</h2>
                  <div className="px-4">
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

                  {/* GitHub Activity Heatmap */}
                  <div className="px-4 mb-4 sm:mb-6">
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



              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4 sm:mt-6 mb-4 sm:mb-6">
                  <div className="px-4">
                    <TechStackMarquee className="w-full" />
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
