import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#071324] text-slate-300 pt-16 pb-12 border-t border-[#0e2240]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Haupt-Grid mit den 4 Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Spalte 1: Logo & Beschreibung (4 Spalten) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#127A6B] flex items-center justify-center text-white font-bold font-serif text-lg">
                F
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-wide">
                Fairsicherlich
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your trusted partner for independent insurance advice in Austria.
            </p>
          </div>

          {/* Spalte 2: Services (3 Spalten) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-serif text-white font-medium text-lg">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link href="/services/private" className="hover:text-white transition-colors">
                  Private Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/business" className="hover:text-white transition-colors">
                  Business Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/health" className="hover:text-white transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/financial" className="hover:text-white transition-colors">
                  Financial Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Quick Links (2 Spalten) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-serif text-white font-medium text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/references" className="hover:text-white transition-colors">
                  References
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Contact (3 Spalten) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-serif text-white font-medium text-lg">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <span className="text-slate-400">📍</span>
                <span>Austria</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-slate-400">📞</span>
                <a href="tel:+436706031857" className="hover:text-white transition-colors">
                  +43 670 60 31 857
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-slate-400">✉️</span>
                <a href="mailto:office@fairsicherlich.at" className="hover:text-white transition-colors break-all">
                  office@fairsicherlich.at
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Untere Leiste: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Fairsicherlich. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/imprint" className="hover:text-slate-300 transition-colors">
              Imprint
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer
