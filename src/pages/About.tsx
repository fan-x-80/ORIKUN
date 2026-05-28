import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Sparkles, Heart, Shield, Gem } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://v.greattibettour.com/photos/2020/11/kunlun-mountains-13-62957.webp')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/60 to-[#EDE6DC]" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">Our Origin</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkBrown mt-4 mb-6 leading-tight">
              Born from the Sacred Kunlun
            </h1>
            <p className="text-xl text-darkBrown/80">
              Where ancient legends meet modern souls
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-2xl p-8 md:p-12 border border-khaki/20 mb-12">
                <h2 className="font-serif text-3xl font-bold text-darkBrown mb-6">
                  The Legend of ORIKUN
                </h2>

                <div className="space-y-6 text-darkBrown/80 leading-relaxed">
                  <p>
                    High above the clouds, beyond the edges of maps, lies the <strong>Kunlun Mountains</strong> — a place long believed to be the bridge between heaven and earth.
                  </p>

                  <p>
                    In ancient legend, this sacred range was home to immortals and the palace of <strong>Xi Wangmu, the Queen Mother of the West</strong>, guardian of destiny, love, and eternal life.
                  </p>

                  <p>
                    Stories say heroes traveled to Kunlun seeking enlightenment. They returned transformed. Wiser. Stronger. <em>Chosen.</em>
                  </p>

                  <p>
                    Myths also whisper that magical weapons were forged there — objects not of war, but of <em>power</em>. Objects meant to guide fate.
                  </p>

                  <p className="text-goldDark font-medium">
                    ORIKUN was born from this legend.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F5F1EA] via-[#EDE6DC] to-[#E8E0D8] rounded-2xl p-8 md:p-12 border border-khaki/20 mb-12">
                <h3 className="font-serif text-2xl font-bold text-darkBrown mb-6">
                  Our Crystals
                </h3>

                <div className="space-y-6 text-darkBrown/80 leading-relaxed">
                  <p>
                    Our crystals come from the Kunlun region, a place where nature remained untouched for thousands of years. Each stone carries the quiet energy of ancient mountains, shaped by time, pressure, and the silence of the earth.
                  </p>

                  <p>
                    We don't believe crystals change your destiny. We believe they <strong>remind you</strong> that your destiny is already waiting.
                  </p>

                  <p>
                    ORIKUN exists to bring a piece of that ancient journey into modern life — for love, for courage, for abundance, for becoming who you are meant to be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold text-darkBrown text-center mb-12">
            What We Believe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-darkBrown mb-2">
                Sacred Origins
              </h3>
              <p className="text-darkBrown/70 text-sm">
                Every crystal is sourced from the sacred Kunlun Mountains, carrying ancient energy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-darkBrown mb-2">
                Ethical Sourcing
              </h3>
              <p className="text-darkBrown/70 text-sm">
                We partner only with trusted suppliers who share our commitment to ethical practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-darkBrown mb-2">
                Intentional Craft
              </h3>
              <p className="text-darkBrown/70 text-sm">
                Each piece is handmade with love and intention, designed to support your journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-darkBrown mb-2">
                Authentic Energy
              </h3>
              <p className="text-darkBrown/70 text-sm">
                100% genuine crystals. No synthetic stones. Just pure, natural energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gold">
        <div className="container-custom text-center text-white">
          <Gem className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Not to change your destiny, but to remind you that your destiny is already waiting.
            We craft tools of intention, bridges between ancient wisdom and modern life,
            for those ready to become who they're meant to be.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-[#EDE6DC] to-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkBrown mb-6">
            Ready to Begin?
          </h2>
          <p className="text-darkBrown/70 max-w-2xl mx-auto mb-8">
            Explore our collection of sacred crystals and find the one that speaks to your soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="btn-primary inline-flex items-center justify-center gap-2">
              Shop Collection
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/bestsellers" className="btn-secondary inline-flex items-center justify-center">
              View Best Sellers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
