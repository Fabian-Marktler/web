import Image from "next/image";
import office_outside from "@/public/office_outside.jpeg"

const points = [
    {
      icon: "🏆",
      title: "Über 8 Jahre Expertise",
      desc: "Jahrelange Erfahrung in der Beratung von Privat- und Firmenkunden in ganz Österreich.",
    },
    {
      icon: "🏢",
      title: "Hintergrund beim Marktführer",
      desc: "Solide Ausbildung und Praxis beim größten österreichischen Versicherer – ich kenne die Branche von innen.",
    },
    {
      icon: "✅",
      title: "Vollumfängliche Expertise",
      desc: "Spezialisiert auf Schadensmanagement, Zulassungswesen und strategischen Vertrieb für optimale Ergebnisse.",
    },
  ];

const Experience = () => {
  return (
    <section id="Experience" className="w-full bg-[#0a1b35] py-16 md:py-24 text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Haupt-Grid: Links Bild, Rechts Text & Punkte */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LINKE SEITE: Bild (Füller / Füllfederhalter auf Papier) --- */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[4/3.2] rounded-3xl overflow-hidden shadow-2xl bg-slate-800">
              <Image
                src={office_outside}
                alt="Füllfederhalter auf Papier – Erfahrung & Kompetenz"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>

          {/* --- RECHTE SEITE: Überschrift & Kompetenz-Punkte --- */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Sektions-Überschrift */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-white leading-[1.18]">
              Erfahrung &amp; Kompetenz
            </h2>

            {/* Liste der 3 Kernkompetenzen */}
            <div className="flex flex-col gap-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0 mt-0.5">
                    {point.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg mb-1">
                      {point.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience
