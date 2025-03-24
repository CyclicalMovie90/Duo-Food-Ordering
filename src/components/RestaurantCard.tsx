import React from 'react';
import { Restaurant } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  restaurant: Restaurant;
  onSelect: (restaurant: Restaurant) => void;
  isSelected: boolean;
}

export const RestaurantCard: React.FC<Props> = ({
  restaurant,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer ${
        isSelected ? 'ring-2 ring-primary-400' : ''
      }`}
      onClick={() => onSelect(restaurant)}
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-sm font-medium">
          {restaurant.deliveryTime} mins
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{restaurant.name}</h3>
          <div className="flex items-center bg-accent-100 px-2 py-1 rounded">
            <span className="text-accent-700 font-bold text-sm">{restaurant.rating}</span>
            <span className="text-accent-700 ml-1">★</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-2">{restaurant.cuisine}</p>
      </div>
    </div>
  );
};