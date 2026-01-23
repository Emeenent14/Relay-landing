"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";

const clients = [
    { name: "Claude", logo: "C" },
    { name: "Cursor", logo: "Cu" },
    { name: "VS Code", logo: "VS" },
    { name: "Continue", logo: "Co" },
    { name: "Windsurf", logo: "W" },
    { name: "Cline", logo: "Cl" },
];

export function ClientsSection() {
    return (
        <SectionWrapper label="Sponsors" labelColor="sky">
            <div className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Powering AI workflows everywhere
                        </p>
                    </div>

                    {/* Sponsors Grid - Tailwind CSS style */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-black/5 dark:bg-white/10 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-950 p-6 lg:p-8 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    {/* Logo placeholder */}
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-lg font-bold text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                        {client.logo}
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                                        {client.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
