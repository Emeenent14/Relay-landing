"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Sparkles, Server, Send, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Browse Catalog",
        description: "Choose from 60+ pre-built MCP servers. GitHub, Slack, databases, productivity tools, and more.",
        icon: Sparkles,
        color: "text-violet-500",
        bg: "bg-violet-500/10",
    },
    {
        number: "02",
        title: "Configure",
        description: "Add your API keys and settings through a simple form. Toggle servers on or off with one click.",
        icon: Server,
        color: "text-sky-500",
        bg: "bg-sky-500/10",
    },
    {
        number: "03",
        title: "Connect",
        description: "One click to export your configuration to Claude Desktop, Cursor, VS Code, or any supported client.",
        icon: Send,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
];

export function HowItWorksSection() {
    return (
        <SectionWrapper label="How it works" labelColor="sky" id="how-it-works">
            <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
                            From zero to AI-powered in three simple steps
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Getting started with Relay is as easy as installing an app. No terminal commands,
                            no configuration files to edit manually.
                        </p>
                    </div>

                    {/* Steps - Horizontal on desktop, vertical on mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative group">
                                {/* Connector line on desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px">
                                        <div className="w-full h-full bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
                                    </div>
                                )}

                                <div className="flex flex-col">
                                    {/* Step Number & Icon */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center`}>
                                            <step.icon className={`w-7 h-7 ${step.color}`} />
                                        </div>
                                        <span className="text-sm font-mono font-medium text-gray-400 dark:text-gray-500">
                                            Step {step.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-gray-950 dark:text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 flex flex-wrap items-center gap-4">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            Get started
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                        >
                            View documentation
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
