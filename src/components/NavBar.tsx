
import { ShoppingBag } from "lucide-react";
import Logo from "../1b704c3d-0db6-496c-a4ca-551a39374261.png";
import { useCart } from "@/contexts/CartContext";
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Cart } from "@/contexts/Cart";

export const NavBar = () => {
  const { items } = useCart();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-nude-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2 text-nude-300 text-xl tracking-wider">
            <img src={Logo} alt="Logo" className="w-20 h-20" /> 
            <span>Cookies By Damdoom</span>
          </a>

          <div className="flex items-center space-x-8">
            <a href="#products" className="text-nude-300 hover:text-nude-200 transition-colors">
              Products
            </a>
            <a href="#about" className="text-nude-300 hover:text-nude-200 transition-colors">
              About
            </a>
            <a href="#contact" className="text-nude-300 hover:text-nude-200 transition-colors">
              Contact
            </a>
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
      </div>
    </nav>
  );
};
