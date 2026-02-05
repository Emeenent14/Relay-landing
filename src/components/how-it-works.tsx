"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Search, Settings, Upload, ArrowRight, Check } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Browse the Catalog",
        description: "Open Relay and explore 200+ pre-configured MCP servers. Filter by category—databases, APIs, productivity tools, and more.",
        icon: Search,
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        details: [
            "GitHub, GitLab, Bitbucket",
            "PostgreSQL, MongoDB, Redis",
            "Slack, Notion, Linear",
            "Google Drive, Dropbox",
        ]
    },
    {
        number: "02",
        title: "Configure Your Servers",
        description: "Add servers to your collection and configure them through simple forms. Enter API keys, set paths, customize options—no JSON required.",
        icon: Settings,
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        details: [
            "Visual form-based setup",
            "Secure API key storage",
            "One-click enable/disable",
            "Easy to edit anytime",
        ]
    },
    {
        number: "03",
        title: "Export to Your AI Tools",
        description: "With one click, export your MCP configuration to Claude Desktop, Cursor, VS Code, or any of the 12+ supported clients.",
        icon: Upload,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        details: [
            "Instant export to Claude",
            "Works with Cursor, VS Code",
            "Auto-export on changes",
            "No manual file editing",
        ]
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
                            Set up MCP servers in minutes, not hours
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Forget about finding config file locations, copying JSON snippets, and debugging syntax errors.
                            Relay handles the complexity so you can focus on using AI tools.
                        </p>
                    </div>

                    {/* Steps - Horizontal on desktop, vertical on mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative group">
                                {/* Connector line on desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px">
                                        <div className="w-full h-full bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
                                    </div>
                                )}

                                <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 h-full">
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
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                        {step.description}
                                    </p>

                                    {/* Details list */}
                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <Check className={`w-4 h-4 ${step.color}`} />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#download"
                            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            Download Relay
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#what-is-mcp"
                            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                        >
                            What is MCP?
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
