import Link from 'next/link';
import HeroParallax from './components/HeroParallax';
import LogoMarquee from './components/LogoMarquee';
import AnimatedStats from './components/AnimatedStats';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <HeroParallax />

      {/* Trusted By Section - Logo Marquee */}
      <LogoMarquee />

      {/* Services Section - Clean Modern Design */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2937] mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-[#DC2626] mx-auto"></div>
          </div>

          {/* Services Grid - Minimal Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
            {[
              {
                title: 'For Shippers',
                description: 'Full truckload & LTL shipping solutions with real-time visibility and competitive rates.',
                features: ['GPS Live Tracking', 'Instant Rate Quotes', 'Dedicated Support'],
                href: '/for-clients',
                number: '01'
              },
              {
                title: 'For Drivers',
                description: 'Join a company that values its drivers. Top pay, respect, and the miles you need.',
                features: ['Top Industry Pay', 'Home Time Options', 'Modern Fleet'],
                href: '/for-drivers',
                number: '02'
              },
              {
                title: 'For Owner-Operators',
                description: 'Partnership that works. High percentage, quick pay, and consistent freight.',
                features: ['88-92% Gross', 'Weekly Settlements', 'Fuel Card Program'],
                href: '/for-owners',
                number: '03'
              }
            ].map((service, i) => (
              <Link 
                key={i} 
                href={service.href}
                className="group relative p-6 sm:p-8 lg:p-12 bg-white hover:bg-[#1F2937] transition-all duration-500 border-b lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0 border-gray-200"
              >
                {/* Number */}
                <span className="text-5xl sm:text-7xl font-black text-gray-100 group-hover:text-white/10 transition-colors absolute top-4 right-4 sm:top-6 sm:right-6">
                  {service.number}
                </span>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] group-hover:text-white mb-3 sm:mb-4 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-300 mb-5 sm:mb-8 transition-colors leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
                        <span className="text-gray-600 group-hover:text-gray-300 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-[#DC2626] font-medium">
                    <span className="group-hover:text-white transition-colors">Learn More</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-2 group-hover:text-white transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#DC2626] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Link href="/buy-rent" className="group flex items-center justify-between p-5 sm:p-8 bg-[#1F2937] rounded-2xl hover:bg-[#111827] transition-colors">
              <div>
                <span className="text-[#DC2626] text-sm font-semibold uppercase tracking-wider">Equipment</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Buy Equipment or Rent Trailers</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#DC2626] transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
            
            <Link href="/blog" className="group flex items-center justify-between p-5 sm:p-8 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors">
              <div>
                <span className="text-[#DC2626] text-sm font-semibold uppercase tracking-wider">Resources</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mt-1">Industry News &amp; Updates</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#1F2937] flex items-center justify-center group-hover:bg-[#DC2626] transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Ultra Clean */}
      <section className="py-16 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Row - Animated */}
          <AnimatedStats />

          {/* Features - Horizontal Cards */}
          <div className="space-y-4">
            {[
              { 
                title: 'Fully Insured', 
                desc: 'Complete cargo insurance coverage on every shipment',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )
              },
              { 
                title: 'Real-Time GPS', 
                desc: 'Track your cargo location with live updates',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                )
              },
              { 
                title: 'Best Rates', 
                desc: 'Transparent pricing with no hidden fees',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-[#1F2937] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-white group-hover:bg-[#DC2626] flex items-center justify-center text-[#1F2937] group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#1F2937] group-hover:text-white transition-colors">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{feature.desc}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern */}
      <section className="py-16 sm:py-28 bg-[#0f1117] relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',backgroundSize:'60px 60px'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="flex items-end justify-between mb-10 sm:mb-16">
            <div>
              <p className="text-[#DC2626] text-sm font-medium uppercase tracking-[0.2em] mb-3">Testimonials</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                What our<br /><span className="text-[#DC2626]">clients</span> say
              </h2>
            </div>
            {/* Stars summary */}
            <div className="hidden md:flex flex-col items-end gap-1">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white/40 text-sm">5.0 average rating</span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "John Mitchell",
                role: "Logistics Director",
                company: "ABC Manufacturing",
                text: "SoHo Trans has been our go-to trucking partner for 5 years. Their reliability and professionalism are unmatched in the industry.",
                photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
              },
              {
                name: "Sarah Chen",
                role: "Supply Chain Manager",
                company: "Global Imports LLC",
                text: "The real-time tracking and proactive communication from SoHo Trans gives us complete visibility and peace of mind with our shipments.",
                photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
              },
              {
                name: "Mike Rodriguez",
                role: "Operations Head",
                company: "Fresh Foods Distribution",
                text: "Exceptional service! Their temperature-controlled fleet has been crucial for our perishable goods. Highly recommended.",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
              }
            ].map((t, i) => (
              <div key={i} className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-5 sm:p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                {/* Quote mark */}
                <div className="text-[#DC2626]/30 text-7xl font-serif leading-none mb-4 select-none">&ldquo;</div>
                <p className="text-white/70 leading-relaxed mb-8 text-[15px]">{t.text}</p>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#DC2626]/40"
                  />
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626] to-[#991B1B]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                             linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                             linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                             linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 leading-tight">
                Ready to Experience
                <span className="block">Premium Logistics?</span>
              </h2>
              <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Get started today with a free quote. Our team is ready to handle your freight needs with the care and efficiency you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#DC2626] font-bold rounded-xl hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Get Free Quote
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="tel:7042225288"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now
                </Link>
              </div>
        </div>
      </section>
    </div>
  );
}
