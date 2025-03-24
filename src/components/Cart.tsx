import React from 'react';
import { useStore } from '../store/useStore';
import { formatPrice } from '../utils/currency';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Your Order</h2>
      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty</p>
          <p className="text-sm text-gray-400 mt-2">Add items from the menu</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center pb-4 border-b">
                <div>
                  <div className="flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center bg-primary-50 text-primary-500 rounded text-sm mr-2">
                      {item.quantity}
                    </span>
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-secondary-400 hover:text-secondary-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-gray-800">Total Amount</span>
              <span className="font-bold text-gray-800">{formatPrice(total)}</span>
            </div>
            <button
              onClick={() => clearCart()}
              className="w-full bg-primary-400 text-white py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};