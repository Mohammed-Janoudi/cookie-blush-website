
import { useCart } from '@/contexts/CartContext';
import { X, ShoppingBag, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="p-6">
      {/* Cart Header */}
      <div className="flex items-center gap-3 mb-6">
        <ShoppingBag className="w-6 h-6 text-nude-200" />
        <h2 className="text-xl font-medium text-nude-300">Your Shopping Cart</h2>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-8 animate-fade-in">
          <div className="bg-nude-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8 text-nude-200" />
          </div>
          <p className="text-nude-300/70 mb-2">Your cart is empty</p>
          <p className="text-sm text-nude-300/50">Add some delicious cookies to get started!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          <div className="space-y-4">
            {items.map((item) => (
              <Card
                key={item.id}
                className="p-4 hover:shadow-md transition-shadow animate-fade-in"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-nude-300 font-medium mb-1">{item.name}</h3>
                    <p className="text-nude-200 text-sm">{item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="bg-nude-50 border border-nude-100 rounded-md p-1.5 text-nude-300 focus:outline-none focus:ring-2 focus:ring-nude-200"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-nude-200 hover:text-nude-300 transition-colors p-1.5 hover:bg-nude-50 rounded-full"
                      aria-label="Remove item"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Cart Footer */}
          <div className="border-t border-nude-100 pt-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="text-nude-300">Subtotal</span>
              <span className="text-nude-300 font-medium">${cartTotal}</span>
            </div>

            <div className="bg-nude-50 p-4 rounded-lg flex items-start gap-3 mb-6">
              <AlertCircle className="w-5 h-5 text-nude-200 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-nude-300/70">
                Shipping and taxes will be calculated at checkout
              </p>
            </div>

            <button className="w-full bg-nude-300 text-white py-3 rounded-lg hover:bg-nude-200 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
