import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState<'love' | 'abundance'>('love');

  const loveProducts = products.filter(p => p.intention === 'love');
  const abundanceProducts = products.filter(p => p.intention === 'abundance');

  const currentProducts = activeCategory === 'love' ? loveProducts : abundanceProducts;

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://c8.alamy.com/comp/2FYR4TX/flat-lay-of-various-crystal-stones-set-on-black-background-gemstones-on-dark-background-colorful-healing-minerals-for-relaxation-and-meditation-2FYR4TX.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-[#EDE6DC]/50 to-[#EDE6DC]" />

        <div className="container-custom relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkBrown mb-6">
            Most Loved. Most Chosen.
          </h1>
          <p className="text-xl text-darkBrown/70 max-w-2xl mx-auto mb-8">
            These are the crystals people come back for. Discover what resonates with thousands of hearts worldwide.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            Find Yours
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA] border-b border-khaki/20 sticky top-24 z-40">
        <div className="container-custom">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveCategory('love')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === 'love'
                  ? 'bg-love text-white'
                  : 'bg-white text-darkBrown hover:bg-khaki/30'
              }`}
            >
              💗 Love & Attraction
            </button>
            <button
              onClick={() => setActiveCategory('abundance')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === 'abundance'
                  ? 'bg-abundance text-darkBrown'
                  : 'bg-white text-darkBrown hover:bg-khaki/30'
              }`}
            >
              💰 Abundance & Wealth
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-darkBrown mb-2">
              {activeCategory === 'love'
                ? 'For Love, Connection & Emotional Healing'
                : 'For Confidence, Success & New Opportunities'}
            </h2>
            <p className="text-darkBrown/60">
              {activeCategory === 'love'
                ? 'Open your heart to meaningful connections and self-love'
                : 'Attract wealth, confidence, and new opportunities'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-darkBrown text-center mb-8">
              What Our Community Says
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 border border-khaki/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-darkBrown/80 italic mb-4">
                  "Felt a shift within days of wearing this. My energy feels lighter and I've been attracting such beautiful people into my life."
                </p>
                <p className="font-medium text-darkBrown">— Emily, Los Angeles</p>
              </div>
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 border border-khaki/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-darkBrown/80 italic mb-4">
                  "I wear my Citrine bracelet every day at work. Within a month, I got a promotion I didn't even apply for. Coincidence? I don't think so."
                </p>
                <p className="font-medium text-darkBrown">— Sarah, New York</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency & Guarantee */}
      <section className="py-16 bg-gold">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white text-center md:text-left">
              <span className="text-6xl mb-4 block">🔥</span>
              <h3 className="font-serif text-3xl font-bold mb-4">Only 12 pieces left today</h3>
              <p className="text-white/90">
                Our bestsellers are selling fast. Don't miss out on your crystal.
              </p>
            </div>
            <div className="text-white text-center md:text-left">
              <span className="text-6xl mb-4 block">✓</span>
              <h3 className="font-serif text-3xl font-bold mb-4">30-Day Money Back Guarantee</h3>
              <p className="text-white/90">
                No risk. Just experience it. If it doesn't resonate, return it. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-6">
            Not sure which one is right for you?
          </h2>
          <p className="text-darkBrown/70 max-w-2xl mx-auto mb-8">
            Explore all our crystals and find the one that speaks to your soul.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            Explore All Crystals
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
