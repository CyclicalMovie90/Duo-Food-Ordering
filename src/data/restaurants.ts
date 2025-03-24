import { Restaurant, MenuItem } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Biryani House',
    cuisine: 'North Indian • Biryani • Mughlai',
    rating: 4.2,
    deliveryTime: 25,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
    location: { lat: 12.9716, lng: 77.5946 },
  },
  {
    id: '2',
    name: 'Dragon Wok',
    cuisine: 'Chinese • Asian • Noodles',
    rating: 4.4,
    deliveryTime: 30,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e',
    location: { lat: 12.9717, lng: 77.5947 },
  },
  {
    id: '3',
    name: 'South Spice',
    cuisine: 'South Indian • Dosa • Idli',
    rating: 4.5,
    deliveryTime: 20,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
    location: { lat: 12.9718, lng: 77.5948 },
  },
  {
    id: '4',
    name: 'Pizza Paradise',
    cuisine: 'Italian • Pizza • Pasta',
    rating: 4.3,
    deliveryTime: 35,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
    location: { lat: 12.9719, lng: 77.5949 },
  },
  {
    id: '5',
    name: 'Street Food Corner',
    cuisine: 'Street Food • Chaat • Snacks',
    rating: 4.6,
    deliveryTime: 15,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    location: { lat: 12.9720, lng: 77.5950 },
  },
  {
    id: '6',
    name: 'Sweet Treats',
    cuisine: 'Desserts • Ice Cream • Beverages',
    rating: 4.7,
    deliveryTime: 25,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
    location: { lat: 12.9721, lng: 77.5951 },
  }
];

