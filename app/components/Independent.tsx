import React from 'react'

const Independent = () => {
  return (
<section id="Independent" className="w-full bg-[#f8fafc] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- OBERER BEREICH: Überschrift & Einleitung --- */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1E3A6B] tracking-tight leading-[1.18] mb-4">
            Warum unabhängig?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Versicherungen von der Stange passen selten perfekt. Ich vergleiche den gesamten Markt für Sie, um die Lösung zu finden, die wirklich zu Ihnen passt.
          </p>
        </div>

        {/* --- KERN-KARTE: Die Analogie zum Maßanzug --- */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            
            {/* Kopfbereich der Karte: Icon & Titel */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[#1E3A6B] text-2xl">
                {/* Fallback für das Kleiderbügel-Icon als SVG oder Emoji */}
                <span>🧥</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1E3A6B]">
                Die Analogie zum Maßanzug
              </h3>
            </div>

            {/* Textinhalte */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Stellen Sie sich vor, Sie kaufen einen Anzug. Ein Modell von der Stange mag passen, aber nur ein <strong className="font-semibold text-slate-800">Maßanzug</strong> sitzt perfekt, betont Ihre Stärken und hält ein Leben lang.
              </p>
              <p>
                Genau so arbeite ich als unabhängiger Makler. Ich bin an keine Gesellschaft gebunden, sondern ausschließlich Ihren Interessen verpflichtet. Ich wähle aus hunderten Tarifen die &quot;Stoffe&quot; und &quot;Schnitte&quot;, die exakt Ihre individuellen Bedürfnisse abdecken – ohne unnötige Extras, aber mit maximalem Schutz.
              </p>
            </div>

            {/* Dezentes grafisches Element im Hintergrund (optional für den Look) */}
            <div className="absolute -bottom-6 -right-6 opacity-5 pointer-events-none text-9xl font-serif text-[#1E3A6B]">
              ⚖️
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Independent
