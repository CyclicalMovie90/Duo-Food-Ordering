import { create } from 'zustand';
import { StoreState } from './types';

export const useStore = create<StoreState>((set) => ({
  user: null,
  cart: [],
  selectedRestaurants: [],
  userLocation: null,
  setUser: (user) => set({ user }),
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),
  selectRestaurant: (restaurant) =>
    set((state) => {
      if (state.selectedRestaurants.some(r => r.id === restaurant.id)) {
        return {
          selectedRestaurants: state.selectedRestaurants.filter(r => r.id !== restaurant.id)
        };
      }
      if (state.selectedRestaurants.length < 2) {
        return {
          selectedRestaurants: [...state.selectedRestaurants, restaurant]
        };
      }
      return state;
    }),
  clearCart: () => set({ cart: [], selectedRestaurants: [] }),
  setUserLocation: (location) => set({ userLocation: location }),
}));