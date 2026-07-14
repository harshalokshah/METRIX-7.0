import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">METRIX 7.0i</h3>
          <p className="text-sm leading-relaxed mb-6">
            The 7th Indian Conference on Mechanical Engineering Tech Research Innovation and Exchange. A biennial international event fostering research and collaboration in applied mechanics and allied fields.
          </p>
          <p className="text-sm font-semibold text-blue-400">
            © 2026 IIT Ropar. All rights reserved.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-tight">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About METRIX</Link></li>
            <li><Link href="/tracks" className="hover:text-blue-400 transition-colors">Call for Papers</Link></li>
            <li><Link href="/committee" className="hover:text-blue-400 transition-colors">Organizing Team</Link></li>
            <li><Link href="/register" className="hover:text-blue-400 transition-colors">Registration & Accommodation</Link></li>
            <li><Link href="/hackathon" className="hover:text-blue-400 transition-colors">ASME-Level Hackathon</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-tight">Contact Us</h3>
          <div className="text-sm space-y-4">
            <p>
              <strong className="block text-white mb-1">Organizing Secretary</strong>
              Department of Mechanical Engineering<br />
              Indian Institute of Technology Ropar<br />
              Rupnagar, Punjab - 140001, India
            </p>
            <p>
              <strong className="block text-white mb-1">Email:</strong>
              <a href="mailto:metrix7@iitrpr.ac.in" className="text-blue-400 hover:underline">metrix7@iitrpr.ac.in</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}