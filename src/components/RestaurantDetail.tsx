import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuList } from './MenuList';
import { CartModal } from './CartModal';
import { useStore } from '../store/useStore';
import { restaurants, menuItems } from '../data/restaurants';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { cart } = useStore();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const restaurant = restaurants.find(r => r.id === id);
  const menu = menuItems[id!];

  if (!restaurant) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-400 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-primary-500 transition-colors"
            >
              <ShoppingBagIcon className="h-6 w-6 text-white" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="mt-4">
            <p className="text-gray-600">{restaurant.cuisine}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="bg-accent-100 px-2 py-1 rounded">
                <span className="text-accent-700 font-bold">{restaurant.rating}</span>
                <span className="text-accent-700 ml-1">★</span>
              </span>
              <span className="text-gray-600">{restaurant.deliveryTime} mins delivery time</span>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>
          <MenuList items={menu} />
        </section>
      </main>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};