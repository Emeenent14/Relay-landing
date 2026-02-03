import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "MCP Servers - Relay Documentation",
    description: "Understanding Model Context Protocol servers and how Relay manages them.",
};

export default function ServersPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    MCP Servers
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Servers are the bridge between your AI and your data.
                </p>
            </div>

            <section className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                    In the Model Context Protocol (MCP) architecture, a <strong>Server</strong> is a standalone process that provides tools, resources, or prompts to a Client (like Claude).
                </p>
                <h3>Types of Servers</h3>
                <ul>
                    <li><strong>Stdio Servers</strong>: These run as local processes/commands (e.g., `npx`, `python`, `docker`). Relay runs these directly on your machine. This is the most common type.</li>
                    <li><strong>SSE Servers</strong>: These run over HTTP using Server-Sent Events. Useful for remote servers. (Relay validates these via the Inspector).</li>
                </ul>

                <h3>Configuration</h3>
                <p>
                    Relay stores the configuration for each server locally in a SQLite database. A server configuration consists of:
                </p>
                <ul>
                    <li><strong>Command</strong>: The executable to run (e.g., `node`, `python`, `uv`).</li>
                    <li><strong>Arguments</strong>: List of flags and script paths (e.g., `build/index.js`, `--verbose`).</li>
                    <li><strong>Environment Variables</strong>: Key-value pairs like `API_KEY` or `DATABASE_URL`.</li>
                </ul>

                <h3>Security Model</h3>
                <p>
                    Relay prioritizes security by ensuring environment variables marked as <strong>Secret</strong> are never stored in plain text.
                    When you run a server, Relay fetches the secret from your OS keychain and injects it into the process memory only for the duration of the session.
                </p>
            </section>
        </div>
    );
}
