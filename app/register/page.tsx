import { Ticket, Calendar, Building, CheckCircle2, AlertCircle, CreditCard, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RegistrationPage() {
  const feeStructure = [
    {
      category: "Students / Research Scholars",
      earlyBird: "₹ 3,500",
      standard: "₹ 4,500",
      description: "Must provide a valid student ID card during on-site registration."
    },
    {
      category: "Academia / R&D Institutes",
      earlyBird: "₹ 6,000",
      standard: "₹ 7,500",
      description: "For faculty members, post-docs, and national lab researchers."
    },
    {
      category: "Industry Professionals",
      earlyBird: "₹ 8,000",
      standard: "₹ 10,000",
      description: "For delegates from corporate and industrial sectors."
    },
    {
      category: "Accompanying Person",
      earlyBird: "₹ 2,500",
      standard: "₹ 3,000",
      description: "Covers access to food, cultural events, and the inaugural ceremony."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase mb-4">
          Registration & Accommodation
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Secure your spot at METRIX 7.0i. Please review the fee structure, accommodation details, and important deadlines before proceeding to the payment portal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Fee Structure & Details (Takes up 2/3 of the grid) */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Registration Fees Table */}
          <section className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden">
            <div className="bg-slate-900 p-6 flex items-center gap-3">
              <Ticket className="text-blue-400" size={24} />
              <h2 className="text-xl font-bold text-white uppercase tracking-tight">Registration Fee Structure</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-200">
                    <th className="py-4 px-6 font-bold text-slate-900 uppercase tracking-wider text-sm">Delegate Category</th>
                    <th className="py-4 px-6 font-bold text-blue-700 uppercase tracking-wider text-sm">Early Bird<br/><span className="text-xs font-medium text-slate-500">(On or before Aug 31)</span></th>
                    <th className="py-4 px-6 font-bold text-slate-900 uppercase tracking-wider text-sm">Standard<br/><span className="text-xs font-medium text-slate-500">(After Aug 31)</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {feeStructure.map((tier, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="py-5 px-6">
                        <strong className="block text-slate-900">{tier.category}</strong>
                        <span className="text-xs text-slate-500 mt-1 block">{tier.description}</span>
                      </td>
                      <td className="py-5 px-6 font-bold text-blue-700">{tier.earlyBird}</td>
                      <td className="py-5 px-6 font-bold text-slate-700">{tier.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 border-t border-blue-100 flex items-start gap-3">
              <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-blue-900 font-medium leading-relaxed">
                Registration fee includes conference kit, access to all technical sessions, lunch, dinner, and refreshment breaks. Accommodation charges are separate.
              </p>
            </div>
          </section>

          {/* Accommodation Info */}
          <section className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <Building className="text-blue-600" />
              Accommodation Details
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
              <p>
                IIT Ropar has made comprehensive arrangements to accommodate our estimated 400–500 conference guests. Accommodation will be provided within the institute premises on a first-come, first-served basis.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border border-slate-200 p-5 rounded bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">For Students</h3>
                  <p className="text-sm">Accommodation will be arranged in the institute hostels on a sharing basis. Nominal daily charges will apply.</p>
                </div>
                <div className="border border-slate-200 p-5 rounded bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">For Faculty & Industry</h3>
                  <p className="text-sm">Limited rooms are available in the Main Guest House. Alternatively, block bookings have been made at nearby partner hotels in Rupnagar.</p>
                </div>
              </div>

              <p className="text-sm font-semibold text-blue-700 mt-4">
                * Note: Accommodation requests must be raised through the registration portal. A separate payment link for housing will be shared upon confirmation.
              </p>
            </div>
          </section>

        </div>

        {/* Right Column: Sticky Sidebar with Deadlines & CTA (Takes up 1/3 of the grid) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            
            {/* Action Card */}
            <div className="bg-blue-600 text-white p-8 shadow-xl rounded-sm text-center border-b-4 border-blue-900">
              <CreditCard className="mx-auto mb-4 text-blue-200" size={48} />
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">Ready to Register?</h3>
              <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                Payments are processed securely via the State Bank of India (SBI Collect) portal. Keep your transaction ID ready.
              </p>
              <button className="w-full bg-white text-blue-700 font-extrabold px-6 py-4 rounded-sm uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                Proceed to Payment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Important Dates Card */}
            <div className="bg-slate-900 text-white p-8 shadow-xl rounded-sm">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-tight flex items-center gap-2">
                <Calendar size={20} className="text-blue-400" /> Key Dates
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 border-b border-slate-700 pb-4">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Abstract Acceptance</strong>
                    <span className="text-sm text-slate-400">July 30, 2026</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-700 pb-4">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Early Bird Registration</strong>
                    <span className="text-sm text-slate-400">Ends August 31, 2026</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-700 pb-4">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Hackathon Registration</strong>
                    <span className="text-sm text-slate-400">Closes October 15, 2026</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="block text-slate-200">Conference Dates</strong>
                    <span className="text-sm text-slate-400">Oct 30 - Nov 1, 2026</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}