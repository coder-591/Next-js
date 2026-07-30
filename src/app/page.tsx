import FeaturesSections from "@/Components/FeaturesSections";
import HeroSection from "@/Components/HeroSection";
import InfiniteCards from "@/Components/InfiniteCards";
import UpCommingWebinars from "@/Components/UpCommingWebinars";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturesSections />
      <WhyChooseUs />
      <InfiniteCards />
      <UpCommingWebinars/>
    </main>
  );
}
