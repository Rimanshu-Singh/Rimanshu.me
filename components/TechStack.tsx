"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiPostman,
  SiAxios,
  SiPython,
  SiFlask,
  SiTensorflow,
} from "react-icons/si";

type Category = "All" | "Frontend" | "Backend" | "Design" | "Tools";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Design" | "Tools";
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
  freq: number;
}

const techItems: TechItem[] = [
  {
    name: "JavaScript",
    category: "Frontend",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <SiJavascript className="text-[13px]" />,
    hoverColor: "group-hover:text-[#F7DF1E]",
    freq: 261.63, // C4
  },
  {
    name: "TypeScript",
    category: "Frontend",
    url: "https://www.typescriptlang.org",
    icon: <SiTypescript className="text-[12px]" />,
    hoverColor: "group-hover:text-[#3178C6]",
    freq: 293.66, // D4
  },
  {
    name: "React",
    category: "Frontend",
    url: "https://react.dev",
    icon: <SiReact className="text-[14px]" />,
    hoverColor: "group-hover:text-[#61DAFB]",
    freq: 329.63, // E4
  },
  {
    name: "Next.js",
    category: "Frontend",
    url: "https://nextjs.org",
    icon: <SiNextdotjs className="text-[14px]" />,
    hoverColor: "group-hover:text-foreground",
    freq: 349.23, // F4
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    url: "https://tailwindcss.com",
    icon: <SiTailwindcss className="text-[14px]" />,
    hoverColor: "group-hover:text-[#38BDF8]",
    freq: 392.00, // G4
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    url: "https://motion.dev",
    icon: <SiFramer className="text-[13px]" />,
    hoverColor: "group-hover:text-[#F024B6]",
    freq: 440.00, // A4
  },
  {
    name: "Node.js",
    category: "Backend",
    url: "https://nodejs.org",
    icon: <SiNodedotjs className="text-[14px]" />,
    hoverColor: "group-hover:text-[#339933]",
    freq: 493.88, // B4
  },
  {
    name: "Express.js",
    category: "Backend",
    url: "https://expressjs.com",
    icon: <SiExpress className="text-[14px]" />,
    hoverColor: "group-hover:text-foreground",
    freq: 523.25, // C5
  },
  {
    name: "MongoDB",
    category: "Backend",
    url: "https://www.mongodb.com",
    icon: <SiMongodb className="text-[14px]" />,
    hoverColor: "group-hover:text-[#47A248]",
    freq: 587.33, // D5
  },
  {
    name: "JWT",
    category: "Backend",
    url: "https://jwt.io",
    icon: <SiJsonwebtokens className="text-[14px]" />,
    hoverColor: "group-hover:text-[#fb015b]",
    freq: 659.25, // E5
  },
  {
    name: "Python",
    category: "Backend",
    url: "https://www.python.org",
    icon: <SiPython className="text-[14px]" />,
    hoverColor: "group-hover:text-[#3776AB]",
    freq: 698.46, // F5
  },
  {
    name: "Flask",
    category: "Backend",
    url: "https://flask.palletsprojects.com",
    icon: <SiFlask className="text-[13px]" />,
    hoverColor: "group-hover:text-foreground",
    freq: 783.99, // G5
  },
  {
    name: "TensorFlow",
    category: "Backend",
    url: "https://www.tensorflow.org",
    icon: <SiTensorflow className="text-[14px]" />,
    hoverColor: "group-hover:text-[#FF6F00]",
    freq: 880.00, // A5
  },
  {
    name: "Git",
    category: "Tools",
    url: "https://git-scm.com",
    icon: <SiGit className="text-[14px]" />,
    hoverColor: "group-hover:text-[#F05032]",
    freq: 987.77, // B5
  },
  {
    name: "GitHub",
    category: "Tools",
    url: "https://github.com",
    icon: <SiGithub className="text-[14px]" />,
    hoverColor: "group-hover:text-foreground",
    freq: 1046.50, // C6
  },
  {
    name: "Vercel",
    category: "Tools",
    url: "https://vercel.com",
    icon: <SiVercel className="text-[13px]" />,
    hoverColor: "group-hover:text-foreground",
    freq: 1174.66, // D6
  },
  {
    name: "Figma",
    category: "Design",
    url: "https://figma.com",
    icon: <SiFigma className="text-[13px]" />,
    hoverColor: "group-hover:text-[#F24E1E]",
    freq: 1318.51, // E6
  },
  {
    name: "Postman",
    category: "Tools",
    url: "https://www.postman.com",
    icon: <SiPostman className="text-[14px]" />,
    hoverColor: "group-hover:text-[#FF6C37]",
    freq: 1396.91, // F6
  },
  {
    name: "Axios",
    category: "Tools",
    url: "https://axios-http.com",
    icon: <SiAxios className="text-[14px]" />,
    hoverColor: "group-hover:text-[#5A29E4]",
    freq: 1567.98, // G6
  },
];

const categories: Category[] = ["All", "Frontend", "Backend", "Design", "Tools"];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Web Audio synth on hover/click
  const playSound = (freq: number) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const filteredItems =
    activeCategory === "All"
      ? techItems
      : techItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full mt-4">
      {/* Header with Title and Filter Buttons */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-dashed border-neutral-300 dark:border-neutral-800">
        <div className="flex flex-row items-baseline gap-2">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
            Tech Stack
          </h2>
          <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 select-none">
            <span className="hidden sm:inline">( hover to play )</span>
            <span className="inline sm:hidden">( click to play )</span>
          </span>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1 items-center">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-sm transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-neutral-200 dark:bg-neutral-800 text-foreground border-neutral-300 dark:border-neutral-700 shadow-xs font-bold scale-[1.02]"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 border-transparent"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Items List */}
      <div className="flex flex-wrap gap-2 mt-4 w-full items-start pb-2">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.a
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
              onMouseEnter={() => playSound(item.freq)}
              onClick={() => playSound(item.freq)}
              className="group"
            >
              <div className="hover:text-foreground text-neutral-500 dark:text-neutral-400 border border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-sm bg-neutral-50/60 dark:bg-neutral-900/40 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1.5 pl-2 pr-3 h-7 cursor-pointer transition-all duration-100">
                <span className={`transition-colors duration-200 ${item.hoverColor}`}>
                  {item.icon}
                </span>
                <span className="text-[11px] sm:text-xs font-sans">{item.name}</span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
