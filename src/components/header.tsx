"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun, Menu, X, Github, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#docs", label: "Docs" },
    { href: "#features", label: "Features" },
    { href: "#showcase", label: "Showcase" },
    { href: "#blog", label: "Blog" },
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
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex items-center gap-2">
                                <svg className="h-6 w-auto text-sky-500" viewBox="0 0 248 31" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" />
                                </svg>
                                <span className="text-lg font-semibold text-gray-950 dark:text-white">Relay</span>
                            </div>
                        </Link>

                        {/* Version Badge */}
                        <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 rounded-full">
                            v1.0
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
                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <Search className="w-4 h-4" />
                            <span>Quick search...</span>
                            <kbd className="ml-4 text-xs font-mono bg-white dark:bg-gray-900 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                                Ctrl K
                            </kbd>
                        </button>

                        <Link
                            href="https://github.com/anthropics/relay"
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
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
