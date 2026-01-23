import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ClientsSection } from "@/components/clients-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[var(--gutter-width,2.5rem)_minmax(0,1fr)_var(--gutter-width,2.5rem)] bg-white dark:bg-gray-950">
      {/* Left Gutter with Pattern - Desktop only */}
      <div className="hidden md:block bg-pattern fixed left-0 top-0 bottom-0 w-[var(--gutter-width,2.5rem)]" />

      {/* Main Content */}
      <div className="col-start-1 md:col-start-2">
        <Header />
        <main className="relative">
          <Hero />
          <ClientsSection />
          <FeaturesSection />
          <HowItWorksSection />
          <CTASection />
        </main>
        <Footer />
      </div>

      {/* Right Gutter with Pattern - Desktop only */}
      <div className="hidden md:block bg-pattern fixed right-0 top-0 bottom-0 w-[var(--gutter-width,2.5rem)]" />
    </div>
  );
}
