import React from 'react';
import { User, MapPin, BookOpen, GraduationCap } from 'lucide-react';

export default function SpeakersPage() {
  const keynoteSpeakers = [
    {
      id: 1,
      name: "Prof. R. Narasimhan",
      affiliation: "IISc Bengaluru",
      type: "Alwar Memorial Lecture",
      topic: "Mechanics of fracture of basal-textured magnesium alloys: Experiments and finite element modelling",
    },
    {
      id: 2,
      name: "Prof. Jayant Sirohi",
      affiliation: "University of Texas at Austin",
      type: "Prof L S Srinath Memorial Lecture",
      topic: "Harvesting energy from aeroelastic instabilities",
    },
    {
      id: 3,
      name: "Prof. Ravindra Adusumilli",
      affiliation: "Development Studies & Policy",
      type: "Karunakaran Memorial Lecture",
      topic: "When development devours people: A critique of S&T competency in grassroots solutioning",
    }
  ];

  const invitedSpeakers = [
    { name: "Prof. Dhiraj K. Mahajan", affiliation: "IIT Ropar", track: "Extreme Mechanics" },
    { name: "Prof. Srikanth Vedantam", affiliation: "IIT Madras", track: "Computational Solid Mechanics" },
    { name: "Prof. Sanjay Mittal", affiliation: "IIT Kanpur", track: "Sports Aerodynamics" },
    { name: "Prof. Rishita Das", affiliation: "IISc Bangalore", track: "AI & HPC for Mechanics" },
    { name: "Prof. Jaywant Arakeri", affiliation: "IISc Bengaluru", track: "Bio-Applications & Sports" },
    { name: "Prof. Prasad Patnaik", affiliation: "IIT Madras", track: "Fluid-Structure Interaction" },
    { name: "Prof. Praveen Kumar", affiliation: "IISc Bangalore", track: "Plasticity and Creep" },
    { name: "Prof. Harshal Akolekar", affiliation: "IIT Jodhpur", track: "Computational Fluid Dynamics" },
    { name: "Prof. Gopakumar Parameswaran", affiliation: "BP Mumbai", track: "Contact Adhesion & Friction" },
    { name: "Dr. Suresh Kumar", affiliation: "DMSRDE", track: "Composite Materials" },
    { name: "Prof. M. S. Bobji", affiliation: "IISc Bengaluru", track: "Highly Deformable Bodies" },
    { name: "Prof. Souvik Chakraborty", affiliation: "IIT Delhi", track: "Agentic AI for Scientific Discovery" },
    { name: "Prof. Bishakh Bhattacharya", affiliation: "IIT Kanpur", track: "Smart Materials and Structures" },
    { name: "Prof. Somnath Roy", affiliation: "IIT Kharagpur", track: "Turbulent and Complex Flows" },
    { name: "Prof. C. S. Upadhyay", affiliation: "IIT Kanpur", track: "Composite Materials" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase mb-4">
          Distinguished Speakers
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          METRIX 7.0i brings together the brightest minds in theoretical and applied mechanics. Explore the visionaries delivering our plenary sessions and technical invited talks.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        
        <section>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 border-b-2 border-slate-200 pb-4 uppercase tracking-tight flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={32} />
            Plenary & Memorial Lectures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keynoteSpeakers.map((speaker) => (
              <div key={speaker.id} className="bg-white border-t-4 border-blue-600 shadow-lg relative overflow-hidden group">
                <div className="p-8">
                  <span className="bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1 rounded-sm uppercase tracking-widest mb-4 inline-block">
                    {speaker.type}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{speaker.name}</h3>
                  <div className="flex items-center gap-2 text-slate-500 font-semibold mb-6">
                    <MapPin size={16} />
                    <span>{speaker.affiliation}</span>
                  </div>
                  <div className="bg-slate-50 p-4 border-l-4 border-slate-300">
                    <div className="flex items-start gap-2">
                      <BookOpen size={18} className="text-slate-400 mt-1 shrink-0" />
                      <p className="text-sm font-medium text-slate-700 leading-relaxed italic">
                        "{speaker.topic}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 border-b-2 border-slate-200 pb-4 uppercase tracking-tight flex items-center gap-3">
            <User className="text-blue-600" size={32} />
            Invited Technical Speakers
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {invitedSpeakers.map((speaker, index) => (
              <div key={index} className="bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{speaker.name}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{speaker.affiliation}</p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Track: {speaker.track}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}