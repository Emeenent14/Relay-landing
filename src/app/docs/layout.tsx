import { DocsSidebar } from "@/components/docs-sidebar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />
            <div className="max-w-screen-2xl mx-auto flex">
                <DocsSidebar />
                <main className="flex-1 min-w-0 py-8 px-4 sm:px-6 lg:px-8 lg:py-12">
                    <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
