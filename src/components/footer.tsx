import Link from "next/link";
import { Github, Twitter, ExternalLink } from "lucide-react";

const footerLinks = {
    "Product": [
        { label: "Features", href: "#features" },
        { label: "Server Catalog", href: "#catalog" },
        { label: "Supported Clients", href: "#clients" },
        { label: "Download", href: "#download" },
    ],
    "Learn": [
        { label: "How it Works", href: "#how-it-works" },
        { label: "What is MCP?", href: "#what-is-mcp" },
        { label: "FAQ", href: "#faq" },
        { label: "MCP Docs", href: "https://modelcontextprotocol.io", external: true },
    ],
    "Community": [
        { label: "GitHub", href: "https://github.com", external: true },
        { label: "Discord", href: "#" },
        { label: "Twitter / X", href: "https://twitter.com", external: true },
        { label: "Report an Issue", href: "https://github.com", external: true },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-gray-950 relative">
            {/* Subtle gradient fade at top */}
            <div className="absolute inset-x-0 top-0 h-32 gradient-subtle-top pointer-events-none" aria-hidden="true" />

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-[var(--gutter-width,2.5rem)_minmax(0,1fr)_var(--gutter-width,2.5rem)] relative">
                {/* Left Gutter */}
                <div className="hidden md:block bg-pattern" />

                {/* Content */}
                <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
                    {/* Subtle texture */}
                    <div className="absolute inset-0 texture-noise opacity-30 pointer-events-none" aria-hidden="true" />
                    <div className="max-w-screen-xl mx-auto relative">
                        {/* Footer Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                            {/* Logo & Description */}
                            <div className="col-span-2 md:col-span-1">
                                <div className="flex items-center gap-2 mb-4">
                                    {/* Relay Logo */}
                                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </div>
                                    <span className="text-base font-semibold text-gray-950 dark:text-white">Relay</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                    The open-source desktop app for managing MCP servers. Configure once, export everywhere.
                                </p>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Link Columns */}
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h3 className="text-sm font-semibold text-gray-950 dark:text-white mb-4">
                                        {category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {links.map((link) => (
                                            <li key={link.label}>
                                                {link.external ? (
                                                    <a
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                                                    >
                                                        {link.label}
                                                        <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                &copy; {new Date().getFullYear()} Relay. Open source under MIT license.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <span>Made with love for the MCP community</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Gutter */}
                <div className="hidden md:block bg-pattern" />
            </div>
        </footer>
    );
}
