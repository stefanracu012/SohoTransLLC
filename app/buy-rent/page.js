'use client';
import { useState } from 'react';
import Link from 'next/link';

const additionalItems = [
  { name: "Straps & Chains", price: 25 },
  { name: "Tarps", price: 150 },
  { name: "Load Bars", price: 35 },
  { name: "Pallet Jacks", price: 300 },
  { name: "Dollies", price: 500 },
  { name: "Ramps", price: 200 },
  { name: "Wheel Chocks", price: 15 },
  { name: "Safety Kits", price: 75 },
];

export default function BuyRentPage() {
  const [modal, setModal] = useState(null); // { plan }
  const [modalMode, setModalMode] = useState('buy'); // 'buy' | 'rent'
  const [selectedExtras, setSelectedExtras] = useState({}); // { [name]: qty }
  const [showExtras, setShowExtras] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [modalStep, setModalStep] = useState(1);
  const [contactForm, setContactForm] = useState({ company: '', phone: '', address: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [financingForm, setFinancingForm] = useState({ business: '', email: '', phone: '', equipment: '' });
  const [financingLoading, setFinancingLoading] = useState(false);
  const [financingSubmitted, setFinancingSubmitted] = useState(false);

  const openModal = (plan, mode) => {
    setModal({ plan });
    setModalMode(mode);
    setSelectedExtras({});
    setShowExtras(false);
    setModalStep(1);
    setContactForm({ company: '', phone: '', address: '' });
    setSubmitted(false);
  };

  const closeModal = () => {
    setModal(null);
    setSelectedExtras({});
    setShowExtras(false);
    setModalStep(1);
    setContactForm({ company: '', phone: '', address: '' });
    setSubmitted(false);
  };

  const changeQty = (name, delta) => {
    setSelectedExtras(prev => {
      const current = prev[name] || 0;
      const next = current + delta;
      if (next <= 0) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: next };
    });
  };

  const extrasTotal = Object.entries(selectedExtras).reduce((sum, [name, qty]) => {
    const item = additionalItems.find(i => i.name === name);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const pricingPlans = [
    {
      name: "Starter",
      type: "Dry Van Trailer",
      price: "$25,000",
      rentPrice: "$800/month",
      image: "/trailer.jpg",
      features: [
        "53' Dry Van Trailer",
        "2020 or newer models",
        "Air ride suspension",
        "Swing doors",
        "LED lights",
        "E-Track flooring",
        "DOT inspected",
        "Basic warranty included"
      ],
      popular: false,
    },
    {
      name: "Professional",
      type: "Refrigerated Trailer",
      price: "$65,000",
      rentPrice: "$1,500/month",
      image: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&w=1400&fit=crop",
      features: [
        "53' Reefer Trailer",
        "Carrier/Thermo King unit",
        "Multi-temp capable",
        "Air ride suspension",
        "Aluminum wheels",
        "LED interior lights",
        "2 year warranty",
        "Maintenance included"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      type: "Flatbed Trailer",
      price: "$35,000",
      rentPrice: "$900/month",
      image: "https://images.pexels.com/photos/27099095/pexels-photo-27099095.jpeg?auto=compress&cs=tinysrgb&w=1400&fit=crop",
      features: [
        "53' Flatbed Trailer",
        "Steel or aluminum deck",
        "Winches & straps included",
        "Coil package available",
        "Spread axle option",
        "Tool boxes",
        "3 year warranty",
        "Priority support"
      ],
      popular: false,
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/trailer.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/84" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Buy or <span className="text-[#DC2626]">Rent</span> Equipment
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Quality trailers and equipment for your trucking business. Flexible purchase and rental options to fit your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              View Equipment
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1F2937] transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Why Buy/Rent Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Why Choose Our Equipment?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality equipment with flexible options to match your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Well Maintained",
                description: "All equipment thoroughly inspected and maintained to the highest standards before delivery."
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Flexible Financing",
                description: "Multiple financing options with competitive rates and terms tailored for your business."
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Full Documentation",
                description: "Complete maintenance records and DOT compliance documentation provided on every unit."
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Warranty Included",
                description: "Comprehensive warranty coverage on all purchases and rentals for peace of mind."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#F8FAFC]">
        <div className="text-center py-16 px-4">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Equipment & Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the equipment that fits your needs and budget
          </p>
        </div>

        {pricingPlans.map((plan, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch h-auto lg:h-screen`}
            >
              {/* Image */}
              <div className="w-full lg:w-[65%] relative overflow-hidden h-72 lg:h-full">
                <img
                  src={plan.image}
                  alt={plan.type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {plan.popular && (
                  <div className="absolute top-6 left-6 bg-[#DC2626] text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="absolute bottom-6 left-8">
                  <p className="text-white font-bold text-3xl drop-shadow-lg">{plan.type}</p>
                </div>
              </div>

              {/* Info */}
              <div className="w-full lg:w-[35%] bg-[#1F2937] flex flex-col justify-center px-10 py-14">
                <p className="text-xs font-semibold text-[#DC2626] uppercase tracking-widest mb-3">{plan.name} Package</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2 text-sm">to buy</span>
                </div>
                <p className="text-gray-400 text-sm mb-8">
                  or <span className="font-bold text-[#DC2626] text-base">{plan.rentPrice}</span> to rent
                </p>

                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button
                    onClick={() => openModal(plan, 'buy')}
                    className="flex items-center justify-center w-full py-3.5 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Buy Now
                  </button>
                  <button
                    onClick={() => openModal(plan, 'rent')}
                    className="flex items-center justify-center w-full py-3.5 font-semibold rounded-lg border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Additional Equipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Additional Equipment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete your fleet with our accessories and add-ons
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Straps & Chains", price: "From $25", image: "https://images.pexels.com/photos/29040683/pexels-photo-29040683.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { name: "Tarps", price: "From $150", image: "https://images.pexels.com/photos/29399463/pexels-photo-29399463.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { name: "Load Bars", price: "From $35", image: "https://images.pexels.com/photos/15229827/pexels-photo-15229827.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { name: "Pallet Jacks", price: "From $300", image: "https://images.pexels.com/photos/34585139/pexels-photo-34585139.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { name: "Dollies", price: "From $500", image: "https://images.pexels.com/photos/4820678/pexels-photo-4820678.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { name: "Ramps", price: "From $200", image: "https://images.pexels.com/photos/10893500/pexels-photo-10893500.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { name: "Wheel Chocks", price: "From $15", image: "https://images.pexels.com/photos/29348626/pexels-photo-29348626.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { name: "Safety Kits", price: "From $75", image: "https://images.pexels.com/photos/5964977/pexels-photo-5964977.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-xl transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1F2937] text-base mb-1">{item.name}</h3>
                  <p className="text-[#DC2626] text-sm font-semibold mb-3">{item.price}</p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full py-2 bg-[#1F2937] text-white text-sm font-semibold rounded-lg hover:bg-[#DC2626] transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Buy
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530508777238-14544088c3ed?w=1600&h=700&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-[#DC2626]/92" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Flexible Financing Options</h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Don&apos;t let budget constraints hold you back. We offer multiple financing solutions to help you get the equipment you need.
              </p>
              <ul className="space-y-4">
                {[
                  { text: "Competitive interest rates starting at 4.9% APR", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
                  { text: "Terms from 12 to 84 months", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
                  { text: "Low down payment options available", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /> },
                  { text: "Quick approval process — often same day", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> },
                  { text: "No prepayment penalties ever", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <span className="text-white/95">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {financingSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937] mb-2">Application Received!</h3>
                  <p className="text-gray-500 text-sm mb-6">We&apos;ll review your financing application and get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setFinancingSubmitted(false); setFinancingForm({ business: '', email: '', phone: '', equipment: '' }); }}
                    className="px-6 py-3 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#DC2626]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937]">Get Pre-Approved</h3>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <input type="text" placeholder="Business Name" value={financingForm.business} onChange={e => setFinancingForm(prev => ({ ...prev, business: e.target.value }))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent" />
                </div>
                <div className="relative">
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input type="email" placeholder="Email Address" value={financingForm.email} onChange={e => setFinancingForm(prev => ({ ...prev, email: e.target.value }))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent" />
                </div>
                <div className="relative">
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <input type="tel" placeholder="Phone Number" value={financingForm.phone} onChange={e => setFinancingForm(prev => ({ ...prev, phone: e.target.value }))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent" />
                </div>
                <div className="relative">
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <select value={financingForm.equipment} onChange={e => setFinancingForm(prev => ({ ...prev, equipment: e.target.value }))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent appearance-none bg-white text-gray-700">
                    <option value="">Equipment Interest</option>
                    <option value="Dry Van Trailer">Dry Van Trailer</option>
                    <option value="Refrigerated Trailer">Refrigerated Trailer</option>
                    <option value="Flatbed Trailer">Flatbed Trailer</option>
                    <option value="Multiple Units">Multiple Units</option>
                  </select>
                </div>
                <button
                  onClick={async () => {
                    if (!financingForm.business || !financingForm.phone) return;
                    setFinancingLoading(true);
                    try {
                      await fetch('/api/telegram', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          type: 'Financing',
                          data: {
                            business: financingForm.business,
                            email: financingForm.email,
                            phone: financingForm.phone,
                            equipment: financingForm.equipment || 'Not specified',
                          }
                        })
                      });
                    } catch (err) {
                      console.error(err);
                    }
                    setFinancingLoading(false);
                    setFinancingSubmitted(true);
                  }}
                  disabled={!financingForm.business || !financingForm.phone || financingLoading}
                  className="w-full py-4 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors flex items-center justify-center space-x-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {financingLoading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Check Financing Options</span>
                    </>
                  )}
                </button>
              </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about buying and renting equipment.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What's included in the rental price?",
                a: "Our rental prices include basic maintenance, DOT compliance, and 24/7 roadside assistance. Insurance and fuel are the renter's responsibility.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              },
              {
                q: "Can I rent-to-own equipment?",
                a: "Yes! We offer rent-to-own programs where a portion of your monthly payment goes toward the purchase price. Ask our sales team for details.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              },
              {
                q: "What's the minimum rental period?",
                a: "Our minimum rental period is one month. We offer discounts for longer-term rentals of 6 months or more.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              },
              {
                q: "Do you deliver equipment?",
                a: "Yes, we can deliver equipment to your location anywhere in the continental US. Delivery fees vary by distance.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:border-[#DC2626]/30">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#DC2626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {faq.icon}
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1F2937]">{faq.q}</h3>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#DC2626]' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="ml-14 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/truck2.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1F2937]/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our equipment specialists are ready to help you find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Sales
            </Link>
            <a
              href="tel:7042225288"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1F2937] transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (704) 222-5288
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>

            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                src={modal.plan.image}
                alt={modal.plan.type}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button onClick={closeModal} className="absolute top-3 right-3 bg-black/40 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <div className="absolute bottom-4 left-5">
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{modal.plan.name}</p>
                <h2 className="text-2xl font-bold text-white">{modal.plan.type}</h2>
              </div>
            </div>

            {/* Steps indicator */}
            <div className="px-6 pt-4 pb-2">
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1.5 text-xs font-bold ${
                  modalStep === 1 ? 'text-[#DC2626]' : 'text-green-500'
                }`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                    modalStep === 1 ? 'bg-[#DC2626]' : 'bg-green-500'
                  }`}>
                    {modalStep > 1 ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    ) : '1'}
                  </span>
                  Equipment
                </div>
                <div className="flex-1 h-px bg-gray-200" />
                <div className={`flex items-center gap-1.5 text-xs font-bold ${
                  modalStep === 2 ? 'text-[#DC2626]' : submitted ? 'text-green-500' : 'text-gray-400'
                }`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    modalStep === 2 ? 'bg-[#DC2626] text-white' : submitted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {submitted ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    ) : '2'}
                  </span>
                  Details
                </div>
              </div>
            </div>

            {/* ───── STEP 1: Equipment Selection ───── */}
            {modalStep === 1 && (
              <>
                {/* Buy / Rent toggle */}
                <div className="px-6 pt-3 pb-1">
                  <div className="flex rounded-xl overflow-hidden border border-gray-200 w-full">
                    <button
                      onClick={() => setModalMode('buy')}
                      className={`flex-1 py-2.5 text-sm font-bold transition-colors flex items-center justify-center gap-1.5 ${
                        modalMode === 'buy'
                          ? 'bg-[#DC2626] text-white'
                          : 'bg-white text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                      Buy — {modal.plan.price}
                    </button>
                    <button
                      onClick={() => setModalMode('rent')}
                      className={`flex-1 py-2.5 text-sm font-bold transition-colors flex items-center justify-center gap-1.5 ${
                        modalMode === 'rent'
                          ? 'bg-[#DC2626] text-white'
                          : 'bg-white text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      Rent — {modal.plan.rentPrice}
                    </button>
                  </div>
                </div>

                {/* Included Features */}
                <div className="p-6 border-b border-gray-100">
                  <p className="text-sm font-semibold text-[#1F2937] mb-3 uppercase tracking-wide">What&apos;s Included:</p>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {modal.plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add Extras */}
                <div className="p-6 border-b border-gray-100">
                  <button
                    onClick={() => setShowExtras(v => !v)}
                    className="flex items-center justify-between w-full py-3 px-4 bg-[#F8FAFC] border border-gray-200 rounded-xl font-semibold text-[#1F2937] hover:border-[#DC2626] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/></svg>
                      Add Additional Equipment
                    </span>
                    <svg className={`w-4 h-4 transition-transform ${showExtras ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  {showExtras && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {additionalItems.map(item => {
                        const qty = selectedExtras[item.name] || 0;
                        return (
                          <div
                            key={item.name}
                            className={`flex flex-col rounded-lg border p-2.5 transition-all ${
                              qty > 0 ? 'border-[#DC2626] bg-red-50' : 'border-gray-200 bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{item.name}</span>
                              <span className="text-xs text-gray-400">${item.price}/ea</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <button
                                onClick={() => changeQty(item.name, -1)}
                                disabled={qty === 0}
                                className="w-7 h-7 rounded-md bg-gray-100 hover:bg-[#DC2626] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center font-bold text-gray-600 text-base leading-none"
                              >−</button>
                              <span className={`w-8 text-center font-bold text-sm ${qty > 0 ? 'text-[#DC2626]' : 'text-gray-300'}`}>{qty}</span>
                              <button
                                onClick={() => changeQty(item.name, 1)}
                                className="w-7 h-7 rounded-md bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors flex items-center justify-center font-bold text-base leading-none"
                              >+</button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Extras summary + Next button */}
                <div className="p-6">
                  {Object.keys(selectedExtras).length > 0 && (
                    <div className="mb-4 bg-[#F8FAFC] rounded-xl p-4">
                      <p className="text-sm font-semibold text-[#1F2937] mb-2">Selected extras:</p>
                      {Object.entries(selectedExtras).map(([name, qty]) => {
                        const item = additionalItems.find(i => i.name === name);
                        return (
                          <div key={name} className="flex justify-between text-sm text-gray-600 py-0.5">
                            <span>{name} × {qty}</span>
                            <span>${item.price * qty}</span>
                          </div>
                        );
                      })}
                      <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-bold text-[#1F2937]">
                        <span>Extras total</span>
                        <span>${extrasTotal}</span>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => setModalStep(2)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#DC2626] text-white font-bold rounded-xl hover:bg-[#B91C1C] transition-colors text-lg"
                  >
                    Continue
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </button>
                </div>
              </>
            )}

            {/* ───── STEP 2: Contact Details ───── */}
            {modalStep === 2 && !submitted && (
              <div className="p-6">
                {/* Order summary */}
                <div className="mb-6 bg-[#F8FAFC] rounded-xl p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-[#1F2937]">{modal.plan.type}</span>
                    <span className="text-sm font-bold text-[#DC2626]">
                      {modalMode === 'buy' ? modal.plan.price : modal.plan.rentPrice}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 uppercase">{modalMode === 'buy' ? 'Purchase' : 'Rental'}</span>
                  {Object.keys(selectedExtras).length > 0 && (
                    <div className="border-t border-gray-200 mt-3 pt-3">
                      {Object.entries(selectedExtras).map(([name, qty]) => {
                        const item = additionalItems.find(i => i.name === name);
                        return (
                          <div key={name} className="flex justify-between text-xs text-gray-500 py-0.5">
                            <span>{name} × {qty}</span>
                            <span>${item.price * qty}</span>
                          </div>
                        );
                      })}
                      <div className="flex justify-between text-sm font-bold text-[#1F2937] mt-1">
                        <span>Extras</span>
                        <span>${extrasTotal}</span>
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#1F2937] mb-4">Your Details</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Company Name</label>
                    <div className="relative">
                      <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Enter company name"
                        value={contactForm.company}
                        onChange={e => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone Number</label>
                    <div className="relative">
                      <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input
                        type="tel"
                        placeholder="(704) 222-5288"
                        value={contactForm.phone}
                        onChange={e => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Address</label>
                    <div className="relative">
                      <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <textarea
                        placeholder="Street, City, State, ZIP"
                        rows={2}
                        value={contactForm.address}
                        onChange={e => setContactForm(prev => ({ ...prev, address: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent text-sm resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setModalStep(1)}
                    className="flex items-center justify-center gap-1 px-5 py-3.5 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
                    Back
                  </button>
                  <button
                    onClick={async () => {
                      if (contactForm.company && contactForm.phone && contactForm.address) {
                        setLoading(true);
                        try {
                          const extras = Object.entries(selectedExtras).map(([name, qty]) => {
                            const item = additionalItems.find(i => i.name === name);
                            return `${name} × ${qty} ($${item.price * qty})`;
                          }).join(', ');
                          await fetch('/api/telegram', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                              type: modalMode === 'buy' ? 'Buy' : 'Rent',
                              data: {
                                equipment: modal.plan.type,
                                package: modal.plan.name,
                                price: modalMode === 'buy' ? modal.plan.price : modal.plan.rentPrice,
                                extras: extras || 'None',
                                extrasTotal: `$${extrasTotal}`,
                                company: contactForm.company,
                                phone: contactForm.phone,
                                address: contactForm.address,
                              }
                            })
                          });
                        } catch (err) {
                          console.error(err);
                        }
                        setLoading(false);
                        setSubmitted(true);
                      }
                    }}
                    disabled={!contactForm.company || !contactForm.phone || !contactForm.address || loading}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#DC2626] text-white font-bold rounded-xl hover:bg-[#B91C1C] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                    ) : modalMode === 'buy' ? (
                      <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>Submit Order</>
                    ) : (
                      <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>Submit Rental Request</>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* ───── STEP 2: Success ───── */}
            {modalStep === 2 && submitted && (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">Request Submitted!</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1F2937]">{contactForm.company}</span>. We&apos;ve received your {modalMode === 'buy' ? 'purchase' : 'rental'} request for the <span className="font-semibold text-[#1F2937]">{modal.plan.type}</span>. Our team will contact you at <span className="font-semibold text-[#1F2937]">{contactForm.phone}</span> within 24 hours.
                </p>
                <button
                  onClick={closeModal}
                  className="px-8 py-3 bg-[#DC2626] text-white font-semibold rounded-xl hover:bg-[#B91C1C] transition-colors"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
