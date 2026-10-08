import { services } from "@/app/components/data/links";

const Services = () => {
  return (
    <section id="Services" className="w-full bg-[#f8fafc] py-16 md:py-24">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1E3A6B] tracking-tight leading-[1.18] mb-4">
            Leistungen
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Vom privaten Rundum-Schutz bis zur Gewerbeversicherung.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-start shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1E3A6B]/8 text-[#1E3A6B] flex items-center justify-center text-xl mb-5">
                {service.icon}
              </div>

              <h3 className="font-serif text-lg font-medium text-[#1E3A6B] mb-3">
                {service.title}
              </h3>

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
