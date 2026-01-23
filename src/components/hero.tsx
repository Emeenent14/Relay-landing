"use client";

import { Search } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Content */}
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-950 dark:text-white text-balance leading-[1.1]">
                        Rapidly build modern websites without ever leaving your HTML.
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                        A utility-first CSS framework packed with classes like{" "}
                        <code className="text-sky-500 dark:text-sky-400 font-mono text-base">flex</code>,{" "}
                        <code className="text-sky-500 dark:text-sky-400 font-mono text-base">pt-4</code>,{" "}
                        <code className="text-sky-500 dark:text-sky-400 font-mono text-base">text-center</code> and{" "}
                        <code className="text-sky-500 dark:text-sky-400 font-mono text-base">rotate-90</code> that
                        can be composed to build any design, directly in your markup.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button className="inline-flex items-center justify-center h-12 px-6 text-base font-semibold text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                            Get started
                        </button>
                        <button className="hidden sm:inline-flex items-center gap-3 h-12 px-4 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                            <Search className="w-4 h-4" />
                            <span>Quick search...</span>
                            <kbd className="text-xs font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                                Ctrl K
                            </kbd>
                        </button>
                    </div>
                </div>

                {/* Code Preview Card */}
                <div className="mt-16 lg:mt-20">
                    <div className="rounded-2xl bg-gray-950 dark:bg-white/5 dark:ring-1 dark:ring-white/10 p-1.5 shadow-xl">
                        <div className="rounded-xl overflow-hidden">
                            {/* Editor Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-900/50 border-b border-gray-800">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-gray-700" />
                                    <div className="w-3 h-3 rounded-full bg-gray-700" />
                                    <div className="w-3 h-3 rounded-full bg-gray-700" />
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <span className="text-xs font-mono text-gray-500">index.html</span>
                                </div>
                                <div className="w-12" />
                            </div>

                            {/* Code Content */}
                            <div className="p-6 bg-gray-950 dark:bg-gray-900/50 overflow-x-auto">
                                <pre className="text-sm font-mono leading-7">
                                    <code>
                                        <span className="text-gray-500">{"<"}</span>
                                        <span className="text-pink-400">div</span>
                                        <span className="text-sky-300"> class</span>
                                        <span className="text-gray-500">=</span>
                                        <span className="text-emerald-300">&quot;flex flex-col items-center rounded-2xl&quot;</span>
                                        <span className="text-gray-500">{">"}</span>
                                        {"\n"}
                                        {"  "}
                                        <span className="text-gray-500">{"<"}</span>
                                        <span className="text-pink-400">img</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-sky-300">class</span>
                                        <span className="text-gray-500">=</span>
                                        <span className="text-emerald-300">&quot;size-48 shadow-xl&quot;</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-sky-300">alt</span>
                                        <span className="text-gray-500">=</span>
                                        <span className="text-emerald-300">&quot;&quot;</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-sky-300">src</span>
                                        <span className="text-gray-500">=</span>
                                        <span className="text-emerald-300">&quot;/img/cover.png&quot;</span>
                                        {"\n"}
                                        {"  "}
                                        <span className="text-gray-500">{"/>"}</span>
                                        {"\n"}
                                        {"  "}
                                        <span className="text-gray-500">{"<"}</span>
                                        <span className="text-pink-400">div</span>
                                        <span className="text-sky-300"> class</span>
                                        <span className="text-gray-500">=</span>
                                        <span className="text-emerald-300">&quot;mt-6 text-center&quot;</span>
                                        <span className="text-gray-500">{">"}</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-gray-500">{"<"}</span>
                                        <span className="text-pink-400">p</span>
                                        <span className="text-sky-300"> class</span>
                                        <span className="text-gray-500">=</span>
                                        <span className="text-emerald-300">&quot;text-xl font-medium text-slate-900&quot;</span>
                                        <span className="text-gray-500">{">"}</span>
                                        {"\n"}
                                        {"      "}
                                        <span className="text-white">Entire house</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-gray-500">{"</"}</span>
                                        <span className="text-pink-400">p</span>
                                        <span className="text-gray-500">{">"}</span>
                                        {"\n"}
                                        {"    "}
                                        <span className="text-gray-500">{"<"}</span>
                                        <span className="text-pink-400">p</span>
                                        <span className="text-sky-300"> class</span>
                                        <span className="text-gray-500">=</span>
                                        <span className="text-emerald-300">&quot;text-slate-500&quot;</span>
                                        <span className="text-gray-500">{">"}</span>
                                        <span className="text-white">Hosted by Maria</span>
                                        <span className="text-gray-500">{"</"}</span>
                                        <span className="text-pink-400">p</span>
                                        <span className="text-gray-500">{">"}</span>
                                        {"\n"}
                                        {"  "}
                                        <span className="text-gray-500">{"</"}</span>
                                        <span className="text-pink-400">div</span>
                                        <span className="text-gray-500">{">"}</span>
                                        {"\n"}
                                        <span className="text-gray-500">{"</"}</span>
                                        <span className="text-pink-400">div</span>
                                        <span className="text-gray-500">{">"}</span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
