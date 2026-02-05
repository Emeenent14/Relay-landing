import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relay - MCP Server Management Toolkit",
  description: "The easiest way to manage Model Context Protocol servers for Claude, Cursor, VS Code, and other AI tools. One app, all your MCP servers.",
  keywords: ["MCP", "Model Context Protocol", "Claude", "AI", "Server Management", "Relay"],
  openGraph: {
    title: "Relay - MCP Server Management Toolkit",
    description: "The easiest way to manage Model Context Protocol servers for Claude, Cursor, VS Code, and other AI tools.",
    type: "website",
    siteName: "Relay",
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }], // Add this later
  },
  icons: {
    icon: "/relay.png",
    shortcut: "/relay.png",
    apple: "/relay.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SoftwareApplication
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Relay",
    "operatingSystem": "Windows, macOS, Linux",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A desktop application to manage Model Context Protocol (MCP) servers for AI assistants like Claude and Cursor.",
    "softwareVersion": "0.1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
