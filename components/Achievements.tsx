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
        title: "Hack4Bihar 2025",
        description:
            "Won 1st Position (Top Innovation) among 100+ competing teams for building a real-time AI voice wellness platform.",
        badge: "1ST POSITION",
        year: "2025",
    },
    {
        id: 2,
        title: "HackSpire Hackathon",
        description:
            "Won 3rd Prize in the Axicov Prize Track for developing GreenGrow, an AI-powered agricultural advisory platform.",
        badge: "3RD PRIZE",
        year: "2025",
    },
    {
        id: 3,
        title: "SBI Youth Ideathon",
        description:
            "Selected as a National Finalist and recognized in the Top 1000 ideas in India.",
        badge: "NATIONAL FINALIST",
        year: "2024",
    },
    {
        id: 4,
        title: "Brainware AI Hackathon",
        description:
            "Ranked in the Top 20 out of more than 100 competing teams.",
        badge: "TOP 20",
        year: "2024",
    },
    {
        id: 5,
        title: "Brainware Esports Gaming Event",
        description:
            "Organized and coordinated the Esports gaming tournament at Brainware University.",
        badge: "ORGANIZER",
        year: "2025",
    },
    {
        id: 6,
        title: "Hackathon Evangelism & Volunteering",
        description:
            "Volunteered and evangelized multiple tech hackathons and community developer events.",
        badge: "VOLUNTEER",
        year: "2024 - Present",
    },
];

const INITIAL_VISIBLE = 3;

export default function Achievements() {
    const [expanded, setExpanded] = useState(false);

    const visibleItems = expanded ? achievements : achievements.slice(0, INITIAL_VISIBLE);
    const hiddenCount = achievements.length - INITIAL_VISIBLE;

    return (
        <section className="py-2">
            {/* Header */}
            <div className="pb-3 border-b border-dashed border-neutral-200 dark:border-neutral-800 mb-6">
                <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-100 tracking-tight font-normal">
                    Recognition &amp; Milestones
                </h2>
            </div>

            {/* Achievement list */}
            <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
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
                                <p className="text-sm font-bold leading-tight text-neutral-900 dark:text-neutral-100 font-sans">
                                    {item.title}
                                </p>
                                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-sm font-sans">
                                    {item.description}
                                </p>
                            </div>

                            {/* Right — badge + year */}
                            <div className="flex shrink-0 flex-col items-end gap-1.5">
                                <span className="inline-flex items-center rounded-md border border-neutral-300 bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 transition-colors">
                                    {item.badge}
                                </span>
                                <span className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">
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
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-[#111111] dark:text-neutral-200 dark:hover:bg-neutral-800 shadow-xs"
                whileTap={{ scale: 0.97 }}
            >
                {expanded ? "Show less" : `Show ${hiddenCount} more milestones`}
                <motion.span
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <ChevronDown className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                </motion.span>
            </motion.button>
        </section>
    );
}
