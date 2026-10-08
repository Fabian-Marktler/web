import Link from "next/link";
import Image from "next/image"
import Logo from "@/public/svgs/logo.svg"

import { navLinks, fileLinks } from '@/app/components/data/links';
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="w-full bg-[#071324] text-slate-300 pt-16 pb-12 border-t border-[#0e2240]">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center text-white font-bold font-serif text-lg">
                <Image src={Logo} alt="Logo" />
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-wide">
                Fairsicherlich
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Ihr vertrauenswürdiger Partner für unabhängige Versicherungsberatung in Österreich.
            </p>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-serif text-white font-medium text-lg">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
            {fileLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-serif text-white font-medium text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            </ul>
          </div>
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Fairsicherlich. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/Legal#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/Legal#imprint" className="hover:text-slate-300 transition-colors">
              Impressum
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer
