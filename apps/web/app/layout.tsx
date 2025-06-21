import DocsButton from '@/components/docs-button';
import { Analytics } from '@vercel/analytics/react';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const ogImage = 'logo.svg';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mtoast.mosespace.com'),
  title: {
    default: 'MTOAST | Beautiful toast notifications for React',
    template: '%s | Beautiful toast notifications for React',
  },
  description:
    'A lightweight, customizable, and accessible toast component that makes notifications in your React app delightful.',
  keywords: [
    'MTOAST',
    'Toast notifications',
    'React',
    'Lightweight',
    'Customizable',
    'Accessible',
    'mosespace',
    'Sonner',
    'React Hot Toast',
    'react-hot-toast',
    'toaster',
    'toast notifications',
    'shadcn toast',
    'shadcn',
  ],
  authors: [
    { name: 'MTOAST', url: 'https://www.mtoast.mosespace.com' },
    { name: 'Kisakye Moses', url: 'https://www.mosespace.com' },
  ],
  creator: 'Kisakye Moses | Beautiful toast notifications for React',
  publisher: 'Kisakye Moses | Beautiful toast notifications for React',
  openGraph: {
    title: 'MTOAST | Beautiful toast notifications for React',
    description:
      'A lightweight, customizable, and accessible toast component that makes notifications in your React app delightful.',
    siteName: 'MTOAST | Beautiful toast notifications for React',
    images: [
      {
        url: `https://www.mtoast.mosespace.com/${ogImage}`,
        width: 800,
        height: 600,
        alt: 'MTOAST | Beautiful React Images',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    creator: '@mtoast',
    site: '@site',
    card: 'summary_large_image',
    title: 'MTOAST | Beautiful toast notifications for React',
    description:
      'A lightweight, customizable, and accessible toast component that makes notifications in your React app delightful.',
  },
  alternates: {
    canonical: 'https://www.mtoast.mosespace.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider>{children}</RootProvider>
        <DocsButton />
        <Analytics />
      </body>
    </html>
  );
}
