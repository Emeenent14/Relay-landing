"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Library, Layers, Shield, Settings, Download, ToggleRight, FolderOpen, Activity, ArrowRight } from "lucide-react";

const features = [
    {
        title: "53+ Pre-built Servers",
        description: "GitHub, Slack, PostgreSQL, MongoDB, Notion, Google Drive, Stripe, and many more. Browse the catalog and add with one click.",
        icon: Library,
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-500",
    },
    {
        title: "Multi-Client Export",
        description: "Export your server configs to Claude Desktop, Cursor, VS Code, Continue, Windsurf, Cline, and 6 more AI tools.",
        icon: Layers,
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-500",
    },
    {
        title: "Visual Configuration",
        description: "No more editing JSON files manually. Add servers and configure API keys through a clean, intuitive interface.",
        icon: Settings,
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-500",
    },
    {
        title: "One-Click Toggle",
        description: "Enable or disable any MCP server instantly without deleting its configuration. Perfect for debugging and testing.",
        icon: ToggleRight,
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
    },
    {
        title: "100% Local & Private",
        description: "All data stored locally on your machine. No cloud, no telemetry, no tracking. Your servers and API keys stay private.",
        icon: Shield,
        iconBg: "bg-pink-500/10",
        iconColor: "text-pink-500",
    },
    {
        title: "Cross-Platform",
        description: "Native desktop app built with Tauri for Windows, macOS, and Linux. Fast, lightweight, and no Electron bloat.",
        icon: Download,
        iconBg: "bg-cyan-500/10",
        iconColor: "text-cyan-500",
    },
    {
        title: "Organized by Category",
        description: "Servers organized into 8 categories: Development, Database, API, FileSystem, Automation, Productivity, and more.",
        icon: FolderOpen,
        iconBg: "bg-orange-500/10",
        iconColor: "text-orange-500",
    },
    {
        title: "Server Health Monitoring",
        description: "Optional health checks to monitor your MCP servers. Get notified when a server goes down or has issues.",
        icon: Activity,
        iconBg: "bg-red-500/10",
        iconColor: "text-red-500",
    },
];

export function FeaturesSection() {
    return (
        <SectionWrapper label="Features" labelColor="pink" id="features">
            <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
                            Everything you need to manage MCP servers
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Relay replaces manual JSON editing with a visual interface. Browse pre-built servers,
                            configure API keys, toggle servers on/off, and export to any AI client—all from one app.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 dark:bg-white/10 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-950 p-8 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group relative"
                            >
                                {/* Subtle line texture on hover */}
                                <div className="absolute inset-0 horizontal-lines opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true" />
                                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <a
                            href="#how-it-works"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-950 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                        >
                            See how it works
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
