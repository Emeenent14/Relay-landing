"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun, Menu, X, Github, Download, Twitter } from "lucide-react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const navLinks = [
    { href: "/docs", label: "Docs" },
    { href: "#features", label: "Features" },
    { href: "#catalog", label: "Servers" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#what-is-mcp", label: "Learn MCP" },
    { href: "#faq", label: "FAQ" },
];

export function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-black/5 dark:border-white/10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm">
            <div className="h-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/relay.png"
                                    alt="Relay Logo"
                                    width={32}
                                    height={32}
                                    className="rounded-lg"
                                />
                                <span className="text-lg font-semibold text-gray-950 dark:text-white">Relay</span>
                            </div>
                        </Link>

                        {/* Version Badge */}
                        <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 rounded-full">
                            v0.1.0
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center gap-3">
                        {/* Download Button - Desktop */}
                        <a
                            href="https://github.com/emeenent14/Relay/releases/latest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </a>

                        <Link
                            href="https://discord.gg/pjA3ag9H"
                            target="_blank"
                            className="text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://x.com/relay_mcp"
                            target="_blank"
                            className="text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://github.com/Emeenent14/relay"
                            target="_blank"
                            className="text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </Link>

                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        )}

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 border-b border-black/5 dark:border-white/10 p-4">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white py-3 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://github.com/emeenent14/Relay/releases/latest"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download Relay
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
