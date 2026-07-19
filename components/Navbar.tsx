"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper functions to dynamically apply the blue highlight based on the active route
  const getDesktopClass = (path: string) => {
    return pathname === path
      ? "bg-blue-700 text-white px-4 py-3 text-sm font-semibold transition-colors"
      : "px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors";
  };

  const getMobileClass = (path: string) => {
    return pathname === path
      ? "bg-blue-700 text-white block px-3 py-3 rounded-md text-base font-bold"
      : "text-slate-300 block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-white";
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center border-b border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden">
             <img src="/METRIX-7.0/logo-1.png" alt="Logo 1" className="w-full h-full object-contain p-1" />
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden">
             <img src="/METRIX-7.0/logo-2.png" alt="Logo 2" className="w-full h-full object-contain p-1" />
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden">
             <img src="/METRIX-7.0/logo-3.png" alt="Logo 3" className="w-full h-full object-contain p-1" />
          </div>
        </div>
        <div className="text-right hidden md:block">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight uppercase">METRIX 7.0<span className="lowercase">i</span></h2>
          <p className="text-sm font-medium text-slate-500">Mechanical Engineering Tech Research Innovation & Exchange</p>
        </div>
      </div>

      <nav className="bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            <div className="hidden md:flex space-x-1">
              <Link href="/" className={getDesktopClass('/')}>Home</Link>
              <Link href="/about" className={getDesktopClass('/about')}>About</Link>
              <Link href="/speakers" className={getDesktopClass('/speakers')}>Speakers</Link>
              <Link href="/tracks" className={getDesktopClass('/tracks')}>Call for Papers</Link>
              <Link href="/schedule" className={getDesktopClass('/schedule')}>Schedule</Link>
              <Link href="/workshops" className={getDesktopClass('/workshops')}>Workshops</Link>
              <Link href="/sponsors" className={getDesktopClass('/sponsors')}>Sponsors</Link>
              <Link href="/committee" className={getDesktopClass('/committee')}>Organizing Team</Link>
              <Link href="/contact" className={getDesktopClass('/contact')}>Contact</Link>
            </div>
            
            <div className="hidden md:block">
              <Link href="/register" className="bg-blue-600 px-6 py-1.5 rounded-sm text-sm font-bold tracking-wide hover:bg-blue-500 transition-colors">
                Registration
              </Link>
            </div>

            <div className="md:hidden flex items-center w-full justify-end py-2">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2 focus:outline-none">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full left-0 top-full shadow-xl">
            <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
              <Link href="/" onClick={toggleMenu} className={getMobileClass('/')}>Home</Link>
              <Link href="/about" onClick={toggleMenu} className={getMobileClass('/about')}>About</Link>
              <Link href="/speakers" onClick={toggleMenu} className={getMobileClass('/speakers')}>Speakers</Link>
              <Link href="/tracks" onClick={toggleMenu} className={getMobileClass('/tracks')}>Call for Papers</Link>
              <Link href="/schedule" onClick={toggleMenu} className={getMobileClass('/schedule')}>Schedule</Link>
              <Link href="/workshops" onClick={toggleMenu} className={getMobileClass('/workshops')}>Workshops</Link>
              <Link href="/sponsors" onClick={toggleMenu} className={getMobileClass('/sponsors')}>Sponsors</Link>
              <Link href="/committee" onClick={toggleMenu} className={getMobileClass('/committee')}>Organizing Team</Link>
              <Link href="/contact" onClick={toggleMenu} className={getMobileClass('/contact')}>Contact</Link>
              <Link href="/register" onClick={toggleMenu} className="bg-blue-600 text-white block px-3 py-3 rounded-md text-base font-bold mt-4 text-center hover:bg-blue-500">
                Registration
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}