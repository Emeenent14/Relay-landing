"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";

const ClientIcons = {
    Claude: (props: any) => (
        <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
            <path d="M59.28 11.14c-6.8-5.3-15-7.9-24.6-7.9-10.4 0-18.7 3.3-25.2 10.1-6.5 6.8-9.8 16.4-9.8 28.7v10.66h10.72v-11.4c0-7.3 1.1-13.2 3.3-17.7 2.2-4.4 5.8-7.9 10.9-10.4 5-2.5 10.6-3.8 16.8-3.8 6.2 0 11.6 1.4 16.2 4.2s8.2 6.8 10.6 11.8c2.4 5 3.6 10.8 3.6 17.5v9.04h19.8v-11.4c0-12.7-2.6-22.6-7.8-29.7-5.2-7.1-11.8-11.2-19.8-12.2zM45.47 10.35h-7.42v13.48h-1.98v-13.48h-7.42v-1.98h16.82v1.98zM24.52 23.83v-13.48h-7.42v13.48h-1.98V8.37h9.4v15.46h-1.98z" />
        </svg>
    ),
    VSCode: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M23.15 2.587L18.21.21a.6.6 0 00-.6.12L7.6 10.9 2.15 6.6a.6.6 0 00-.9.27L.1 12l1.15 5.13a.6.6 0 00.9.27L7.6 13.1l10.01 10.57a.6.6 0 00.6.12l4.94-2.377a.6.6 0 00.45-.58V3.167a.6.6 0 00-.45-.58z" />
        </svg>
    ),
    Cursor: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            <path d="M13 13l6 6" />
        </svg>
    ),
    Continue: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M5.05 4.05a7 7 0 119.9 9.9L5.05 4.05z" />
            <path d="M18.95 19.95l-9.9-9.9 9.9 9.9z" />
        </svg>
    ),
    Zed: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M4 4h16v3h-10l10 12v3h-16v-3h10l-10-12z" />
        </svg>
    ),
    Windsurf: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M2 12h5" />
            <path d="M17 12h5" />
            <path d="M14.5 9.5L12 12l2.5 2.5" />
            <path d="M9.5 9.5L7 12l2.5 2.5" />
        </svg>
    ),
    Cline: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
    ),
    Void: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    ),
    FiveIre: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.011-.224-4.011s1.956 1.634 2.822 4.011c.5 1.38 2 2 2 3a2.5 2.5 0 00-2.5 2.5h-3.5z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
    ),
    Glama: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    ),
    Msty: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
    GenericApp: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>
    )
};

const clients = [
    {
        name: "Claude Desktop",
        description: "Anthropic's AI assistant",
        icon: <ClientIcons.Claude className="w-8 h-8" />,
        color: "bg-orange-600"
    },
    {
        name: "Cursor",
        description: "AI-first code editor",
        icon: <ClientIcons.Cursor className="w-6 h-6" />,
        color: "bg-blue-600"
    },
    {
        name: "VS Code",
        description: "GitHub Copilot MCP",
        icon: <ClientIcons.VSCode className="w-6 h-6" />,
        color: "bg-blue-500"
    },
    {
        name: "Continue",
        description: "Open-source AI assistant",
        icon: <ClientIcons.Continue className="w-6 h-6" />,
        color: "bg-emerald-600"
    },
    {
        name: "Claude Code",
        description: "Anthropic's CLI tool",
        icon: <ClientIcons.Claude className="w-8 h-8" />,
        color: "bg-orange-700"
    },
    {
        name: "Windsurf",
        description: "Codeium's AI IDE",
        icon: <ClientIcons.Windsurf className="w-6 h-6" />,
        color: "bg-cyan-500"
    },
    {
        name: "Cline",
        description: "VS Code agent",
        icon: <ClientIcons.Cline className="w-6 h-6" />,
        color: "bg-pink-500"
    },
    {
        name: "Zed",
        description: "Multiplayer editor",
        icon: <ClientIcons.Zed className="w-6 h-6" />,
        color: "bg-amber-500"
    },
    {
        name: "5ire",
        description: "Desktop AI assistant",
        icon: <ClientIcons.FiveIre className="w-6 h-6" />,
        color: "bg-red-500"
    },
    {
        name: "Void",
        description: "Open-source Cursor alt",
        icon: <ClientIcons.Void className="w-6 h-6" />,
        color: "bg-gray-600"
    },
    {
        name: "Glama",
        description: "Web-based workspace",
        icon: <ClientIcons.Glama className="w-6 h-6" />,
        color: "bg-indigo-500"
    },
    {
        name: "Msty",
        description: "AI chat interface",
        icon: <ClientIcons.Msty className="w-6 h-6" />,
        color: "bg-teal-500"
    },
];

export function ClientsSection() {
    return (
        <SectionWrapper label="Supported Clients" labelColor="sky" id="clients">
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
                                    <div className={`w-12 h-12 rounded-xl ${client.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                                        {client.icon}
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
