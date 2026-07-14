import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'METRIX 7.0i | IIT Ropar',
  description: 'Mechanical Engineering Tech Research Innovation and Exchange',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-50">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        {/* pt-28 pushes the content below the tall double-tier navbar */}
        <main className="flex-grow pt-28"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}