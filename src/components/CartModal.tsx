import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useStore } from '../store/useStore';
import { restaurants } from '../data/restaurants';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/currency';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useStore();
  const navigate = useNavigate();

  const itemsByRestaurant = cart.reduce((acc, item) => {
    const restaurant = restaurants.find(r => r.id === item.restaurantId);
    if (!acc[item.restaurantId]) {
      acc[item.restaurantId] = {
        restaurant,
        items: [],
        subtotal: 0
      };
    }
    acc[item.restaurantId].items.push(item);
    acc[item.restaurantId].subtotal += item.price * item.quantity;
    return acc;
  }, {} as Record<string, { restaurant: typeof restaurants[0] | undefined, items: typeof cart, subtotal: number }>);

  const total = Object.values(itemsByRestaurant).reduce(
    (sum, { subtotal }) => sum + subtotal,
    0
  );

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-lg font-medium">Your Cart</Dialog.Title>
                  <button onClick={onClose}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                  {Object.entries(itemsByRestaurant).map(([restaurantId, { restaurant, items }]) => (
                    <div key={restaurantId} className="mb-4 pb-4 border-b">
                      <h4 className="font-medium text-sm text-gray-600 mb-2">{restaurant?.name}</h4>
                      <div className="space-y-2">
                        {items.map((item) => (
                          <div key={item.id} className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                              <span className="bg-primary-50 text-primary-600 px-1.5 rounded">
                                {item.quantity}
                              </span>
                              <span>{item.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span>{formatPrice(item.price * item.quantity)}</span>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-600 text-xs"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Total Amount</span>
                    <span className="font-medium text-lg">{formatPrice(total)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-primary-500 text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};