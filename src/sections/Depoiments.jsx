import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaTelegram, FaComments } from 'react-icons/fa';
import FeedBack1 from "../assets/feedback1.jpg";
import FeedBack2 from "../assets/feedback2.jpg";
import FeedBack3 from "../assets/feedback3.jpg";
import FeedBack4 from "../assets/feedback4.jpg";

export default function Depoiments() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const depoiments = [
    {
      id: 1,
      platform: 'whatsapp',
      image: FeedBack1,
      title: 'Conversa WhatsApp - Cliente Satisfeito',
      description: 'Cliente elogiando o atendimento e qualidade do serviço'
    },
    {
      id: 2,
      platform: 'whatsapp',
      image: FeedBack2, 
      title: 'Conversa Telegram - Feedback Positivo',
      description: 'Feedback sobre rapidez na entrega e produto de qualidade'
    },
    {
      id: 3,
      platform: 'whatsapp',
      image: FeedBack3,
      title: 'Conversa WhatsApp - Recomendação',
      description: 'Cliente recomendando nossos serviços para amigos'
    },
    {
      id: 4,
      platform: 'whatsapp',
      image: FeedBack4,
      title: 'Conversa Direct - Avaliação 5 Estrelas',
      description: 'Avaliação excelente sobre nosso produto'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % depoiments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [depoiments.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % depoiments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + depoiments.length) % depoiments.length);
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'whatsapp':
        return <FaWhatsapp className="w-6 h-6 text-green-500" />;
      case 'telegram':
        return <FaTelegram className="w-6 h-6 text-blue-500" />;
      default:
        return <FaComments className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <section id="depoiments" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Veja o que nossos clientes dizem
        </h2>
        <p className="text-gray-600 text-lg">
          Prints reais de conversas com clientes satisfeitos
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Slide anterior"
        >
          <FaChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Próximo slide"
        >
          <FaChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {depoiments.map((depoiment) => (
              <div key={depoiment.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 relative overflow-hidden">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
                  
                  {/* Platform Icon */}
                  <div className="absolute top-6 left-6 z-10">
                    {getPlatformIcon(depoiment.platform)}
                  </div>

                  <div className="relative z-10">
                    {/* Screenshot Container */}
                    <div className="flex justify-center mb-6">
                      <div className="relative max-w-sm w-full">
                        {/* Phone Frame */}
                        <div className="bg-gray-800 rounded-3xl p-3 shadow-2xl">
                          <div className="bg-white rounded-2xl overflow-hidden">
                            {/* Screenshot Placeholder */}
                            <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <div className="text-center p-6">
                                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                  {getPlatformIcon(depoiment.platform)}
                                </div>
                                <p className="text-gray-500 text-sm">
                                  <img src={depoiment.image} alt="" />
                                </p>
                                <div className="mt-4 space-y-2">
                                  <div className="h-3 bg-blue-200 rounded w-3/4 mx-auto"></div>
                                  <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                                  <div className="h-3 bg-blue-200 rounded w-5/6 mx-auto"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conversation Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {depoiments.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {depoiments.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {depoiments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }}
              aria-label={Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}