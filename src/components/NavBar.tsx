
import { ShoppingBag } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-nude-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-nude-300 text-xl tracking-wider">
            Délice
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
            <button className="text-nude-300 hover:text-nude-200 transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
