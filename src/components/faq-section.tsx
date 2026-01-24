"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is MCP (Model Context Protocol)?",
        answer: "MCP is an open protocol that allows AI assistants like Claude to connect to external tools and data sources. It enables Claude to interact with databases, APIs, file systems, and other services securely. Think of it as giving your AI the ability to actually do things, not just talk about them."
    },
    {
        question: "Is Relay free to use?",
        answer: "Yes, Relay is completely free and open source. There are no premium tiers, no subscriptions, and no hidden costs. You can download it, use it, and even contribute to its development on GitHub."
    },
    {
        question: "Does Relay send my data anywhere?",
        answer: "No. Relay stores all data locally on your machine. There's no cloud sync, no telemetry, no analytics. Your API keys and server configurations never leave your computer. We built Relay with privacy as a core principle."
    },
    {
        question: "Which AI tools does Relay support?",
        answer: "Relay supports 12+ AI clients including Claude Desktop, Cursor, VS Code (with GitHub Copilot MCP), Continue, Claude Code, Windsurf, Cline, Zed, 5ire, Void, Glama, and Msty. We're constantly adding support for more tools."
    },
    {
        question: "Do I need to know how to code to use Relay?",
        answer: "Not at all. Relay was designed for everyone—developers and non-developers alike. You just browse the catalog, click to add servers, fill in your API keys through simple forms, and click export. No command line, no JSON editing."
    },
    {
        question: "Can I add custom MCP servers not in the catalog?",
        answer: "Yes! While Relay comes with 53+ pre-configured servers, you can also add any custom MCP server manually. Just provide the command, arguments, and environment variables—Relay handles the rest."
    },
    {
        question: "How do I get API keys for the servers?",
        answer: "Each server has different requirements. When you add a server in Relay, we provide hints and links to help you get the necessary API keys. For example, GitHub requires a personal access token, which you can generate in your GitHub settings."
    },
    {
        question: "Is Relay an official Anthropic product?",
        answer: "No, Relay is an independent open-source project. While it works great with Claude Desktop and Claude Code (both by Anthropic), Relay itself is not affiliated with or endorsed by Anthropic."
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 dark:border-gray-800 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
            >
                <span className="font-semibold text-gray-950 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-gray-400 shrink-0 transition-transform mt-0.5",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                )}
            >
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pr-12">
                    {answer}
                </p>
            </div>
        </div>
    );
}

export function FAQSection() {
    return (
        <SectionWrapper label="FAQ" labelColor="fuchsia" id="faq">
            <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for,
                            feel free to reach out on GitHub.
                        </p>
                    </div>

                    {/* FAQ Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
                        <div className="bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 px-6">
                            {faqs.slice(0, 4).map((faq, index) => (
                                <FAQItem key={index} {...faq} />
                            ))}
                        </div>
                        <div className="bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 mt-6 lg:mt-0">
                            {faqs.slice(4).map((faq, index) => (
                                <FAQItem key={index + 4} {...faq} />
                            ))}
                        </div>
                    </div>

                    {/* Still have questions */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            Still have questions?{" "}
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 font-medium"
                            >
                                Open an issue on GitHub
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
