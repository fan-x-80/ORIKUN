import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/products';

export default function FAQ() {
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('Products');

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-darkBrown mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-darkBrown/70 max-w-2xl mx-auto">
            Everything you need to know about our crystals, shipping, and returns.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {faqs.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category.category
                      ? 'bg-gold text-white'
                      : 'bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] text-darkBrown hover:bg-khaki/30'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {faqs
                .find((cat) => cat.category === activeCategory)
                ?.questions.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl overflow-hidden border border-khaki/20"
                  >
                    <button
                      onClick={() => toggleQuestion(faq.q)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-darkBrown pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${
                          openQuestions.includes(faq.q) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openQuestions.includes(faq.q) && (
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-darkBrown/70 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-darkBrown mb-4">
              Still have questions?
            </h2>
            <p className="text-darkBrown/70 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a
              href="mailto:hello@orikun.com"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom">
          <h3 className="font-serif text-xl font-bold text-darkBrown mb-6 text-center">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a href="/shipping" className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 text-center border border-khaki/20 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-darkBrown mb-1">Shipping Info</h4>
              <p className="text-sm text-darkBrown/60">Delivery times & costs</p>
            </a>
            <a href="/returns" className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 text-center border border-khaki/20 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-darkBrown mb-1">Returns & Refunds</h4>
              <p className="text-sm text-darkBrown/60">Our 30-day guarantee</p>
            </a>
            <a href="/care" className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-xl p-6 text-center border border-khaki/20 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-darkBrown mb-1">Crystal Care</h4>
              <p className="text-sm text-darkBrown/60">How to cleanse & charge</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
