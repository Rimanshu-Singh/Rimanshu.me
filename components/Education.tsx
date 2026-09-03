"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = {
    institution: "Brainware University",
    degree: "Bachelor of Technology in Computer Science (AI & ML)",
    location: "Barasat, West Bengal",
    period: "July 2024 – August 2028",
    cgpa: "8.40",
};

export default function Education() {
    return (
        <section className="py-2">
            {/* Header */}
            <div className="pb-3 border-b border-dashed border-neutral-200 dark:border-neutral-800 mb-6">
                <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-100 tracking-tight font-normal">
                    Academic foundation
                </h2>
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-[#111111] sm:flex-row sm:items-center sm:justify-between shadow-xs"
            >
                {/* Left — icon + info */}
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                        <GraduationCap className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <p className="text-base font-bold leading-tight text-neutral-900 dark:text-neutral-100 font-sans">
                            {education.institution}
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
                            {education.degree}
                            <span className="mx-1.5 opacity-40">,</span><br />
                            {education.location}
                        </p>
                    </div>
                </div>

                {/* Right — period + CGPA */}
                <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                    <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500 font-sans">
                        {education.period}
                    </p>
                    <span className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-3 py-0.5 text-xs font-semibold text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 transition-colors">
                        CGPA: {education.cgpa}
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
