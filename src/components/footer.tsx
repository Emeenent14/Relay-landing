import Link from "next/link";
import { Github, Twitter } from "lucide-react";

const footerLinks = {
    "Relay": [
        { label: "Docs", href: "#docs" },
        { label: "Playground", href: "#" },
        { label: "Blog", href: "#blog" },
        { label: "Showcase", href: "#showcase" },
    ],
    "Resources": [
        { label: "MCP Specification", href: "#" },
        { label: "Server Catalog", href: "#" },
        { label: "Community", href: "#" },
        { label: "Changelog", href: "#" },
    ],
    "Connect": [
        { label: "GitHub", href: "https://github.com" },
        { label: "Discord", href: "#" },
        { label: "X / Twitter", href: "https://twitter.com" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-gray-950">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-[var(--gutter-width,2.5rem)_minmax(0,1fr)_var(--gutter-width,2.5rem)]">
                {/* Left Gutter */}
                <div className="hidden md:block bg-pattern" />

                {/* Content */}
                <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="max-w-screen-xl mx-auto">
                        {/* Footer Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                            {/* Logo & Description */}
                            <div className="col-span-2 md:col-span-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="h-5 w-auto text-sky-500" viewBox="0 0 248 31" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" />
                                    </svg>
                                    <span className="text-base font-semibold text-gray-950 dark:text-white">Relay</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    The developer-first platform for managing MCP servers.
                                </p>
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
                                                <Link
                                                    href={link.href}
                                                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                &copy; {new Date().getFullYear()} Relay Inc. All rights reserved.
                            </p>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    className="text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="https://twitter.com"
                                    target="_blank"
                                    className="text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                                >
                                    <Twitter className="w-5 h-5" />
                                </Link>
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
