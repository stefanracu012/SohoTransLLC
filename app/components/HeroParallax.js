'use client';

import Link from 'next/link';

export default function HeroParallax() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none block lg:hidden"
        >
          <source src="/IMG_1660.MOV" type="video/quicktime" />
          <source src="/IMG_1660.MOV" type="video/mp4" />
        </video>
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden lg:block"
        >
          <source src="/video_2026-03-29_13-16-26.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626]/30 via-transparent to-transparent z-10"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(220,38,38,0.3) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(220,38,38,0.3) 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#DC2626]/20 rounded-full blur-3xl animate-pulse z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl animate-pulse z-10" style={{ animationDelay: '1s' }}></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 sm:mb-6 leading-[1.1]">
          Moving America&apos;s
          <span className="block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#F97316]">
              Freight Forward
            </span>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          Industry-leading logistics solutions with real-time tracking,
          competitive rates, and a commitment to on-time delivery that
          sets us apart.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/contact"
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Free Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#B91C1C] to-[#991B1B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="/about"
            className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
