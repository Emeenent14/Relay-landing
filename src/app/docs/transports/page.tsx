import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Transports - Relay Documentation",
    description: "Learn about Stdio and SSE transports in Relay.",
};

export default function TransportsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Transports
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    How Relay communicates with MCP servers.
                </p>
            </div>

            <section className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                    The Model Context Protocol (MCP) defines "transports" as the communication details for exchanging JSON-RPC messages between clients and servers. Relay currently supports the standard <strong>Stdio</strong> transport and validates <strong>SSE</strong> (Server-Sent Events).
                </p>

                <h3>1. Stdio (Standard Input/Output)</h3>
                <p>
                    This is the most common transport for local servers. Relay spawns the server as a child process (e.g., `node server.js` or `python server.py`) and communicates via `stdin` and `stdout`.
                </p>
                <ul>
                    <li><strong>Speed</strong>: Extremely fast, no network overhead.</li>
                    <li><strong>Security</strong>: Runs locally on your machine.</li>
                    <li><strong>Configuration</strong>: Requires a <code>command</code> (executable) and <code>args</code> (arguments).</li>
                </ul>

                <h3>2. SSE (Server-Sent Events)</h3>
                <p>
                    SSE is used for remote servers or servers running over HTTP.
                </p>
                <ul>
                    <li><strong>Use Case</strong>: Connecting to a server running on a Docker container or a remote cloud instance.</li>
                    <li><strong>Configuration</strong>: Requires a URL (e.g., `http://localhost:8000/sse`).</li>
                    <li><em>Note: SSE support in Relay's UI is currently in beta via the Inspector.</em></li>
                </ul>
            </section>
        </div>
    );
}
