import { useState } from "react";
import Logo from "../assets/favicon.svg";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        {name: "Início", href: "#hero"},
        {name: "Sobre", href: "#about"},
        {name: "Serviços", href: "#services"},
        {name: "Depoimentos", href: "#depoiments"},
    ]

    return(
        <header className="fixed top-0 w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md shadow-lg z-50 border-b border-blue-800/30">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 flex items-center justify-center shadow-lg">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-200 to-yellow-600 bg-clip-text text-transparent">
                        Assessoria Acadêmica
                    </div>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <li key={link.name} className="relative group">
                            <a 
                                href={link.href} 
                                className="text-gray-200 font-medium hover:text-cyan-300 transition-all duration-300 py-2 px-1 relative overflow-hidden"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <a 
                            href="#contact"
                            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2.5 rounded-full font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                        >
                            Fale Conosco
                        </a>
                    </li>
                </ul>

                {/* Botão Mobile */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className={`relative w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    >
                        <span className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${isOpen ? 'rotate-90 translate-y-0' : '-translate-y-1.5'}`}></span>
                        <span className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${isOpen ? '-rotate-90 -translate-y-0' : 'translate-y-1.5'}`}></span>
                    </button>
                </div>
            </nav>

            {/* Menu Mobile */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gradient-to-b from-slate-800/95 to-blue-900/95 backdrop-blur-md border-t border-blue-700/30">
                    <ul className="px-6 py-6 flex flex-col gap-4">
                        {links.map((link, index) => (
                            <li key={link.name} className={`transform transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{transitionDelay: `${index * 100}ms`}}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-gray-200 font-medium hover:text-cyan-300 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-800/30 hover:translate-x-2"
                                >
                                    <span className="flex items-center">
                                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mr-3 opacity-70"></span>
                                        {link.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                        <li className={`transform transition-all duration-500 mt-4 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{transitionDelay: '500ms'}}>
                            <a 
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-center px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg"
                            >
                                Fale Conosco
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}