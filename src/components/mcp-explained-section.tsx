"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Play, ExternalLink, BookOpen } from "lucide-react";

const videos = [
    {
        title: "Model Context Protocol Explained",
        creator: "Anthropic",
        thumbnail: "anthropic",
        duration: "3:30",
        url: "https://youtu.be/CQywdSdi5iA?si=ETGmWciGO6X7db35",
        description: "Official introduction to MCP from the creators at Anthropic."
    },
    {
        title: "What is MCP?",
        creator: "IBM Technology",
        thumbnail: "ibm",
        duration: "6:45",
        url: "https://youtu.be/eur8dUO9mvE?si=azzGiq1FMgMg9qTz",
        description: "A clear explanation of how MCP connects AI to your data."
    },
    {
        title: "The Future of AI Tool Integration",
        creator: "Fireship",
        thumbnail: "fireship",
        duration: "5:12",
        url: "https://youtu.be/HyzlYwjoXOQ?si=4YVwxcpQPUHC5pv1",
        description: "Quick, entertaining overview of MCP and why it matters."
    },
    {
        title: "How to use MCP",
        creator: "Network Chuck",
        thumbnail: "networkchuck",
        duration: "14:20",
        url: "https://youtu.be/GuTcle5edjk?si=WK0xUX0bTj3-nFe2",
        description: "Step-by-step guide to connecting AI to your real-world tools."
    },
];

const mcpBenefits = [
    {
        title: "Give AI Real-World Access",
        description: "MCP lets Claude and other AI tools interact with databases, APIs, file systems, and more."
    },
    {
        title: "Standardized Protocol",
        description: "One universal protocol that works across different AI tools. Configure once, use everywhere."
    },
    {
        title: "Secure & Controlled",
        description: "You decide what data and tools your AI can access. Full control over permissions."
    },
    {
        title: "Open Source",
        description: "MCP is an open standard. Anyone can build servers, clients, or tools around it."
    },
];

export function MCPExplainedSection() {
    return (
        <SectionWrapper label="Learn MCP" labelColor="amber" id="what-is-mcp">
            <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 rounded-full border border-amber-200 dark:border-amber-800">
                            <BookOpen className="w-4 h-4" />
                            New to MCP?
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
                            What is Model Context Protocol?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            MCP (Model Context Protocol) is an open standard that lets AI assistants like Claude
                            connect to external tools and data sources. Think of it as giving your AI superpowers—access
                            to your databases, APIs, files, and more.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {mcpBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                            >
                                <h3 className="font-semibold text-gray-950 dark:text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Video Section */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
                            Learn from the Community
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {videos.map((video, index) => (
                                <a
                                    key={index}
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg"
                                >
                                    {/* Video Thumbnail */}
                                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                                        {/* Thumbnail Image */}
                                        <Image
                                            src={`https://img.youtube.com/vi/${video.url.split("youtu.be/")[1].split("?")[0]}/maxresdefault.jpg`}
                                            alt={video.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg backdrop-blur-sm">
                                                <Play className="w-7 h-7 text-white ml-1" fill="white" />
                                            </div>
                                        </div>
                                        {/* Duration badge */}
                                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-xs font-medium text-white">
                                            {video.duration}
                                        </div>
                                        {/* YouTube icon */}
                                        <div className="absolute top-3 left-3">
                                            <svg className="w-8 h-8 text-red-600 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Video Info */}
                                    <div className="p-4">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <h4 className="font-semibold text-gray-950 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                                                    {video.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                    {video.creator}
                                                </p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                                            {video.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Official Docs Link */}
                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="font-semibold text-gray-950 dark:text-white mb-1">
                                    Want to dive deeper?
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Read the official MCP specification and documentation from Anthropic.
                                </p>
                            </div>
                            <a
                                href="https://modelcontextprotocol.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-950 dark:text-white bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shrink-0"
                            >
                                <BookOpen className="w-4 h-4" />
                                MCP Documentation
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
