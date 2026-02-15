import { Metadata } from 'next';
import Link from "next/link";
import { Monitor, Apple, Terminal } from "lucide-react";

export const metadata: Metadata = {
    title: "Installation - Relay Documentation",
    description: "Install Relay on Windows, macOS, or Linux. System requirements and step-by-step setup guide.",
};

export default function InstallationPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Installation
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Get up and running with Relay on your preferred operating system.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="#windows" className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-sky-500 transition-colors bg-white dark:bg-gray-900">
                    <div className="flex items-center gap-3 mb-2">
                        <Monitor className="w-5 h-5 text-sky-500" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Windows</h3>
                    </div>
                    <p className="text-sm text-gray-500">Windows 10/11 (x64)</p>
                </a>
                <a href="#macos" className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-sky-500 transition-colors bg-white dark:bg-gray-900">
                    <div className="flex items-center gap-3 mb-2">
                        <Apple className="w-5 h-5 text-sky-500" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">macOS</h3>
                    </div>
                    <p className="text-sm text-gray-500">macOS 10.15+ (Intel/Silicon)</p>
                </a>
                <a href="#linux" className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-sky-500 transition-colors bg-white dark:bg-gray-900">
                    <div className="flex items-center gap-3 mb-2">
                        <Terminal className="w-5 h-5 text-sky-500" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Linux</h3>
                    </div>
                    <p className="text-sm text-gray-500">Ubuntu 20.04+, Fedora, Arch</p>
                </a>
            </div>

            <section id="windows">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Windows</h2>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Download the latest <code>.msi</code> installer from the <Link href="/#download" className="text-sky-600 hover:underline">downloads page</Link>.</li>
                        <li>Double-click the installer to launch the setup wizard.</li>
                        <li>Follow the prompts to install Relay to your <code>AppData</code> folder.</li>
                        <li>Once installed, launch Relay from the Start menu.</li>
                    </ol>
                </div>
            </section>

            <section id="macos">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">macOS</h2>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Download the <code>.dmg</code> file for your architecture (Apple Silicon vs Intel).</li>
                        <li>Open the disk image and drag the <strong>Relay</strong> app to your <strong>Applications</strong> folder.</li>
                        <li>
                            <p className="inline"><strong>Note:</strong> On first launch, you may see a security warning since the app is not signed by the App Store.</p>
                            <ul className="list-disc list-inside ml-6 mt-1 text-sm text-gray-500">
                                <li>Right-click the app and select <strong>Open</strong>.</li>
                                <li>Click <strong>Open</strong> again in the dialog box to confirm.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </section>

            <div className="mt-8 p-4 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-200 rounded-lg">
                <strong>Next Steps:</strong> Check out the <Link href="/docs/quick-start" className="underline font-semibold">Quick Start guide</Link> to configure your first server.
            </div>
        </div>
    );
}
