import Image from "next/image"
import office_inside from "@/public/office_inside.jpeg"

const About = () => {
  return (
<section id="About" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Haupt-Grid: Links Text, Rechts das große Bild */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LINKE SEITE: Text & Warum Fairsicherlich --- */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Überschrift */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1E3A6B] leading-[1.18]">
              Über mich &amp; meine <br />
              Philosophie
            </h2>

            {/* Zitat-Box */}
            <p className="font-serif italic text-slate-700 text-base sm:text-lg leading-relaxed border-l-2 border-[#127A6B] pl-4 my-2">
              &ldquo;Versicherung bedeutet für mich viel mehr als nur Paragraphen und Prämien. Es ist das Versprechen, da zu sein, wenn es darauf ankommt.&rdquo;
            </p>

            {/* Beschreibungstext */}
            <p className="text-slate-600 text-base leading-relaxed">
              Mein Name steht für Beratung auf Augenhöhe. Ich kombiniere jahrelange Branchenexpertise mit einem modernen, digitalen Ansatz, um Ihnen den bestmöglichen Schutz zu garantieren.
            </p>

            {/* Untere Überschrift: Warum Fairsicherlich? */}
            <div className="mt-4">
              <h3 className="font-serif text-xl font-medium text-[#1E3A6B] mb-6">
                Warum Fairsicherlich?
              </h3>

              {/* 4er-Grid für die Feature-Punkte */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                
                {/* Punkt 1 */}
                <div className="flex items-start gap-3">
                  <div className="text-[#127A6B] text-xl mt-0.5">💎</div>
                  <div>
                    <h4 className="font-bold text-[#1E3A6B] text-sm sm:text-base">Fairness</h4>
                    <p className="text-slate-500 text-sm mt-0.5">Ehrliche Bedingungen ohne versteckte Kosten.</p>
                  </div>
                </div>

                {/* Punkt 2 */}
                <div className="flex items-start gap-3">
                  <div className="text-[#127A6B] text-xl mt-0.5">🛡️</div>
                  <div>
                    <h4 className="font-bold text-[#1E3A6B] text-sm sm:text-base">Sicherheit</h4>
                    <p className="text-slate-500 text-sm mt-0.5">Umfassender Schutz für Ihre Zukunft.</p>
                  </div>
                </div>

                {/* Punkt 3 */}
                <div className="flex items-start gap-3">
                  <div className="text-[#127A6B] text-xl mt-0.5">👥</div>
                  <div>
                    <h4 className="font-bold text-[#1E3A6B] text-sm sm:text-base">Menschlichkeit</h4>
                    <p className="text-slate-500 text-sm mt-0.5">Persönliche Betreuung statt Callcenter.</p>
                  </div>
                </div>

                {/* Punkt 4 */}
                <div className="flex items-start gap-3">
                  <div className="text-[#127A6B] text-xl mt-0.5">👁️</div>
                  <div>
                    <h4 className="font-bold text-[#1E3A6B] text-sm sm:text-base">Transparenz</h4>
                    <p className="text-slate-500 text-sm mt-0.5">Klarheit in jeder Versicherungsfrage.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* --- RECHTE SEITE: Modernes Büro-Bild mit abgerundeten Ecken & Schatten --- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[4/3.5] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image
                src={office_inside}
                alt="Moderne Kanzlei / Büro mit Glasfront"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
