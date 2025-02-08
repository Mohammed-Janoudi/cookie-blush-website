
import { WelcomeOverlay } from "@/components/WelcomeOverlay";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <main className="min-h-screen bg-nude-50">
      <WelcomeOverlay />
      <NavBar />
      <Hero />
      <FeaturedProducts />
    </main>
  );
};

export default Index;
