"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Zap, Library, Layers, Shield, Settings, Download, ArrowRight } from "lucide-react";

const features = [
    {
        title: "Gateway Architecture",
        description: "One MCP gateway aggregates all your servers. Claude connects once and gets access to everything.",
        icon: Zap,
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-500",
    },
    {
        title: "60+ Pre-built Servers",
        description: "GitHub, Slack, PostgreSQL, MongoDB, Notion, and many more. One-click install.",
        icon: Library,
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-500",
    },
    {
        title: "Multi-Client Support",
        description: "Export configurations to Claude Desktop, Cursor, VS Code Copilot, and more.",
        icon: Layers,
        iconBg: "bg-cyan-500/10",
        iconColor: "text-cyan-500",
    },
    {
        title: "Privacy First",
        description: "All data stored locally. No cloud, no telemetry. Your servers, your control.",
        icon: Shield,
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
    },
    {
        title: "Visual Configuration",
        description: "No more editing JSON files. Add servers and configure API keys with a beautiful UI.",
        icon: Settings,
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-500",
    },
    {
        title: "Cross-Platform",
        description: "Native desktop app for Windows, macOS, and Linux.",
        icon: Download,
        iconBg: "bg-pink-500/10",
        iconColor: "text-pink-500",
    },
];

export function FeaturesSection() {
    return (
        <SectionWrapper label="Why Relay" labelColor="pink" id="features">
            <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
                            Everything you need to supercharge your AI workflow
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Relay makes MCP server management effortless. No command line, no config files,
                            just a beautiful interface that gets out of your way.
                        </p>
                    </div>

                    {/* Features Grid - Tailwind CSS style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 dark:bg-white/10 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-950 p-8 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
                            >
                                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                    {feature.description}
                                </p>

                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-950 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors"
                                >
                                    Learn more
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
