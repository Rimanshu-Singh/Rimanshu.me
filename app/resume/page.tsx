'use client'

import React, { useState } from 'react'
import PageNavigation from '@/components/Navigation'
import DiagonalPattern from '@/components/DiagonalPattern'
import { Reveal } from '@/components/Reveal'
import {
  ExternalLink,
  ZoomIn,
  ZoomOut,
  FileText,
  Download,
  Briefcase,
  MapPin,
} from 'lucide-react'

export default function ResumePage() {
  const [zoom, setZoom] = useState<number>(100)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 150))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 70))
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen transition-colors duration-300 relative pb-10">
      {/* Print Stylesheet */}
      <style jsx global>{`
        @media print {
          /* Hide everything except the resume sheet */
          body * {
            visibility: hidden !important;
          }
          #printable-resume-sheet,
          #printable-resume-sheet * {
            visibility: visible !important;
          }
          #printable-resume-sheet {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
            border: none !important;
            box-shadow: none !important;
            background: white !important;
            color: black !important;
          }
          /* Fix link colors for print */
          #printable-resume-sheet a {
            color: black !important;
            text-decoration: underline !important;
          }
          /* Dark mode overrides for print */
          .dark #printable-resume-sheet {
            background: white !important;
            color: black !important;
          }
          /* Hide non-printable elements inside resume during print */
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-5xl">
        <PageNavigation />
        
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content Container */}
        <div className="mx-auto sm:w-[calc(100%-60px)] md:w-[calc(100%-120px)] w-full max-w-5xl px-4 sm:px-0 pt-24 flex justify-center items-center">
          
          <Reveal delay={0.1}>
            <div className="relative w-full max-w-5xl h-full max-h-[92vh] bg-white dark:bg-[#0a0c10] border border-neutral-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10">
              
              {/* SIDEBAR */}
              <div className="flex flex-col w-full md:w-[260px] shrink-0 bg-[#ebdcc9]/15 dark:bg-[#0f1218] border-b md:border-b-0 md:border-r border-neutral-200 dark:border-white/5 p-6 select-none">
                <div className="mb-6 md:mb-8">
                  {/* Initials */}
                  <div className="w-14 h-14 rounded-2xl bg-[#d4a574]/15 dark:bg-[#d9b066]/10 border border-[#d4a574]/30 dark:border-[#d9b066]/20 flex items-center justify-center text-[#d4a574] dark:text-[#d9b066] text-xl font-bold font-serif mb-4 shadow-sm">
                    RS
                  </div>
                  <h3 className="text-sm font-bold text-black dark:text-white font-sans tracking-tight">
                    Rimanshu Singh
                  </h3>
                  <p className="text-[11px] font-semibold text-[#9a7049] dark:text-[#d9b066] mt-0.5">
                    Full-Stack Developer
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400 font-medium mt-3">
                    <MapPin className="text-[#d4a574] dark:text-[#d9b066] shrink-0 w-3 h-3" />
                    <span>Barasat, India</span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-6 md:mb-0">
                  {/* Active Resume button */}
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 bg-[#d4a574]/15 dark:bg-[#d9b066]/10 text-[#9a7049] dark:text-[#d9b066] border border-[#d4a574]/20 dark:border-[#d9b066]/20">
                    <FileText className="w-4 h-4" />
                    <span>Resume</span>
                  </button>
                  {/* Print / Download Button */}
                  <button 
                    onClick={handlePrint}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-transparent"
                  >
                    <Download className="w-4 h-4" />
                    <span>Print / Save PDF</span>
                  </button>
                </div>

                <div className="mt-auto p-4 rounded-xl border border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-black/10 hidden md:block">
                  <span className="text-[9px] font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase block">
                    Last updated
                  </span>
                  <span className="text-[11px] font-bold text-black dark:text-white mt-0.5 block">
                    July 2026
                  </span>
                </div>
              </div>

              {/* MAIN CONTENT PANE */}
              <div className="flex-1 flex flex-col bg-neutral-50/30 dark:bg-[#05060a]/50 overflow-hidden">
                {/* STICKY HEADER */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-white/5 bg-white dark:bg-[#0f1218] sticky top-0 z-10 select-none">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#d4a574]/15 dark:bg-[#d9b066]/10 flex items-center justify-center text-[#d4a574] dark:text-[#d9b066]">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-black dark:text-white tracking-wide uppercase">
                        RESUME
                      </h3>
                      <p className="text-[9px] text-neutral-400 dark:text-neutral-500 font-bold tracking-wider uppercase mt-0.5">
                        Rimanshu Singh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handlePrint}
                      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-500 hover:text-black dark:hover:text-white transition-all active:scale-95"
                      title="Print or Save PDF"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* SCROLLABLE SHEET CONTAINER */}
                <div className="flex-1 w-full overflow-y-auto p-4 md:p-8 bg-[#f4ede4]/40 dark:bg-[#05060a] overscroll-contain">
                  <div 
                    id="printable-resume-sheet"
                    className="w-full max-w-[720px] min-h-[1150px] h-auto bg-white dark:bg-[#0f1218] border border-neutral-200 dark:border-white/5 shadow-2xl p-6 md:p-10 relative select-text transition-all duration-300 mx-auto mb-6"
                    style={{ zoom: `${zoom}%` }}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Header Details */}
                        <div className="text-center mb-4">
                          <h1 className="text-3xl font-bold font-serif tracking-tight text-slate-900 dark:text-white">
                            Rimanshu Singh
                          </h1>
                          <div className="text-center text-[10px] font-sans tracking-wide text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                            <span className="font-medium">+91 62055 34921</span>
                            <span className="mx-1.5 text-slate-400">|</span>
                            <a href="mailto:rimanshupatel1@gmail.com" className="underline hover:text-[#b88c5d] dark:hover:text-[#d9b066] transition-colors">
                              rimanshupatel1@gmail.com
                            </a>
                            <span className="mx-1.5 text-slate-400">|</span>
                            <a href="https://linkedin.com/in/rimanshu-singh-246a79245/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#b88c5d] dark:hover:text-[#d9b066] transition-colors">
                              linkedin.com/in/rimanshu-singh-246a79245
                            </a>
                            <span className="mx-1.5 text-slate-400">|</span>
                            <a href="https://github.com/Rimanshu-Singh" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#b88c5d] dark:hover:text-[#d9b066] transition-colors">
                              github.com/Rimanshu-Singh
                            </a>
                            <br />
                            <span className="inline-block mt-1">
                              Barasat · West Bengal · India
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-slate-200 dark:bg-white/10 my-3.5"></div>

                        {/* Summary Section */}
                        <div className="mb-4">
                          <h2 className="text-[11px] font-bold tracking-wider text-[#a77e53] dark:text-[#d9b066] uppercase mb-1.5 pb-0.5 border-b border-slate-100 dark:border-white/5">
                            Summary
                          </h2>
                          <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 text-justify">
                            Full-Stack Developer skilled in building scalable backend systems, REST APIs, and asynchronous architectures alongside clean, high-performance frontends using React.js, Next.js, Node.js, and TypeScript. Experienced in Agile development, system design, and AI-integrated applications, focused on delivering reliable, production-ready software.
                          </p>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-4">
                          <h2 className="text-[11px] font-bold tracking-wider text-[#a77e53] dark:text-[#d9b066] uppercase mb-1.5 pb-0.5 border-b border-slate-100 dark:border-white/5">
                            Experience
                          </h2>
                          <div>
                            <div className="flex justify-between items-baseline">
                              <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                                Geekglory Pvt. Ltd.
                              </span>
                              <span className="text-[9.5px] font-semibold text-slate-500 dark:text-slate-400">
                                June 2025 - Oct 2025
                              </span>
                            </div>
                            <div className="text-[10px] font-semibold text-[#b88c5d] dark:text-[#d9b066] italic mb-1">
                              Frontend Developer Intern — Full Stack Contributions (OnSite Kolkata)
                            </div>
                            <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-0.5">
                              <li>Built and deployed the complete Leadsfatafat website end-to-end and developed the internal admin panel with role-based access, CRUD operations, and RESTful API integration.</li>
                              <li>Engineered 15+ reusable frontend components and a modular design system using React.js, Next.js, TypeScript, and OOP principles, improving rendering performance by 40% and increasing code reuse by 60%.</li>
                              <li>Implemented SSR/SSG in Next.js, integrated 10+ third-party APIs, and followed Agile/Scrum with Git-based version control, cutting UI bugs by 35% through unit testing.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Projects Section */}
                        <div className="mb-4">
                          <h2 className="text-[11px] font-bold tracking-wider text-[#a77e53] dark:text-[#d9b066] uppercase mb-1.5 pb-0.5 border-b border-slate-100 dark:border-white/5">
                            Projects
                          </h2>
                          <div className="space-y-3">
                            {/* FitMind AI */}
                            <div>
                              <div className="flex justify-between items-baseline mb-0.5">
                                <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                                  FitMind AI — AI Voice Fitness &amp; Wellness Platform <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">| Next.js · Convex · Gemini · LangChain · Vapi · Whisper</span>
                                </span>
                                <div className="flex gap-2 text-[10px] font-bold text-[#b88c5d] dark:text-[#d9b066] print-hidden">
                                  <a href="https://github.com/Rimanshu-Singh/FitMind_Ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#b88c5d]">Code</a>
                                </div>
                              </div>
                              <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-0.5">
                                <li>Led a 4-developer team to build a voice-first wellness platform, winning 1st Place at Hack4Bihar 2025 for Top Innovation among 100+ competing teams.</li>
                                <li>Integrated Gemini 2.0 with Vapi, Whisper and ElevenLabs to power natural conversational onboarding and personalized workout &amp; meal-plan generation.</li>
                                <li>Engineered real-time dashboard and state synchronization with Convex and Clerk authentication for seamless user history management.</li>
                              </ul>
                            </div>

                            {/* EscrowX */}
                            <div>
                              <div className="flex justify-between items-baseline mb-0.5">
                                <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                                  EscrowX — Decentralized Freelance Escrow on Stellar <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">| React · Node.js · Soroban · Stellar · Freighter · MongoDB</span>
                                </span>
                                <div className="flex gap-2 text-[10px] font-bold text-[#b88c5d] dark:text-[#d9b066] print-hidden">
                                  <a href="https://github.com/Rimanshu-Singh/EscrowX" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#b88c5d]">Code</a>
                                </div>
                              </div>
                              <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-0.5">
                                <li>Architected a full-stack Web3 marketplace on Stellar with trustless milestone escrow via Soroban smart contracts, funded by a $160 Stellar Grant.</li>
                                <li>Engineered Freighter wallet transaction signing, on-chain fund locking, and automated dispute/refund state machines tested with 50+ users.</li>
                                <li>Built responsive React frontend and Express/MongoDB backend with automated CI/CD pipeline and contract state synchronization.</li>
                              </ul>
                            </div>

                            {/* GreenGrow */}
                            <div>
                              <div className="flex justify-between items-baseline mb-0.5">
                                <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                                  GreenGrow — AI-Powered Agricultural Intelligence Platform <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">| React · Node.js · Flask · TensorFlow · Gemini · Vapi</span>
                                </span>
                                <div className="flex gap-2 text-[10px] font-bold text-[#b88c5d] dark:text-[#d9b066] print-hidden">
                                  <a href="https://green-grow-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#b88c5d]">Live</a>
                                  <span>|</span>
                                  <a href="https://github.com/Rimanshu-Singh/GreenGrow_v3" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#b88c5d]">Code</a>
                                </div>
                              </div>
                              <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-0.5">
                                <li>Led development of an agricultural advisory platform with contextual conversational AI and real-time voice, winning 3rd Prize at HackSpire.</li>
                                <li>Trained and deployed a TensorFlow/Keras computer vision inference service capable of identifying 15+ crop diseases from plant photos.</li>
                                <li>Integrated live weather forecasts, mandi-market price intelligence, and Gemini multimodal image/text analysis.</li>
                              </ul>
                            </div>

                            {/* Privora */}
                            <div>
                              <div className="flex justify-between items-baseline mb-0.5">
                                <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                                  Privora — Zero-Knowledge Access Layer on Midnight <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">| Next.js · Compact · Midnight · Zero-Knowledge · Lace Wallet</span>
                                </span>
                                <div className="flex gap-2 text-[10px] font-bold text-[#b88c5d] dark:text-[#d9b066] print-hidden">
                                  <a href="https://privora-new.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#b88c5d]">Live</a>
                                  <span>|</span>
                                  <a href="https://github.com/Rimanshu-Singh/Privora" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#b88c5d]">Code</a>
                                </div>
                              </div>
                              <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-0.5">
                                <li>Developed a reusable zero-knowledge credential verification primitive on Midnight, allowing users to prove access rights without exposing identity.</li>
                                <li>Implemented Merkle-tree private allowlists, nullifier-based replay protection, and Compact smart contracts deployed on Midnight Preprod.</li>
                                <li>Integrated Lace &amp; 1AM wallet connectors with Jest automated contract testing and GitHub Actions CI/CD.</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Technical Skills Section */}
                        <div className="mb-4">
                          <h2 className="text-[11px] font-bold tracking-wider text-[#a77e53] dark:text-[#d9b066] uppercase mb-1.5 pb-0.5 border-b border-slate-100 dark:border-white/5">
                            Technical Skills
                          </h2>
                          <div className="space-y-1 text-[11px]">
                            <p className="text-slate-700 dark:text-slate-300">
                              <strong className="font-semibold text-slate-900 dark:text-white">Languages:</strong> JavaScript · TypeScript · Python · Java
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                              <strong className="font-semibold text-slate-900 dark:text-white">Frontend:</strong> Next.js · React · TypeScript · Tailwind CSS · Shadcn/UI · Framer Motion · Zustand
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                              <strong className="font-semibold text-slate-900 dark:text-white">Backend:</strong> Node.js · Express · BullMQ · Redis · WebSockets · JWT · Zod · REST APIs
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                              <strong className="font-semibold text-slate-900 dark:text-white">Databases:</strong> PostgreSQL · MySQL · MongoDB · Pinecone · Prisma ORM · Mongoose
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                              <strong className="font-semibold text-slate-900 dark:text-white">Cloud &amp; DevOps:</strong> AWS · Docker · Docker Compose · Git and GitHub · GitHub Actions · CI/CD
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                              <strong className="font-semibold text-slate-900 dark:text-white">CS Fundamentals:</strong> OOPS · DBMS · Computer Networks · Operating Systems · UI/UX Design
                            </p>
                            <p className="text-slate-700 dark:text-slate-300">
                              <strong className="font-semibold text-slate-900 dark:text-white">Tools:</strong> Claude Code · ClickUp · Cloudflare R2 · Vercel · Render · Postman · Plasmo
                            </p>
                          </div>
                        </div>

                        {/* Education Section */}
                        <div className="mb-4">
                          <h2 className="text-[11px] font-bold tracking-wider text-[#a77e53] dark:text-[#d9b066] uppercase mb-1.5 pb-0.5 border-b border-slate-100 dark:border-white/5">
                            Education
                          </h2>
                          <div>
                            <div className="flex justify-between items-baseline">
                              <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                                Brainware University
                              </span>
                              <span className="text-[9.5px] font-semibold text-slate-500 dark:text-slate-400">
                                West Bengal, India
                              </span>
                            </div>
                            <div className="flex justify-between items-baseline mt-0.5">
                              <div className="text-[10px] text-slate-700 dark:text-slate-300">
                                B.Tech in Computer Science (AI &amp; ML) | <strong className="font-bold">CGPA: 8.40</strong>
                              </div>
                              <span className="text-[9.5px] font-semibold text-slate-500 dark:text-slate-400 italic">
                                July 2024 - Aug 2028
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements Section */}
                        <div className="mb-4">
                          <h2 className="text-[11px] font-bold tracking-wider text-[#a77e53] dark:text-[#d9b066] uppercase mb-1.5 pb-0.5 border-b border-slate-100 dark:border-white/5">
                            Achievements &amp; Interests
                          </h2>
                          <div className="space-y-1.5 text-[10px] text-slate-700 dark:text-slate-300">
                            <p className="leading-relaxed">
                              <strong className="font-semibold text-slate-900 dark:text-white">Hackathons:</strong> National Finalist — SBI Youth Ideathon (Top 1000 in India) · 1st Position — Hack4Bihar · 3rd Prize — HackSpire (Axicov Prize Track) · Top 20 — Brainware AI Hackathon (among 100+ competing teams).
                            </p>
                            <p className="leading-relaxed">
                              <strong className="font-semibold text-slate-900 dark:text-white">Event Management:</strong> Hackathon Evangelist and Volunteer across multiple tech events · Organized the Brainware Esports Gaming Event.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* ZOOM CONTROLS FOOTER */}
                <div className="px-6 py-3 border-t border-neutral-200 dark:border-white/5 bg-white dark:bg-[#0f1218] flex items-center justify-between gap-4 select-none text-xs font-bold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleZoomOut}
                      className="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-500 hover:text-black dark:hover:text-white transition-all active:scale-90" 
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-mono text-[11px] text-black dark:text-white">
                      {zoom}%
                    </span>
                    <button 
                      onClick={handleZoomIn}
                      className="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-500 hover:text-black dark:hover:text-white transition-all active:scale-90" 
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-[10px] tracking-widest text-neutral-400 dark:text-neutral-500 lowercase font-normal">
                    scroll to view full sheet
                  </div>
                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}
