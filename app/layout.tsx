import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AMOGHA The Ayur Hub - Premier Ayurvedic Clinic',
  description: 'AMOGHA The Ayur Hub is a premium Ayurvedic clinic providing traditional treatments and therapies for holistic wellness and natural healing.',
  keywords: 'ayurveda, ayurvedic clinic, holistic wellness, natural healing, panchakarma, ayurvedic treatments',
  authors: [{ name: 'AMOGHA The Ayur Hub' }],
  icons: {
    icon: '/images/logos/favicon.png',
    shortcut: '/images/logos/favicon.png',
    apple: '/images/logos/favicon.png',
  },
  openGraph: {
    title: 'AMOGHA The Ayur Hub - Experience Authentic Ayurveda',
    description: 'Discover traditional Ayurvedic treatments tailored for modern wellness needs at AMOGHA The Ayur Hub.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMOGHA The Ayur Hub - Ayurvedic Wellness Center',
    description: 'Transform your health with authentic Ayurvedic treatments at AMOGHA The Ayur Hub.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-neutral-light dark:bg-neutral-darker text-neutral-darker dark:text-neutral-light">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

