import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { CartModal } from './CartModal';
import { useStore } from '../store/useStore';

export const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, user, userLocation } = useStore();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate(user ? '/profile' : '/login');
  };

  return (
    <header className="bg-primary-400 text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div>
              <h1 className="text-3xl font-bold">Duo Food Ordering</h1>
              <p className="text-primary-100 mt-1">Order from multiple restaurants at once</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            {userLocation && (
              <div className="text-sm">
                <p className="text-primary-100 truncate max-w-xs">
                  {userLocation.address}
                </p>
              </div>
            )}
            <button
              onClick={handleAuthClick}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary-500 transition-colors"
            >
              <UserIcon className="h-6 w-6" />
              <span className="text-sm">{user ? 'Profile' : 'Login'}</span>
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-primary-500 transition-colors"
              aria-label="Open cart"
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
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};