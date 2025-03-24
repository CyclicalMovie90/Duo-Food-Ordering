export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: number;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  restaurantId: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  items: CartItem[];
  restaurants: string[];
  totalAmount: number;
  deliveryAddress: string;
  status: 'pending' | 'preparing' | 'delivering' | 'delivered';
}

export interface UserLocation {
  lat: number;
  lng: number;
  address: string;
}