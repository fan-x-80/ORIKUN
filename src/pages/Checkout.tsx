import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, CreditCard, Truck, Sparkles, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Simple fixed header for checkout page only
function CheckoutHeader() {
  return (
    <header className="bg-white border-b border-khaki/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-serif text-2xl font-bold text-darkBrown tracking-wide">
              ORIKUN
            </h1>
          </Link>

          {/* Back to Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 text-darkBrown/70 hover:text-darkBrown transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Checkout() {
  const { cartItems, cartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const subtotal = cartTotal;
  const shipping = subtotal >= 50 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#F5F1EA] flex flex-col">
      {/* Checkout Header - Simple brand area */}
      <CheckoutHeader />

      {/* Hero Title */}
      <section className="py-10 bg-gradient-to-b from-white to-[#F5F1EA]">
        <div className="container-custom text-center">
          <h1 className="font-serif text-3xl font-bold text-darkBrown mb-2">
            Complete Your Journey
          </h1>
          <p className="text-darkBrown/60">
            Your sacred pieces are almost with you
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 pb-20 flex-1">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Form Section (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-khaki/10">
                <h2 className="font-serif text-xl font-bold text-darkBrown mb-6">
                  Contact Information
                </h2>

                <div className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-darkBrown mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-darkBrown mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-darkBrown mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street address"
                      className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* City & Zip Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darkBrown mb-2">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="ZIP"
                        className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-darkBrown mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors bg-white"
                    >
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>

                {/* Privacy Note */}
                <p className="mt-4 text-sm text-darkBrown/50 italic">
                  We only use this to deliver your order.
                </p>

                {/* Payment Method */}
                <div className="mt-10 pt-8 border-t border-khaki/20">
                  <h2 className="font-serif text-xl font-bold text-darkBrown mb-6">
                    Payment Method
                  </h2>

                  <div className="flex gap-4 mb-6">
                    {/* Credit Card Option */}
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 py-4 px-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        paymentMethod === 'card'
                          ? 'border-gold bg-gold/5'
                          : 'border-khaki/30 hover:border-khaki'
                      }`}
                    >
                      <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-gold' : 'text-darkBrown/60'}`} />
                      <span className={`font-medium ${paymentMethod === 'card' ? 'text-darkBrown' : 'text-darkBrown/60'}`}>
                        Credit Card
                      </span>
                      {paymentMethod === 'card' && (
                        <span className="text-xs text-gold">Visa, Mastercard, Apple Pay, Google Pay</span>
                      )}
                    </button>

                    {/* PayPal Option */}
                    <button
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex-1 py-4 px-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        paymentMethod === 'paypal'
                          ? 'border-gold bg-gold/5'
                          : 'border-khaki/30 hover:border-khaki'
                      }`}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <span className={`text-lg font-bold ${paymentMethod === 'paypal' ? 'text-gold' : 'text-darkBrown/60'}`}>
                          PP
                        </span>
                      </div>
                      <span className={`font-medium ${paymentMethod === 'paypal' ? 'text-darkBrown' : 'text-darkBrown/60'}`}>
                        PayPal
                      </span>
                      {paymentMethod === 'paypal' && (
                        <span className="text-xs text-gold">Fast & secure checkout</span>
                      )}
                    </button>
                  </div>

                  {/* Card Form (if card selected) */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4 p-4 bg-cream/50 rounded-xl">
                      <div>
                        <label className="block text-sm font-medium text-darkBrown mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors bg-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-darkBrown mb-2">
                            Expiry
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-darkBrown mb-2">
                            CVC
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border-2 border-khaki/30 rounded-xl focus:border-gold focus:outline-none transition-colors bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="p-4 bg-cream/50 rounded-xl text-center">
                      <p className="text-darkBrown/70">
                        You will be redirected to PayPal to complete your payment securely.
                      </p>
                    </div>
                  )}
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-khaki/20">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2 text-darkBrown/60">
                      <Shield className="w-4 h-4 text-gold" />
                      <span className="text-sm">Secure payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-darkBrown/60">
                      <Lock className="w-4 h-4 text-gold" />
                      <span className="text-sm">SSL encrypted</span>
                    </div>
                    <div className="flex items-center gap-2 text-darkBrown/60">
                      <Truck className="w-4 h-4 text-gold" />
                      <span className="text-sm">30-day guarantee</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-[#D6B98C] to-[#A67C52] text-white py-4 rounded-full font-medium text-lg hover:from-[#A67C52] hover:to-[#A67C52] transition-all shadow-md flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Complete Your Order
                </button>

                {/* Urgency Text */}
                <p className="mt-4 text-center text-sm text-darkBrown/50">
                  Only a few pieces left today
                </p>
              </div>
            </div>

            {/* Right: Order Summary (2 cols) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-khaki/10">
                <h2 className="font-serif text-lg font-bold text-darkBrown mb-6">
                  Order Summary
                </h2>

                {/* Order Items */}
                <div className="space-y-4 pb-4 border-b border-khaki/20">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-khaki text-white text-xs flex items-center justify-center rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-darkBrown text-sm line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-darkBrown/50">Size: {item.size || '16cm'}</p>
                        <p className="font-semibold text-darkBrown mt-1">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 py-4 border-b border-khaki/20">
                  <div className="flex justify-between text-darkBrown/70 text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-darkBrown/70 text-sm">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-darkBrown text-xl py-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {/* Emotional Note */}
                <div className="mt-4 p-3 bg-gradient-to-r from-[#D6B98C]/10 to-transparent rounded-lg border-l-2 border-gold">
                  <p className="text-sm text-darkBrown/70 italic flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold shrink-0" />
                    This piece was chosen for a reason.
                  </p>
                </div>

                {/* Payment Icons */}
                <div className="mt-6 pt-4 border-t border-khaki/20">
                  <p className="text-xs text-darkBrown/50 text-center mb-3">
                    Secure checkout powered by
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="px-3 py-1.5 bg-warmGray rounded text-xs font-medium text-darkBrown">Stripe</div>
                    <div className="px-3 py-1.5 bg-warmGray rounded text-xs font-medium text-darkBrown">PayPal</div>
                    <div className="px-3 py-1.5 bg-warmGray rounded text-xs font-medium text-darkBrown">Apple Pay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-6 bg-white border-t border-khaki/20">
        <div className="container-custom text-center">
          <p className="text-sm text-darkBrown/50">
            © 2024 ORIKUN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}