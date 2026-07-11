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
            {/* Section label */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Education
            </p>

            {/* Heading */}
            <h2
                className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                style={{ fontFamily: "var(--font-space-grotesk, serif)" }}
            >
                Academic foundation
            </h2>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-card/60 p-5 dark:border-white/10 dark:bg-neutral-900/60 sm:flex-row sm:items-center sm:justify-between"
            >
                {/* Left — icon + info */}
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-muted/60 dark:border-white/10 dark:bg-white/5">
                        <GraduationCap className="h-5 w-5 text-amber-400" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <p className="text-base font-bold leading-tight text-foreground">
                            {education.institution}
                        </p>
                        <p className="text-sm text-muted-foreground font-sans" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                            {education.degree}
                            <span className="mx-1.5 opacity-40">,</span><br />
                            {education.location}
                        </p>
                    </div>
                </div>

                {/* Right — period + CGPA */}
                <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                    <p className="text-sm font-medium text-foreground/80">
                        {education.period}
                    </p>
                    <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-0.5 text-xs font-semibold text-amber-400">
                        CGPA: {education.cgpa}
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
