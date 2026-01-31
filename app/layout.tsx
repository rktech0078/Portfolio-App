import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import ClientLayout from './components/ClientLayout';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abdulrafay.online'),
  title: {
    default: "Abdul Rafay | Software Engineer & AI Enthusiast",
    template: "%s | Abdul Rafay"
  },
  description: "Portfolio of Abdul Rafay (Abdul Rafay Khan), a passionate Software Engineer and AI & ML Enthusiast specializing in Agentic AI, Next.js, and modern web development.",
  keywords: [
    "Abdul Rafay",
    "Abdul Rafay Khan",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning",
    "Agentic AI",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Web Development"
  ],
  authors: [{ name: "Abdul Rafay", url: "https://abdulrafay.online" }],
  creator: "Abdul Rafay",
  publisher: "Abdul Rafay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  // },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"]
  },
  openGraph: {
    title: "Abdul Rafay | Software Engineer & AI Enthusiast",
    description: "Explore the portfolio of Abdul Rafay, a Software Engineer specializing in cutting-edge AI, Machine Learning, and web technologies.",
    url: 'https://abdulrafay.online',
    siteName: 'Abdul Rafay Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Abdul Rafay | Software Engineer & AI Enthusiast",
    description: "Passionate Software Engineer | AI & ML Enthusiast | Agentic AI Master",
    creator: "@AbdulRafay",
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdul Rafay',
  alternateName: 'Abdul Rafay Khan',
  url: 'https://abdulrafay.online',
  jobTitle: 'Software Engineer',
  description: 'Passionate Software Engineer | AI & ML Enthusiast | Agentic AI Master',
  sameAs: [
    'https://github.com/rktech0078',
    'https://abdulrafay.online'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
        <GoogleAnalytics gaId="G-T85CNJZ853" />
      </body>
    </html>
  );
}