export const menuItems: Record<string, MenuItem[]> = {
  '1': [
    {
      id: '1_1',
      name: 'Hyderabadi Chicken Biryani',
      description: 'Aromatic basmati rice cooked with tender chicken and authentic spices',
      price: 299,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
      restaurantId: '1'
    },
    {
      id: '1_2',
      name: 'Mutton Biryani',
      description: 'Tender mutton pieces cooked with fragrant rice and spices',
      price: 349,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
      restaurantId: '1'
    },
    {
      id: '1_3',
      name: 'Butter Chicken',
      description: 'Tender chicken in rich tomato and butter gravy',
      price: 329,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
      restaurantId: '1'
    },
    {
      id: '1_4',
      name: 'Dal Makhani',
      description: 'Black lentils slow cooked with cream and butter',
      price: 249,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec',
      restaurantId: '1'
    },
    {
      id: '1_5',
      name: 'Paneer Butter Masala',
      description: 'Cottage cheese in rich tomato gravy',
      price: 279,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
      restaurantId: '1'
    },
    {
      id: '1_6',
      name: 'Chicken Tikka',
      description: 'Marinated chicken pieces grilled in tandoor',
      price: 289,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0',
      restaurantId: '1'
    },
    {
      id: '1_7',
      name: 'Garlic Naan',
      description: 'Tandoor-baked flatbread with garlic',
      price: 69,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec',
      restaurantId: '1'
    },
    {
      id: '1_8',
      name: 'Jeera Rice',
      description: 'Basmati rice tempered with cumin',
      price: 179,
      image: 'https://images.unsplash.com/photo-1596797038530-2c107aa2c685',
      restaurantId: '1'
    },
    {
      id: '1_9',
      name: 'Raita',
      description: 'Yogurt with mild spices and vegetables',
      price: 79,
      image: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52',
      restaurantId: '1'
    },
    {
      id: '1_10',
      name: 'Gulab Jamun',
      description: 'Deep-fried milk solids in sugar syrup',
      price: 149,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '1'
    }
  ],
  '2': [
    {
      id: '2_1',
      name: 'Schezwan Noodles',
      description: 'Spicy wok-tossed noodles with vegetables',
      price: 199,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb',
      restaurantId: '2'
    },
    {
      id: '2_2',
      name: 'Kung Pao Chicken',
      description: 'Spicy diced chicken with peanuts and vegetables',
      price: 249,
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e',
      restaurantId: '2'
    },
    {
      id: '2_3',
      name: 'Dim Sum Platter',
      description: 'Assorted steamed dumplings',
      price: 299,
      image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf',
      restaurantId: '2'
    },
    {
      id: '2_4',
      name: 'Chili Paneer',
      description: 'Crispy cottage cheese in spicy sauce',
      price: 229,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
      restaurantId: '2'
    },
    {
      id: '2_5',
      name: 'Veg Spring Rolls',
      description: 'Crispy rolls with vegetable filling',
      price: 179,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
      restaurantId: '2'
    },
    {
      id: '2_6',
      name: 'Manchurian',
      description: 'Vegetable balls in spicy gravy',
      price: 199,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
      restaurantId: '2'
    },
    {
      id: '2_7',
      name: 'Fried Rice',
      description: 'Wok-tossed rice with vegetables',
      price: 189,
      image: 'https://images.unsplash.com/photo-1596797038530-2c107aa2c685',
      restaurantId: '2'
    },
    {
      id: '2_8',
      name: 'Sweet and Sour Soup',
      description: 'Classic Chinese soup',
      price: 149,
      image: 'https://images.unsplash.com/photo-1547928576-965be7f5f6a6',
      restaurantId: '2'
    },
    {
      id: '2_9',
      name: 'Honey Chili Potato',
      description: 'Crispy potato in sweet and spicy sauce',
      price: 169,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
      restaurantId: '2'
    },
    {
      id: '2_10',
      name: 'Chinese Bhel',
      description: 'Crispy noodles with vegetables and sauce',
      price: 159,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb',
      restaurantId: '2'
    }
  ],
  '3': [
    {
      id: '3_1',
      name: 'Masala Dosa',
      description: 'Crispy rice crepe with potato filling',
      price: 129,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_2',
      name: 'Idli Sambar',
      description: 'Steamed rice cakes with lentil soup',
      price: 99,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_3',
      name: 'Vada',
      description: 'Crispy lentil doughnuts',
      price: 89,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_4',
      name: 'Uttapam',
      description: 'Thick rice pancake with toppings',
      price: 139,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_5',
      name: 'Pongal',
      description: 'Rice and lentil porridge',
      price: 119,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_6',
      name: 'Mysore Masala Dosa',
      description: 'Spicy version of masala dosa',
      price: 149,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_7',
      name: 'Rava Dosa',
      description: 'Crispy semolina crepe',
      price: 139,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_8',
      name: 'Filter Coffee',
      description: 'Traditional South Indian coffee',
      price: 49,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_9',
      name: 'Curd Rice',
      description: 'Rice mixed with yogurt and tempering',
      price: 109,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    },
    {
      id: '3_10',
      name: 'Thali',
      description: 'Complete meal with various dishes',
      price: 249,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
      restaurantId: '3'
    }
  ],
  '4': [
    {
      id: '4_1',
      name: 'Margherita Pizza',
      description: 'Classic tomato and mozzarella',
      price: 299,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_2',
      name: 'Pepperoni Pizza',
      description: 'Spicy pepperoni with cheese',
      price: 349,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_3',
      name: 'Pasta Alfredo',
      description: 'Creamy pasta with parmesan',
      price: 279,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_4',
      name: 'BBQ Chicken Pizza',
      description: 'Grilled chicken with BBQ sauce',
      price: 379,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_5',
      name: 'Garlic Bread',
      description: 'Buttery bread with garlic',
      price: 149,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_6',
      name: 'Spaghetti Meatballs',
      description: 'Classic pasta with meatballs',
      price: 329,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_7',
      name: 'Veggie Supreme Pizza',
      description: 'Loaded with fresh vegetables',
      price: 329,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_8',
      name: 'Penne Arrabbiata',
      description: 'Spicy tomato pasta',
      price: 259,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_9',
      name: 'Cheese Burst Pizza',
      description: 'Extra cheese-filled crust',
      price: 399,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    },
    {
      id: '4_10',
      name: 'Tiramisu',
      description: 'Classic Italian dessert',
      price: 199,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      restaurantId: '4'
    }
  ],
  '5': [
    {
      id: '5_1',
      name: 'Pani Puri',
      description: 'Crispy shells with spicy water',
      price: 89,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_2',
      name: 'Bhel Puri',
      description: 'Puffed rice with chutneys',
      price: 79,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_3',
      name: 'Vada Pav',
      description: 'Spicy potato patty in bun',
      price: 49,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_4',
      name: 'Samosa',
      description: 'Crispy pastry with potato filling',
      price: 30,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_5',
      name: 'Dahi Puri',
      description: 'Sweet and spicy yogurt shells',
      price: 99,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_6',
      name: 'Pav Bhaji',
      description: 'Spicy vegetable curry with bread',
      price: 129,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_7',
      name: 'Sev Puri',
      description: 'Crispy puris with toppings',
      price: 89,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_8',
      name: 'Masala Sandwich',
      description: 'Grilled vegetable sandwich',
      price: 79,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_9',
      name: 'Ragda Pattice',
      description: 'Potato patties with pea curry',
      price: 99,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    },
    {
      id: '5_10',
      name: 'Dabeli',
      description: 'Sweet and spicy potato filling in bun',
      price: 59,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      restaurantId: '5'
    }
  ],
  '6': [
    {
      id: '6_1',
      name: 'Gulab Jamun',
      description: 'Deep-fried milk balls in syrup',
      price: 149,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_2',
      name: 'Chocolate Brownie',
      description: 'Rich chocolate dessert',
      price: 129,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_3',
      name: 'Ice Cream Sundae',
      description: 'Assorted ice creams with toppings',
      price: 199,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_4',
      name: 'Rasmalai',
      description: 'Cheese dumplings in milk',
      price: 169,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_5',
      name: 'Falooda',
      description: 'Rose flavored dessert drink',
      price: 159,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_6',
      name: 'Kulfi',
      description: 'Traditional Indian ice cream',
      price: 99,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_7',
      name: 'Jalebi',
      description: 'Spiral sweet in sugar syrup',
      price: 129,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_8',
      name: 'Milkshake',
      description: 'Choice of flavored milkshakes',
      price: 149,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_9',
      name: 'Rasgulla',
      description: 'Cheese balls in sugar syrup',
      price: 139,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    },
    {
      id: '6_10',
      name: 'Hot Chocolate',
      description: 'Rich chocolate beverage',
      price: 169,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      restaurantId: '6'
    }
  ]
};