"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Achievement = {
    id: number;
    title: string;
    description: string;
    badge: string;
    year: string;
};

const achievements: Achievement[] = [
    {
        id: 1,
        title: "Hackstorm 2.26",
        description:
            "Secured 4th position among multiple competing teams in this high-intensity hackathon.",
        badge: "4TH PLACE",
        year: "2026",
    },
    {
        id: 2,
        title: "India Innovates",
        description:
            "Finalist in World's Biggest Civic Tech Hackathon, solving critical urban challenges through technology.",
        badge: "HACKATHON FINALIST",
        year: "2025",
    },
    {
        id: 3,
        title: "GirlScript Summer of Code (GSSoC) 2025",
        description:
            "Contributed to open-source projects through the GSSoC 2025 program.",
        badge: "CONTRIBUTOR",
        year: "2025",
    },
    {
        id: 4,
        title: "Smart India Hackathon",
        description:
            "Participated in the national-level hackathon hosted by the Government of India.",
        badge: "PARTICIPANT",
        year: "2024",
    },
    {
        id: 5,
        title: "CodeDevs Hackathon",
        description:
            "Built a full-stack project under 24 hours and earned recognition from judges.",
        badge: "TOP 10",
        year: "2024",
    },
    {
        id: 6,
        title: "Open Source Contributor",
        description:
            "Active open-source contributor with merged pull requests across multiple repositories.",
        badge: "CONTRIBUTOR",
        year: "2024",
    },
    {
        id: 7,
        title: "TypeGPT Launch",
        description:
            "Launched a side project that gained significant traction within the developer community.",
        badge: "LAUNCH",
        year: "2024",
    },
    {
        id: 8,
        title: "AgentVerse Hackathon",
        description:
            "Built an AI-agent based solution using LLM orchestration frameworks.",
        badge: "FINALIST",
        year: "2025",
    },
];

const INITIAL_VISIBLE = 3;

export default function Achievements() {
    const [expanded, setExpanded] = useState(false);

    const visibleItems = expanded ? achievements : achievements.slice(0, INITIAL_VISIBLE);
    const hiddenCount = achievements.length - INITIAL_VISIBLE;

    return (
        <section className="py-2">
            {/* Section label */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Highlights
            </p>

            {/* Heading */}
            <h2
                className="mb-8 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                style={{ fontFamily: "var(--font-space-grotesk, serif)" }}
            >
                Recognition &amp; Milestones
            </h2>

            {/* Achievement list */}
            <div className="flex flex-col divide-y divide-border/30 dark:divide-white/5">
                <AnimatePresence initial={false}>
                    {visibleItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-start justify-between gap-4 py-5"
                        >
                            {/* Left — title + description */}
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-bold leading-tight text-foreground font-sans" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}  >
                                    {item.title}
                                </p>
                                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm font-sans" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                                    {item.description}
                                </p>
                            </div>

                            {/* Right — badge + year */}
                            <div className="flex shrink-0 flex-col items-end gap-1.5">
                                <span className="inline-flex items-center rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                                    {item.badge}
                                </span>
                                <span className="text-xs text-muted-foreground/60">
                                    {item.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Show more / less toggle */}
            <motion.button
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border/50 bg-muted/40 px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted/70 hover:text-foreground dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                whileTap={{ scale: 0.97 }}
            >
                {expanded ? "Show less" : `Show ${hiddenCount} more milestones`}
                <motion.span
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.span>
            </motion.button>
        </section>
    );
}
