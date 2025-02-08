
import { WelcomeOverlay } from "@/components/WelcomeOverlay";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <main className="min-h-screen bg-nude-50">
      <WelcomeOverlay />
      <NavBar />
      <Hero />
      <FeaturedProducts />
    </main>

    </CartProvider>
    
  );
};

export default Index;
