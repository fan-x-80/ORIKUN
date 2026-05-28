import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Bracelets() {
  const bracelets = products.filter(p => p.type === 'bracelet');

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://i.etsystatic.com/32770098/r/il/cef0e3/7840788281/il_fullxfull.7840788281_mo1m.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-[#EDE6DC]/50 to-[#EDE6DC]" />

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-goldDark text-sm font-medium">Our Signature Collection</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkBrown mb-6">
            Crystal Bracelets
          </h1>
          <p className="text-xl text-darkBrown/70 max-w-2xl mx-auto mb-8">
            Wear your intentions on your wrist. Each bracelet is crafted with genuine crystals to support your journey toward love, healing, protection, or abundance.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Love', 'Healing', 'Protection', 'Abundance'].map((intention) => (
              <Link
                key={intention}
                to={`/shop?type=bracelet&intention=${intention.toLowerCase()}`}
                className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-darkBrown text-sm hover:bg-white transition-colors"
              >
                {intention}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bracelet */}
      <section className="py-12 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-3xl p-8 md:p-12 border border-khaki/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/10 rounded-full blur-2xl"></div>
                <img
                  src="https://i.etsystatic.com/32770098/r/il/cef0e3/7840788281/il_fullxfull.7840788281_mo1m.jpg"
                  alt="Featured Rose Quartz Bracelet"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 bg-love/20 text-love px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Heart className="w-4 h-4" />
                  Best Seller
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-3">
                  Love & Attraction Bracelet
                </h2>
                <p className="text-darkBrown/70 mb-4">
                  Rose Quartz - The stone of unconditional love
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-goldDark">$29.8</span>
                  <span className="text-lg text-darkBrown/50 line-through">$39.8</span>
                  <span className="bg-abundance/20 text-abundance px-2 py-1 rounded text-sm font-medium">25% OFF</span>
                </div>
                <p className="text-darkBrown/80 mb-6">
                  Crafted with genuine Rose Quartz beads, this bracelet carries the gentle energy of self-love and meaningful connection. Our most loved piece with over 1,200 reviews.
                </p>
                <Link
                  to="/product/love-bracelet"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Details
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Bracelets */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-darkBrown mb-2">
              Complete Bracelet Collection
            </h2>
            <p className="text-darkBrown/60">
              Find the crystal that speaks to your soul
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bracelets.map((product) => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-16 bg-gold">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Find Your Perfect Fit
              </h3>
              <p className="text-white/90 mb-6">
                Our bracelets come in 4 sizes to ensure the perfect fit. Measure your wrist and choose the size that feels most comfortable.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Size S</span>
                  <span>5.5-6"</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Size M</span>
                  <span>6-6.5"</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Size L</span>
                  <span>6.5-7"</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Size XL</span>
                  <span>7-7.5"</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-8">
                <div className="w-32 h-32 mx-auto mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">
                  Measure your wrist with a soft tape measure or string
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styling Tips */}
      <section className="section-padding bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-darkBrown text-center mb-8">
              How to Wear Your Crystal Bracelet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 border border-khaki/20 text-center">
                <div className="w-12 h-12 bg-love/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💗</span>
                </div>
                <h4 className="font-medium text-darkBrown mb-2">Left Wrist</h4>
                <p className="text-darkBrown/60 text-sm">
                  Receive energy and intentions. Best for attracting love, opportunities, and new beginnings.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 border border-khaki/20 text-center">
                <div className="w-12 h-12 bg-healing/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h4 className="font-medium text-darkBrown mb-2">Right Wrist</h4>
                <p className="text-darkBrown/60 text-sm">
                  Give out energy and release negativity. Best for grounding and protection.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 border border-khaki/20 text-center">
                <div className="w-12 h-12 bg-abundance/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-medium text-darkBrown mb-2">Stack & Layer</h4>
                <p className="text-darkBrown/60 text-sm">
                  Combine multiple bracelets for amplified energy. Trust your intuition!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-[#F5F1EA] to-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold text-darkBrown mb-4">
            Not sure which bracelet is right for you?
          </h2>
          <p className="text-darkBrown/70 mb-6">
            Take our quick quiz to discover your perfect crystal match.
          </p>
          <Link to="/intention" className="btn-primary inline-flex items-center gap-2">
            Find Your Crystal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
