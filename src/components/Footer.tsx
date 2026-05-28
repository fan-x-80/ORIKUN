import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-warmGray">
      {/* Newsletter Section */}
      <div className="bg-gold py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">Join Our Journey</h3>
            <p className="mb-6 opacity-90">
              Subscribe for exclusive offers, crystal guidance, and spiritual insights delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="bg-white/20 rounded-lg py-4 px-6">
                <p className="text-lg font-medium">Welcome to the ORIKUN family!</p>
                <p className="text-sm opacity-80 mt-1">Check your email for a special welcome gift.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full text-darkBrown focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-darkBrown text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl font-bold text-darkBrown mb-4">ORIKUN</h2>
            <p className="text-darkBrown/70 mb-6">
              Sacred crystals from the Kunlun Mountains, crafted to guide you back to who you're meant to be.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@orikun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-goldDark hover:bg-gold hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/orikun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-goldDark hover:bg-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@orikun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-goldDark hover:bg-gold hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-darkBrown mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?type=bracelet" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/shop?type=necklace" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/shop?new=true" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-darkBrown mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@orikun.com" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/shipping" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* By Intention */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-darkBrown mb-4">By Intention</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/intention/love" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Love & Attraction
                </Link>
              </li>
              <li>
                <Link to="/intention/healing" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Healing & Calm
                </Link>
              </li>
              <li>
                <Link to="/intention/protection" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Protection & Grounding
                </Link>
              </li>
              <li>
                <Link to="/intention/abundance" className="text-darkBrown/70 hover:text-goldDark transition-colors">
                  Abundance & Wealth
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-darkBrown/10">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-darkBrown/70">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-darkBrown/70">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-darkBrown/70">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Free Shipping $50+</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <div className="px-3 py-1.5 bg-white rounded">
              <span className="text-xs font-medium text-darkBrown">Apple Pay</span>
            </div>
            <div className="px-3 py-1.5 bg-white rounded">
              <span className="text-xs font-medium text-darkBrown">Google Pay</span>
            </div>
            <div className="px-3 py-1.5 bg-white rounded">
              <span className="text-xs font-medium text-darkBrown">Visa</span>
            </div>
            <div className="px-3 py-1.5 bg-white rounded">
              <span className="text-xs font-medium text-darkBrown">Mastercard</span>
            </div>
            <div className="px-3 py-1.5 bg-white rounded">
              <span className="text-xs font-medium text-darkBrown">PayPal</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-darkBrown/50">
            <p>&copy; 2026 ORIKUN. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/privacy" className="hover:text-goldDark transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-goldDark transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
