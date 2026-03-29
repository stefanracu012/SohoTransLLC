import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn about SoHo Trans LLC — our history, mission, values, and commitment to excellence in the trucking and logistics industry. Nationwide freight services since day one.',
  keywords: ['about SoHo Trans', 'trucking company history', 'logistics mission', 'freight company values', 'transportation company about'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About SoHo Trans LLC',
    description: 'Our history, mission, values, and commitment to excellence in trucking and logistics.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format&fit=crop&q=80"
          alt="SoHo Trans fleet"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F172A]/85" />
        {/* background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Moving America<br />
              <span className="text-[#DC2626]">Forward.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Built on trust, fueled by precision. SoHo Trans LLC has been
              setting the standard for freight excellence for over 15 years.
            </p>
          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── OUR STORY ───────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden mb-10">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&auto=format&fit=crop&q=80"
                  alt="Our fleet on the road"
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#DC2626] uppercase mb-4">Our Story</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight mb-8">
                From one truck<br />to a nationwide fleet
              </h2>
              <div className="space-y-5 text-lg text-gray-500 leading-relaxed">
                <p>
                  Founded in 2010 with a single truck and a relentless drive,
                  SoHo Trans LLC was built on one promise — show up, every time.
                  Our founder turned a passion for logistics into a company
                  that clients could genuinely count on.
                </p>
                <p>
                  As the years passed, word spread. One truck became fifty,
                  fifty became hundreds. Yet through every mile of growth we
                  held onto what made us different: real accountability,
                  transparent communication, and drivers who take pride
                  in every delivery.
                </p>
                <p>
                  Today we serve thousands of clients coast-to-coast, handling
                  everything from consumer goods to heavy industrial freight
                  with the same care that defined day one.
                </p>
              </div>
            </div>

            {/* timeline */}
            <div className="relative pl-8 border-l-2 border-gray-100 space-y-10">
              {[
                { year: '2010', title: 'Founded in New York', desc: 'Started operations with a single truck and big ambitions.' },
                { year: '2013', title: 'Expanded to 50 trucks', desc: 'Secured first enterprise contracts with national retailers.' },
                { year: '2017', title: 'Coast-to-coast coverage', desc: 'Reached all 50 states and crossed 1M annual miles.' },
                { year: '2022', title: 'Fleet of 500+', desc: 'Launched owner-operator program and real-time tracking.' },
                { year: '2025', title: 'Industry leader', desc: 'Recognized as one of the Top 100 Trucking Companies in the US.' },
              ].map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[2.85rem] w-4 h-4 rounded-full bg-[#DC2626] border-4 border-white shadow-sm" />
                  <span className="text-xs font-bold tracking-widest text-[#DC2626] uppercase">{item.year}</span>
                  <h4 className="text-base font-bold text-[#0F172A] mt-0.5">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[420px] flex items-end">
              <img
                src="/soho1.jpg"
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              <div className="relative z-10 p-10">
                <p className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase mb-3">Mission</p>
                <h3 className="text-2xl font-black text-white mb-4">Why we exist</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  To provide reliable, efficient, and safe freight transportation that exceeds expectations — while creating real opportunities for our drivers, owners, and partners to grow.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[420px] flex items-end">
              <img
                src="/soho2.jpg"
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              <div className="relative z-10 p-10">
                <p className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase mb-3">Vision</p>
                <h3 className="text-2xl font-black text-white mb-4">Where we&apos;re headed</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  To be the most trusted name in American trucking — setting the standard for logistics excellence while leading the industry toward a smarter, more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-bold tracking-[0.25em] text-[#DC2626] uppercase mb-4">Core Values</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight">
              The principles that drive every mile
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                num: '01',
                title: 'Safety First',
                description: 'Every decision prioritizes the safety of our drivers, cargo, and the public on every road.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                num: '02',
                title: 'Reliability',
                description: 'When we commit to a deadline, we keep it. On-time means on-time — no exceptions.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                num: '03',
                title: 'Teamwork',
                description: 'Our results come from genuine collaboration and mutual respect across every level.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                num: '04',
                title: 'Innovation',
                description: 'We invest in technology and fresh thinking to keep improving every part of what we do.',
              },
            ].map((v) => (
              <div key={v.num} className="group relative bg-[#F8FAFC] rounded-2xl p-8 hover:bg-[#0F172A] transition-colors duration-300 overflow-hidden">
                <span className="absolute top-6 right-6 text-4xl font-black text-gray-100 group-hover:text-white/5 transition-colors duration-300 leading-none select-none">
                  {v.num}
                </span>
                <div className="relative">
                  <div className="w-12 h-12 bg-white group-hover:bg-[#DC2626] rounded-xl flex items-center justify-center mb-6 text-[#DC2626] group-hover:text-white shadow-sm transition-all duration-300">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-white mb-3 transition-colors duration-300">{v.title}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────────────────── */}
      <section className="py-28 bg-[#0F172A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] text-[#DC2626] uppercase mb-4">Compliance</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Certifications & Standards</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We hold ourselves to the highest regulatory and quality standards in the industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: 'DOT Certified',
                sub: 'Dept. of Transportation',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                name: 'FMCSA Compliant',
                sub: 'Federal Motor Carrier',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
              {
                name: 'Hazmat Certified',
                sub: 'Hazardous Materials',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
              {
                name: 'ISO 9001:2015',
                sub: 'Quality Management',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
            ].map((c) => (
              <div key={c.name} className="group bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 rounded-2xl p-6 text-center transition-all duration-300">
                <div className="w-14 h-14 bg-[#DC2626]/15 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#DC2626] group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
                <div className="text-white font-bold mb-1">{c.name}</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-[#DC2626] uppercase mb-4">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight mb-6">
            Ready to ship with confidence?
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses that trust SoHo Trans LLC to deliver — on time, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#DC2626] text-white font-bold rounded-full shadow-lg shadow-red-500/25 hover:bg-[#B91C1C] hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
            >
              Get a Free Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/for-drivers"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0F172A] text-white font-bold rounded-full hover:bg-[#1E293B] transition-all duration-300 hover:scale-105"
            >
              Join Our Team
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
