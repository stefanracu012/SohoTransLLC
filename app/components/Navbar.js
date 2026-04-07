'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const pathname = usePathname();

  // DOM refs for zero-re-render scroll animation
  const wrapperRef = useRef(null);
  const navRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const isVisibleRef = useRef(true);
  const isScrolledRef = useRef(false);
  const rafRef = useRef(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      label: 'Services',
      dropdown: [
        { 
          href: '/for-clients', 
          label: 'For Clients', 
          description: 'Freight solutions for businesses',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        { 
          href: '/for-drivers', 
          label: 'For Drivers', 
          description: 'Join our professional team',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        },
        { 
          href: '/for-owners', 
          label: 'For Owners', 
          description: 'Owner-operator programs',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
      ],
    },
    { href: '/buy-rent', label: 'Buy/Rent' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  // Handle scroll – direct DOM writes, zero React re-renders, only on state change
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const currentScrollY = window.scrollY;
        const lastY = lastScrollYRef.current;

        // Nav background – classList toggle only when threshold is crossed
        const nowScrolled = currentScrollY > 20;
        if (nowScrolled !== isScrolledRef.current) {
          isScrolledRef.current = nowScrolled;
          navRef.current?.classList.toggle('navbar-scrolled', nowScrolled);
        }

        // Wrapper hide / show – only on direction change
        const shouldHide = currentScrollY > lastY && currentScrollY > 100;
        if (shouldHide !== !isVisibleRef.current) {
          isVisibleRef.current = !shouldHide;
          if (wrapperRef.current) {
            wrapperRef.current.style.transform = shouldHide
              ? 'translate3d(0,-100%,0)'
              : 'translate3d(0,0,0)';
          }
        }

        lastScrollYRef.current = currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActiveLink = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isServicesActive = () => {
    return ['/for-clients', '/for-drivers', '/for-owners'].some(path => pathname.startsWith(path));
  };

  return (
    <>
      {/* Fixed header wrapper - animates as one unit */}
      <div ref={wrapperRef} className="fixed top-0 left-0 right-0 z-50 navbar-wrapper">
      {/* Top Bar */}
      <div className="w-full bg-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs text-gray-400">
            {/* Left - Info */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Mon–Fri 6am–10pm
              </span>
            </div>

            {/* Right - Contact + Socials */}
            <div className="flex items-center gap-3">
              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-2">
                <a href="https://www.instagram.com/sohotrans/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@sohotransportation" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <span className="w-px h-3 bg-gray-600 mx-1"></span>
              </div>
              <a href="mailto:info@sohotrans.com" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
                info@sohotrans.com
              </a>
              {/* Phone + WhatsApp Dropdown */}
              <div className="relative"
                onMouseEnter={() => setPhoneOpen(true)}
                onMouseLeave={() => setPhoneOpen(false)}
              >
                <button className="flex items-center gap-1.5 text-white font-medium hover:text-[#DC2626] transition-colors">
                  <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                  (704) 222-5288
                  <svg className={`w-3 h-3 transition-transform duration-200 ${phoneOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {/* Dropdown */}
                <div className={`absolute top-full right-0 pt-2 z-[999] transition-all duration-200 ${phoneOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 min-w-[200px]">
                    <a href="tel:7042225288" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                      </svg>
                      <div>
                        <div className="text-sm font-medium">Call Us</div>
                        <div className="text-xs text-gray-400">(704) 222-5288</div>
                      </div>
                    </a>
                    <a href="https://wa.me/17042225288" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <div>
                        <div className="text-sm font-medium">WhatsApp</div>
                        <div className="text-xs text-gray-400">Send a message</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav ref={navRef} className={`w-full navbar-nav ${isOpen ? 'bg-white' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 group h-full py-1"
            >
              <img
                src="/Logo%20SohoTransLLC.png"
                alt="SoHo Trans LLC"
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              {/* Text */}
              <div>
                <div className="flex items-center gap-0.5 leading-none">
                  <span className="text-[18px] sm:text-[22px] font-black text-[#DC2626] tracking-tight">Trans</span>
                  <span className="text-[18px] sm:text-[22px] font-black text-[#1F2937] tracking-tight">LLC</span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-semibold text-gray-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase">Trucking &amp; Logistics</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-gray-50/80 rounded-full px-2 py-1.5">
                {navLinks.map((link, index) => (
                  link.dropdown ? (
                    <div 
                      key={index} 
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                          isServicesActive()
                            ? 'text-[#DC2626] bg-red-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                        }`}
                      >
                        {link.label}
                        <svg 
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mega Dropdown */}
                      <div 
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                          servicesOpen 
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-2 min-w-[280px]">
                          <div className="p-2 mb-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">Our Services</p>
                          </div>
                          {link.dropdown.map((dropLink, dropIndex) => (
                            <Link
                              key={dropIndex}
                              href={dropLink.href}
                              className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group/item ${
                                isActiveLink(dropLink.href)
                                  ? 'bg-red-50 text-[#DC2626]'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              <span className="text-xl mt-0.5">{dropLink.icon}</span>
                              <div className="flex-1">
                                <div className={`font-semibold text-sm ${
                                  isActiveLink(dropLink.href) ? 'text-[#DC2626]' : 'text-gray-900'
                                }`}>
                                  {dropLink.label}
                                </div>
                                <div className="text-xs text-gray-500 mt-0.5">{dropLink.description}</div>
                              </div>
                              <svg 
                                className={`w-4 h-4 mt-1 transition-transform duration-200 ${
                                  isActiveLink(dropLink.href) 
                                    ? 'text-[#DC2626] translate-x-0' 
                                    : 'text-gray-300 -translate-x-1 group-hover/item:translate-x-0 group-hover/item:text-gray-500'
                                }`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={index}
                      href={link.href}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        isActiveLink(link.href)
                          ? 'text-[#DC2626] bg-red-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
              
              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-6 group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white text-sm font-semibold rounded-full overflow-hidden shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get Quote</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B91C1C] to-[#991B1B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-gray-700 rounded-full transform transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-gray-700 rounded-full transform transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-[-1] ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div 
          className={`lg:hidden bg-white shadow-2xl transition-all duration-500 ease-out overflow-hidden ${
            isOpen ? 'max-h-[calc(100vh-116px)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-h-[calc(100vh-116px)] overflow-y-auto">
            <div className="p-4 space-y-1">
              {navLinks.map((link, index) => (
                link.dropdown ? (
                  <div key={index} className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                        isServicesActive() 
                          ? 'bg-red-50 text-[#DC2626]' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {link.label}
                      </span>
                      <svg 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-out ${
                        servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <div className="pl-4 pr-2 pb-2 space-y-1">
                        {link.dropdown.map((dropLink, dropIndex) => (
                          <Link
                            key={dropIndex}
                            href={dropLink.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                              isActiveLink(dropLink.href)
                                ? 'bg-red-50 text-[#DC2626]'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <span className="text-lg">{dropLink.icon}</span>
                            <div>
                              <div className="font-medium text-sm">{dropLink.label}</div>
                              <div className="text-xs text-gray-400">{dropLink.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                      isActiveLink(link.href)
                        ? 'bg-red-50 text-[#DC2626]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-semibold rounded-xl shadow-lg shadow-red-500/25"
              >
                Get a Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* Quick Contact */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <a href="tel:7042225288" className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 hover:bg-[#DC2626] hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </a>
                  <a href="https://wa.me/17042225288" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-green-50 rounded-xl text-sm text-green-700 hover:bg-green-500 hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a href="mailto:info@sohotrans.com" className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 hover:bg-[#DC2626] hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <a href="https://www.instagram.com/sohotrans/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@sohotransportation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </div>
      
      {/* Spacer for fixed navbar */}
      <div className="h-[116px]"></div>
    </>
  );
}
