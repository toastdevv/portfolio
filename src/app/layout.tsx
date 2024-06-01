import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const robotto = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rayane Benamre | Full Stack Web Developer',
  description: 'Rayane Benamre. Full stack web developer.',
  twitter: {
    title: 'Rayane Benamre | Full Stack Web Developer',
    description: 'Rayane Benamre. Full stack web developer.',
  },
  openGraph: {
    title: 'Rayane Benamre | Full Stack Web Developer',
    description: 'Rayane Benamre. Full stack web developer.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-white">
      <head>
        <link rel="me" href="https://mastodon.social/@rayaneb" />
      </head>
      <body className={robotto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
