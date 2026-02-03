import { Metadata } from 'next';
import { Terminal, Activity } from "lucide-react";

export const metadata: Metadata = {
    title: "Debugging - Relay Documentation",
    description: "Diagnose connection issues using live server logs.",
};

export default function DebuggingPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Debugging
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    See what's happening under the hood.
                </p>
            </div>

            <section className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                    One of Relay's most powerful features is the built-in terminal for every server.
                </p>

                <h3>Viewing Logs</h3>
                <p>
                    To view the logs for a running server:
                </p>
                <ol>
                    <li>Go to the <strong>Servers</strong> list.</li>
                    <li>Locate the server card.</li>
                    <li>Click the <Terminal className="inline w-4 h-4 mx-1" /> <strong>Terminal icon</strong>.</li>
                </ol>

                <h3>Understanding the Output</h3>
                <p>
                    The log window displays two types of output:
                </p>
                <ul>
                    <li><strong>stdout</strong>: Standard output. This typically contains the JSON-RPC messages (if not hidden) or info logs.</li>
                    <li><strong>stderr</strong>: Standard error. This is where most servers print debug information, warnings, and crash reports.</li>
                </ul>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg not-prose">
                    <h4 className="flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-200 mb-2">
                        <Activity className="w-5 h-5" />
                        Common Errors
                    </h4>
                    <ul className="list-disc list-inside text-sm text-amber-800 dark:text-amber-300 space-y-1">
                        <li><code>Module not found</code>: You need to install dependencies (npm install).</li>
                        <li><code>401 Unauthorized</code>: Your API key is missing or invalid. Check your environment variables.</li>
                        <li><code>EADDRINUSE</code>: The server is trying to bind to a port that is already taken.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
