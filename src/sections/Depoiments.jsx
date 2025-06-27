import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Depoiments() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const depoiments = [
    {
      name: "Juliana Costa",
      role: "Estudante de Administração",
      message: "A EC me ajudou a finalizar meu TCC com tranquilidade. O suporte foi excelente, sempre atenciosos! Recomendo para todos os estudantes.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Pedro Lima",
      role: "Mestrando em Engenharia",
      message: "Eu estava completamente perdido com meus relatórios acadêmicos, mas recebi toda a orientação que precisava. Profissionais muito competentes!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Amanda Oliveira",
      role: "Doutoranda em Psicologia",
      message: "Fizeram meu questionário de forma clara e objetiva. Me ajudou muito na coleta de dados da minha pesquisa. Trabalho impecável!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
    {
      name: "Carlos Santos",
      role: "Estudante de Direito",
      message: "Serviço de qualidade excepcional! Me ajudaram com a metodologia do meu trabalho e ficou perfeito. Muito obrigado pela dedicação!",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
    },
    {
      name: "Maria Silva",
      role: "Pós-graduanda em Marketing",
      message: "Equipe muito profissional e pontual. Entregaram meu projeto dentro do prazo e com qualidade superior. Superou minhas expectativas!",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      rating: 5,
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % depoiments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + depoiments.length) % depoiments.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="depoiments" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaStar className="w-4 h-4" />
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra como transformamos a jornada acadêmica de centenas de estudantes
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {depoiments.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 md:p-12 relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 text-blue-200">
                      <FaQuoteLeft className="w-12 h-12" />
                    </div>

                    <div className="relative z-10">
                      {/* Stars Rating */}
                      <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                      </div>

                      {/* Message */}
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center italic">
                        {item.message}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-lg"
                        />
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-lg">{item.name}</div>
                          <div className="text-blue-600 font-medium">{item.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-all duration-200 group z-10"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-all duration-200 group z-10"
          >
            <FaChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {depoiments.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Trabalhos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
            <div className="text-gray-600">Suporte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3 Anos</div>
            <div className="text-gray-600">Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
}