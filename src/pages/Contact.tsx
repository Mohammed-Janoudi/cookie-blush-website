
import { NavBar } from "@/components/NavBar";
import { Instagram, Phone, Mail } from "lucide-react";
import { CartProvider } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Contact = () => {
  return (
    <CartProvider>
      <main className="min-h-screen bg-nude-50">
        <NavBar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-3xl mx-auto">
            {/* Animated Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-light text-nude-300 mb-4">Contact Us</h1>
              <p className="text-nude-200 text-lg">We'd Love to Hear From You</p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Instagram */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow animate-fade-in [animation-delay:200ms] cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-nude-100 p-3 rounded-full">
                          <Instagram className="w-6 h-6 text-nude-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-nude-300">Instagram</h3>
                          <p className="text-nude-300/70">@_deema.18</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm text-nude-300/80">
                    Follow us on Instagram for the latest updates, behind-the-scenes content, and special offers!
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/* Phone */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow animate-fade-in [animation-delay:400ms] cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-nude-100 p-3 rounded-full">
                          <Phone className="w-6 h-6 text-nude-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-nude-300">Phone</h3>
                          <p className="text-nude-300/70">+90 (506) 410 12 77</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm text-nude-300/80">
                    Available Monday through Friday, 9 AM to 5 PM EST for all your inquiries.
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/* Email */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow animate-fade-in [animation-delay:600ms] cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-nude-100 p-3 rounded-full">
                          <Mail className="w-6 h-6 text-nude-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-nude-300">Email</h3>
                          <p className="text-nude-300/70">deemayabdou@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm text-nude-300/80">
                    Send us an email for business inquiries, custom orders, or general questions.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Bottom Message */}
            <div className="text-center mt-12 animate-fade-in [animation-delay:800ms]">
              <p className="text-nude-300/70 italic">
                We aim to respond to all inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </main>
    </CartProvider>
  );
};

export default Contact;
