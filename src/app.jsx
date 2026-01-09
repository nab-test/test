import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Star, ChevronDown, Percent, Filter, MapPin } from 'lucide-react';

// Dummy Restaurant Data
const restaurants = [
  {
    id: 1,
    name: "Meghana Foods",
    rating: 4.5,
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
    deliveryTime: "35-40",
    cuisine: "American, Continental, Burgers",
    location: "Koramangala",
    offerText: "FLAT ₹125 OFF",
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    name: "Behrouz Biryani",
    rating: 4.3,
    deliveryTime: "30-35",
    cuisine: "Biryani, Mughlai, North Indian",
    location: "Whitefield",
    offerText: "ITEMS AT ₹199",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&sat=-20"
  },
  {
    id: 8,
    name: "McDonald's",
    rating: 4.2,
    deliveryTime: "20-25",
    cuisine: "Burgers, Fast Food, American",
    location: "Jayanagar",
    offerText: "40% OFF UPTO ₹80",
    imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop"
  },
  {
    id: 9,
    name: "Subway",
    rating: 4.0,
    deliveryTime: "25-30",
    cuisine: "Healthy Food, Salads, Sandwiches",
    location: "Electronic City",
    offerText: "FLAT DEAL",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
  },
  {
    id: 10,
    name: "Chinita",
    rating: 4.5,
    deliveryTime: "30-35",
    cuisine: "Mexican, Fast Food",
    location: "Marathahalli",
    offerText: "50% OFF",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop"
  },
  {
    id: 11,
    name: "Faasos",
    rating: 4.1,
    deliveryTime: "25-30",
    cuisine: "Wraps, Fast Food, Rolls",
    location: "BTM Layout",
    offerText: "ITEMS AT ₹149",
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=600&fit=crop"
  },
  {
    id: 12,
    name: "Wow! Momo",
    rating: 4.3,
    deliveryTime: "20-25",
    cuisine: "Momos, Chinese, Tibetan",
    location: "Bellandur",
    offerText: "60% OFF UPTO ₹120",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop"
  },
  {
    id: 13,
    name: "The Bowl Company",
    rating: 4.2,
    deliveryTime: "30-35",
    cuisine: "Healthy Food, Rice Bowls",
    location: "Sarjapur Road",
    offerText: "FREE DELIVERY",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop"
  },
  {
    id: 14,
    name: "Sushi Nation",
    rating: 4.4,
    deliveryTime: "35-40",
    cuisine: "Japanese, Sushi, Asian",
    location: "Indiranagar",
    offerText: "ITEMS AT ₹299",
    imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop"
  },
  {
    id: 15,
    name: "Barbeque Nation",
    rating: 4.5,
    deliveryTime: "40-45",
    cuisine: "BBQ, North Indian, Continental",
    location: "Whitefield",
    offerText: "20% OFF",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop"
  },
  {
    id: 16,
    name: "Chaayos",
    rating: 4.3,
    deliveryTime: "15-20",
    cuisine: "Beverages, Snacks, Cafe",
    location: "Koramangala",
    offerText: "FLAT ₹50 OFF",
    imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
  },
  {
    id: 17,
    name: "Leon's Burgers",
    rating: 4.6,
    deliveryTime: "25-30",
    cuisine: "Burgers, Fast Food, American",
    location: "HSR Layout",
    offerText: "ITEMS AT ₹159",
    imageUrl: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop"
  },
  {
    id: 18,
    name: "Naturals Ice Cream",
    rating: 4.7,
    deliveryTime: "20-25",
    cuisine: "Ice Cream, Desserts",
    location: "Jayanagar",
    offerText: "BUY 1 GET 1",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop"
  },
  {
    id: 19,
    name: "Theobroma",
    rating: 4.6,
    deliveryTime: "30-35",
    cuisine: "Bakery, Desserts, Cafe",
    location: "Indiranagar",
    offerText: "30% OFF",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop"
  },
  {
    id: 20,
    name: "Paradise Biryani",
    rating: 4.4,
    deliveryTime: "35-40",
    cuisine: "Biryani, Andhra, South Indian",
    location: "Marathahalli",
    offerText: "ITEMS AT ₹249",
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop"
  }
];

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
const RestaurantCard = ({ restaurant }) => (
  <div className="cursor-pointer transition-transform hover:scale-95">
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

// Main App Component
const SwiggyClone = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    
    // Scroll listener for header shadow
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filters = [
    { id: 1, label: "Filter", icon: Filter },
    { id: 2, label: "Sort By" },
    { id: 3, label: "Fast Delivery" },
    { id: 4, label: "New on Swiggy" },
    { id: 5, label: "Ratings 4.0+" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-8">
              <h1 className="text-[#fc8019] font-bold text-2xl">Swiggy</h1>
              <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-[#fc8019] transition-colors">
                <div>
                  <p className="font-bold text-[#02060c] flex items-center gap-1">
                    Location <ChevronDown className="w-4 h-4" />
                  </p>
                  <p className="text-xs text-[#676a6d]">Setup</p>
                </div>
              </div>
            </div>
            
            {/* Right Section */}
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
                <span className="absolute -top-2 -right-2 bg-[#fc8019] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Promotional Banners */}
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

      {/* Mind Your Mood - Food Categories */}
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

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-[#f0f0f5] border-2" />
      </div>

      {/* Filter Bar */}
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

      {/* Restaurant Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#02060c] mb-6">Restaurants with online food delivery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading ? (
            Array(20).fill(0).map((_, i) => <ShimmerCard key={i} />)
          ) : (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          )}
        </div>
      </section>

      {/* Footer */}
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SwiggyClone;
