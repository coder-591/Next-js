import FeaturesSections from "@/Components/FeaturesSections";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import InfiniteCards from "@/Components/InfiniteCards";
import Instructors from "@/Components/Instructors";
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
      <Instructors />
      <Footer />
    </main>
  );
}
