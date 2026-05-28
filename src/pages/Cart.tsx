import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Minus, Plus, X, Shield, Truck, Lock, Sparkles, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();
  const { showToast } = useToast();

  const shipping = cartTotal >= 50 ? 0 : 8;
  const total = cartTotal + shipping;

  const relatedProducts = [
    {
      id: 'citrine',
      name: 'Citrine Bracelet',
      subtitle: 'Prosperity & Abundance',
      price: 36,
      image: 'https://shopspiritualandpaid.com/cdn/shop/files/CitrineCrystalBracelet_HappinessandAbundance.jpg?v=1688749563&width=1445'
    },
    {
      id: 'amethyst',
      name: 'Amethyst Bracelet',
      subtitle: 'Calm & Emotional Balance',
      price: 34,
      image: 'https://i.etsystatic.com/58029258/r/il/6fd281/7339796519/il_fullxfull.7339796519_qqvm.jpg'
    }
  ];

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="pt-28">
        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
          <div className="container-custom text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D6B98C] to-[#A67C52] flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-serif text-4xl font-bold text-darkBrown mb-4">
              Your Selected Pieces
            </h1>
            <p className="text-darkBrown/70 text-lg mb-8">
              Your sacred collection is waiting
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
              Explore Crystals
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Shield className="w-10 h-10 text-gold mx-auto mb-3" />
                <h3 className="font-medium text-darkBrown mb-1">Secure Checkout</h3>
                <p className="text-sm text-darkBrown/60">256-bit SSL encryption</p>
              </div>
              <div className="text-center">
                <Truck className="w-10 h-10 text-gold mx-auto mb-3" />
                <h3 className="font-medium text-darkBrown mb-1">Free Shipping</h3>
                <p className="text-sm text-darkBrown/60">On orders over $75</p>
              </div>
              <div className="text-center">
                <Lock className="w-10 h-10 text-gold mx-auto mb-3" />
                <h3 className="font-medium text-darkBrown mb-1">30-Day Guarantee</h3>
                <p className="text-sm text-darkBrown/60">Money-back protection</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Cart with items
  return (
    <div className="pt-28">
      {/* Hero Title */}
      <section className="py-10 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-darkBrown mb-3">
            Your Selected Pieces
          </h1>
          <p className="text-darkBrown/70 text-lg">
            Almost yours. Just one step away.
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 bg-[#F5F1EA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 bg-white rounded-2xl p-5 shadow-sm border border-khaki/10">
                    {/* Product Image */}
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 rounded-xl object-cover"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`} className="block">
                        <h3 className="font-serif text-lg font-semibold text-darkBrown mb-1 hover:text-goldDark transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-darkBrown/60 mb-3">Size: {item.size}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border-2 border-khaki/30 rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors"
                          >
                            <Minus className="w-4 h-4 text-darkBrown" />
                          </button>
                          <span className="w-12 text-center font-medium text-darkBrown">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors"
                          >
                            <Plus className="w-4 h-4 text-darkBrown" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-darkBrown/50 hover:text-red-500 text-sm transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="font-serif text-xl font-bold text-darkBrown">
                        ${(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emotional Reminder */}
              <div className="mt-8 p-5 bg-gradient-to-r from-[#D6B98C]/10 to-transparent rounded-xl border-l-4 border-gold">
                <p className="text-darkBrown/80 italic flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold shrink-0" />
                  This piece was chosen for a reason.
                </p>
              </div>

              {/* Buy More Promotion */}
              <div className="mt-6 p-5 bg-gradient-to-br from-[#A67C52]/10 to-[#D6B98C]/10 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D6B98C] to-[#A67C52] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">30%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-darkBrown">Buy 1, Get 2nd 30% OFF</p>
                    <p className="text-sm text-darkBrown/60">Add another piece and save</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-khaki/20">
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center gap-2 text-darkBrown/70">
                    <Shield className="w-5 h-5 text-gold" />
                    <span className="text-sm">Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-darkBrown/70">
                    <Truck className="w-5 h-5 text-gold" />
                    <span className="text-sm">30-Day guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-darkBrown/70">
                    <Lock className="w-5 h-5 text-gold" />
                    <span className="text-sm">Free shipping over $50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-khaki/10 sticky top-28">
                <h2 className="font-serif text-xl font-bold text-darkBrown mb-6">
                  Order Summary
                </h2>

                {/* Price Breakdown */}
                <div className="space-y-3 pb-4 border-b border-khaki/20">
                  <div className="flex justify-between text-darkBrown/70">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-darkBrown/70">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-darkBrown text-xl py-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {/* CTA Button */}
                <Link
                  to="/checkout"
                  className="w-full bg-gradient-to-r from-[#D6B98C] to-[#A67C52] text-white py-4 rounded-full font-medium text-lg hover:from-[#A67C52] hover:to-[#A67C52] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Continue to Checkout
                </Link>

                {/* Payment Methods */}
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

      {/* You May Also Like */}
      <section className="py-16 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <h2 className="font-serif text-2xl font-bold text-darkBrown mb-3 text-center">
            You May Also Like
          </h2>
          <p className="text-darkBrown/60 text-center mb-10">Complete your crystal journey</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden border border-khaki/20 hover:shadow-md transition-all"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-xs text-goldDark uppercase tracking-wider mb-1">
                    {product.subtitle}
                  </p>
                  <h3 className="font-serif font-semibold text-darkBrown mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-darkBrown">${product.price}</span>
                    <button className="px-4 py-2 bg-cream hover:bg-khaki/30 text-darkBrown text-sm rounded-full transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
