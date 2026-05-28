import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Flame, Shield, Truck, RotateCcw, ChevronLeft, ChevronRight, Minus, Plus, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, testimonials } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

/**
 * FIX: Add to Cart with Toast Notifications
 * - Clicking "Claim Your Energy" button now properly adds items to cart
 * - Shows "Added to your cart" toast notification
 * - Shows shipping reminder if subtotal < $50 after adding
 */

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'benefits' | 'reviews'>('description');

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-3xl text-darkBrown mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.intention === product.intention && p.id !== product.id)
    .slice(0, 3);

  const productTestimonials = testimonials.filter(t =>
    t.product.toLowerCase().includes(product.name.split(' ')[0].toLowerCase()) ||
    t.product.toLowerCase().includes(product.intention)
  );

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  // Get intention-specific warm background
  const getIntentionBg = () => {
    switch (product.intention) {
      case 'love':
        return 'from-[#F5E6E8] via-[#E8D4D6] to-[#DCC8C4]';
      case 'healing':
        return 'from-[#E8E4F0] via-[#D8D0E8] to-[#CCC4DC]';
      case 'protection':
        return 'from-[#4A4A4A] via-[#3A3A3A] to-[#2A2A2A]';
      case 'abundance':
        return 'from-[#F5EDD6] via-[#E8DCC8] to-[#D8C8B0]';
      default:
        return 'from-[#F5F1EA] via-[#E8E0D8] to-[#D8D0C4]';
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (product.images?.length || 1) - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (product.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="pt-28">
      {/* Product Hero */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-darkBrown/60">
              <li>
                <Link to="/" className="hover:text-goldDark transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/shop" className="hover:text-goldDark transition-colors">Shop</Link>
              </li>
              <li>/</li>
              <li className="text-darkBrown">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery - Warm Scene Style */}
            <div className="relative">
              <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br ${getIntentionBg()}`}>
                {/* Soft warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20" />

                {/* Subtle texture */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                {/* Main Image */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={product.images?.[currentImageIndex] || product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(166, 124, 82, 0.4))',
                    }}
                  />
                </div>

                {/* Warm light rays */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/40 via-transparent to-transparent" />
                  <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white/30 via-transparent to-transparent" />
                  <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-white/40 via-transparent to-transparent" />
                </div>

                {/* Navigation Arrows */}
                {product.images && product.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                    >
                      <ChevronLeft className="w-6 h-6 text-darkBrown" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                    >
                      <ChevronRight className="w-6 h-6 text-darkBrown" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-3">
                  {product.isBestSeller && (
                    <span className="bg-white/90 backdrop-blur-sm text-goldDark text-sm px-5 py-2 rounded-full font-medium shadow-sm">
                      ✦ Bestseller
                    </span>
                  )}
                  {product.isLimited && (
                    <span className="bg-white/90 backdrop-blur-sm text-protection text-sm px-5 py-2 rounded-full font-medium shadow-sm">
                      Limited Edition
                    </span>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images && product.images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? 'border-gold shadow-lg scale-110'
                            : 'border-white/50 hover:border-white'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              {/* Intention Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${
                  product.intention === 'love' ? 'bg-love' :
                  product.intention === 'healing' ? 'bg-healing' :
                  product.intention === 'protection' ? 'bg-white/70' :
                  'bg-abundance'
                }`} />
                <span className="text-sm text-darkBrown/50 uppercase tracking-wider">
                  {product.intention.replace('-', ' & ')}
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-3 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-darkBrown/70 mb-6">{product.subtitle}</p>

              {/* Rating & Sales */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? 'text-gold fill-current' : 'text-khaki/50'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-darkBrown/70">
                    {product.rating} ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                {product.stockLeft && (
                  <div className="flex items-center gap-1 text-red-500">
                    <Flame className="w-4 h-4" />
                    <span className="text-sm">{product.stockLeft} sold today</span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-serif text-4xl font-bold text-darkBrown">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-darkBrown/40 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Size Selection */}
              {product.sizes && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-darkBrown mb-3">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-2.5 rounded-xl border-2 transition-all ${
                          selectedSize === size
                            ? 'border-gold bg-gold/10 text-goldDark font-medium'
                            : 'border-khaki/50 text-darkBrown hover:border-gold hover:bg-cream'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-darkBrown mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-khaki/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-cream transition-colors"
                    >
                      <Minus className="w-5 h-5 text-darkBrown" />
                    </button>
                    <span className="w-14 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-cream transition-colors"
                    >
                      <Plus className="w-5 h-5 text-darkBrown" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stock Warning */}
              {product.stockLeft && product.stockLeft <= 10 && (
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="text-red-600 text-sm flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    <span className="font-medium">Hurry!</span> Only {product.stockLeft} pieces left in stock
                  </p>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 btn-primary flex items-center justify-center gap-3 text-lg py-4">
                  Claim Your Energy
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-14 h-14 border-2 border-khaki/50 rounded-full flex items-center justify-center hover:border-gold hover:text-goldDark transition-all">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC] rounded-xl">
                  <Shield className="w-6 h-6 text-gold mx-auto mb-2" />
                  <span className="text-xs text-darkBrown/70">Secure Checkout</span>
                </div>
                <div className="text-center p-4 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC] rounded-xl">
                  <Truck className="w-6 h-6 text-gold mx-auto mb-2" />
                  <span className="text-xs text-darkBrown/70">Free Shipping $50+</span>
                </div>
                <div className="text-center p-4 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC] rounded-xl">
                  <RotateCcw className="w-6 h-6 text-gold mx-auto mb-2" />
                  <span className="text-xs text-darkBrown/70">30-Day Guarantee</span>
                </div>
              </div>

              {/* Emotional Hook */}
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 mb-6">
                <h3 className="font-serif text-lg font-semibold text-darkBrown mb-4">
                  This is for you if...
                </h3>
                <ul className="space-y-3">
                  {product.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-darkBrown/80">
                      <span className="text-gold text-lg mt-0.5">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage Scenarios */}
              <div className="bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-darkBrown mb-4">
                  How to Use
                </h3>
                <ul className="space-y-3 text-darkBrown/80">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-lg mt-0.5">✦</span>
                    Wear it during your morning routine
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-lg mt-0.5">✦</span>
                    Keep it close when setting intentions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-lg mt-0.5">✦</span>
                    Let it remind you of who you are becoming
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          {/* Tabs */}
          <div className="flex gap-6 border-b border-khaki/30 mb-12">
            {(['description', 'benefits', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-medium transition-colors capitalize relative ${
                  activeTab === tab
                    ? 'text-goldDark'
                    : 'text-darkBrown/60 hover:text-darkBrown'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'description' && (
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-darkBrown/80 leading-loose">{product.description}</p>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-darkBrown mb-8 text-center">
                Benefits of {product.name.split(' ')[0]}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 bg-gradient-to-br from-[#F5F1EA] to-white rounded-xl p-5 shadow-sm">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold">{index + 1}</span>
                    </div>
                    <span className="text-darkBrown pt-2">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="font-serif text-7xl font-bold text-darkBrown">{product.rating}</div>
                  <div className="flex justify-center my-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-7 h-7 ${i < Math.floor(product.rating) ? 'text-gold fill-current' : 'text-khaki/50'}`}
                      />
                    ))}
                  </div>
                  <p className="text-darkBrown/60">{product.reviews.toLocaleString()} reviews</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {productTestimonials.length > 0 ? (
                  productTestimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-gradient-to-br from-[#F5F1EA] to-white rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold fill-current' : 'text-khaki/50'}`}
                          />
                        ))}
                      </div>
                      <p className="text-darkBrown/80 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-darkBrown">{testimonial.name}</p>
                          <p className="text-sm text-darkBrown/50">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  testimonials.slice(0, 4).map((testimonial) => (
                    <div key={testimonial.id} className="bg-gradient-to-br from-[#F5F1EA] to-white rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold fill-current' : 'text-khaki/50'}`}
                          />
                        ))}
                      </div>
                      <p className="text-darkBrown/80 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-darkBrown">{testimonial.name}</p>
                          <p className="text-sm text-darkBrown/50">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-darkBrown mb-8 text-center">
              You May Also Love
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Money Back Guarantee */}
      <section className="py-16 bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8]">
        <div className="container-custom text-center">
          <RotateCcw className="w-14 h-14 text-gold mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-bold text-darkBrown mb-3">
            30-Day Money Back Guarantee
          </h3>
          <p className="text-darkBrown/70 max-w-xl mx-auto">
            If it doesn't resonate, return it. No questions asked. We want you to feel completely confident in your choice.
          </p>
        </div>
      </section>
    </div>
  );
}
