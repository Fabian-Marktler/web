const services = [
    {
      icon: "🏠",
      title: "Private Versicherung",
      desc: "Schutz für Sie und Ihre Angehörigen, der wichtige persönliche Risiken abdeckt und finanzielle Sicherheit für Familie, Eigentum, Gesundheit und Mobilität bietet.",
    },
    {
      icon: "💼",
      title: "Gewerblicher Schutz",
      desc: "Umfassender Versicherungsschutz für Ihr Unternehmen gegen betriebliche Risiken, finanzielle Haftungen, unerwartete Ereignisse und mögliche Betriebsunterbrechungen.",
    },
    {
      icon: "➕",
      title: "Gesundheit",
      desc: "Private Gesundheitsvorsorge mit Zugang zu hochwertiger medizinischer Versorgung, fachärztlicher Behandlung und finanzieller Unterstützung bei unerwarteten Gesundheitskosten.",
    },
    {
      icon: "🏛️",
      title: "Finanzberatung",
      desc: "Professionelle Finanzberatung für eine effektive Planung, Anlagestrategien und Vermögensverwaltung mit individuellen Lösungen für Ihre langfristigen finanziellen Ziele.",
    },
    {
      icon: "📈",
      title: "ETF-Police",
      desc: "Eine fondsgebundene Lebensversicherung, bei der das Kapital ganz oder teilweise in börsengehandelte Indexfonds (ETFs) investiert wird. Sie bietet zudem steuerliche Vorteile und kann attraktive Renditechancen ermöglichen.",
    },
  ];

const Services = () => {
  return (
    <section id="Services" className="w-full bg-[#f8fafc] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Sektions-Überschrift und Untertitel */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1E3A6B] tracking-tight leading-[1.18] mb-4">
            Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From private all-round protection to complex commercial insurance.
          </p>
        </div>

        {/* Grid für die Services-Karten: Horizontal in einer Reihe auf großen Bildschirmen (grid-cols-5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-start shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#1E3A6B]/[0.08] text-[#1E3A6B] flex items-center justify-center text-xl mb-5">
                {service.icon}
              </div>

              {/* Titel */}
              <h3 className="font-serif text-lg font-medium text-[#1E3A6B] mb-3">
                {service.title}
              </h3>

              {/* Beschreibung */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
