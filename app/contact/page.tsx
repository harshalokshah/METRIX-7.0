import { MapPin, Mail, Phone, Plane, Train, Send, Building } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase mb-4">
          Contact & Venue
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          For inquiries regarding abstract submissions, registration, or sponsorship opportunities, please reach out to the organizing committee.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        <div className="lg:col-span-3 space-y-10">
          
          <section className="bg-white border-t-4 border-blue-600 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Organizing Secretariat
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-blue-600 shrink-0">
                  <Building size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Department of Mechanical Engineering</h3>
                  <p className="text-slate-600 leading-relaxed mt-1">
                    Indian Institute of Technology Ropar<br />
                    Bara Phool, Birla Seed Farms<br />
                    Rupnagar, Punjab - 140001, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Primary Email</h3>
                  <a href="mailto:metrix7@iitrpr.ac.in" className="text-lg font-bold text-blue-600 hover:underline">
                    metrix7@iitrpr.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Conference Desk</h3>
                  <p className="text-lg font-bold text-slate-900">+91 1881 231 000</p>
                  <p className="text-xs text-slate-500">(Mon-Fri, 9:00 AM - 5:00 PM IST)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
              <MapPin size={160} />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight text-white border-b border-slate-700 pb-4">
                Reaching the Venue
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Plane size={20} />
                    <h3 className="font-bold uppercase tracking-wide">By Air</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed text-justify">
                    The nearest airport is <strong>Chandigarh International Airport (IXC)</strong>, located approximately 60 km from the IIT Ropar campus. Taxis and airport shuttles are readily available for the 1.5-hour drive to the institute.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Train size={20} />
                    <h3 className="font-bold uppercase tracking-wide">By Train</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed text-justify">
                    The nearest railway station is <strong>Rupnagar (RPAR)</strong>, just 7 km away. Major railway junctions like <strong>Ambala Cantt</strong> and <strong>Chandigarh</strong> are also well-connected to all parts of India.
                  </p>
                </div>
              </div>

              {/* NEW: IIT Ropar Map Embed */}
              <div className="mt-8 rounded-sm overflow-hidden border border-slate-700 shadow-md">
                <iframe 
                  src="https://maps.google.com/maps?q=Indian+Institute+of+Technology+Ropar,+Rupnagar,+Punjab&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>

            </div>
          </section>

        </div>

        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-200 shadow-xl p-8 sticky top-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight">Send a Message</h2>
            <p className="text-sm text-slate-500 mb-6 border-b border-slate-100 pb-4">
              Use the form below for quick queries. We aim to respond within 24-48 business hours.
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Prof. John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="john@institution.edu"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-1">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-700"
                >
                  <option>General Inquiry</option>
                  <option>Abstract / Paper Submission</option>
                  <option>Registration & Accommodation</option>
                  <option>Sponsorship & Expo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Your Message *</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md uppercase tracking-wider"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}