"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Book, Code, Terminal, Settings, Shield, Globe } from "lucide-react";

export interface DocSection {
    title: string;
    items: {
        title: string;
        href: string;
        icon?: React.ComponentType<{ className?: string }>;
    }[];
}

const docSections: DocSection[] = [
    {
        title: "Getting Started",
        items: [
            { title: "Introduction", href: "/docs", icon: Book },
            { title: "Installation", href: "/docs/installation", icon: DownloadIcon },
            { title: "Quick Start", href: "/docs/quick-start", icon: Terminal },
        ],
    },
    {
        title: "Core Concepts",
        items: [
            { title: "MCP Servers", href: "/docs/servers", icon: Globe },
            { title: "Transports", href: "/docs/transports", icon: ActivityIcon },
            { title: "Security", href: "/docs/security", icon: Shield },
        ],
    },
    {
        title: "Guides",
        items: [
            { title: "Adding Custom Servers", href: "/docs/custom-servers", icon: Settings },
            { title: "Debugging", href: "/docs/debugging", icon: Code },
        ],
    },
];

function DownloadIcon(props: { className?: string }) {
    return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
}

function ActivityIcon(props: { className?: string }) {
    return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
}

export function DocsSidebar() {
    const pathname = usePathname();

    return (
        <nav className="w-64 shrink-0 hidden lg:block border-r border-black/5 dark:border-white/10 h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto py-8 pl-8 pr-4">
            <div className="space-y-8">
                {docSections.map((section, index) => (
                    <div key={index}>
                        <h4 className="text-sm font-semibold text-gray-950 dark:text-white mb-3">
                            {section.title}
                        </h4>
                        <ul className="space-y-1">
                            {section.items.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors",
                                            pathname === item.href
                                                ? "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400 font-medium"
                                                : "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
                                        )}
                                    >
                                        {item.icon && <item.icon className="w-4 h-4" />}
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>
    );
}

// Mobile variant (simplified)
export function MobileDocsNav() {
    return (
        <div className="lg:hidden mb-8 border-b border-black/5 dark:border-white/10 pb-4">
            {/* Simple select or list for mobile - kept simple for now */}
            <p className="text-sm text-gray-500">Select a topic from the menu...</p>
        </div>
    )
}
