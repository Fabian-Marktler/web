'use client'

import Image from "next/image";
import insurer from "@/public/insurer.jpeg";

const Contact = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- OBERER BEREICH: Überschrift & Einleitung --- */}
        <div className="mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1E3A6B] tracking-tight leading-[1.18] mb-3">
            Kontakt
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
            Lassen Sie uns gemeinsam Ihren optimalen Schutz planen. Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        {/* --- HAUPT-GRID: Links Infos/Karte/Bild, Rechts das Formular --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LINKE SEITE: Kontaktdaten, WhatsApp, Berater & Interaktive Karte --- */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Info-Row: Kontaktdaten links, Berater-Bild rechts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              
              {/* Kontaktdaten */}
              <div className="flex flex-col gap-6">
                
                {/* Telefon */}
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
                    Telefonnummer
                  </span>
                  <a 
                    href="tel:+436706031857" 
                    className="font-medium text-[#1E3A6B] text-base sm:text-lg hover:underline"
                  >
                    +43 670 60 31 857
                  </a>
                </div>

                {/* E-Mail */}
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
                    E-Mail
                  </span>
                  <a 
                    href="mailto:office@fairsicherlich.at" 
                    className="font-medium text-[#1E3A6B] text-base sm:text-lg hover:underline break-all"
                  >
                    office@fairsicherlich.at
                  </a>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/436706031857"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-sm px-5 py-3 rounded-xl transition-all shadow-sm"
                  >
                    <span>💬</span>
                    <span>Per WhatsApp beraten</span>
                  </a>
                </div>

              </div>

              {/* Berater-Bild im kleinen Hochkant-Format */}
              <div className="relative w-full aspect-[4/5] max-w-[240px] mx-auto sm:mx-0 rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                <Image
                  src={insurer}
                  alt="Ihr Berater"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>

            </div>

            {/* Interaktives Google Maps Embed */}
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <iframe
                title="Regus Graz City Tower Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.654763137912!2d15.4535!3d47.0772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3579b29e05f7%3A0x6b1cfb8cd7bc8a0!2sMesseplatz%201%2C%208010%20Graz%2C%20%C3%96sterreich!5e0!3m2!1sde!2sat!4v1710000000000!5m2!1sde!2sat"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[105%]"
              ></iframe>

              {/* Overlay-Box für Adresse unten links */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 pointer-events-none">
                <p className="font-bold text-xs text-[#1E3A6B]">Regus Graz City Tower</p>
                <p className="text-[11px] text-slate-500">Messeplatz 1, 8010 Graz, Austria</p>
              </div>

              {/* Open in Maps Link oben links */}
              <div className="absolute top-3 left-3">
                <a
                  href="https://maps.google.com/?q=Messeplatz+1,+8010+Graz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white text-[#1E3A6B] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open in Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* --- RECHTE SEITE: Das Anfrage-Formular (Card) --- */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100">
              
              <h3 className="font-serif text-2xl font-medium text-[#1E3A6B] mb-8">
                Unverbindlich anfragen
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                
                {/* Vor- & Nachname und Telefonnummer (2 Spalten ab sm) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">
                      Vor- &amp; Nachname
                    </label>
                    <input id="Contact"
                      type="text"
                      placeholder="Max Mustermann"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A6B]/20 focus:border-[#1E3A6B] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      placeholder="+43 6xx..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A6B]/20 focus:border-[#1E3A6B] transition-all"
                    />
                  </div>
                </div>

                {/* E-Mail */}
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    placeholder="max@beispiel.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A6B]/20 focus:border-[#1E3A6B] transition-all"
                  />
                </div>

                {/* Was ist Ihr Anliegen? */}
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">
                    Was ist Ihr Anliegen?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Kurze Beschreibung Ihrer Anfrage..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A6B]/20 focus:border-[#1E3A6B] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0a1b35] hover:bg-[#122c54] text-white font-medium py-3.5 px-6 rounded-xl transition-colors shadow-sm text-center text-sm sm:text-base cursor-pointer"
                  >
                    Anfrage absenden
                  </button>
                </div>

                {/* Hinweis unten */}
                <p className="text-center text-xs text-slate-400 pt-1">
                  Ich melde mich innerhalb von 24 Stunden bei Ihnen.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
