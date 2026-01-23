"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight, Terminal } from "lucide-react";

export function CTASection() {
    return (
        <SectionWrapper label="Ready-made" labelColor="pink" showDivider={true}>
            <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* CTA Card */}
                    <div className="relative overflow-hidden rounded-3xl bg-gray-950 dark:bg-white/5 p-8 sm:p-12 lg:p-16">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-pink-500/20 opacity-50" />

                        {/* Content */}
                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                                Ready to ship next-gen AI apps?
                            </h2>
                            <p className="text-lg text-gray-300 dark:text-gray-400 mb-10 leading-relaxed">
                                Join thousands of developers who are streamlining their MCP workflow with Relay.
                                Open source and free to get started.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-semibold text-gray-950 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    Get Started Now
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <div className="inline-flex items-center gap-3 h-12 px-5 text-sm font-mono text-gray-300 bg-white/10 rounded-full border border-white/10">
                                    <Terminal className="w-4 h-4 text-emerald-400" />
                                    <span>npm install -g relay</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-500/30 rounded-full blur-3xl" />
                        <div className="absolute -right-10 top-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
