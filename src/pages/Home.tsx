import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RestaurantCard } from '../components/RestaurantCard';
import LocationPicker from "../components/LocationPicker";
import { useStore } from '../store/useStore';
import { restaurants } from '../data/restaurants';

export const Home: React.FC = () => {
  const { selectedRestaurants, selectRestaurant, userLocation } = useStore();
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurantId: string) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {!userLocation && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Set Your Location</h2>
          <LocationPicker />
        </section>
      )}

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Popular Restaurants</h2>
          <div className="text-sm text-gray-500">
            {selectedRestaurants.length}/2 selected
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onSelect={() => handleRestaurantClick(restaurant.id)}
              isSelected={selectedRestaurants.some(
                (r) => r.id === restaurant.id
              )}
            />
          ))}
        </div>
      </section>
    </main>
  );
}