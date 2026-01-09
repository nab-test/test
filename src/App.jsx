import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Star, ChevronDown, Percent, Filter, MapPin, ChevronLeft, ChevronRight, ArrowLeft, Minus, Plus, Circle, Square, Home as HomeIcon, CreditCard, Bike } from 'lucide-react';

// Dummy Restaurant Data
const restaurants = [
  {
    id: 1,
    name: "Meghana Foods",
    rating: 4.5,
    totalRatings: "10K+",
    deliveryTime: "25-30",
    cuisine: "Biryani, North Indian, Chinese",
    location: "Koramangala",
    offerText: "ITEMS AT ₹179",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Pizza Hut",
    rating: 4.2,
    totalRatings: "5K+",
    deliveryTime: "30-35",
    cuisine: "Pizzas, Italian, Fast Food",
    location: "Indiranagar",
    offerText: "50% OFF UPTO ₹100",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "KFC",
    rating: 4.3,
    totalRatings: "8K+",
    deliveryTime: "20-25",
    cuisine: "Burgers, Fast Food, American",
    location: "Brigade Road",
    offerText: "20% OFF",
    imageUrl: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Burger King",
    rating: 4.1,
    totalRatings: "6K+",
    deliveryTime: "25-30",
    cuisine: "Burgers, American",
    location: "MG Road",
    offerText: "ITEMS AT ₹129",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Domino's Pizza",
    rating: 4.4,
    totalRatings: "12K+",
    deliveryTime: "20-25",
    cuisine: "Pizzas, Italian, Pastas",
    location: "HSR Layout",
    offerText: "60% OFF",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    name: "Truffles",
    rating: 4.6,
    totalRatings: "15K+",
    deliveryTime: "35-40",
    cuisine: "American, Continental, Burgers",
    location: "Koramangala",
    offerText: "FLAT ₹125 OFF",
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop"
  }
];

