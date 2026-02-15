"use client";

import type { SVGProps } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight } from "lucide-react";

type IconProps = SVGProps<SVGSVGElement>;

const ClientIcons = {
    Void: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    ),
    FiveIre: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.011-.224-4.011s1.956 1.634 2.822 4.011c.5 1.38 2 2 2 3a2.5 2.5 0 00-2.5 2.5h-3.5z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
    ),
    Glama: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    ),
    Msty: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
};

const clients = [
    {
        name: "Claude Desktop",
        description: "Anthropic's AI assistant",
        image: "/claude.png",
        color: "bg-orange-100 dark:bg-orange-950/30"
    },
    {
        name: "Cursor",
        description: "AI-first code editor",
        image: "/cursor.png",
        color: "bg-gray-100 dark:bg-gray-800"
    },
    {
        name: "VS Code",
        description: "GitHub Copilot MCP",
        image: "/vscode.png",
        color: "bg-blue-100 dark:bg-blue-950/30"
    },
    {
        name: "Continue",
        description: "Open-source AI assistant",
        image: "/continue.png",
        color: "bg-gray-100 dark:bg-gray-800"
    },
    {
        name: "Claude Code",
        description: "Anthropic's CLI tool",
        image: "/claude-code.png",
        color: "bg-orange-100 dark:bg-orange-950/30"
    },
    {
        name: "Windsurf",
        description: "Codeium's AI IDE",
        image: "/windsurf.png",
        color: "bg-cyan-100 dark:bg-cyan-950/30"
    },
    {
        name: "Cline",
        description: "VS Code agent",
        image: "/cline.png",
        color: "bg-purple-100 dark:bg-purple-950/30"
    },
    {
        name: "Zed",
        description: "Multiplayer editor",
        image: "/zed.png",
        color: "bg-amber-100 dark:bg-amber-950/30"
    },
    {
        name: "5ire",
        description: "Desktop AI assistant",
        icon: <ClientIcons.FiveIre className="w-8 h-8 text-red-500" />,
        color: "bg-red-50 dark:bg-red-950/30"
    },
    {
        name: "Void",
        description: "Open-source Cursor alt",
        icon: <ClientIcons.Void className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
        color: "bg-gray-50 dark:bg-gray-900/50"
    },
    {
        name: "Glama",
        description: "Web-based workspace",
        icon: <ClientIcons.Glama className="w-8 h-8 text-indigo-500" />,
        color: "bg-indigo-50 dark:bg-indigo-950/30"
    },
    {
        name: "Msty",
        description: "AI chat interface",
        icon: <ClientIcons.Msty className="w-8 h-8 text-teal-500" />,
        color: "bg-teal-50 dark:bg-teal-950/30"
    },
];

export function ClientsSection() {
    return (
        <SectionWrapper label="Supported Clients" labelColor="sky" id="clients">
            <div className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
                            Works with your favorite tools
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Relay creates a standardized layer between your MCP servers and AI clients.
                            Configure once, then connect from anywhere.
                        </p>
                    </div>

                    {/* Clients Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-black/5 dark:bg-white/10 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-950 p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group relative h-48"
                            >
                                {/* Subtle dot pattern on hover */}
                                <div className="absolute inset-0 dot-pattern-fine opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true" />
                                <div className="flex flex-col items-center gap-4 relative z-10 w-full">
                                    {/* Logo */}
                                    <div className={`w-14 h-14 rounded-2xl ${client.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                                        {client.image ? (
                                            <Image
                                                src={client.image}
                                                alt={client.name}
                                                width={48}
                                                height={48}
                                                className="w-8 h-8 object-contain"
                                            />
                                        ) : (
                                            client.icon
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                            {client.name}
                                        </span>
                                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                                            {client.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Request a client */}
                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-950 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                        >
                            Request a client
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
