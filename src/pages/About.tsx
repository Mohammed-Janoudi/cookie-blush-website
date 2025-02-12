import { NavBar } from "@/components/NavBar";
import { CartProvider } from "@/contexts/CartContext";
import { Heart, Cookie, Star, ChefHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const About = () => {
  return (
    <CartProvider>
      <main className="min-h-screen bg-nude-50">
        <NavBar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Animated Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl font-light text-nude-300 mb-4">About Damdoom</h1>
              <p className="text-nude-200 text-lg">Crafting Sweet Memories, One Cookie at a Time</p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Column with Story */}
              <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-nude-100 p-3 rounded-full">
                        <Heart className="w-6 h-6 text-nude-300" />
                      </div>
                      <div>
                        <h2 className="text-xl font-medium text-nude-300 mb-3">Our Story</h2>
                        <p className="text-nude-300/80 leading-relaxed">
                          What started as a simple passion in a small kitchen has blossomed into 
                          a journey of creating joy through delicious treats. Each recipe tells 
                          a story of dedication and love for the art of baking.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-nude-100 p-3 rounded-full">
                        <ChefHat className="w-6 h-6 text-nude-300" />
                      </div>
                      <div>
                        <h2 className="text-xl font-medium text-nude-300 mb-3">The Process</h2>
                        <p className="text-nude-300/80 leading-relaxed">
                          Every cookie is carefully crafted using traditional recipes and the finest 
                          ingredients. We believe in taking the time to perfect each batch, ensuring 
                          consistency and quality in every bite.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column with Stats and Features */}
              <div className="space-y-6 animate-fade-in [animation-delay:400ms]">
                <div className="grid grid-cols-2 gap-4">
                  {/* Interactive Stat Cards */}
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow">
                        <Cookie className="w-8 h-8 text-nude-200 mx-auto mb-2" />
                        <h3 className="text-2xl font-medium text-nude-300">50+</h3>
                        <p className="text-nude-300/70 text-sm">Unique Recipes</p>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <p className="text-sm text-nude-300/80">
                        Over 50 unique cookie recipes developed and perfected over years of baking experience.
                      </p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow">
                        <Star className="w-8 h-8 text-nude-200 mx-auto mb-2" />
                        <h3 className="text-2xl font-medium text-nude-300">1000+</h3>
                        <p className="text-nude-300/70 text-sm">Happy Customers</p>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <p className="text-sm text-nude-300/80">
                        Serving over a thousand satisfied customers with our delicious treats.
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-medium text-nude-300 mb-4">Our Promise</h2>
                    <p className="text-nude-300/80 leading-relaxed">
                      What sets Cookies by Damdoom apart is not just the quality of ingredients 
                      or the unique flavor combinations, but the love and attention to detail 
                      that goes into every single item. From our signature chocolate chip cookies 
                      to our seasonal specialties, each treat is made with care and precision.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="text-center animate-fade-in [animation-delay:600ms]">
              <blockquote className="text-xl italic text-nude-300/90">
                "Baking is love made visible"
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </CartProvider>
  );
};

export default About;