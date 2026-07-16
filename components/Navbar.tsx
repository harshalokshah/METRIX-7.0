"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  // This state tracks whether the mobile menu is open (true) or closed (false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the state when the button is clicked
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      {/* Top Tier: Logos & Branding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center border-b border-slate-100">
        <div className="flex items-center gap-4">
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
      <nav className="bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Desktop Menu (Hidden on Mobile) */}
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
            
            {/* Desktop Registration Button (Hidden on Mobile) */}
            <div className="hidden md:block">
              <Link href="/register" className="bg-blue-600 px-6 py-1.5 rounded-sm text-sm font-bold tracking-wide hover:bg-blue-500 transition-colors">
                Registration
              </Link>
            </div>

            {/* Mobile Hamburger Button (Visible only on Mobile) */}
            <div className="md:hidden flex items-center w-full justify-end py-2">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2 focus:outline-none">
                {/* Switches between Hamburger icon and 'X' icon based on state */}
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Appears when isMobileMenuOpen is true) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full left-0 top-full shadow-xl">
            <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
              <Link href="/" onClick={toggleMenu} className="text-white block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700">Home</Link>
              <Link href="/about" onClick={toggleMenu} className="text-slate-300 block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-white">About</Link>
              <Link href="/speakers" onClick={toggleMenu} className="text-slate-300 block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-white">Speakers</Link>
              <Link href="/tracks