"use client";

import Image from "next/image";
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
    {
        name: "GitHub",
        color: "bg-gray-800",
        servers: ["Issues", "PRs", "Repos", "Actions", "Projects"]
    },
    {
        name: "Slack",
        color: "bg-[#4A154B]",
        servers: ["Channels", "Messages", "Users", "Bots", "Files"]
    }
];

const Icons = {
    GitHub: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    Slack: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52h-2.521zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
    ),
};

const featuredServers = [
    { name: "GitHub", icon: <Icons.GitHub className="w-6 h-6" />, color: "bg-gray-800", description: "Repository access, PRs, issues" },
    { name: "Slack", icon: <Icons.Slack className="w-5 h-5" />, color: "bg-[#4A154B]", description: "Messages, channels, users" },
    { name: "PostgreSQL", image: "/postgres.png", color: "bg-[#336791]", description: "Database queries & schema" },
    { name: "Notion", image: "/notion.png", color: "bg-gray-900", description: "Pages, databases, blocks" },
    { name: "Google Drive", image: "/google-drive.png", color: "bg-[#4285F4]", description: "Files, folders, search" },
    { name: "Stripe", image: "/stripe.png", color: "bg-[#635BFF]", description: "Payments, customers, invoices" },
    { name: "MongoDB", image: "/mongodb.png", color: "bg-[#47A248]", description: "Documents, collections" },
    { name: "Linear", image: "/linear.png", color: "bg-[#5E6AD2]", description: "Issues, projects, teams" },
];

export function ServerCatalogSection() {
    return (
        <SectionWrapper label="Server Catalog" labelColor="emerald" id="catalog">
            <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
                            200+ servers ready to use
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
                            {categories.slice(0, 6).map((category) => (
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
                                        <div className={`w-12 h-12 rounded-xl ${server.color} flex items-center justify-center text-white shrink-0`}>
                                            {server.image ? (
                                                <Image
                                                    src={server.image}
                                                    alt={server.name}
                                                    width={48}
                                                    height={48}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            ) : (
                                                server.icon
                                            )}
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
