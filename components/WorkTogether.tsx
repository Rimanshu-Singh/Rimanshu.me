"use client";

import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";

export default function WorkTogether() {
    return (
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 border-y px-4 py-8 dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]">
            {/* Corner icons */}
            <Plus className="absolute top-[-12.5px] left-[-11.5px] z-[1] size-6" strokeWidth={1} />
            <Plus className="absolute top-[-12.5px] right-[-11.5px] z-[1] size-6" strokeWidth={1} />
            <Plus className="absolute bottom-[-12.5px] left-[-11.5px] z-[1] size-6" strokeWidth={1} />
            <Plus className="absolute bottom-[-12.5px] right-[-11.5px] z-[1] size-6" strokeWidth={1} />

            {/* Side borders */}
            <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
            <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

            {/* Center dashed divider */}
            <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

            {/* Content */}
            <h2 className="text-center text-xl font-semibold md:text-3xl">
                Let&apos;s work together
            </h2>

            <p className="text-balance text-center text-sm font-medium text-muted-foreground md:text-base">
                Have a project in mind? Let&apos;s create something amazing.
            </p>

            {/* Actions */}
            <div className="flex items-center justify-center gap-2">
                <Link
                    href="mailto:vedantlavale@gmail.com"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-all hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                >
                    Email Me
                </Link>

                <Link
                    href="https://cal.com/0xvedant/30min?user=0xVedant"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
