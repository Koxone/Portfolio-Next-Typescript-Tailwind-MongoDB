import './globals.css';
import Image from 'next/image';

import I18nProvider from '@/providers/i18Provider';
import StarFieldBackground from '../animations/StarFieldBackground';
import MainHeader from '@/components/nav/MainHeader';

export const metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | Portfolio',
  },
  description:
    'Portafolio profesional de Kox, Frontend Engineer especializado en React, Next.js, Tailwind CSS y Firebase. Descubre proyectos de alto nivel enfocados en rendimiento, diseño moderno e integraciones escalables.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'Tailwind CSS',
    'Firebase',
    'Desarrollador web',
    'Portafolio de desarrollador',
    'UI/UX',
    'Web Developer',
    'Desarrollo frontend',
    'Proyectos con React y Next.js',
    'Portfolio profesional',
    'Desarrollador JavaScript',
  ],
  metadataBase: new URL('https://koxland.dev'),
  openGraph: {
    title: 'Portfolio',
    description:
      'Portafolio profesional de Kox, especializado en desarrollo frontend con React, Next.js, Tailwind CSS y Firebase. Explora proyectos de calidad enfocados en rendimiento y diseño moderno.',
    url: 'https://koxland.dev',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://koxland.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portafolio de Kox - Frontend Engineer especializado en React y Next.js',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },
  authors: [{ name: 'Kox', url: 'https://github.com/Koxone' }],
  creator: 'Koxone',
  publisher: 'Koxone',
  alternates: {
    canonical: 'https://koxland.dev',
    languages: {
      'es-MX': 'https://koxland.dev',
      'en-US': 'https://koxland.dev/en',
    },
  },
  category: 'portfolio',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise-bg bg-gray-900">
        <I18nProvider>
          <MainHeader />
          <StarFieldBackground />

          <Image
            src="/assets/background.svg"
            className="fixed top-0 left-0 -z-10 h-full w-full blur-[100px]"
            width={500}
            height={500}
            alt="background"
            priority
          />

          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
