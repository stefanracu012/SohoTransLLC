import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = 'https://sohotransllc.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SoHo Trans LLC | Professional Trucking & Logistics Services',
    template: '%s | SoHo Trans LLC',
  },
  description: 'SoHo Trans LLC — trusted trucking and logistics partner. Freight hauling, owner-operator programs, CDL driver jobs, trailer sales & rentals. Reliable nationwide delivery.',
  keywords: [
    'trucking company', 'freight shipping', 'logistics services', 'owner operator trucking',
    'CDL driver jobs', 'truck driver employment', 'trailer rental', 'trailer sales',
    'dry van trailer', 'reefer trailer', 'flatbed trailer', 'fleet management',
    'OTR trucking', 'long haul trucking', 'dedicated freight', 'LTL shipping',
    'FTL shipping', 'supply chain solutions', 'freight broker', 'trucking lease',
    'owner operator lease program', 'commercial truck financing', 'DOT compliance',
    'SoHo Trans LLC', 'nationwide trucking', 'reliable freight services',
  ],
  authors: [{ name: 'SoHo Trans LLC' }],
  creator: 'SoHo Trans LLC',
  publisher: 'SoHo Trans LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#DC2626',
    'msapplication-config': '/browserconfig.xml',
  },
  themeColor: '#DC2626',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'SoHo Trans LLC | Professional Trucking & Logistics Services',
    description: 'Trusted trucking partner for freight hauling, owner-operator programs, CDL driver jobs, and trailer sales & rentals. Reliable nationwide delivery.',
    url: SITE_URL,
    siteName: 'SoHo Trans LLC',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SoHo Trans LLC — Professional Trucking & Logistics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoHo Trans LLC | Professional Trucking & Logistics Services',
    description: 'Trusted trucking partner — freight hauling, owner-operator programs, CDL jobs, trailer sales & rentals.',
    images: ['/og-image.png'],
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TruckingCompany',
              name: 'SoHo Trans LLC',
              url: 'https://sohotransllc.com',
              logo: 'https://sohotransllc.com/og-image.png',
              description: 'Professional trucking and logistics company providing freight hauling, owner-operator programs, CDL driver employment, and trailer sales & rentals nationwide.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English'],
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              serviceType: [
                'Freight Trucking',
                'Logistics Services',
                'Trailer Rental',
                'Trailer Sales',
                'Owner-Operator Programs',
              ],
            }),
          }}
        />
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
