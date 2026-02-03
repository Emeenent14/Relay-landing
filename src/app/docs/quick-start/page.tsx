import { Metadata } from 'next';
import { Plus, Play, Link as LinkIcon } from "lucide-react";

export const metadata: Metadata = {
    title: "Quick Start - Relay Documentation",
    description: "Learn how to add your first MCP server and connect it to Claude Desktop in 5 minutes.",
};

export default function QuickStartPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Quick Start
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Connect your first tool to Claude in under 5 minutes.
                </p>
            </div>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Add a Server</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Let's start by adding the <strong>Brave Search</strong> server for web browsing capabilities.
                </p>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                    <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                        <li>Open Relay and navigate to the <strong>Marketplace</strong> tab.</li>
                        <li>Search for "Brave".</li>
                        <li>Click <strong>Install</strong> on the <strong>Brave Search</strong> card.</li>
                        <li>
                            You'll be prompted for a <code>BRAVE_API_KEY</code>.
                            <br />
                            <span className="text-sm text-gray-500 ml-5">
                                (Get a free key from <a href="https://brave.com/search/api/" target="_blank" className="text-sky-600 hover:underline">brave.com</a>)
                            </span>
                        </li>
                        <li>Paste your key and click <strong>Save Server</strong>.</li>
                    </ol>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Verify Connection</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Before connecting to Claude, let's make sure the server works within Relay.
                </p>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                    <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                        <li>Go to your <strong>Servers</strong> list.</li>
                        <li>Turn the toggle switch <strong>ON</strong>. Ideally, the dot should turn green.</li>
                        <li>Click the <strong>Logs (Terminal)</strong> icon. You should see "Server initialized" or similar output.</li>
                    </ol>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Connect to Claude Desktop</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Now export your configuration to Claude.
                </p>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                    <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                        <li>In Relay, click the <strong>Export</strong> button in the top right.</li>
                        <li>Select <strong>Claude Desktop</strong> from the dropdown.</li>
                        <li>Click <strong>Export Config</strong>. Relay will overwrite your local configuration file with the correct paths.</li>
                        <li>Restart the <strong>Claude Desktop</strong> app.</li>
                    </ol>
                </div>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">🎉 Success!</h3>
                <p className="text-green-700 dark:text-green-300">
                    Open Claude and ask: <em>"Search the web for the latest artificial intelligence news."</em>
                    <br />
                    You should see it use the <strong>brave-search</strong> tool!
                </p>
            </div>
        </div>
    );
}
