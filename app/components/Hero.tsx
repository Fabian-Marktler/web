import Image from "next/image"
import Logo from "../../public/svgs/logo.svg"
import Insurer from "../../public/insurer.jpeg"
import Whatsapp from "../../public/svgs/whatsapp.svg"

const Hero = () => {
  return (
    <div className="w-full h-screen bg-gray flex justify-center px-64 pt-24 pb-36 gap-16">
      <div className="w-2/3 h-full flex flex-col justify-between gap-8">
        <div className="flex items-center gap-4">
            <Image src={Logo} alt="Logo"></Image>
            <div className="text-blue text-lg">Unabhängige Versicherungsberatung</div>
        </div>
        <h1 className="text-7xl font-bold text-blue ">Fairsicherlich: Ihr Schutz ist meine Mission.</h1>
        <div className="text-2xl">Professionalität, Vertrauen und Österreichische Präzision. Ich biete Ihnen maßgeschneiderte Versicherungslösungen für langfristige Sicherheit und Gelassenheit.</div>
        <div className="flex gap-5">
          <button className="bg-blue hover:bg-bblue">Kostenlosen Versicherungsscheck vereinbaren</button>
          <button className="bg-green hover:bg-bgreen"><Image src={Whatsapp} alt="Whatsapp"></Image> Per Whatsapp Beraten</button>
        </div>
      </div>
      <div className="w-1/3 h-full flex items-center justify-center">
        <Image width={640} height={780} className="rounded-3xl border-white border-4" src={Insurer} alt="Insurer"></Image>
      </div>
    </div>
  )
}

export default Hero
