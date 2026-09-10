import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LogoStrip } from "@/components/LogoStrip";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { TornPaper } from "@/components/sketch/TornPaper";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <LogoStrip />
        <TornPaper />
        <Features />
        <HowItWorks />
        <TornPaper />
        <Testimonials />
        <Pricing />
        <FAQ />
        <TornPaper />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
