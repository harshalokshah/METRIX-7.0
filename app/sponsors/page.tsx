import { Rocket, Shield, Microscope, Building2, MonitorPlay, Settings, Wrench, Flame } from 'lucide-react';
import Link from 'next/link';

export default function SponsorsPage() {
  // Categorized sponsor data extracted from the conference badge
  const governmentSponsors = [
    { name: "ISRO", desc: "Indian Space Research Organisation", icon: Rocket },
    { name: "DRDO", desc: "Defence Research and Development Organisation", icon: Shield },
    { name: "BRNS", desc: "Board of Research in Nuclear Sciences", icon: Microscope },
    { name: "ANRF", desc: "Anusandhan National Research Foundation", icon: Building2 },
  ];

  const industrySponsors = [
    { name: "CADFEM & Ansys", desc: "Elite Channel Partner for Engineering Simulation", icon: MonitorPlay },
    { name: "MTS", desc: "Advanced Testing and Simulation Systems", icon: Settings },
    { name: "Rtec Instruments", desc: "Tribology and Mechanical Testing", icon: Wrench },
    { name: "Danieli Corus", desc: "Innovative Solutions for the Steel Industry", icon: Building2 },
    { name: "Pyro Dynamics", desc: "Advanced Thermal and Dynamics Solutions", icon: Flame },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase mb-4">
          Our Sponsors & Partners
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          METRIX 7.0i is proudly supported by leading government research organizations and global industry pioneers. Their commitment to engineering excellence makes this conference possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Government & Research Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b-2 border-slate-200 pb-3 flex items-center gap-3 uppercase">
            Government & Research Partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governmentSponsors.map((sponsor, index) => {
              const Icon = sponsor.icon;
              return (
                <div key={index} className="bg-white border border-slate-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow rounded-sm group">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    {/* Placeholder for actual logos. Example: <Image src="/logo-isro.png" width={60} height={60} /> */}
                    <Icon size={32} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{sponsor.name}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{sponsor.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Industry Partners Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b-2 border-slate-200 pb-3 flex items-center gap-3 uppercase">
            Industry & Technology Partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySponsors.map((sponsor, index) => {
              const Icon = sponsor.icon;
              return (
                <div key={index} className="bg-white border border-slate-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow rounded-sm group">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    {/* Placeholder for actual logos */}
                    <Icon size={32} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{sponsor.name}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{sponsor.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action for Future Sponsors */}
        <section className="bg-blue-900 rounded-md p-10 text-center shadow-xl relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Become a Sponsor</h2>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
                Showcase your brand to 500+ top researchers, academicians, and student engineers from across India. Explore our partnership tiers and exhibition opportunities.
              </p>
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-sm font-bold tracking-widest uppercase hover:bg-slate-100 transition-colors shadow-md">
                Request Sponsorship Brochure
              </Link>
           </div>
        </section>

      </div>
    </div>
  );
}