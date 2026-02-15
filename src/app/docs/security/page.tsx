import { Metadata } from 'next';
import { Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Security - Relay Documentation",
    description: "How Relay handles your API keys and sensitive data.",
};

export default function SecurityPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Security
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Your secrets never leave your device.
                </p>
            </div>

            <section className="prose prose-gray dark:prose-invert max-w-none">
                <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg not-prose mb-8">
                    <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div>
                        <h3 className="text-base font-semibold text-blue-900 dark:text-blue-100 m-0">Zero-Compromise Privacy</h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300 m-0">
                            Relay is a &quot;Local First&quot; app. We do not have servers, we do not track you, and we cannot see your API keys.
                        </p>
                    </div>
                </div>

                <h3>Secure Secret Storage</h3>
                <p>
                    When you add an environment variable to a server configuration (like `OPENAI_API_KEY` or `GITHUB_TOKEN`), you can toggle the <strong>Lock Icon</strong> to mark it as a secret.
                </p>
                <p>
                    <strong>Secrets are handled differently than normal variables:</strong>
                </p>
                <ul>
                    <li><strong>Storage</strong>: They are NOT stored in Relay&apos;s database or configuration files. Instead, they are saved directly to your operating system&apos;s native keychain (Windows Credential Manager, macOS Keychain).</li>
                    <li><strong>Runtime</strong>: When you start a server, Relay retrieves the secret from the keychain in memory and injects it into the process environment.</li>
                    <li><strong>Export</strong>: When you export configurations to other clients (like Claude), secrets are NOT exported by default to prevent accidental leaks, unless the target client supports secure storage references.</li>
                </ul>

                <h3>Network Activity</h3>
                <p>
                    Relay makes network requests only for:
                </p>
                <ol>
                    <li>Fetching the <strong>Marketplace Catalog</strong> (public JSON file).</li>
                    <li>Checking for <strong>App Updates</strong> (GitHub Releases).</li>
                </ol>
                <p>
                    Relay does <strong>not</strong> proxy your MCP traffic. When you use a server (e.g., Brave Search), the traffic goes directly from the local server process to the API provider.
                </p>
            </section>
        </div>
    );
}
