import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Necklaces() {
  const necklaces = products.filter(p => p.type === 'necklace');

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://rockmama.com/cdn/shop/products/JN1536-Rose-Quartz-Point-With-Amethyst-And-Moon-Pendant-1_1080x.jpg?v=1657228581')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-[#EDE6DC]/50 to-[#EDE6DC]" />

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-goldDark text-sm font-medium">Elegant & Intentional</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkBrown mb-6">
            Crystal Necklaces
          </h1>
          <p className="text-xl text-darkBrown/70 max-w-2xl mx-auto mb-8">
            Keep your crystal close to your heart. Our necklaces are designed for daily wear, constant connection to your intentions, and elegant style.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Love', 'Healing', 'Protection', 'Abundance'].map((intention) => (
              <Link
                key={intention}
                to={`/shop?type=necklace&intention=${intention.toLowerCase()}`}
                className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-darkBrown text-sm hover:bg-white transition-colors"
              >
                {intention}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Necklace */}
      <section className="py-12 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-3xl p-8 md:p-12 border border-khaki/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-healing/10 rounded-full blur-2xl"></div>
                <img
                  src="https://rockmama.com/cdn/shop/products/JN1536-Rose-Quartz-Point-With-Amethyst-And-Moon-Pendant-1_1080x.jpg?v=1657228581"
                  alt="Featured Amethyst Moon Necklace"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 bg-healing/20 text-healing px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4" />
                  Spiritual Choice
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-3">
                  Calm Mind Necklace
                </h2>
                <p className="text-darkBrown/70 mb-4">
                  Amethyst Point with Moon Pendant
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-goldDark">$44.8</span>
                  <span className="text-lg text-darkBrown/50 line-through">$54.8</span>
                  <span className="bg-abundance/20 text-abundance px-2 py-1 rounded text-sm font-medium">18% OFF</span>
                </div>
                <p className="text-darkBrown/80 mb-6">
                  An elegant necklace featuring natural Amethyst points set in a delicate moon pendant. Perfect for meditation, spiritual protection, and daily energy support throughout your day.
                </p>
                <Link
                  to="/product/healing-necklace"
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

      {/* All Necklaces */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-darkBrown mb-2">
              Complete Necklace Collection
            </h2>
            <p className="text-darkBrown/60">
              Elegant pieces for your spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {necklaces.map((product) => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Length Guide */}
      <section className="py-16 bg-gold">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Find Your Perfect Length
              </h3>
              <p className="text-white/90 mb-6">
                Our necklaces come in multiple lengths to suit your style. Choose the length that sits perfectly where you want your crystal to rest.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>16 inches</span>
                  <span>Sits at collarbone</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>18 inches</span>
                  <span>Below collarbone (most popular)</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>20 inches</span>
                  <span>Deeper neckline</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-8">
                <div className="w-24 h-24 mx-auto mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <ellipse cx="50" cy="30" rx="30" ry="20" fill="none" stroke="white" strokeWidth="2" />
                    <line x1="20" y1="30" x2="50" y2="90" stroke="white" strokeWidth="2" />
                    <line x1="80" y1="30" x2="50" y2="90" stroke="white" strokeWidth="2" />
                    <circle cx="50" cy="85" r="10" fill="none" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">
                  Crystal pendants rest perfectly at heart or solar plexus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Necklaces */}
      <section className="section-padding bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-darkBrown text-center mb-8">
              Why Wear a Crystal Necklace?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 border border-khaki/20">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">💫</span>
                </div>
                <h4 className="font-medium text-darkBrown mb-2">Constant Connection</h4>
                <p className="text-darkBrown/60 text-sm">
                  Unlike bracelets, necklaces stay with you throughout the day. Keep your intention always close to your heart.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 border border-khaki/20">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">💎</span>
                </div>
                <h4 className="font-medium text-darkBrown mb-2">Heart Center Energy</h4>
                <p className="text-darkBrown/60 text-sm">
                  Crystals at the heart or throat chakra support emotional balance, communication, and self-expression.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 border border-khaki/20">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">✨</span>
                </div>
                <h4 className="font-medium text-darkBrown mb-2">Elegant Style</h4>
                <p className="text-darkBrown/60 text-sm">
                  Our necklaces are designed to be both powerful spiritual tools and beautiful everyday jewelry pieces.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 border border-khaki/20">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🌙</span>
                </div>
                <h4 className="font-medium text-darkBrown mb-2">Meditation Support</h4>
                <p className="text-darkBrown/60 text-sm">
                  Hold your pendant during meditation for deeper focus. The physical touch enhances your spiritual practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layering Guide */}
      <section className="py-12 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-bold text-darkBrown mb-4">
              Layer Your Energy
            </h3>
            <p className="text-darkBrown/70 mb-6">
              Create a powerful combination by layering necklaces of different lengths and crystals. Mix intentions for amplified energy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/50 rounded-xl px-4 py-3">
                <p className="text-sm text-darkBrown font-medium">16" Rose Quartz</p>
                <p className="text-xs text-darkBrown/60">Heart opening</p>
              </div>
              <div className="text-gold font-bold">+</div>
              <div className="bg-white/50 rounded-xl px-4 py-3">
                <p className="text-sm text-darkBrown font-medium">18" Amethyst</p>
                <p className="text-xs text-darkBrown/60">Calming energy</p>
              </div>
              <div className="text-gold font-bold">=</div>
              <div className="bg-gold/20 rounded-xl px-4 py-3">
                <p className="text-sm text-goldDark font-medium">Balanced Heart</p>
                <p className="text-xs text-gold/80">Love + Peace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-[#EDE6DC] to-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold text-darkBrown mb-4">
            Find Your Perfect Necklace
          </h2>
          <p className="text-darkBrown/70 mb-6">
            Explore our complete collection and discover the crystal that speaks to your heart.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop?type=necklace" className="btn-primary inline-flex items-center gap-2">
              Shop All Necklaces
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/intention" className="btn-secondary inline-flex items-center gap-2">
              Shop by Intention
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
