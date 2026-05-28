import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import IntentionCard from '../components/IntentionCard';
import { products, intentions, testimonials } from '../data/products';

export default function Home() {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://v.greattibettour.com/photos/2020/11/kunlun-mountains-13-62957.webp')`,
          }}
        />
        <div className="absolute inset-0 hero-gradient" />

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-darkBrown mb-6 leading-tight animate-fade-in">
              You didn't find this by accident.
            </h1>
            <p className="text-lg md:text-xl text-darkBrown/80 mb-8 max-w-xl animate-fade-in delay-100">
              From the sacred Kunlun Mountains. Ancient energy within. Not to change you, but to guide you back to who you're meant to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
              <Link to="/shop" className="btn-primary inline-flex items-center justify-center gap-2">
                Find Your Crystal
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Crystals Decoration */}
        <div className="absolute right-10 top-1/3 hidden lg:block animate-float">
          <img
            src="https://i.etsystatic.com/32770098/r/il/cef0e3/7840788281/il_fullxfull.7840788281_mo1m.jpg"
            alt=""
            className="w-32 h-32 rounded-full object-cover shadow-xl opacity-60"
          />
        </div>
        <div className="absolute right-32 bottom-1/4 hidden lg:block animate-float delay-200">
          <img
            src="https://shopspiritualandpaid.com/cdn/shop/files/CitrineCrystalBracelet_HappinessandAbundance.jpg?v=1688749563&width=1445"
            alt=""
            className="w-24 h-24 rounded-full object-cover shadow-xl opacity-60"
          />
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-warmGray py-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              'Natural Crystals',
              'Ethically Sourced',
              'Handmade',
              'Worldwide Shipping'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-darkBrown">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="best-sellers" className="section-padding bg-gradient-to-b from-cream to-[#EDE6DC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">Discover</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mt-2 mb-4">
              Most Loved by Our Community
            </h2>
            <p className="text-darkBrown/70 max-w-2xl mx-auto">
              These are the crystals people come back for. Discover what resonates with thousands of hearts worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} featured />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/bestsellers" className="btn-secondary inline-flex items-center gap-2">
              View All Best Sellers
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Intention */}
      <section id="intention" className="section-padding bg-gradient-to-b from-[#EDE6DC] to-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-4">
              Shop by Intention, Not by Product
            </h2>
            <p className="text-darkBrown/70 max-w-2xl mx-auto">
              Each crystal carries unique energy. Find the one that speaks to what you need right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {intentions.map((intention, index) => (
              <div
                key={intention.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IntentionCard
                  id={intention.id}
                  name={intention.name}
                  description={intention.description}
                  emoji={intention.emoji}
                  gradient={intention.gradient}
                  count={intention.products.length}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section id="about" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://cdn.britannica.com/04/58604-050-8C18ACF6/Kunlun-Mountains-Mazar-China-Uygur-Autonomous-Region.jpg')` }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">Our Origin</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-darkBrown mt-4 mb-6">
              Born from the Sacred Kunlun
            </h2>
            <p className="text-lg text-darkBrown/80 mb-8 leading-relaxed">
              High above the clouds, beyond the edges of maps, lies the Kunlun Mountains — a place long believed to be the bridge between heaven and earth. In ancient legend, this sacred range was home to immortals and the palace of Xi Wangmu, the Queen Mother of the West.
            </p>
            <p className="text-lg text-darkBrown/80 mb-8 leading-relaxed">
              ORIKUN was born from this legend. Our crystals come from the Kunlun region, where nature remained untouched for thousands of years. Each stone carries the quiet energy of ancient mountains, shaped by time, pressure, and the silence of the earth.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Read Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-cream to-[#F5EDD6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">Community</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mt-2 mb-4">
              Stories from Our Community
            </h2>
            <p className="text-darkBrown/70">
              Real experiences from people who found their crystal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-[#F5F1EA] to-white rounded-2xl p-6 shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section id="faq" className="section-padding bg-gradient-to-b from-[#F5EDD6] to-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold font-medium tracking-wider uppercase text-sm">Learn</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mt-2 mb-4">
                Questions Before You Begin
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How do I choose the right crystal?',
                  a: 'Trust your intuition. The crystal you\'re naturally drawn to is often the one you need most. Each crystal carries different energy for different needs.'
                },
                {
                  q: 'Are your crystals real?',
                  a: 'Yes, all our crystals are 100% genuine and natural. We source directly from trusted suppliers and each stone is hand-selected.'
                },
                {
                  q: 'How long is shipping?',
                  a: 'We offer worldwide shipping. Standard shipping takes 7-14 business days within the US and 14-21 business days internationally.'
                },
                {
                  q: 'Can I return it?',
                  a: 'We offer a 30-day money-back guarantee. If the crystal doesn\'t resonate with you, simply contact us for a full refund.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-[#F5F1EA] to-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-darkBrown mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-darkBrown/70">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/faq" className="text-goldDark font-medium hover:text-gold transition-colors">
                View all FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gold">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            You're not here by accident.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step on your journey. Find the crystal that resonates with your soul.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 bg-darkBrown text-white px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all text-lg"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
