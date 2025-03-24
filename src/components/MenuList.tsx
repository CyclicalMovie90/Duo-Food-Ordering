import React from 'react';
import { MenuItem } from '../types';
import { useStore } from '../store/useStore';
import { formatPrice } from '../utils/currency';

interface Props {
  items: MenuItem[];
}

export const MenuList: React.FC<Props> = ({ items }) => {
  const { addToCart, cart } = useStore();

  const getItemQuantity = (itemId: string) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem?.quantity || 0;
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
          <div className="relative w-32 h-32 flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 flex justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
              <div className="text-primary-500 font-medium mb-2">
                {formatPrice(item.price)}
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
            <div className="flex items-start">
              <button
                onClick={() => addToCart(item)}
                className="bg-primary-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-500 shadow-md flex items-center gap-2"
              >
                Add
                {getItemQuantity(item.id) > 0 && (
                  <span className="bg-primary-500 px-2 py-1 rounded-full text-xs">
                    {getItemQuantity(item.id)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};