import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      {/* Top Tier: Logos & Branding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center border-b border-slate-100">
        <div className="flex items-center gap-4">
          {/* Replace src with your actual logo files in the public folder */}
          <div className="relative w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
             {/* <Image src="/logo-iit.png" alt="IIT Ropar Logo" fill className="object-contain p-1" /> */}
             <span className="text-xs text-slate-400">Logo 1</span>
          </div>
          <div className="relative w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
             {/* <Image src="/logo-metrix.png" alt="Department Logo" fill className="object-contain p-1" /> */}
             <span className="text-xs text-slate-400">Logo 2</span>
          </div>
        </div>
        <div className="text-right hidden md:block">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight uppercase">METRIX 7.0i</h2>
          <p className="text-sm font-medium text-slate-500">Mechanical Engineering Tech Research Innovation & Exchange</p>
        </div>
      </div>

      {/* Bottom Tier: Navigation */}
      <nav className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="hidden md:flex space-x-1">
              <Link href="/" className="bg-blue-700 text-white px-4 py-3 text-sm font-semibold hover:bg-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">About</Link>
              <Link href="/speakers" className="px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Speakers</Link>
              <Link href="/tracks" className="px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Call for Papers</Link>
              <Link href="/schedule" className="px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Schedule</Link>
              <Link href="/workshops" className="px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Workshops</Link>
              <Link href="/sponsors" className="px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Sponsors</Link>
              <Link href="/committee" className="px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Organizing Team</Link>
              <Link href="/contact" className="px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Contact</Link>
            </div>
            
            <div className="hidden md:block">
              <Link href="/register" className="bg-blue-600 px-6 py-1.5 rounded-sm text-sm font-bold tracking-wide hover:bg-blue-500 transition-colors">
                Registration
              </Link>
            </div>

            <div className="md:hidden flex items-center w-full justify-end py-2">
              <button className="text-slate-300 hover:text-white p-2">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}