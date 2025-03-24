import React, { useState } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { CartModal } from './CartModal';
import { LocationPicker } from './LocationPicker';
import { useStore } from '../store/useStore';
import { restaurants } from '../data/restaurants';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export const RestaurantList: React.FC = () => {
  const { cart, user, userLocation } = useStore();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-400 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Duo Food Ordering</h1>
              <p className="text-primary-100 mt-1">Order from multiple restaurants at once</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm">
                <p className="font-medium">{user?.phone}</p>
                {userLocation && (
                  <p className="text-primary-100 truncate max-w-xs">
                    {userLocation.address}
                  </p>
                )}
              </div>
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
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!userLocation && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Location</h2>
            <LocationPicker />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Popular Restaurants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {restaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};