import Link from 'next/link';
import { blogPosts, getPaginatedPosts, getTotalPages, POSTS_PER_PAGE } from './posts';

export const metadata = {
  title: 'Blog',
  description: 'Trucking industry news, CDL driver tips, ELD compliance updates, owner-operator advice, and freight market insights from SoHo Trans LLC.',
  keywords: ['trucking blog', 'CDL driver tips', 'trucking industry news', 'owner operator advice', 'ELD compliance', 'freight market insights', 'trucking regulations'],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | SoHo Trans LLC',
    description: 'Trucking industry news, driver tips, compliance updates, and owner-operator advice.',
    url: '/blog',
    type: 'website',
  },
};

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = Math.max(1, Math.min(parseInt(params?.page) || 1, getTotalPages()));
  const totalPages = getTotalPages();
  const currentPosts = blogPosts.slice(0, currentPage * POSTS_PER_PAGE);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=600&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/82" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            SoHo Trans <span className="text-[#DC2626]">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Industry insights, tips, and news for trucking professionals
          </p>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-12 gap-5">
            {currentPosts.map((post, index) => {

              {/* ── Card 0: Large hero ── */}
              if (index === 0) return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="col-span-12 lg:col-span-7 group">
                  <article className="relative h-[480px] rounded-2xl overflow-hidden">
                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <span className="inline-block px-2.5 py-1 bg-[#DC2626] text-white text-xs font-bold rounded mb-4 w-fit">{post.category}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug group-hover:text-[#DC2626] transition-colors">{post.title}</h2>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );

              {/* ── Card 1: Tall right card ── */}
              if (index === 1) return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="col-span-12 lg:col-span-5 group">
                  <article className="h-full min-h-[480px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                    <div className="relative h-60 overflow-hidden flex-shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-4 px-2.5 py-1 bg-[#DC2626] text-white text-xs font-bold rounded">{post.category}</span>
                    </div>
                    <div className="flex-1 p-7 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#1F2937] mb-3 leading-snug group-hover:text-[#DC2626] transition-colors">{post.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      </div>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-xs text-gray-400">{post.date} · {post.readTime}</span>
                        <span className="text-[#DC2626] text-sm font-semibold flex items-center gap-1">
                          Read
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );

              {/* ── Card 5: Full-width horizontal ── */}
              if (index === 5) return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="col-span-12 group">
                  <article className="bg-[#1F2937] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 hover:shadow-2xl transition-shadow">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1F2937]/60 hidden md:block" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <span className="inline-block px-2.5 py-1 bg-[#DC2626]/20 border border-[#DC2626]/40 text-[#DC2626] text-xs font-bold rounded mb-5 w-fit">{post.category}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug group-hover:text-[#DC2626] transition-colors">{post.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.date} · {post.readTime}</span>
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#DC2626] text-white text-sm font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors">
                          Read Article
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );

              {/* ── Cards 2, 3, 4: Three equal columns ── */}
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="col-span-12 md:col-span-4 group">
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 px-2 py-1 bg-[#DC2626] text-white text-xs font-bold rounded">{post.category}</span>
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      <div>
                        <div className="text-xs text-gray-400 mb-2">{post.date} · {post.readTime}</div>
                        <h3 className="text-base font-bold text-[#1F2937] mb-2 leading-snug group-hover:text-[#DC2626] transition-colors">{post.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                      </div>
                      <span className="mt-4 text-[#DC2626] text-sm font-semibold inline-flex items-center gap-1">
                        Read More
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </article>
                </Link>
              );

            })}
          </div>

          {/* Load More */}
          {currentPage < totalPages && (
            <div className="flex justify-center mt-14">
              <Link
                href={`/blog?page=${currentPage + 1}`}
                scroll={false}
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#1F2937] text-white font-semibold rounded-xl hover:bg-[#DC2626] transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                Load More Articles
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/truck2.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#DC2626]/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Want to Contribute?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Are you a trucking professional with insights to share? We welcome guest contributors to our blog.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#DC2626] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
