"use client";

import { Download, Apple, Monitor, Github, Star } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
            {/* Subtle gradient overlay for light mode depth */}
            <div className="absolute inset-0 gradient-radial-soft pointer-events-none" aria-hidden="true" />

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Hero Content */}
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 rounded-full border border-sky-200 dark:border-sky-800">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        Open source MCP toolkit for AI assistants
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-950 dark:text-white text-balance leading-[1.1]">
                        Manage MCP servers without touching config files.
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                        Relay is a desktop app that makes it easy to add, configure, and manage{" "}
                        <span className="text-gray-950 dark:text-white font-medium">Model Context Protocol</span> servers
                        for Claude, Cursor, VS Code, and other AI tools.
                        No more editing JSON files manually.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 flex-wrap">
                        <a
                            href="https://github.com/emeenent14/Relay/releases/latest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-semibold text-white bg-gray-950 dark:bg-white dark:text-gray-950 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            <Download className="w-5 h-5" />
                            Download for Free
                        </a>
                        <a
                            href="https://github.com/Emeenent14/relay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-medium text-gray-950 dark:text-white border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            View Source
                        </a>
                        <a
                            href="https://github.com/Emeenent14/relay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-medium text-amber-500 border border-amber-200 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-950/30 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
                        >
                            <Star className="w-5 h-5 fill-current" />
                            Star on GitHub
                        </a>
                    </div>

                    {/* Platform badges */}
                    <div className="mt-6 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <Monitor className="w-4 h-4" />
                            <span>Windows</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Apple className="w-4 h-4" />
                            <span>macOS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06-.135-.12-.266-.18-.399h-.003c-.22-.467-.461-.932-.862-1.135-.268-.135-.661-.2-1.056-.135-.132-.468-.353-.87-.644-1.204l-.003-.003a.544.544 0 00-.046-.064c.053-.262.097-.528.091-.794a2.27 2.27 0 00-.087-.535c-.115.07-.227.133-.32.266-.025.037-.038.075-.06.11.056.333.037.666-.036.932-.04.134-.082.27-.155.4l-.001.002h-.002l-.001.001c-.089.131-.15.2-.248.335-.006.073-.011.143-.02.214-.042.47-.161.867-.331 1.203a8.663 8.663 0 01-.725-.665c.347-.265.606-.669.836-1.137.016-.028.029-.058.043-.087-.012.002-.025.003-.038.006a2.61 2.61 0 01-.37.04c-.063-.003-.12-.024-.181-.03-.062-.006-.12-.035-.178-.04-.095-.01-.19-.018-.282-.019l-.087.013c-.217-.018-.39-.085-.573-.139-.192-.059-.378-.116-.571-.129-.099.01-.198.027-.296.03-.103.003-.207-.006-.312-.004l-.192.01v-.002c-.086.012-.17.028-.25.063a.556.556 0 00-.134.058l-.023-.002a.507.507 0 00-.2.074l.003-.003a.38.38 0 00-.146.088c-.025.023-.042.05-.057.077l-.015.013-.017.02-.027.026c-.043.043-.083.088-.12.135-.067.09-.139.177-.18.28a.458.458 0 00-.053.174l-.002.012c-.013.087-.005.176.028.26.022.055.058.131.11.203.016.029.037.052.056.079.013.02.021.041.036.06l.068.087.131.128.088.074c.035.026.073.047.111.071.038.023.073.052.11.07.086.04.176.07.267.092.095.023.193.04.288.069l.049.012c.017.007.033.015.05.019.088.026.18.034.273.05.1.015.198.032.295.039.017 0 .033.004.05.006-.072.182-.143.354-.23.515-.082.14-.196.272-.312.4l-.035.04c-.035.04-.068.08-.1.121-.035.046-.067.096-.098.146-.025.042-.049.084-.07.127l-.059.131c-.016.04-.025.08-.036.12a.735.735 0 00-.034.22.546.546 0 00.018.165c.009.033.028.063.042.094.04.084.1.146.17.197.035.025.072.045.11.065.04.02.087.016.13.029l.003.001c.065.02.128.053.196.066l.024.003c.024-.006.041-.014.063-.015l.126-.011c.044.001.087-.005.13-.013.046-.007.089-.02.135-.026.01-.004.02-.009.03-.012a.502.502 0 00.085-.036c.038-.017.075-.035.11-.055.044-.024.09-.046.13-.07l.003-.002.037-.024c.04-.026.078-.052.114-.08.038-.028.075-.059.11-.088l.12-.108.072-.072c.023-.024.046-.047.067-.071l.004-.005c.02-.02.038-.04.055-.063.024-.03.05-.054.072-.086l.02-.027c.02-.027.038-.055.055-.083l.04-.071c.012-.022.022-.048.033-.071.014-.03.03-.058.04-.089l.003-.007c.043-.114.074-.232.09-.352v-.02c.023-.185-.01-.356-.056-.538a2.66 2.66 0 00-.115-.381l-.022-.06a2.157 2.157 0 00-.048-.108c.029.006.056.017.085.02.073.005.147.01.22.01.061 0 .12-.005.18-.006l.001-.001c.083-.01.166-.025.246-.044.086-.02.169-.045.252-.073l.152-.064c.06-.026.12-.05.175-.087.056-.035.113-.067.164-.109a1.12 1.12 0 00.145-.12c.089-.085.172-.18.235-.284.074-.123.137-.248.178-.382.01-.033.013-.067.02-.1.006-.032.013-.063.015-.095.003-.03.001-.06.003-.09l.003-.048.004-.047-.003-.002.007-.047c.004-.067.005-.136-.002-.2-.012-.078-.03-.156-.054-.23a1.12 1.12 0 00-.166-.345 1.236 1.236 0 00-.21-.246 1.415 1.415 0 00-.348-.219 1.87 1.87 0 00-.317-.116l-.098-.026c-.02-.005-.038-.015-.058-.02a2.17 2.17 0 00-.227-.036 1.836 1.836 0 00-.26-.015c-.097.001-.195.007-.29.023l-.01.001a.59.59 0 00-.068.01c.134-.197.26-.4.378-.607.232-.41.427-.843.538-1.298.112-.458.143-.93.08-1.398a4.078 4.078 0 00-.39-1.282c-.23-.432-.528-.823-.884-1.167a.555.555 0 00-.048-.044c-.14-.123-.287-.235-.444-.335-.312-.2-.667-.338-1.04-.407a3.199 3.199 0 00-1.1-.016c-.32.046-.63.138-.921.27a3.23 3.23 0 00-.805.488 3.447 3.447 0 00-.655.653c-.2.264-.36.549-.477.852a3.6 3.6 0 00-.206.983 3.77 3.77 0 00.044.992c.042.243.11.478.206.703z" />
                            </svg>
                            <span>Linux</span>
                        </div>
                    </div>
                </div>

                {/* Code Comparison Card - Before/After */}
                <div className="mt-16 lg:mt-20">
                    <div className="rounded-2xl bg-gray-950 dark:bg-white/5 dark:ring-1 dark:ring-white/10 p-1.5 shadow-xl">
                        <div className="rounded-xl overflow-hidden">
                            {/* Editor Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-900/50 border-b border-gray-800">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 flex items-center justify-center gap-6">
                                    <span className="text-xs font-mono text-gray-500 line-through opacity-60">claude_desktop_config.json</span>
                                    <span className="text-xs font-mono text-emerald-400">Relay App</span>
                                </div>
                                <div className="w-12" />
                            </div>

                            {/* Code Content - Side by side comparison */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
                                {/* Before - JSON Config */}
                                <div className="p-6 bg-gray-950/50 dark:bg-gray-900/50">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xs font-medium text-red-400 bg-red-500/10 px-2 py-1 rounded">Before</span>
                                        <span className="text-xs text-gray-500">Manual JSON editing</span>
                                    </div>
                                    <pre className="text-sm font-mono leading-6 overflow-x-auto">
                                        <code>
                                            <span className="text-gray-500">{"{"}</span>{"\n"}
                                            <span className="text-sky-300">  &quot;mcpServers&quot;</span><span className="text-gray-500">: {"{"}</span>{"\n"}
                                            <span className="text-sky-300">    &quot;github&quot;</span><span className="text-gray-500">: {"{"}</span>{"\n"}
                                            <span className="text-sky-300">      &quot;command&quot;</span><span className="text-gray-500">:</span> <span className="text-emerald-300">&quot;npx&quot;</span><span className="text-gray-500">,</span>{"\n"}
                                            <span className="text-sky-300">      &quot;args&quot;</span><span className="text-gray-500">: [</span>{"\n"}
                                            <span className="text-emerald-300">        &quot;-y&quot;</span><span className="text-gray-500">,</span>{"\n"}
                                            <span className="text-emerald-300">        &quot;@modelcontextprotocol/...&quot;</span>{"\n"}
                                            <span className="text-gray-500">      ],</span>{"\n"}
                                            <span className="text-sky-300">      &quot;env&quot;</span><span className="text-gray-500">: {"{"}</span>{"\n"}
                                            <span className="text-sky-300">        &quot;GITHUB_TOKEN&quot;</span><span className="text-gray-500">:</span> <span className="text-emerald-300">&quot;ghp_xxx&quot;</span>{"\n"}
                                            <span className="text-gray-500">      {"}"}</span>{"\n"}
                                            <span className="text-gray-500">    {"}"}</span>{"\n"}
                                            <span className="text-gray-500">  {"}"}</span>{"\n"}
                                            <span className="text-gray-500">{"}"}</span>
                                        </code>
                                    </pre>
                                </div>

                                {/* After - Relay UI */}
                                <div className="p-6 bg-gray-900/30 dark:bg-gray-900/30">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">After</span>
                                        <span className="text-xs text-gray-500">Visual configuration in Relay</span>
                                    </div>
                                    <div className="space-y-3">
                                        {/* Mock UI Elements */}
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                                            <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-xs">
                                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-white">GitHub</div>
                                                <div className="text-xs text-gray-400">Repository access for Claude</div>
                                            </div>
                                            <div className="w-10 h-5 bg-emerald-500 rounded-full relative">
                                                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                                            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-xs text-white font-bold">S</div>
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-white">Slack</div>
                                                <div className="text-xs text-gray-400">Send messages & read channels</div>
                                            </div>
                                            <div className="w-10 h-5 bg-emerald-500 rounded-full relative">
                                                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-xs text-white font-bold">P</div>
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-white">PostgreSQL</div>
                                                <div className="text-xs text-gray-400">Database queries & schema</div>
                                            </div>
                                            <div className="w-10 h-5 bg-gray-600 rounded-full relative">
                                                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="text-center pt-2">
                                            <span className="text-xs text-gray-500">+ 290 more servers in marketplace</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
