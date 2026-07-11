"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    detailsUrl?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "EscrowX | Decentralized Freelancer Marketplace",
        description:
            "A decentralized freelancer marketplace on Stellar. Implements trustless milestone-based escrow via Soroban smart contracts, funded by a $160 Stellar Grant.",
        image: "/images/obsidianui.png",
        tags: ["React.js", "Soroban", "Stellar", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/Rimanshu-Singh",
        detailsUrl: "/projects#escrowx",
    },
    {
        id: 2,
        title: "GreenGrow | AI-Powered Farming Assistant Platform",
        description:
            "An agricultural advisory platform integrating LLM-based conversational AI and TensorFlow crop disease-detection. Won 3rd Prize at HackSpire.",
        image: "/images/agenv.png",
        tags: ["MERN Stack", "Gemini API", "Clerk", "Tailwind CSS", "TensorFlow"],
        liveUrl: "#",
        githubUrl: "https://github.com/Rimanshu-Singh",
        detailsUrl: "/projects#greengrow",
    },
    {
        id: 3,
        title: "FitMind AI | AI-Powered Voice Agent Application",
        description:
            "Real-time voice agent and wellness platform. Integrated Gemini 2.0 and Convex. Won 1st Place at Hack4Bihar 2025.",
        image: "/images/typegpt.png",
        tags: ["Next.js", "TypeScript", "Socket.io", "Convex", "Gemini 2.0"],
        liveUrl: "#",
        githubUrl: "https://github.com/Rimanshu-Singh",
        detailsUrl: "/projects#fitmind-ai",
    },
];

export default function Projects() {
    return (
        <section className="py-2">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.1 }}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/60 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-neutral-900/60"
                        >
                            {/* Preview Image */}
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                {/* Icon buttons overlay — top-right */}
                                <div className="absolute right-3 top-3 flex gap-2">
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                                        aria-label="GitHub"
                                    >
                                        <Github className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                                        aria-label="Live project"
                                    >
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col gap-3 p-5">
                                {/* Title */}
                                <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-md border border-border/60 bg-muted/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground dark:border-white/10 dark:bg-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto flex flex-wrap items-center gap-4 pt-3">
                                    {project.detailsUrl && (
                                        <Link
                                            href={project.detailsUrl}
                                            className="inline-flex items-center rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-amber-300"
                                        >
                                            View Details
                                        </Link>
                                    )}
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                                    >
                                        Live project
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>

                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
