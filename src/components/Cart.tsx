
import { useCart } from '@/contexts/CartContext';
import { X } from 'lucide-react';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-nude-300 mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-nude-300/70">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-nude-50 p-4 rounded-lg"
              >
                <div>
                  <h3 className="text-nude-300">{item.name}</h3>
                  <p className="text-nude-300/70">{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="bg-white border border-nude-200 rounded-md p-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-nude-300/70 hover:text-nude-300"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-lg font-medium text-nude-300">
              Total: ${cartTotal}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
