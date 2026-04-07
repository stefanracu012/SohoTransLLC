import Link from 'next/link';

export const metadata = {
  title: 'Owner-Operator Programs',
  description: 'Partner with SoHo Trans LLC as an owner-operator. Consistent freight, 90%+ load rate, weekly settlements, fuel discounts, and dedicated dispatch support.',
  keywords: ['owner operator trucking', 'owner operator lease program', 'independent truck driver', 'owner operator freight', 'trucking partnership', 'owner operator pay', 'lease purchase trucking', 'dedicated dispatch', 'fuel card program', 'owner operator benefits'],
  alternates: { canonical: '/for-owners' },
  openGraph: {
    title: 'Owner-Operator Programs | SoHo Trans LLC',
    description: 'Consistent freight, competitive pay, weekly settlements, and dedicated support for owner-operators.',
    url: '/for-owners',
    type: 'website',
  },
};

export default function ForOwnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&auto=format&fit=crop&q=80"
          alt="Owner Operator"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F2937]/88" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#DC2626] text-white text-sm font-semibold rounded-full mb-6">
                Owner-Operator Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Truck. <span className="text-[#DC2626]">Our Support.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Maximize your earning potential with SoHo Trans. We provide consistent freight, competitive rates, and the back-office support you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors text-lg text-center"
                >
                  Partner With Us
                </Link>
                <a
                  href="#program"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1F2937] transition-colors text-lg text-center"
                >
                  Program Details
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/truck2.jpg"
                  alt="Owner Operator truck"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8">
                  <div className="text-white space-y-1">
                    <div className="text-4xl font-bold">90%</div>
                    <div className="text-lg opacity-90">Of Line Haul Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to helping owner-operators build successful businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Competitive Pay",
                description: "Keep 90% of line haul revenue with no hidden deductions. Transparent pay every time."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Quick Pay Available",
                description: "Get paid faster with our quick pay option. Access your earnings when you need them."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Consistent Freight",
                description: "Access our vast network of shippers. No deadhead hunting – we keep you moving."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: "Flexible Routes",
                description: "Choose the lanes that work for you. OTR, regional, or dedicated options available."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "24/7 Support",
                description: "Dedicated dispatch and support team available around the clock when you need help."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Admin Support",
                description: "We handle permits, IFTA, compliance, and paperwork so you can focus on driving."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#DC2626]/10 rounded-xl flex items-center justify-center mb-6 text-[#DC2626]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuel & Discounts Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530508777238-14544088c3ed?w=1600&auto=format&fit=crop&q=80"
          alt="Fuel station"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#DC2626]/88" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Fuel & Maintenance Discounts</h2>
              <p className="text-xl opacity-90 mb-8">
                Save thousands annually with our exclusive partner discounts. Lower your operating costs and increase your bottom line.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">$0.50+</div>
                  <div className="opacity-90">Fuel Discount/Gallon</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">25%</div>
                  <div className="opacity-90">Tire Discounts</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">20%</div>
                  <div className="opacity-90">Parts & Service</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">15%</div>
                  <div className="opacity-90">Insurance Savings</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Partner Fuel Network</h3>
              <ul className="space-y-4">
                {[
                  "Pilot Flying J - Nationwide Coverage",
                  "Love's Travel Stops",
                  "TA Petro Stopping Centers",
                  "Ambest Truck Stops",
                  "And many more locations"
                ].map((station, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#DC2626] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{station}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Owner-Operator Requirements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our network of successful owner-operators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Driver Requirements</h3>
              <ul className="space-y-4">
                {[
                  "Valid Class A CDL",
                  "2+ years of verifiable OTR experience",
                  "Clean driving record",
                  "Pass DOT physical and drug screening",
                  "23 years of age or older"
                ].map((req, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Equipment Requirements</h3>
              <ul className="space-y-4">
                {[
                  "Truck must be 2015 or newer",
                  "Current DOT inspection",
                  "Valid registration and insurance",
                  "ELD compliant",
                  "Clean and professional appearance"
                ].map((req, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#DC2626] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Getting Started is Easy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our owner-operator program in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply Online", description: "Complete our simple online application" },
              { step: "2", title: "Document Review", description: "Submit required documentation" },
              { step: "3", title: "Orientation", description: "Brief orientation and onboarding" },
              { step: "4", title: "Start Earning", description: "Get your first load and hit the road" }
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#DC2626]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1F2937] to-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Maximize Your Earnings?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join our network of successful owner-operators and take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors text-lg"
            >
              Apply Now
            </Link>
            <a
              href="tel:7042225288"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1F2937] transition-colors text-lg"
            >
              Call (704) 222-5288
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
