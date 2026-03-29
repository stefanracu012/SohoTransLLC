import Link from 'next/link';
import DriverApplyForm from '../components/DriverApplyForm';

export const metadata = {
  title: 'CDL Driver Jobs',
  description: 'Join SoHo Trans LLC as a CDL driver. Competitive pay up to $0.65/mile, modern equipment, full benefits, home time, and a supportive team environment. Apply now.',
  keywords: ['CDL driver jobs', 'truck driver employment', 'OTR driver positions', 'company driver jobs', 'trucking careers', 'CDL-A jobs', 'long haul driver', 'regional driver jobs', 'driver benefits', 'trucking employment'],
  alternates: { canonical: '/for-drivers' },
  openGraph: {
    title: 'CDL Driver Jobs | SoHo Trans LLC',
    description: 'Competitive pay, modern equipment, full benefits. Join our team of professional CDL drivers.',
    url: '/for-drivers',
    type: 'website',
  },
};

export default function ForDriversPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=80"
          alt="CDL Driver"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F2937]/88" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#DC2626] text-white text-sm font-semibold rounded-full mb-6">
                Now Hiring CDL Drivers
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Drive Your Career <span className="text-[#DC2626]">Forward</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join the SoHo Trans family and experience the difference. Competitive pay, modern equipment, and the respect you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors text-lg text-center"
                >
                  Apply Now
                </Link>
                <a
                  href="#benefits"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1F2937] transition-colors text-lg text-center"
                >
                  View Benefits
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <DriverApplyForm />
            </div>
          </div>
        </div>
      </section>

      {/* Pay Stats Section */}
      <section className="py-16 bg-[#DC2626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$85K+</div>
              <div className="text-lg opacity-90">Average Annual Pay</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$0.65</div>
              <div className="text-lg opacity-90">Per Mile Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Weekly</div>
              <div className="text-lg opacity-90">Direct Deposit</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">No-Touch Freight</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Driver Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our drivers because they're the backbone of our company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Competitive Pay",
                description: "Industry-leading pay rates with performance bonuses and consistent miles"
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                title: "Health Insurance",
                description: "Comprehensive medical, dental, and vision coverage for you and your family"
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                title: "Paid Time Off",
                description: "Generous PTO policy plus paid holidays to spend with loved ones"
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1V8l3 3 3-3v7.5M8 21h8" /></svg>,
                title: "Modern Equipment",
                description: "Late-model trucks with all the amenities for comfort on long hauls"
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                title: "Home Time",
                description: "Regular home time options - weekly, bi-weekly, or regional routes"
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                title: "401(k) Retirement",
                description: "Company-matched retirement savings to secure your future"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-[#DC2626] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6">Requirements</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're looking for safe, professional drivers who take pride in their work. Here's what you need to join our team:
              </p>
              <ul className="space-y-4">
                {[
                  "Valid Class A CDL",
                  "Minimum 1 year of OTR experience",
                  "Clean driving record (no major violations)",
                  "Pass DOT physical and drug screening",
                  "21 years of age or older",
                  "Good communication skills"
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
            <div className="bg-[#1F2937] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Available Positions</h3>
              <div className="space-y-4">
                {[
                  { title: "OTR Driver", pay: "$0.60-$0.70/mile" },
                  { title: "Regional Driver", pay: "$0.58-$0.65/mile" },
                  { title: "Local Driver", pay: "$25-$30/hour" },
                  { title: "Team Driver", pay: "$0.65-$0.75/mile" }
                ].map((position, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <span className="font-semibold">{position.title}</span>
                    <span className="text-[#DC2626]">{position.pay}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 block w-full py-4 bg-[#DC2626] text-white font-bold rounded-lg text-center hover:bg-[#B91C1C] transition-colors"
              >
                Apply for Position
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-white overflow-hidden">
        <div className="text-center py-16 px-4">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Our Fleet</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Drive the best equipment in the industry</p>
        </div>

        {[
          {
            title: "Freightliner Cascadia",
            image: "/truck1.jpg",
            features: ["2023-2024 Models", "APU Equipped", "Refrigerator & Microwave", "Premium Mattress"],
            imageLeft: true,
          },
          {
            title: "Kenworth T680",
            image: "/truck2.jpg",
            features: ["Latest Technology", '76" Sleeper', "Climate Control", "Inverter Power"],
            imageLeft: false,
          },
          {
            title: "Peterbilt 579",
            image: "https://images.unsplash.com/photo-1626121300305-def4dc305387?w=1200&auto=format&fit=crop&q=80",
            features: ["Automatic Transmission", "Collision Mitigation", "Lane Departure Warning", "Driver Comfort Package"],
            imageLeft: true,
          },
        ].map((truck, index) => (
          <div
            key={index}
            className={`flex flex-col ${truck.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch lg:h-screen`}
          >
            {/* Image — flush to edge, ~65% width */}
            <div className="w-full lg:w-[65%] relative overflow-hidden h-64 sm:h-80 lg:h-full">
              <img
                src={truck.image}
                alt={truck.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-${truck.imageLeft ? 'r' : 'l'} from-transparent to-black/30`} />
            </div>

            {/* Text — remaining 35% */}
            <div className="w-full lg:w-[35%] bg-[#1F2937] flex flex-col justify-center px-8 py-10 lg:px-10 lg:py-12">
              <span className="text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                0{index + 1}
              </span>
              <h3 className="text-3xl font-black text-white mb-6">{truck.title}</h3>
              <ul className="space-y-3">
                {truck.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#DC2626] to-[#B91C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Journey Today</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our team of professional drivers and enjoy the career you deserve. Apply now and hear back within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#DC2626] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Apply Now
            </Link>
            <a
              href="tel:5551234567"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#DC2626] transition-colors text-lg"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
