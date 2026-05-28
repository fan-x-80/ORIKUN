import React from 'react';
import { Link } from 'react-router-dom';
import { Package, MapPin, Heart, ChevronRight, Settings, LogOut } from 'lucide-react';
import { products } from '../data/products';

export default function Account() {
  // Simulated user data
  const user = {
    name: 'Guest',
    email: 'visitor@orikun.com'
  };

  // Simulated orders
  const orders = [
    {
      id: 'OR-2024-001',
      date: '2024-03-15',
      status: 'Delivered',
      total: 54.8,
      items: [
        { name: 'Self-Love Set', price: 54.8, quantity: 1 }
      ]
    },
    {
      id: 'OR-2024-002',
      date: '2024-04-10',
      status: 'Shipped',
      total: 29.8,
      items: [
        { name: 'Love & Attraction Bracelet', price: 29.8, quantity: 1 }
      ]
    }
  ];

  // Saved crystals (wishlist simulation)
  const savedCrystals = products.slice(0, 3);

  // Saved addresses
  const addresses = [
    {
      id: 1,
      name: 'Home',
      address: '123 Crystal Avenue',
      city: 'New York',
      country: 'United States'
    }
  ];

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">✨</span>
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-darkBrown">
                {user.name}
              </h1>
              <p className="text-darkBrown/60">{user.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 border border-khaki/20 sticky top-28">
                <nav className="space-y-2">
                  <Link to="/account" className="flex items-center gap-3 px-4 py-3 bg-gold/20 rounded-xl text-goldDark font-medium">
                    <Package className="w-5 h-5" />
                    Dashboard
                  </Link>
                  <Link to="/account/orders" className="flex items-center gap-3 px-4 py-3 text-darkBrown hover:bg-cream rounded-xl transition-colors">
                    <Package className="w-5 h-5" />
                    Your Orders
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </Link>
                  <Link to="/account/addresses" className="flex items-center gap-3 px-4 py-3 text-darkBrown hover:bg-cream rounded-xl transition-colors">
                    <MapPin className="w-5 h-5" />
                    Saved Addresses
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </Link>
                  <Link to="/account/wishlist" className="flex items-center gap-3 px-4 py-3 text-darkBrown hover:bg-cream rounded-xl transition-colors">
                    <Heart className="w-5 h-5" />
                    Saved Crystals
                    <span className="ml-auto bg-gold text-white text-xs px-2 py-0.5 rounded-full">{savedCrystals.length}</span>
                  </Link>
                  <Link to="/account/settings" className="flex items-center gap-3 px-4 py-3 text-darkBrown hover:bg-cream rounded-xl transition-colors">
                    <Settings className="w-5 h-5" />
                    Account Settings
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </Link>
                </nav>

                <div className="mt-6 pt-6 border-t border-khaki/20">
                  <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Saved Crystals - Highlighted as per requirements */}
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 border border-khaki/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-darkBrown">Saved Crystals</h2>
                      <p className="text-sm text-darkBrown/60">Your wishlist for later</p>
                    </div>
                  </div>
                  <Link to="/account/wishlist" className="text-goldDark hover:text-gold text-sm font-medium">
                    View All →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedCrystals.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group bg-white rounded-xl overflow-hidden border border-khaki/20 hover:shadow-md transition-all"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-darkBrown text-sm line-clamp-1">{product.name}</h3>
                        <p className="font-semibold text-darkBrown mt-1">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 border border-khaki/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-darkBrown">Your Orders</h2>
                      <p className="text-sm text-darkBrown/60">{orders.length} orders placed</p>
                    </div>
                  </div>
                  <Link to="/account/orders" className="text-goldDark hover:text-gold text-sm font-medium">
                    View All →
                  </Link>
                </div>

                <div className="space-y-4">
                  {orders.slice(0, 2).map((order) => (
                    <div key={order.id} className="bg-white rounded-xl p-4 border border-khaki/20">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-medium text-darkBrown">{order.id}</p>
                          <p className="text-sm text-darkBrown/60">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-khaki/20">
                        <p className="text-sm text-darkBrown/70">
                          {order.items.map(i => i.name).join(', ')}
                        </p>
                        <p className="font-medium text-darkBrown">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Addresses */}
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 border border-khaki/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-healing/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-healing" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-darkBrown">Saved Addresses</h2>
                      <p className="text-sm text-darkBrown/60">{addresses.length} addresses saved</p>
                    </div>
                  </div>
                  <Link to="/account/addresses" className="text-goldDark hover:text-gold text-sm font-medium">
                    Manage →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="bg-white rounded-xl p-4 border border-khaki/20">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gold/20 text-goldDark px-2 py-0.5 rounded text-xs font-medium">{addr.name}</span>
                      </div>
                      <p className="text-sm text-darkBrown/80">{addr.address}</p>
                      <p className="text-sm text-darkBrown/60">{addr.city}, {addr.country}</p>
                    </div>
                  ))}
                  <button className="bg-white/50 border-2 border-dashed border-khaki/30 rounded-xl p-4 text-center hover:border-gold hover:bg-cream transition-colors">
                    <span className="text-goldDark">+ Add New Address</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
