import React from 'react';
import { useParams } from 'react-router-dom';
import { MenuList } from '../components/MenuList';
import { restaurants, menuItems } from '../data/restaurants';

export const RestaurantMenu: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);
  const menu = id ? menuItems[id] : [];

  if (!restaurant) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Restaurant not found</h2>
          <p className="mt-2 text-gray-600">The restaurant you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{restaurant.name}</h1>
        <p className="text-gray-600 mt-2">{restaurant.cuisine}</p>
        <div className="flex items-center gap-4 mt-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {restaurant.rating} ★
          </span>
          <span className="text-gray-500">{restaurant.deliveryTime} mins delivery</span>
        </div>
      </div>
      <MenuList items={menu} />
    </main>
  );
};