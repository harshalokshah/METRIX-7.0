import { Building2, Target, Globe, BookOpen, ChevronRight, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase mb-4">
          About The Conference
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Main Content (Takes up 2/3 of the grid) */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <Target className="text-blue-600" />
              About METRIX 7.0i
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
              <p>
                The <strong>Mechanical Engineering Tech Research Innovation and Exchange (METRIX)</strong> is a premier biennial technical summit that brings together leading researchers, industry professionals, and brilliant student minds. Now in its 7th edition, METRIX 7.0i serves as a critical nexus for advancing the frontiers of theoretical, computational, and experimental mechanics.
              </p>
              <p>
                As the engineering landscape evolves, so does METRIX. This year, the conference actively expands beyond traditional boundaries, extending a strong mandate for participation from Metallurgical Engineering and allied departments. By amalgamating diverse domains—from high-performance computing and AI in mechanics to sustainable manufacturing—METRIX 7.0i provides an unparalleled platform to solve complex, real-world technological challenges.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <Building2 className="text-blue-600" />
              The Department of Mechanical Engineering
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
              <p>
                The Department of Mechanical Engineering at IIT Ropar is dedicated to fundamental and applied research across a broad spectrum of engineering sciences. The department maintains a rigorous academic environment, supported by state-of-the-art computational tools and heavy-duty experimental facilities.
              </p>
              <p>
                Our faculty and research scholars are actively engaged in pioneering work. Core strengths of the department include <strong>advanced computational fluid dynamics, aerodynamics and micro air vehicle (MAV) design, solid mechanics, precision actuator mechanisms, and complex fluid-structure interactions</strong>. Through a strong emphasis on interdisciplinary collaboration, the department consistently translates fundamental scientific discoveries into practical, industry-ready solutions.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <Globe className="text-blue-600" />
              About IIT Ropar
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
              <p>
                The Indian Institute of Technology Ropar, established in 2008, is one of the premier institutions set up by the Ministry of Education, Government of India. Renowned for its academic excellence and rigorous research output, IIT Ropar fosters a culture of innovation and interdisciplinary learning.
              </p>
              <p>
                Situated on a sprawling, modern campus along the banks of the Sutlej river, the institute provides an intellectually stimulating atmosphere. As the host of METRIX 7.0i, IIT Ropar offers the ideal setting for the deep, collaborative exchanges that drive global progress in applied mechanics and technology.
              </p>
            </div>
          </section>

        </div>

        {/* Right Column: Sticky Sidebar with Quick Facts (Takes up 1/3 of the grid) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            
            {/* Quick Facts Card */}
            <div className="bg-slate-900 text-white p-8 shadow-xl border-t-4 border-blue-500 rounded-sm">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-tight">Conference at a Glance</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 border-b border-slate-700 pb-4">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Dates</strong>
                    <span className="text-sm text-slate-400">30 October - 1 November 2026</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-700 pb-4">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Venue</strong>
                    <span className="text-sm text-slate-400">Satish Dhawan Block, IIT Ropar</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Target Audience</strong>
                    <span className="text-sm text-slate-400">Academicians, Industry R&D Professionals, Ph.D. & B.Tech Students</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* High-Attention Quick Navigation Card */}
            <div className="bg-gradient-to-br from-blue-700 to-slate-900 p-8 shadow-2xl rounded-md border border-blue-400 relative overflow-hidden group">
              {/* Subtle animated background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              <h3 className="text-xl font-extrabold text-white mb-6 uppercase tracking-tight flex items-center gap-2 relative z-10">
                <Zap className="text-amber-400" size={24} /> Important Links
              </h3>
              
              <div className="space-y-3 relative z-10">
                <Link href="/speakers" className="flex items-center justify-between group/link p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20 rounded-sm">
                  <span className="font-bold text-white tracking-wide">Speakers</span>
                  <ChevronRight size={18} className="text-blue-300 group-hover/link:text-white group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <Link href="/tracks" className="flex items-center justify-between group/link p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20 rounded-sm">
                  <span className="font-bold text-white tracking-wide">Technical Tracks</span>
                  <ChevronRight size={18} className="text-blue-300 group-hover/link:text-white group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <Link href="/workshops" className="flex items-center justify-between group/link p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20 rounded-sm">
                  <span className="font-bold text-white tracking-wide">Workshops</span>
                  <ChevronRight size={18} className="text-blue-300 group-hover/link:text-white group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}