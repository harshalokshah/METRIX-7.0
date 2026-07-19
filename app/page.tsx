import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Lightbulb, Trophy, FlaskConical } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* 1. Hero Video Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] bg-slate-900 flex items-center justify-center border-b-4 border-blue-700 overflow-hidden">
        
        {/* Dynamic Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter drop-shadow-lg uppercase">
            METRIX 7.0<span className="lowercase text-blue-400">i</span>
          </h1>
          <p className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto font-light tracking-wide">
            Mechanical Engineering Tech Research Innovation & Exchange
          </p>
        </div>
      </section>

      {/* 2. Primary Title Block */}
      <section className="py-16 px-4 bg-white text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
            7th Edition of METRIX <br className="hidden md:block"/> Emerging Tech & Reasearch Innovation in Mechanical Engineering for Sustinable Future
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <div className="flex items-center justify-center gap-2 text-blue-700 font-bold text-lg">
              <Calendar size={24} /> 30 Oct – 1 Nov 2026
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-600 font-bold text-lg">
              <MapPin size={24} /> IIT Ropar, Punjab, India
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Posters / Brochures (Side by Side) */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[3/4] bg-white border border-slate-200 shadow-lg p-2 rounded-sm group overflow-hidden">
            <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-slate-400 m-2 border-2 border-dashed border-slate-300">
              <span className="font-mono text-sm">[poster-1.jpg]</span>
              <span className="font-mono text-xs mt-2">Inaugural Ceremony Details</span>
            </div>
          </div>
          <div className="relative aspect-[3/4] bg-white border border-slate-200 shadow-lg p-2 rounded-sm group overflow-hidden">
            <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-slate-400 m-2 border-2 border-dashed border-slate-300">
              <span className="font-mono text-sm">[poster-2.jpg]</span>
              <span className="font-mono text-xs mt-2">Programme Schedule</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conference Highlights */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center uppercase tracking-tight">Conference Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb size={32} className="text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">ASME-Level Hackathon</h3>
              <p className="text-slate-600 leading-relaxed">An exclusive, high-intensity problem-solving marathon tailored for B.Tech students, testing rapid prototyping and computational logic under pressure.</p>
            </div>
            <div className="bg-slate-50 p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <Trophy size={32} className="text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Undergraduate Expo</h3>
              <p className="text-slate-600 leading-relaxed">Featuring the flagship Best Presentation Competition. The top three B.Tech presentations will be awarded for outstanding technical clarity and innovation.</p>
            </div>
            <div className="bg-slate-50 p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <FlaskConical size={32} className="text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Lab Demos</h3>
              <p className="text-slate-600 leading-relaxed">Exclusive, coordinator-led sessions offering hands-on exposure to our state-of-the-art mechanical testing, manufacturing, and simulation facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Important Dates */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center uppercase tracking-tight">Important Dates</h2>
          <div className="bg-white shadow-xl rounded-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-semibold text-slate-900 w-2/3">Deadline for Abstract Submission</td>
                  <td className="py-5 px-6 text-blue-700 font-bold w-1/3">August 15, 2026</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-semibold text-slate-900">Notification of Acceptance</td>
                  <td className="py-5 px-6 text-blue-700 font-bold">August 25, 2026</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-semibold text-slate-900">Registration Closes</td>
                  <td className="py-5 px-6 text-blue-700 font-bold">August 31, 2026</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-semibold text-slate-900">Conference Dates</td>
                  <td className="py-5 px-6 text-blue-700 font-bold">Oct 30 - Nov 1, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}