// Menu Data Generator
const generateMenuData = (restaurantId) => {
  return {
    deals: [
      { id: 1, text: "20% OFF up to ₹50", code: "SWIGGY20" },
      { id: 2, text: "Flat ₹100 OFF", code: "FLAT100" },
      { id: 3, text: "Free Delivery", code: "FREEDEL" },
      { id: 4, text: "Buy 1 Get 1", code: "BOGO" }
    ],
    categories: [
      {
        id: 1,
        name: "Recommended",
        itemCount: 10,
        items: [
          { id: 101, name: "Chicken Biryani", price: 299, description: "Aromatic basmati rice with tender chicken pieces", isVeg: false, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop" },
          { id: 102, name: "Paneer Butter Masala", price: 249, description: "Rich and creamy paneer curry", isVeg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop" },
          { id: 103, name: "Tandoori Chicken", price: 349, description: "Juicy chicken marinated in spices", isVeg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop" },
          { id: 104, name: "Dal Makhani", price: 199, description: "Slow-cooked black lentils with butter", isVeg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
          { id: 105, name: "Mutton Rogan Josh", price: 399, description: "Kashmiri mutton curry with aromatic spices", isVeg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop" }
        ]
      },
      {
        id: 2,
        name: "Starters",
        itemCount: 5,
        items: [
          { id: 201, name: "Veg Spring Rolls", price: 149, description: "Crispy rolls with mixed vegetables", isVeg: true, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop" },
          { id: 202, name: "Chicken Wings", price: 249, description: "Spicy fried chicken wings", isVeg: false, image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop" },
          { id: 203, name: "Paneer Tikka", price: 199, description: "Grilled cottage cheese cubes", isVeg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop" },
          { id: 204, name: "Fish Fingers", price: 279, description: "Crispy fried fish strips", isVeg: false, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop" },
          { id: 205, name: "Hara Bhara Kabab", price: 179, description: "Green vegetable patties", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop" }
        ]
      },
      {
        id: 3,
        name: "Main Course",
        itemCount: 8,
        items: [
          { id: 301, name: "Butter Chicken", price: 329, description: "Creamy tomato-based chicken curry", isVeg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop" },
          { id: 302, name: "Veg Korma", price: 229, description: "Mixed vegetables in cashew gravy", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop" },
          { id: 303, name: "Prawn Curry", price: 449, description: "Coastal style prawn preparation", isVeg: false, image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400&h=300&fit=crop" },
          { id: 304, name: "Palak Paneer", price: 239, description: "Cottage cheese in spinach gravy", isVeg: true, image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop" }
        ]
      },
      {
        id: 4,
        name: "Breads & Rice",
        itemCount: 6,
        items: [
          { id: 401, name: "Garlic Naan", price: 59, description: "Soft bread with garlic topping", isVeg: true, image: "https://images.unsplash.com/photo-1619366662896-4a13b3c29694?w=400&h=300&fit=crop" },
          { id: 402, name: "Butter Naan", price: 49, description: "Classic Indian flatbread", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop" },
          { id: 403, name: "Jeera Rice", price: 149, description: "Fragrant cumin-flavored rice", isVeg: true, image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop" },
          { id: 404, name: "Laccha Paratha", price: 69, description: "Layered whole wheat bread", isVeg: true, image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop" }
        ]
      },
      {
        id: 5,
        name: "Desserts",
        itemCount: 4,
        items: [
          { id: 501, name: "Gulab Jamun", price: 99, description: "Sweet milk dumplings in syrup", isVeg: true, image: "https://images.unsplash.com/photo-1589119908995-c6c94c6c4338?w=400&h=300&fit=crop" },
          { id: 502, name: "Rasmalai", price: 129, description: "Soft cheese patties in sweet milk", isVeg: true, image: "https://images.unsplash.com/photo-1631564858959-1d9fcbac0e5b?w=400&h=300&fit=crop" },
          { id: 503, name: "Ice Cream", price: 89, description: "Assorted flavors", isVeg: true, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop" },
          { id: 504, name: "Chocolate Brownie", price: 149, description: "Warm chocolate dessert", isVeg: true, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop" }
        ]
      }
    ]
  };
};

// Promotional Banners Data
const banners = [
  { id: 1, text: "50% OFF", subtext: "On your first order", gradient: "from-orange-600 to-red-600" },
  { id: 2, text: "BIRYANI FESTIVAL", subtext: "Flat ₹100 off", gradient: "from-purple-600 to-pink-600" },
  { id: 3, text: "FREE DELIVERY", subtext: "On orders above ₹199", gradient: "from-blue-600 to-cyan-600" },
  { id: 4, text: "SUPER SAVER", subtext: "Deals under ₹99", gradient: "from-green-600 to-teal-600" }
];

// Food Categories Data
const categories = [
  { id: 1, name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop" },
  { id: 2, name: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
  { id: 3, name: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop" },
  { id: 4, name: "Chinese", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200&h=200&fit=crop" },
  { id: 5, name: "Dessert", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop" },
  { id: 6, name: "Rolls", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop" }
];

// Shimmer Card Component
const ShimmerCard = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 rounded-xl aspect-[4/3] mb-3"></div>
    <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-full"></div>
  </div>
);

// Restaurant Card Component
const RestaurantCard = ({ restaurant, onClick }) => (
  <div className="cursor-pointer transition-transform hover:scale-95" onClick={onClick}>
    <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3">
      <img 
        src={restaurant.imageUrl} 
        alt={restaurant.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
        <div className="p-4 w-full">
          <p className="text-white font-extrabold text-2xl tracking-tight">
            {restaurant.offerText}
          </p>
        </div>
      </div>
    </div>
    <div className="px-1">
      <h3 className="font-bold text-lg text-[#02060c] mb-1 truncate">{restaurant.name}</h3>
      <div className="flex items-center gap-1 mb-1">
        <Star className="w-4 h-4 fill-green-600 text-green-600" />
        <span className="font-semibold text-[#02060c]">{restaurant.rating}</span>
        <span className="text-[#02060c] mx-1">•</span>
        <span className="text-[#02060c] font-medium">{restaurant.deliveryTime} mins</span>
      </div>
      <p className="text-[#676a6d] text-sm truncate">{restaurant.cuisine}</p>
      <p className="text-[#676a6d] text-sm truncate">{restaurant.location}</p>
    </div>
  </div>
);

// Food Item Card Component
const FoodItemCard = ({ item, quantity, onAdd, onIncrement, onDecrement }) => (
  <div className="py-6 border-b border-gray-200 flex justify-between gap-4">
    <div className="flex-1">
      <div className="flex items-start gap-2 mb-2">
        {item.isVeg ? (
          <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
            <Circle className="w-3 h-3 fill-green-600 text-green-600" />
          </div>
        ) : (
          <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-red-600"></div>
          </div>
        )}
      </div>
      <h4 className="font-semibold text-[#02060c] text-lg mb-2">{item.name}</h4>
      <p className="font-bold text-[#02060c] mb-2">₹{item.price}</p>
      <p className="text-[#676a6d] text-sm leading-relaxed">{item.description}</p>
    </div>
    <div className="relative flex-shrink-0">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-32 h-32 rounded-xl object-cover"
      />
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
        {quantity === 0 ? (
          <button
            onClick={() => onAdd(item)}
            className="bg-white text-green-600 font-bold px-8 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
          >
            ADD
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex items-center">
            <button
              onClick={() => onDecrement(item)}
              className="text-green-600 font-bold px-3 py-2"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-green-600 px-3">{quantity}</span>
            <button
              onClick={() => onIncrement(item)}
              className="text-green-600 font-bold px-3 py-2"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Main App Component
const SwiggyClone = () => {
  const [view, setView] = useState('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState(null);
  const [vegOnly, setVegOnly] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([1]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setMenuData(generateMenuData(restaurant.id));
    setView('menu');
    setExpandedCategories([1]);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const addToCart = (item) => {
    setCart(prev => ({ ...prev, [item.id]: 1 }));
  };

  const incrementItem = (item) => {
    setCart(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
  };

  const decrementItem = (item) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[item.id] === 1) {
        delete newCart[item.id];
      } else {
        newCart[item.id] = newCart[item.id] - 1;
      }
      return newCart;
    });
  };

  const getCartItems = () => {
    if (!menuData) return [];
    const items = [];
    menuData.categories.forEach(category => {
      category.items.forEach(item => {
        if (cart[item.id]) {
          items.push({ ...item, quantity: cart[item.id] });
        }
      });
    });
    return items;
  };

  const calculateTotal = () => {
    return getCartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateSavings = () => {
    return Math.floor(calculateTotal() * 0.15);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const filters = [
    { id: 1, label: "Filter", icon: Filter },
    { id: 2, label: "Sort By" },
    { id: 3, label: "Fast Delivery" },
    { id: 4, label: "New on Swiggy" },
    { id: 5, label: "Ratings 4.0+" }
  ];

  // HOME PAGE
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-white">
        <header className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <h1 className="text-[#fc8019] font-bold text-2xl">Swiggy</h1>
                <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-[#fc8019] transition-colors">
                  <div>
                    <p className="font-bold text-[#02060c] flex items-center gap-1">
                      Location <ChevronDown className="w-4 h-4" />
                    </p>
                    <p className="text-xs text-[#676a6d]">Koramangala, Bangalore</p>
                  </div>
                </div>
              </div>
              
              <nav className="flex items-center gap-6 md:gap-8">
                <button className="flex items-center gap-2 hover:text-[#fc8019] transition-colors">
                  <Search className="w-5 h-5" />
                  <span className="hidden md:inline font-medium">Search</span>
                </button>
                <button className="flex items-center gap-2 hover:text-[#fc8019] transition-colors">
                  <Percent className="w-5 h-5" />
                  <span className="hidden md:inline font-medium">Offers</span>
                </button>
                <button className="hidden md:flex items-center gap-2 hover:text-[#fc8019] transition-colors">
                  <span className="font-medium">Help</span>
                </button>
                <button className="flex items-center gap-2 hover:text-[#fc8019] transition-colors">
                  <User className="w-5 h-5" />
                  <span className="hidden md:inline font-medium">Sign In</span>
                </button>
                <button className="flex items-center gap-2 hover:text-[#fc8019] transition-colors relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="hidden md:inline font-medium">Cart</span>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#fc8019] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </nav>
            </div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {banners.map((banner) => (
              <div 
                key={banner.id}
                className={`min-w-[300px] md:min-w-[400px] h-48 rounded-2xl bg-gradient-to-r ${banner.gradient} flex flex-col justify-center items-center text-white p-6 cursor-pointer hover:scale-105 transition-transform`}
              >
                <h2 className="text-4xl font-extrabold mb-2">{banner.text}</h2>
                <p className="text-lg">{banner.subtext}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-[#02060c] mb-6">What's on your mind?</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col items-center cursor-pointer group">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2 group-hover:scale-110 transition-transform">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium text-[#02060c]">{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4">
          <hr className="border-[#f0f0f5] border-2" />
        </div>

        <section className="sticky top-[72px] z-40 bg-white border-b border-[#f0f0f5]">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id === activeFilter ? null : filter.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap transition-all ${
                      activeFilter === filter.id 
                        ? 'bg-[#f0f0f5] border-[#02060c]' 
                        : 'bg-white border-[#d4d5d9] hover:border-[#02060c]'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span className="font-medium text-sm">{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-[#02060c] mb-6">Restaurants with online food delivery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {loading ? (
              Array(20).fill(0).map((_, i) => <ShimmerCard key={i} />)
            ) : (
              restaurants.map((restaurant) => (
                <RestaurantCard 
                  key={restaurant.id} 
                  restaurant={restaurant}
                  onClick={() => handleRestaurantClick(restaurant)}
                />
              ))
            )}
          </div>
        </section>

        <footer className="bg-[#02060c] text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#fc8019] mb-4">Swiggy</h3>
                <p className="text-[#676a6d]">© 2026 Swiggy Clone</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-[#676a6d]">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Team</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-[#676a6d]">
                  <li>Help & Support</li>
                  <li>Partner with us</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-[#676a6d]">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    );
  }

  // MENU PAGE
  if (view === 'menu' && selectedRestaurant && menuData) {
    const filteredCategories = vegOnly 
      ? menuData.categories.map(cat => ({
          ...cat,
          items: cat.items.filter(item => item.isVeg)
        })).filter(cat => cat.items.length > 0)
      : menuData.categories;

    return (
      <div className="min-h-screen bg-white pb-24">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <button
              onClick={() => setView('home')}
              className="flex items-center gap-2 text-gray-700 hover:text-[#fc8019] transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-[#02060c] mb-2">{selectedRestaurant.name}</h1>
            <p className="text-[#676a6d] mb-3">{selectedRestaurant.cuisine}</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-green-600">
                <Star className="w-5 h-5 fill-green-600 text-green-600" />
                <span className="font-bold text-green-600">{selectedRestaurant.rating}</span>
                <span className="text-gray-600">({selectedRestaurant.totalRatings} ratings)</span>
              </div>
            </div>
            <div className="border-t-2 border-dotted border-gray-300 my-4"></div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">DEALS FOR YOU</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {menuData.deals.map((deal) => (
                <div
                  key={deal.id}
                  className="min-w-[280px] border-2 border-gray-300 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#fc8019] transition-colors cursor-pointer"
                >
                  <Percent className="w-5 h-5 text-[#fc8019]" />
                  <div>
                    <p className="font-bold text-sm">{deal.text}</p>
                    <p className="text-xs text-gray-600">USE {deal.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between py-4 border-b border-gray-200">
            <h3 className="font-bold text-lg">MENU</h3>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm font-medium">Veg Only</span>
              <div
                onClick={() => setVegOnly(!vegOnly)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  vegOnly ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    vegOnly ? 'translate-x-6' : 'translate-x-1'
                  } mt-0.5`}
                ></div>
              </div>
            </label>
          </div>

          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="border-b-8 border-gray-100">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between py-4"
                >
                  <h3 className="font-bold text-xl">
                    {category.name} ({category.items.length})
                  </h3>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="w-6 h-6" />
                  ) : (
                    <ChevronRight className="w-6 h-6" />
                  )}
                </button>

                {expandedCategories.includes(category.id) && (
                  <div>
                    {category.items.map((item) => (
                      <FoodItemCard
                        key={item.id}
                        item={item}
                        quantity={cart[item.id] || 0}
                        onAdd={addToCart}
                        onIncrement={incrementItem}
                        onDecrement={decrementItem}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {getTotalItems() > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white z-50">
            <button
              onClick={() => setView('cart')}
              className="w-full max-w-4xl mx-auto px-4 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold">{getTotalItems()} Items</span>
                <span className="text-white/80">|</span>
                <span className="font-bold">₹{calculateTotal()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">VIEW CART</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        )}

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    );
  }

  // CART PAGE
  if (view === 'cart') {
    const cartItems = getCartItems();
    const itemTotal = calculateTotal();
    const deliveryFee = 0;
    const originalDeliveryFee = 49;
    const platformFee = 3;
    const gstAndCharges = Math.floor(itemTotal * 0.05);
    const totalToPay = itemTotal + deliveryFee + platformFee + gstAndCharges;
    const savings = calculateSavings();

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button
              onClick={() => setView('menu')}
              className="flex items-center gap-2 text-gray-700 hover:text-[#fc8019] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Menu</span>
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <HomeIcon className="w-6 h-6 text-[#fc8019]" />
                  <h3 className="font-bold text-lg">Delivery Address</h3>
                </div>
                <div className="border-2 border-green-600 rounded-lg p-4 bg-green-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold mb-1">Home</p>
                      <p className="text-sm text-gray-600">
                        123, Koramangala 1st Block,<br />
                        Bangalore - 560034
                      </p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-green-600 bg-green-600 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-[#fc8019]" />
                  <h3 className="font-bold text-lg">Payment Method</h3>
                </div>
                <div className="space-y-3">
                  <div className="border-2 border-green-600 rounded-lg p-4 bg-green-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-green-600 bg-green-600 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <span className="font-medium">UPI</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                        <span className="font-medium">Credit / Debit Card</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                        <span className="font-medium">Cash on Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                  <img
                    src={selectedRestaurant?.imageUrl}
                    alt={selectedRestaurant?.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{selectedRestaurant?.name}</h3>
                    <p className="text-sm text-gray-600">{selectedRestaurant?.location}</p>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-700 font-semibold">
                      🎉 You saved ₹{savings} on this order!
                    </p>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start justify-between">
                      <div className="flex items-start gap-2 flex-1">
                        {item.isVeg ? (
                          <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center mt-1">
                            <Circle className="w-2 h-2 fill-green-600 text-green-600" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center mt-1">
                            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-red-600"></div>
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">₹{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border-2 border-gray-300 rounded">
                          <button
                            onClick={() => decrementItem(item)}
                            className="px-2 py-1 text-green-600 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => incrementItem(item)}
                            className="px-2 py-1 text-green-600 hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-semibold w-20 text-right">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-bold mb-3">Bill Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Item Total</span>
                      <span className="font-medium">₹{itemTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Bike className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-600">Delivery Partner Fee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="line-through text-gray-400">₹{originalDeliveryFee}</span>
                        <span className="font-medium text-green-600">FREE</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platform Fee</span>
                      <span className="font-medium">₹{platformFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST and Restaurant Charges</span>
                      <span className="font-medium">₹{gstAndCharges}</span>
                    </div>
                    <div className="border-t-2 border-dashed my-3"></div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>TO PAY</span>
                      <span>₹{totalToPay}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg">
                PROCEED TO PAY ₹{totalToPay}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SwiggyClone;
