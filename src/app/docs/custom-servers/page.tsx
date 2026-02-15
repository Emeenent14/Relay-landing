import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Adding Custom Servers - Relay Documentation",
    description: "How to configure any MCP server manually without the marketplace.",
};

export default function CustomServersPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Adding Custom Servers
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Connect any local script or executable as an MCP server.
                </p>
            </div>

            <section className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                    While the Marketplace has hundreds of pre-built servers, you may want to run a private script, a local development version, or a server not yet listed.
                </p>

                <h3>Steps to Add a Custom Server</h3>
                <ol>
                    <li>
                        Navigate to the <strong>Servers</strong> tab (your local library).
                    </li>
                    <li>
                        Click the <strong>Add Server</strong> button (top right or center).
                    </li>
                    <li>
                        A dialog will appear with empty fields. Fill them in:
                        <ul>
                            <li><strong>Name</strong>: A display name (e.g., &quot;My Python Script&quot;).</li>
                            <li><strong>Command</strong>: The executable (e.g., `python`, `uv`, `node`). <em>Must be in your system PATH or an absolute path.</em></li>
                            <li><strong>Arguments</strong>: The script path and any flags (e.g., `main.py`, `--verbose`). Enter one argument per line.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Environment Variables</strong>:
                        Click &quot;Add Var&quot; to add API keys or configuration settings required by your script.
                    </li>
                    <li>
                        Click <strong>Create Server</strong>.
                    </li>
                </ol>

                <h3>Example: Running a Local Python Server</h3>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md font-mono text-sm border border-gray-200 dark:border-gray-800">
                    <div><strong>Name:</strong> Local Python Test</div>
                    <div className="mt-2"><strong>Command:</strong> uv</div>
                    <div className="mt-2"><strong>Arguments:</strong></div>
                    <div className="pl-4 text-gray-500">
                        run<br />
                        script.py
                    </div>
                </div>

                <h3>Troubleshooting</h3>
                <p>
                    If your custom server fails to start, use the <strong>Logs</strong> feature (Terminal icon) to see the error output. Common issues include:
                </p>
                <ul>
                    <li>Wrong file path (use absolute paths to be safe).</li>
                    <li>Missing dependencies (run `npm install` or `pip install` in the server directory first).</li>
                    <li>Typo in the command name.</li>
                </ul>
            </section>
        </div>
    );
}
