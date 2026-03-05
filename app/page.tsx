import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CampaignConcept from "@/components/CampaignConcept";
import Partners from "@/components/Partners";
import Problem from "@/components/Problem";
import Offer from "@/components/Offer";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Scholarship from "@/components/Scholarship";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <CampaignConcept />
      <Partners />
      <Problem />
      <Offer />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Scholarship />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
    </main>
  );
}
