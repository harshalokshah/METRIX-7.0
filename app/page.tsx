import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* 1. Hero Video Section (With lowercase 'i') */}
      <section className="relative w-full h-[60vh] min-h-[400px] bg-slate-900 flex items-center justify-center border-b-4 border-blue-700 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter drop-shadow-lg uppercase">
            METRIX 7.0<span className="lowercase text-blue-400">i</span>
          </h1>
        </div>
      </section>

      {/* 2. Primary Title Block (Restored exactly as original) */}
      <section className="py-16 px-4 bg-white text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
            7th Edition of METRIX <br className="hidden md:block"/> Emerging Tech & Research Innovation Conference
          </h2>
          <p className="text-2xl text-blue-700 font-semibold mb-2">30 October – 1 November 2026</p>
          <p className="text-lg text-slate-600 font-medium">IIT Ropar, Punjab, India</p>
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

      {/* 4. Three-Column Feature Text (Restored perfectly from the first version) */}
      <section className="py-20 px-4 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2 inline-block">Program</h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                With multiple specialized mini-symposia, METRIX 7.0i offers a focused yet comprehensive exploration of cutting-edge advancements across various facets of mechanics and manufacturing. Engage in critical sessions directly relevant to your work and discover interdisciplinary applications.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2 inline-block">Opportunities</h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                You will be able to meet experts from diverse areas in mechanics. METRIX 7.0i provides an ideal platform to foster new collaborations, strengthen existing networks, and engage in meaningful discussions with peers who share your interests and drive for innovation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2 inline-block">Learning Curve</h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                Immerse yourself in the latest research breakthroughs, emerging methodologies, and future trends shaping the fields of solid and fluid mechanics, and allied areas. Acquire insights that will enhance your research, teaching, and professional development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Important Dates (Restored exactly to original styling) */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center uppercase tracking-tight">Important Dates</h2>
          <div className="bg-white border border-slate-200 shadow-sm rounded-md overflow-hidden">
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
                  <td className="py-5 px-6 font-semibold text-slate-900">Early Bird Registration Closes</td>
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

      {/* 6. About the Host (Restored perfectly from the first version) */}
      <section className="py-20 px-4 bg-slate-900 text-slate-300">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-8 uppercase tracking-tight">About IIT Ropar</h2>
          <div className="space-y-6 text-justify leading-relaxed">
            <p>
              Indian Institute of Technology Ropar, founded in 2008, is a premier institution for education and research in science, engineering, and technology. Renowned for academic excellence, it fosters innovation and interdisciplinary learning. With advanced laboratories, modern infrastructure, and expert faculty, IIT Ropar is a centre for cutting-edge research.
            </p>
            <p>
              As the host of METRIX 7.0i, IIT Ropar offers an ideal setting for fostering the kind of deep, thoughtful, and collaborative exchanges that the conference is known for. The campus brings together leading minds from across disciplines, creating an intellectually stimulating atmosphere where new ideas are born and future collaborations take shape.
            </p>
            <p className="text-white font-semibold pt-4">
              We warmly welcome you to be part of this vibrant community and contribute to the rich dialogue that drives progress in applied mechanics.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}