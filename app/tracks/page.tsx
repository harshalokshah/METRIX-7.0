import { Settings, Cpu, Wind, Box, Activity, Leaf, Brain, Microscope, Wrench, TrendingUp } from 'lucide-react';

export default function TracksPage() {
  const tracks = [
    { id: 1, title: "Advances in Computational Solid Mechanics", icon: Box },
    { id: 2, title: "Artificial Intelligence (AI) and High-Performance Computing (HPC) for Materials, Mechanics, and Design", icon: Cpu },
    { id: 3, title: "Advances in Computational Fluid Mechanics", icon: Wind },
    { id: 4, title: "Advanced Manufacturing Technology", icon: Settings },
    { id: 5, title: "Biomechanical Engineering and Applications", icon: Activity },
    { id: 6, title: "Energy Efficiency and Sustainable Solutions", icon: Leaf },
    { id: 7, title: "Intelligent Mechanical Systems", icon: Brain },
    { id: 8, title: "Micro/Nano-Engineered Systems", icon: Microscope },
    { id: 9, title: "Experimental Mechanics (Fracture, Fatigue, and Plasticity)", icon: Wrench },
    { id: 10, title: "Advances in Industrial Engineering", icon: TrendingUp },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight uppercase">Technical Tracks</h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-6"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            METRIX 7.0i invites original, unpublished research papers across ten comprehensive domains of mechanical sciences and allied engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tracks.map((track) => {
            const IconComponent = track.icon;
            return (
              <div key={track.id} className="flex items-center gap-6 bg-white p-6 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <div className="flex-shrink-0 bg-slate-100 p-4 rounded-full text-blue-600">
                  <IconComponent size={28} />
                </div>
                <div>
                  <span className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-1 block">Track 0{track.id}</span>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{track.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}