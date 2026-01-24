"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        name: "Development",
        color: "bg-violet-500",
        servers: ["GitHub", "GitLab", "Git", "Docker", "Sentry"]
    },
    {
        name: "Database",
        color: "bg-blue-500",
        servers: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"]
    },
    {
        name: "Productivity",
        color: "bg-emerald-500",
        servers: ["Slack", "Notion", "Linear", "Todoist", "Trello"]
    },
    {
        name: "Cloud & API",
        color: "bg-orange-500",
        servers: ["AWS", "Cloudflare", "Stripe", "Twilio", "Aiven"]
    },
    {
        name: "Storage",
        color: "bg-cyan-500",
        servers: ["Google Drive", "File System", "Dropbox", "Obsidian", "Memory"]
    },
    {
        name: "Search & Data",
        color: "bg-pink-500",
        servers: ["Brave Search", "Elasticsearch", "Puppeteer", "Fetch", "YouTube"]
    },
];

const featuredServers = [
    { name: "GitHub", icon: "GH", color: "bg-gray-800", description: "Repository access, PRs, issues" },
    { name: "Slack", icon: "S", color: "bg-violet-600", description: "Messages, channels, users" },
    { name: "PostgreSQL", icon: "PG", color: "bg-blue-600", description: "Database queries & schema" },
    { name: "Notion", icon: "N", color: "bg-gray-900", description: "Pages, databases, blocks" },
    { name: "Google Drive", icon: "GD", color: "bg-amber-500", description: "Files, folders, search" },
    { name: "Stripe", icon: "ST", color: "bg-indigo-600", description: "Payments, customers, invoices" },
    { name: "MongoDB", icon: "MG", color: "bg-green-600", description: "Documents, collections" },
    { name: "Linear", icon: "LN", color: "bg-violet-500", description: "Issues, projects, teams" },
];

export function ServerCatalogSection() {
    return (
        <SectionWrapper label="Server Catalog" labelColor="emerald" id="catalog">
            <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
                            53+ servers ready to use
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Browse our curated catalog of pre-configured MCP servers. Each one comes with
                            sensible defaults and clear documentation. Just add your API key and you&apos;re ready to go.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="mb-12">
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
                            Browse by Category
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    className="bg-white dark:bg-gray-900/50 rounded-xl p-4 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer group"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                                        <span className="font-medium text-gray-950 dark:text-white text-sm">
                                            {category.name}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {category.servers.slice(0, 3).map((server) => (
                                            <span
                                                key={server}
                                                className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded"
                                            >
                                                {server}
                                            </span>
                                        ))}
                                        {category.servers.length > 3 && (
                                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                                +{category.servers.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Featured Servers */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
                            Popular Servers
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 dark:bg-white/10 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10">
                            {featuredServers.map((server) => (
                                <div
                                    key={server.name}
                                    className="bg-white dark:bg-gray-950 p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl ${server.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                                            {server.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="font-semibold text-gray-950 dark:text-white mb-1">
                                                {server.name}
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {server.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* View All CTA */}
                    <div className="mt-12 text-center">
                        <a
                            href="#download"
                            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            Download to browse full catalog
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
