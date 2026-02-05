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
    PostgreSQL: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M11.967 0a11.97 11.97 0 0 0-3.328 1.48L3.13 5.405h-.012A11.978 11.978 0 0 0 0 12c0 6.626 5.372 12 11.966 12 6.625 0 12.032-5.374 12.032-12 0-6.628-5.407-12-12.032-12zm6.264 6.84c.323.364.63.784.877 1.258l-1.34 1.054a7.995 7.995 0 0 0-.61-.926l-.41.674s.645 3.324-.766 5.604c-1.411 2.278-4.43 2.222-4.43 2.222s-2.072 2.822-2.6 3.126c-.528.305-.884.288-.884.288s.22-4.234 1.84-6.314c1.618-2.083 3.536-1.574 3.536-1.574s1.693-.658 2.373-2.12c.68-1.464-.105-2.045-.105-2.045s.68-.004 1.144.382c.466.388.375.9.375.9l1.002.47zm-1.127 8.356c.491.597.556 1.764.12 2.47-.435.705-1.558.974-2.82.72l.487-1.1s.88.243 1.342-.29c.46-.532.87-1.8.87-1.8z" />
        </svg>
    ),
    Notion: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M4.459 4.208c.746.606 1.026.56 2.656.466h10.724s.7.047 1.073-1.026c-.233-.047-.466.046-.513.233-.653 1.259-2.285 1.166-2.285 1.166l-7.74 5.242-2.89 1.772s-.42.233-.42 1.445v6.524s.14 1.399 2.052 1.353h9.605c2.33 0 2.285-2.239 2.285-2.239V7.935s-.14-1.399-2.332-1.399h-4.336L7.208 9.986V19.31c0 .699.467.466.467.466.979-.327 7.085-4.148 7.272-4.288.187-.14.28-.653.28-1.073v-5.45c0-.654-.513-.607-.513-.607.186-.606 1.819-1.445 1.819-1.445s.513-.14.513.606v6.944c0 1.259-.606 1.585-.606 1.585-1.446.885-8.397 5.103-8.864 5.383-.466.28-1.072.045-1.072.045-.513-.512-.513-1.258-.513-1.258V5.373c0-.652-.42-1.165-.42-1.165z" />
        </svg>
    ),
    GoogleDrive: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12.01 1.485c2.082 3.606 3.996 6.922 4.09 7.098L23.95 22H15.82C13.203 17.472 8.232 8.87 8.04 8.537c-.192-.333 3.97-6.72 3.97-7.053zM23.167 20.64l-7.23-12.525c3.21 0 6.42.002 9.632.002-.544.938-7.2 12.434-7.24 12.502.838.005 1.677.02 2.514.02h2.324zm-16.71 0l7.233-12.525h8.04L14.498 20.64H6.457zm-1.43 1.343l5.503-9.533 1.157 2.004L4.01 24l-3.212-5.56 4.23-7.327 4.195-7.27L9.98 2.57 2.628 15.31c-1.026 1.777-2.052 3.555-2.4 4.155.88-.002 1.76-.006 2.645-.008L5.027 21.98z" />
        </svg>
    ),
    Stripe: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.976 9.15c-2.172-.806-4.856-1.77-4.856-4.359 0-1.394 1.228-2.358 3.578-2.358 2.25 0 4.941.972 4.941.972L17.95 6.53s-2.105-1.047-4.177-1.047c-1.054 0-1.565.45-1.565 1.096 0 .864 1.95 1.332 3.93 2.057 2.64.966 5.228 2.064 5.228 5.358 0 2.67-2.28 4.35-5.908 4.35-2.793 0-5.714-1.36-5.714-1.36L9.43 14.05s2.565 1.398 4.976 1.398c1.378 0 1.769-.618 1.769-1.215 0-.853-1.611-1.354-2.2-1.568M1.161 6.866V24h4.636V6.866H1.16z" />
        </svg>
    ),
    MongoDB: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M17.193 10.375c-.389-.029-1.895-.276-2.583-.242 1.082 4.63 1.488 6.643 1.383 6.67-.107.03-.455-1.748-1.503-6.666-.35 1.636-1.36 5.86-1.47 5.795-.122-.06.76-7.854.67-8.318-.548-.052-1.874.195-1.874.195s.3 3.653.228 3.79c-.07.137-1.074-3.528-1.074-3.528s-1.077.382-1.32.784c-.244.402.164 2.894.254 3.09.09.198-1.127-2.85-1.157-2.887-.035-.04-1.59 1.107-1.258 2.664.327 2.067 1.25 2.185 1.25 2.185s.262-.486.262.597.55 3.398 4.093 5.488c-.628-2.613-.238-5.328-.238-5.328s1.654 3.1 3.542 5.097c.507.036 1.79-.472 3.05-2.188 1.26-1.716.892-4.116.892-4.116s.642.06.84-.707c.205-.765-.36-2.073-1.028-2.3z" />
        </svg>
    ),
    Linear: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm1.196-16.716l2.915 6.077c.307.391.134.908-.42 1.353-.554.446-1.309.52-1.616.128l-2.67-5.569-4.27 6.027c-.286.393-.854.492-1.42.203-1.201-.613-.67-2.273.226-3.538l7.255-4.681z" />
        </svg>
    ),
};

const featuredServers = [
    { name: "GitHub", icon: <Icons.GitHub className="w-6 h-6" />, color: "bg-gray-800", description: "Repository access, PRs, issues" },
    { name: "Slack", icon: <Icons.Slack className="w-5 h-5" />, color: "bg-[#4A154B]", description: "Messages, channels, users" },
    { name: "PostgreSQL", icon: <Icons.PostgreSQL className="w-6 h-6" />, color: "bg-[#336791]", description: "Database queries & schema" },
    { name: "Notion", icon: <Icons.Notion className="w-6 h-6" />, color: "bg-gray-900", description: "Pages, databases, blocks" },
    { name: "Google Drive", icon: <Icons.GoogleDrive className="w-6 h-6" />, color: "bg-[#4285F4]", description: "Files, folders, search" },
    { name: "Stripe", icon: <Icons.Stripe className="w-6 h-6" />, color: "bg-[#635BFF]", description: "Payments, customers, invoices" },
    { name: "MongoDB", icon: <Icons.MongoDB className="w-6 h-6" />, color: "bg-[#47A248]", description: "Documents, collections" },
    { name: "Linear", icon: <Icons.Linear className="w-6 h-6" />, color: "bg-[#5E6AD2]", description: "Issues, projects, teams" },
];

export function ServerCatalogSection() {
    return (
        <SectionWrapper label="Catalog" labelColor="violet" id="catalog">
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
                                        <div className={`w-12 h-12 rounded-xl ${server.color} flex items-center justify-center text-white shrink-0`}>
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
