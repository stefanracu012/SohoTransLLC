import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug, getRelatedPosts } from '../posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, 'trucking blog', 'SoHo Trans LLC', 'trucking industry'],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} | SoHo Trans LLC`,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['SoHo Trans LLC'],
      images: post.image ? [{ url: post.image, width: 1200, height: 600, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/20" />
        <div className="relative h-full flex flex-col justify-end max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-300 hover:text-white text-sm mb-6 transition-colors w-fit"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-[#DC2626] text-white text-xs font-semibold rounded-full mb-4 w-fit">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-5 text-gray-300 text-sm">
            <div className="flex items-center space-x-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>SoHo Trans Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Main Article */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {post.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-[#1F2937] mr-2">Tags:</span>
                {['Trucking', post.category, 'SoHo Trans', 'Industry'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>


              {/* Back nav */}
              <div className="mt-10 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-5 py-3 bg-[#F8FAFC] text-[#1F2937] font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  All Articles
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-3 bg-[#DC2626] text-white font-medium rounded-lg hover:bg-[#B91C1C] transition-colors text-sm"
                >
                  Contact Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">

              {/* About Box */}
              <div className="bg-gradient-to-br from-[#1F2937] to-[#0F172A] rounded-2xl p-6 text-white">
                <div className="mb-4">
                  <img src="/Logo SohoTransLLC.png" alt="SoHo Trans LLC" className="h-20 w-auto object-contain" />
                </div>
                <h3 className="font-bold text-lg mb-2">SoHo Trans LLC</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Your trusted partner in trucking and logistics. Expert content for drivers, owners, and shippers.
                </p>
                <Link href="/about" className="text-[#DC2626] text-sm font-medium hover:underline">
                  Learn About Us →
                </Link>
              </div>

              {/* CTA */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop"
                  alt="Join SoHo Trans"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#DC2626]/95 to-[#DC2626]/60 flex flex-col justify-end p-5">
                  <p className="text-white font-bold mb-1">Ready to drive with us?</p>
                  <p className="text-white/80 text-xs mb-3">Join the SoHo Trans team today.</p>
                  <Link
                    href="/for-drivers"
                    className="inline-flex items-center px-4 py-2 bg-white text-[#DC2626] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm w-fit"
                  >
                    Apply Now
                    <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((relPost, i) => (
                <Link key={i} href={`/blog/${relPost.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relPost.image}
                      alt={relPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#DC2626] text-white text-xs rounded font-medium">
                      {relPost.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1F2937] text-sm leading-snug group-hover:text-[#DC2626] transition-colors mb-1 line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{relPost.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* If no related posts in same category, show any 3 other posts */}
      {related.length === 0 && (
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((relPost, i) => (
                <Link key={i} href={`/blog/${relPost.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relPost.image}
                      alt={relPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#DC2626] text-white text-xs rounded font-medium">
                      {relPost.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1F2937] text-sm leading-snug group-hover:text-[#DC2626] transition-colors mb-1 line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{relPost.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
