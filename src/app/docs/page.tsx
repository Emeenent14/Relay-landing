import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Introduction - Relay Documentation",
    description: "Get started with Relay, the ultimate MCP server manager for Claude and Cursor.",
};

export default function DocsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Introduction to Relay
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Relay is a cross-platform desktop application designed to simplify the management of Model Context Protocol (MCP) servers.
                Instead of manually editing JSON configuration files (`claude_desktop_config.json`) and juggling terminal processes, Relay gives you a unified visual interface to install, configure, and monitor your AI tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">For Developers</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Instantly spin up database connections, Git integrations, and filesystem access for your AI assistant. Debug connections with live logs.
                    </p>
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">For Power Users</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Access a marketplace of 290+ community servers. Connect productivity tools like Notion, Slack, and Google Drive without writing code.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Why use Relay?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-8">
                <li><strong>Visual Management</strong>: Toggle servers on/off with a click.</li>
                <li><strong>Secure Secrets</strong>: API keys are stored in your OS keychain, not plain text.</li>
                <li><strong>Universal Export</strong>: Configure once, export to Claude, Cursor, and VS Code.</li>
                <li><strong>Live Debugging</strong>: See exactly what your AI is sending and receiving.</li>
            </ul>

            <div className="not-prose mt-12 mb-12">
                <a href="/docs/installation" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 transition-colors">
                    Get Started with Installation →
                </a>
            </div>
        </div>
    );
}
