import Image from "next/image"
import Logo from "../../public/svgs/logo.svg"
import Call from "../../public/svgs/call.svg"

const TopNavBar = () => {
  return (
    <div id="hero" className="w-full h-24 bg-gray-800 sticky top-0">
        <div id="navbar" className="w-full h-full bg-white flex items-center justify-between px-64">
            <div className="flex items-center h-full" id="logo">
                <Image src={Logo} alt="Logo"></Image>
                <div className="font-bold text-4xl">Fairsicherlich</div>
            </div>
            <div id="navigation">
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Über mich</li>
                    <li>Leistungen</li>
                    <li>Referenzen</li>
                    <li>Kontakt</li>
                </ul>
            </div>
            <div>
                <button className="bg-[#002045] text-white text-xl font-bold px-10 py-5 rounded-lg hover:bg-[#2a4a6b] flex gap-2"> <Image src={Call} alt="Call"></Image> Anrufen</button>
            </div>
        </div>
    </div>
  )
}

export default TopNavBar
