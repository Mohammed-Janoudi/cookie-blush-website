
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Classic Chocolate Chip",
    description: "Rich, buttery, and filled with premium chocolate",
    price: "4.50",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Lavender Shortbread",
    description: "Delicate butter cookies with a hint of lavender",
    price: "5.00",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Matcha Green Tea",
    description: "Cookies with authentic matcha",
    price: "5.50",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Salted Caramel",
    description: "Sweet and salty perfection in every bite",
    price: "5.00",
    image: "/julissa-capdevilla-tDoHiqXl9b8-unsplash.jpg",
  },
  {
    id: 5,
    name: "Brookies",
    description: "The perfect blend of brownies and cookies in one treat",
    price: "5.50",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Classic Brownies",
    description: "Rich, fudgy brownies with a perfectly crispy top",
    price: "5.00",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Tres Leches Cake",
    description: "Moist sponge cake soaked in three kinds of milk",
    price: "6.50",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80",
  },
];

export const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: `$${product.price}`,
    });
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-nude-100 text-nude-300 rounded-full text-sm">
            Our Selection
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-nude-300">
            Featured Products
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square rounded-2xl bg-nude-50 mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-nude-300">{product.name}</h3>
              <p className="mt-1 text-nude-300/70 text-sm">{product.description}</p>
              <p className="mt-2 text-nude-300">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full px-4 py-2 bg-nude-200 text-white rounded-full hover:bg-nude-200/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
