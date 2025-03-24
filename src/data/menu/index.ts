import { MenuItem } from '../../types';

export const menuItems: Record<string, MenuItem[]> = {
  'n1': [
    {
      id: 'n1_1',
      name: 'Butter Chicken',
      description: 'Tender chicken in rich tomato gravy with butter and cream',
      price: 320,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
      restaurantId: 'n1'
    },
    // ... other North Indian items
  ],
  's1': [
    {
      id: 's1_1',
      name: 'Masala Dosa',
      description: 'Crispy rice crepe filled with spiced potato masala',
      price: 120,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: 's1'
    },
    // ... other South Indian items
  ],
  'c1': [
    {
      id: 'c1_1',
      name: 'Schezwan Noodles',
      description: 'Spicy wok-tossed noodles with vegetables',
      price: 220,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb',
      restaurantId: 'c1'
    },
    // ... other Chinese items
  ],
  'st1': [
    {
      id: 'st1_1',
      name: 'Pani Puri',
      description: 'Crispy puris with spicy mint water and potato filling',
      price: 80,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: 'st1'
    },
    // ... other Street Food items
  ],
  'ct1': [
    {
      id: 'ct1_1',
      name: 'Wood Fired Pizza',
      description: 'Classic Margherita with fresh basil and mozzarella',
      price: 450,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: 'ct1'
    },
    // ... other Continental items
  ],
  'd1': [
    {
      id: 'd1_1',
      name: 'Gulab Jamun',
      description: 'Deep-fried milk solids soaked in sugar syrup',
      price: 150,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: 'd1'
    },
    // ... other Dessert items
  ]
};