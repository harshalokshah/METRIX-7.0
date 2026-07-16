import { Building2, Target, Globe, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
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
          
          {/* Section 1: About METRIX */}
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

          {/* Section 2: The Department */}
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

          {/* Section 3: IIT Ropar */}
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
                    <span className="text-sm text-slate-400">Lecture Hall Complex, IIT Ropar</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-700 pb-4">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Target Audience</strong>
                    <span className="text-sm text-slate-400">Academicians, Industry R&D Professionals, Ph.D. & B.Tech Students</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Expected Footfall</strong>
                    <span className="text-sm text-slate-400">400 - 500 Attendees</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Navigation Card */}
            <div className="bg-white border border-slate-200 p-8 shadow-sm rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">Helpful Links</h3>
              <div className="space-y-3">
                <Link href="/committee" className="flex items-center justify-between group p-3 bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100 rounded">
                  <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">Organizing Committee</span>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600" />
                </Link>
                <Link href="/tracks" className="flex items-center justify-between group p-3 bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100 rounded">
                  <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">Technical Tracks</span>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600" />
                </Link>
                <Link href="/contact" className="flex items-center justify-between group p-3 bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100 rounded">
                  <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">Venue & Travel Info</span>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}