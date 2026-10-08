import Image from "next/image"
import Logo from "@/public/svgs/logo.svg"
import Insurer from "@/public/insurer.jpeg"
import Trust from "./Trust"

const Hero = () => {
  return (
    <section id="Hero" className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-blue font-semibold flex items-center gap-2">
              <Image src={Logo} alt="Logo"/>
              <div className="hidden lg:block">Unabhängige Versicherungsberatung</div>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-dark tracking-tight leading-tight max-w-2xl text-balance">
              Fairsicherlich<span className="hidden lg:inline">: Ihr Schutz ist meine Mission.</span>
            </h1>
            <h2 className="lg:hidden">Unabhängige Versicherungsberatung</h2>
            <p className="text-base sm:text-lg text-mako max-w-xl leading-relaxed">
              Professionalität, Vertrauen und österreichische Präzision. Ich biete Ihnen maßgeschneiderte Versicherungslösungen für langfristige Sicherheit und Gelassenheit.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#Contact"
                className="bg-[#0a1b35] hover:bg-[#122c54] text-white font-medium px-6 py-3.5 rounded-xl transition-colors shadow-sm text-center"
              >
                Kostenlosen Versicherungscheck vereinbaren
              </a>
              <a
                href="https://wa.me/436706031857"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <span>Per WhatsApp beraten</span>
              </a>
            </div>
          </div>
          <div className="flex lg:hidden"><Trust></Trust></div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end h-full">
            <div className="relative w-full max-w-110 aspect-440/520 rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image
                src={Insurer}
                alt="Ihr Berater - Experte für Vorsorge & Schutz"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xl font-bold">Ihr Berater</p>
                <p className="text-sm text-slate-200">Experte für Vorsorge & Schutz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
