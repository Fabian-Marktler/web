'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/svgs/logo.svg";
import Burger from "../../public/svgs/burger.svg";
import Call from "../../public/svgs/call.svg";
import { navLinks } from '@/app/components/data/links';

const phoneNumber = "06503201899";
const company = "Fairsicherlich";

const TopNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-2 border-gray-100">
      <div className="w-full max-w-350 mx-auto h-20 px-4 sm:px-8 flex items-center justify-between lg:justify-around">
        <div id="left" className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" width={36} height={36} />
          </Link>
          <h1 className="text-2xl text-[#1E3A6B] font-bold">
            <Link href="/">{company}</Link>
          </h1>
        </div>
        <ul className="hidden lg:flex lg:items-center gap-8" id="middle">
          {navLinks.map((link) => (
            <li key={link.name} className="navItem">
              <Link href={link.href} className="text-slate-600 hover:text-[#1E3A6B] font-medium text-sm transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Call Button */}
        <a href={`tel:${phoneNumber}`} className="hidden lg:flex" id="right">
          <button className="bg-[#0a1b35] hover:bg-blue-950 text-white flex items-center gap-3 px-6 py-3 rounded-xl transition-all shadow-sm text-sm cursor-pointer">
            <Image src={Call} alt="Call" width={18} height={18} />
            <span>Anrufen</span>
          </button>
        </a>

        {/* Mobile Burger Menu Button */}
        <div id="BurgerMenu" className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Menü öffnen"
          >
            <Image src={Burger} alt="Burger Menu" width={24} height={24} />
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-700 hover:text-[#1E3A6B] font-medium text-base py-2 border-b border-slate-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2">
            <a href={`tel:${phoneNumber}`} className="w-full block">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#0a1b35] hover:bg-blue-950 text-white flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl transition-all shadow-sm text-base"
              >
                <Image src={Call} alt="Call" width={18} height={18} />
                <span>Anrufen</span>
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavBar;