import { FaWhatsapp, FaEnvelope, FaInstagram, FaHeart, FaArrowUp, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Logo from "../assets/favicon.svg"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Controla a visibilidade do botão de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const phoneNumber = "5585997435325";

  return (
    <>
      <footer className="bg-gradient-to-br from-blue-900 via-blue-950 to-purple-950 text-white relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Seção principal do footer */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Coluna da Marca */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img className="w-10 h-10" src={Logo} alt="EC Assessoria Acadêmica Logo" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">
                    Assessoria Acadêmica
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Transformando sonhos acadêmicos em realidade há mais de 3 anos. Sua aprovação é nossa missão!
                </p>
                <div className="flex gap-4">
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-200"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:ecacessoriaacademica@gmail.com"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ecassessoriaacademica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-200"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Coluna de Navegação */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-400">Navegação</h4>
                <ul className="space-y-2">
                  {[
                    { name: "Início", href: "#hero" },
                    { name: "Sobre Nós", href: "#about" },
                    { name: "Serviços", href: "#services" },
                    { name: "Depoimentos", href: "#depoiments" },
                    { name: "Contato", href: "#contact" }
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna de Serviços */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-400">Nossos Serviços</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>TCC e Monografias</li>
                  <li>Dissertações</li>
                  <li>Artigos Científicos</li>
                  <li>Projetos de Pesquisa</li>
                  <li>Relatórios Acadêmicos</li>
                  <li>Questionários</li>
                </ul>
              </div>

              {/* Coluna de Contato */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-400">Contato</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <FaPhone className="w-4 h-4 text-green-400" />
                    <span className="text-sm">+55 (85) 99743-5325</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">ecacessoriaacademica@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">Fortaleza, CE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">Seg-Sex: 8h às 18h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de estatísticas */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Trabalhos Entregues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-sm text-gray-400">Taxa de Aprovação</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">3+</div>
                  <div className="text-sm text-gray-400">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">24h</div>
                  <div className="text-sm text-gray-400">Suporte</div>
                </div>
              </div>
            </div>
          </div>

          {/* Linha de copyright */}
          <div className="border-t border-gray-700 py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {new Date().getFullYear()} EC Assessoria. Feito com</span>
                <FaHeart className="w-4 h-4 text-red-500" />
                <span>para estudantes.</span>
              </div>
              <div className="text-gray-400 text-sm">
                Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}