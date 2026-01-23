"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    label?: string;
    labelColor?: "sky" | "pink" | "fuchsia" | "emerald" | "amber";
    className?: string;
    showDivider?: boolean;
    id?: string;
}

const labelColors = {
    sky: "text-sky-500 dark:text-sky-400",
    pink: "text-pink-500 dark:text-pink-400",
    fuchsia: "text-fuchsia-500 dark:text-fuchsia-400",
    emerald: "text-emerald-500 dark:text-emerald-400",
    amber: "text-amber-500 dark:text-amber-400",
};

export function SectionWrapper({
    children,
    label,
    labelColor = "sky",
    className,
    showDivider = true,
    id,
}: SectionWrapperProps) {
    return (
        <section id={id} className={cn("relative", className)}>
            {/* Top Divider with gradient fade */}
            {showDivider && (
                <div className="relative h-px">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
                </div>
            )}

            {/* 3-Column Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[var(--gutter-width,2.5rem)_minmax(0,1fr)_var(--gutter-width,2.5rem)]">
                {/* Left Gutter with Pattern */}
                <div className="hidden md:block bg-pattern relative">
                    {label && (
                        <div className="absolute top-8 left-0 right-0 flex justify-center">
                            <p
                                className={cn(
                                    "section-label font-mono text-xs font-semibold tracking-widest uppercase",
                                    labelColors[labelColor]
                                )}
                            >
                                {label}
                            </p>
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div className="relative">
                    {/* Subtle line texture for light mode */}
                    <div className="absolute inset-0 line-pattern opacity-50 pointer-events-none" aria-hidden="true" />

                    {/* Mobile Label */}
                    {label && (
                        <div className="md:hidden px-4 pt-6 relative">
                            <p
                                className={cn(
                                    "font-mono text-xs font-semibold tracking-widest uppercase",
                                    labelColors[labelColor]
                                )}
                            >
                                {label}
                            </p>
                        </div>
                    )}
                    <div className="relative">{children}</div>
                </div>

                {/* Right Gutter with Pattern */}
                <div className="hidden md:block bg-pattern" />
            </div>
        </section>
    );
}
