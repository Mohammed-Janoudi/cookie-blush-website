import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";

// ✅ Use the correct public path
const logoPath = "/1b704c3d-0db6-496c-a4ca-551a39374261.png";

export const NavBar = () => {
  const { items } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-nude-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 flex-wrap">
          {/* ✅ Logo to the Left of Text */}
          <Link to="/" className="flex items-center space-x-3 text-nude-300 text-lg md:text-xl tracking-wider">
            <img src={logoPath} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" /> 
            <span>Cookies By Damdoom</span>
          </Link>

          {/* ✅ Mobile-friendly Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-nude-300 hover:text-nude-200 transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-nude-300 hover:text-nude-200 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-nude-300 hover:text-nude-200 transition-colors">
              Contact
            </Link>
          </div>

          {/* ✅ Mobile Drawer for Menu */}
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <button className="text-nude-300 hover:text-nude-200 transition-colors">
                  ☰ {/* Hamburger Icon */}
                </button>
              </DrawerTrigger>
              <DrawerContent className="p-4 space-y-4">
                <Link to="/" className="block text-nude-300 hover:text-nude-200 transition-colors">
                  Products
                </Link>
                <Link to="/about" className="block text-nude-300 hover:text-nude-200 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="block text-nude-300 hover:text-nude-200 transition-colors">
                  Contact
                </Link>
              </DrawerContent>
            </Drawer>
          </div>

          {/* ✅ Shopping Cart */}
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-nude-300 hover:text-nude-200 transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-nude-300 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="max-w-md mx-auto">
                <Cart />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};
