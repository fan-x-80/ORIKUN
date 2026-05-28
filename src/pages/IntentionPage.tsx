import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, Shield, TrendingUp, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { intentions, products } from '../data/products';

export default function IntentionPage() {
  const { intentionId } = useParams();
  const [showSubPage, setShowSubPage] = useState(false);
  const [selectedIntention, setSelectedIntention] = useState(intentionId || '');

  const currentIntention = intentions.find(i => i.id === selectedIntention);

  const handleIntentionClick = (id: string) => {
    setSelectedIntention(id);
    setShowSubPage(true);
  };

  // If no intention selected or showing overview
  if (!showSubPage || !currentIntention) {
    return (
      <div className="pt-28">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://media.istockphoto.com/id/1441129096/photo/healing-crystal-stones-for-wicca-or-reiki-practice.jpg?s=612x612&w=0&k=20&c=qPVumu5RI8bSCb40sWPXVEYvJWv1ZmQYHZSH8BjvWI8=')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-[#EDE6DC]/50 to-[#EDE6DC]" />

          <div className="container-custom relative z-10 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkBrown mb-6">
              What Do You Need Right Now?
            </h1>
            <p className="text-xl text-darkBrown/70 max-w-2xl mx-auto mb-8">
              Not all crystals are the same. Choose the energy that speaks to you.
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
              Find Your Energy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Intentions Grid */}
        <section className="section-padding bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {intentions.map((intention) => (
                <button
                  key={intention.id}
                  onClick={() => handleIntentionClick(intention.id)}
                  className={`${intention.gradient} rounded-2xl p-8 h-full text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group`}
                >
                  <div className="text-5xl mb-4">{intention.emoji}</div>
                  <h3 className={`font-serif text-2xl font-bold mb-2 ${
                    intention.id === 'protection' ? 'text-white' : 'text-darkBrown'
                  }`}>
                    {intention.name}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    intention.id === 'protection' ? 'text-white/80' : 'text-darkBrown/70'
                  }`}>
                    {intention.description}
                  </p>
                  <span className={`inline-flex items-center gap-2 text-sm font-medium ${
                    intention.id === 'protection' ? 'text-white' : 'text-goldDark'
                  } group-hover:gap-3 transition-all`}>
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz CTA */}
        <section className="py-16 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-darkBrown mb-4">
                Not sure where to start?
              </h3>
              <p className="text-darkBrown/70 mb-6">
                Take our 30-second quiz to find the perfect crystal for your current needs.
              </p>
              <Link to="/quiz" className="btn-primary inline-flex items-center gap-2">
                Take the Quiz
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="section-padding bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
          <div className="container-custom">
            <h3 className="font-serif text-2xl font-bold text-darkBrown text-center mb-8">
              Stories from Our Community
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 border border-khaki/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-darkBrown/80 italic mb-4">
                  "Found exactly what I needed. The crystal selection guide helped me choose the perfect one for my situation."
                </p>
                <p className="font-medium text-darkBrown">— Emma, London</p>
              </div>
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-6 border border-khaki/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-darkBrown/80 italic mb-4">
                  "Felt calmer within days. The Amethyst bracelet has been a game-changer for my meditation practice."
                </p>
                <p className="font-medium text-darkBrown">— Olivia, Berlin</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-12 bg-gold">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
              <div>
                <Heart className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">Natural Crystals</h4>
                <p className="text-sm text-white/80">100% genuine stones</p>
              </div>
              <div>
                <Sparkles className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">Handmade</h4>
                <p className="text-sm text-white/80">Crafted with care</p>
              </div>
              <div>
                <Shield className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">30-Day Guarantee</h4>
                <p className="text-sm text-white/80">Full refund if not satisfied</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Sub-page for specific intention
  return (
    <div className="pt-28">
      {/* Back Button */}
      <div className="bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC] py-4 border-b border-khaki/20">
        <div className="container-custom">
          <button
            onClick={() => setShowSubPage(false)}
            className="flex items-center gap-2 text-darkBrown/70 hover:text-goldDark transition-colors"
          >
            ← Back to All Intentions
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className={`py-16 ${currentIntention.gradient}`}>
        <div className="container-custom text-center">
          <span className="text-6xl mb-4 block">{currentIntention.emoji}</span>
          <h1 className={`font-serif text-4xl md:text-5xl font-bold mb-4 ${
            currentIntention.id === 'protection' ? 'text-white' : 'text-darkBrown'
          }`}>
            {currentIntention.name}
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            currentIntention.id === 'protection' ? 'text-white/90' : 'text-darkBrown/70'
          }`}>
            {currentIntention.subtitle}
          </p>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="py-12 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-darkBrown mb-6">
              {currentIntention.extendedDescription}
            </h2>
            <ul className="space-y-3 text-left">
              {currentIntention.emotionalPrompts.map((prompt, index) => (
                <li key={index} className={`flex items-start gap-3 p-3 rounded-lg ${
                  currentIntention.id === 'protection' ? 'bg-protection/10 text-white' : 'bg-warmGray'
                }`}>
                  <span className="text-gold text-lg">✦</span>
                  <span className={currentIntention.id === 'protection' ? 'text-white/90' : 'text-darkBrown/80'}>
                    {prompt}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-darkBrown text-center mb-8">
            Recommended for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentIntention.products.map((product) => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Usage Scenarios */}
      <section className="py-12 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-darkBrown mb-4 text-center">
              How to Use Your Crystal
            </h3>
            <ul className="space-y-3">
              {currentIntention.usageScenarios.map((scenario, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                    {index + 1}
                  </span>
                  <span className="text-darkBrown/80">{scenario}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Intentions */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <h3 className="font-serif text-xl font-bold text-darkBrown mb-6 text-center">
            Explore Other Intentions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {intentions
              .filter(i => i.id !== currentIntention.id)
              .map((intention) => (
                <button
                  key={intention.id}
                  onClick={() => {
                    setSelectedIntention(intention.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`${intention.gradient} rounded-xl p-4 text-center transition-all hover:scale-[1.02]`}
                >
                  <span className="text-2xl mb-2 block">{intention.emoji}</span>
                  <span className={`font-medium ${
                    intention.id === 'protection' ? 'text-white' : 'text-darkBrown'
                  }`}>
                    {intention.name}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="container-custom text-center text-white">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="font-serif text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-white/90 max-w-xl mx-auto mb-6">
            Find the crystal that speaks to your soul and start attracting the energy you deserve.
          </p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-darkBrown text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Shop All Crystals
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
