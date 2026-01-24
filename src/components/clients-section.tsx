"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";

const clients = [
    {
        name: "Claude Desktop",
        description: "Anthropic's AI assistant",
        logo: "C",
        color: "bg-orange-500"
    },
    {
        name: "Cursor",
        description: "AI-first code editor",
        logo: "Cu",
        color: "bg-violet-500"
    },
    {
        name: "VS Code",
        description: "GitHub Copilot MCP",
        logo: "VS",
        color: "bg-blue-500"
    },
    {
        name: "Continue",
        description: "Open-source AI assistant",
        logo: "Co",
        color: "bg-emerald-500"
    },
    {
        name: "Claude Code",
        description: "Anthropic's CLI tool",
        logo: "CC",
        color: "bg-orange-600"
    },
    {
        name: "Windsurf",
        description: "Codeium's AI IDE",
        logo: "W",
        color: "bg-cyan-500"
    },
    {
        name: "Cline",
        description: "VS Code agent",
        logo: "Cl",
        color: "bg-pink-500"
    },
    {
        name: "Zed",
        description: "Multiplayer editor",
        logo: "Z",
        color: "bg-amber-500"
    },
    {
        name: "5ire",
        description: "Desktop AI assistant",
        logo: "5",
        color: "bg-red-500"
    },
    {
        name: "Void",
        description: "Open-source Cursor alt",
        logo: "V",
        color: "bg-gray-600"
    },
    {
        name: "Glama",
        description: "Web-based workspace",
        logo: "G",
        color: "bg-indigo-500"
    },
    {
        name: "Msty",
        description: "AI chat interface",
        logo: "M",
        color: "bg-teal-500"
    },
];

export function ClientsSection() {
    return (
        <SectionWrapper label="Supported Clients" labelColor="sky">
            <div className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white mb-4">
                            Export to 12+ AI clients with one click
                        </h2>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Configure your MCP servers once in Relay, then export configurations to any supported AI tool.
                            No need to manually copy-paste JSON between different apps.
                        </p>
                    </div>

                    {/* Clients Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-black/5 dark:bg-white/10 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-950 p-6 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group relative"
                            >
                                {/* Subtle dot texture on hover */}
                                <div className="absolute inset-0 dot-pattern-fine opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true" />
                                <div className="flex flex-col items-center gap-3 relative">
                                    {/* Logo */}
                                    <div className={`w-12 h-12 rounded-xl ${client.color} flex items-center justify-center text-sm font-bold text-white group-hover:scale-110 transition-transform`}>
                                        {client.logo}
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                                            {client.name}
                                        </span>
                                        <span className="block text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                                            {client.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional info */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            More clients added regularly.{" "}
                            <a href="#" className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 font-medium">
                                Request a client &rarr;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
