export interface User {
  email: string;
  isAuthenticated: boolean;
}

export interface StoreState {
  user: User | null;
  cart: CartItem[];
  selectedRestaurants: Restaurant[];
  userLocation: UserLocation | null;
  setUser: (user: User | null) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  selectRestaurant: (restaurant: Restaurant) => void;
  clearCart: () => void;
  setUserLocation: (location: UserLocation) => void;
}