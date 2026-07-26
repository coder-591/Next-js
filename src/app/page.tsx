import FeaturesSections from "@/Components/FeaturesSections";
import HeroSection from "@/Components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
     <HeroSection/>
     <FeaturesSections />
    </main>
  )
}
