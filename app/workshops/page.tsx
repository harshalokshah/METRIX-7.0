import { Wrench, Cpu, Beaker, Code, Clock, MapPin, Users, Info } from 'lucide-react';
import Link from 'next/link';

export default function WorkshopsPage() {
  const parallelWorkshops = [
    {
      id: "W1",
      title: "AI and High-Performance Computing (HPC) in Mechanics",
      instructor: "Faculty Members, Dept. of Mechanical Engineering",
      time: "10:00 AM - 1:00 PM",
      description: "A hands-on computational session bridging machine learning algorithms with traditional mechanics. Students will explore data-driven design, neural networks for fluid dynamics, and utilizing HPC clusters for heavy simulations.",
      icon: Cpu,
    },
    {
      id: "W2",
      title: "Advanced Manufacturing & Micro/Nano-Engineered Systems",
      instructor: "Faculty Members, Dept. of Mechanical Engineering",
      time: "2:00 PM - 5:00 PM",
      description: "An deep dive into modern manufacturing technology. This workshop covers the latest techniques in additive manufacturing, precision machining, and the fabrication of micro-electromechanical systems (MEMS).",
      icon: Wrench,
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase mb-4">
          Pre-Conference Workshops
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          METRIX 7.0i offers immersive, faculty-led workshops and hands-on laboratory demonstrations designed specifically for student participants. All pre-conference activities take place on <strong>Friday, 30 October 2026</strong>.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Workshops (Takes up 2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white border-t-4 border-blue-600 shadow-sm rounded-b-md p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-2">
              <Users className="text-blue-600" /> Parallel Faculty Workshops
            </h2>
            <p className="text-slate-600 mb-8 border-l-4 border-slate-300 pl-4 bg-slate-50 py-3 pr-3">
              These parallel sessions run throughout the day (10:00 AM - 17:00 PM) and are tailored to bridge theoretical knowledge with practical engineering tools.
            </p>

            <div className="space-y-6">
              {parallelWorkshops.map((workshop) => {
                const Icon = workshop.icon;
                return (
                  <div key={workshop.id} className="border border-slate-200 rounded-md p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="bg-blue-50 text-blue-700 p-3 rounded-md flex-shrink-0">
                        <Icon size={28} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{workshop.id}</span>
                          <span className="flex items-center gap-1 text-sm font-semibold text-slate-500">
                            <Clock size={14} /> {workshop.time}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{workshop.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold mb-3">Instructors: {workshop.instructor}</p>
                        <p className="text-slate-600 text-justify leading-relaxed">{workshop.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ASME Hackathon Section */}
          <div className="bg-slate-900 border border-slate-800 shadow-lg rounded-md p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Code size={180} className="text-white transform translate-x-8 -translate-y-8" />
            </div>
            <div className="relative z-10">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Exclusive Competition</span>
              <h2 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tight">
                ASME-Level Hackathon
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed max-w-2xl text-justify">
                Plan and test your limits in this rigorous, time-constrained design and computational hackathon. Exclusively organized for B.Tech students, this event challenges teams to solve real-world industrial mechanical problems using rapid prototyping and simulation frameworks.
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm bg-slate-800/50 p-3 rounded-md inline-flex border border-slate-700">
                <Info size={16} /> Prior registration is mandatory. Teams will be formed on-site.
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Lab Demos & Sidebar */}
        <div className="space-y-8">
          
          {/* Lab Demonstrations */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-md p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-2 border-b border-slate-100 pb-4">
              <Beaker className="text-blue-600" /> Advanced Lab Demos
            </h2>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed text-justify">
              Experience the state-of-the-art facilities at IIT Ropar. Coordinators and supporting staff will guide participants through live demonstrations of highly specialized mechanical equipment and testing rigs.
            </p>
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li className="flex items-start gap-3 bg-slate-50 p-3 rounded border border-slate-100">
                <MapPin className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                <span>Computational Fluid Dynamics (CFD) Laboratory</span>
              </li>
              <li className="flex items-start gap-3 bg-slate-50 p-3 rounded border border-slate-100">
                <MapPin className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                <span>Robotics and Intelligent Systems Lab</span>
              </li>
              <li className="flex items-start gap-3 bg-slate-50 p-3 rounded border border-slate-100">
                <MapPin className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                <span>Advanced Materials Characterization Lab</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
              <p className="text-xs text-amber-800 font-semibold leading-relaxed">
                * Note: Prior approval from concerned faculty members is obtained for these demonstrations. Each lab is managed by one dedicated coordinator and one supporting staff member to ensure safety and detailed instruction.
              </p>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="bg-blue-600 text-white rounded-md p-8 text-center shadow-md">
            <h3 className="text-xl font-bold mb-3 uppercase">Secure Your Spot</h3>
            <p className="text-blue-100 mb-6 text-sm">
              Seats for the parallel workshops and the ASME Hackathon are strictly limited to ensure an optimal learning environment.
            </p>
            <Link href="/register" className="inline-block bg-white text-blue-700 px-6 py-3 rounded text-sm font-extrabold uppercase tracking-widest hover:bg-slate-100 transition-colors w-full shadow-lg">
              Register Now
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}