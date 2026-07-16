import { UserCircle, Users, Star, GraduationCap } from 'lucide-react';

export default function CommitteePage() {
  // Extracted from official conference records
  const coreCommittee = [
    { name: "Prof. G. M. Kamath", role: "Chairperson", dept: "Aerospace Engineering" },
    { name: "Prof. Pritam Chakraborty", role: "Organizing Secretary", dept: "Aerospace Engineering" },
    { name: "Prof. Chinmoy Kolay", role: "Secretary", dept: "Civil Engineering" },
    { name: "Prof. C. Chandraprakash", role: "Secretary", dept: "Mechanical Engineering" },
    { name: "Prof. Rajesh Ranjan", role: "Secretary", dept: "Aerospace Engineering" }
  ];

  // Integrated IIT Ropar faculty alongside the official Scientific Committee
  const scientificCommittee = [
    { name: "Prof. Dhiraj K. Mahajan", role: "Technical Committee Member", dept: "Department of Mechanical Engineering, IIT Ropar" },
    { name: "Prof. Prabir Sarkar", role: "Technical Committee Member", dept: "Department of Mechanical Engineering, IIT Ropar" },
    { name: "Prof. Arghya Das", role: "Member", dept: "Civil Engineering" },
    { name: "Prof. Shakti S. Gupta", role: "Member", dept: "Mechanical Engineering" },
    { name: "Prof. Arun Perumal", role: "Member", dept: "Aerospace Engineering" },
    { name: "Prof. Ushasi Roy", role: "Member", dept: "Mechanical Engineering" },
    { name: "Prof. Manjesh K. Singh", role: "Member", dept: "Mechanical Engineering" },
    { name: "Prof. P. Venkitanarayanan", role: "Member", dept: "Mechanical Engineering" }
  ];

  const advisoryCommittee = [
    { name: "Prof. Sanjay Kumar", role: "Head, Aerospace Engineering", dept: "IIT Kanpur" },
    { name: "Prof. Anurag Gupta", role: "Head, Mechanical Engineering", dept: "IIT Kanpur" },
    { name: "Prof. Priyanka Ghosh", role: "Head, Civil Engineering", dept: "IIT Kanpur" },
    { name: "Prof. A. K. Singh", role: "Member", dept: "MSE" },
    { name: "Prof. C. Lakshmana Rao", role: "Member", dept: "IIT Madras" },
    { name: "Prof. K. K. Shukla", role: "Director", dept: "MANIT Bhopal" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase mb-4">
          Organizing Team
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          The METRIX 7.0i conference is spearheaded by a dedicated committee of leading academicians and researchers committed to advancing the frontiers of mechanical sciences.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Core Organizing Committee */}
        <section>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 border-b-2 border-slate-200 pb-4 uppercase tracking-tight flex items-center gap-3">
            <Star className="text-blue-600" size={32} />
            Core Organizing Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCommittee.map((member, index) => (
              <div key={index} className="bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow p-6 flex items-start gap-4">
                <UserCircle size={48} className="text-slate-300 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">{member.role}</p>
                  <p className="text-sm text-slate-500 font-medium">{member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical & Scientific Committee */}
        <section>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 border-b-2 border-slate-200 pb-4 uppercase tracking-tight flex items-center gap-3">
            <Users className="text-blue-600" size={32} />
            Technical & Scientific Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scientificCommittee.map((member, index) => (
              <div key={index} className="bg-white border border-slate-200 p-5 shadow-sm hover:border-blue-400 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{member.role}</p>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-sm font-medium text-blue-700">{member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Committee */}
        <section>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 border-b-2 border-slate-200 pb-4 uppercase tracking-tight flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={32} />
            Advisory Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryCommittee.map((member, index) => (
              <div key={index} className="bg-slate-900 border border-slate-700 shadow-md p-6 flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-blue-400 mb-2">{member.role}</p>
                  <p className="text-sm text-slate-400">{member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}