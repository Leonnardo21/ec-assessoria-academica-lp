import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaUser, FaPhone, FaClock, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = "5585997435325";

  const handleSendWhatsApp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const text = `Olá, me chamo ${name}%0AEmail: ${email}%0A%0A${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
    
    setIsSubmitting(false);
    
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaPaperPlane className="w-4 h-4" />
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforme suas ideias acadêmicas em realidade. Nossa equipe está pronta para ajudar você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-12 -translate-y-12 opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie sua mensagem</h3>
              
              <div className="space-y-6">
                {/* Nome */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                {/* Mensagem */}
                <div className="relative">
                  <textarea
                    placeholder="Conte-nos sobre seu projeto acadêmico ou dúvidas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                {/* Botão Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <a onClick={handleSendWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 "
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Enviar via WhatsApp
                    </a>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Cards de contato */}
            <div className="grid gap-6">
              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <FaWhatsapp className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">WhatsApp</h4>
                    <p className="text-gray-600 mb-3">Resposta rápida e atendimento personalizado</p>
                    <a 
                      href={`https://wa.me/${phoneNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      <FaPhone className="w-4 h-4" />
                      +55 (85) 99743-5325
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FaEnvelope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">E-mail</h4>
                    <p className="text-gray-600 mb-3">Para orçamentos detalhados e documentos</p>
                    <a 
                      href="mailto:contato@ec.com" 
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      contato@ec.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl">
                    <FaInstagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">Instagram</h4>
                    <p className="text-gray-600 mb-3">Acompanhe nosso conteúdo e dicas</p>
                    <a 
                      href="https://instagram.com/ec" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
                    >
                      @ec_academico
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Informações Importantes</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaClock className="w-5 h-5 text-blue-200" />
                  <span>Atendimento: Segunda a Sexta, 8h às 18h</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-200" />
                  <span>Fortaleza, Ceará - Atendimento Online</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPaperPlane className="w-5 h-5 text-blue-200" />
                  <span>Resposta garantida em até 2 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Pronto para começar seu projeto?</h3>
          <p className="text-gray-600 mb-6">
            Mais de 500 trabalhos entregues com excelência. Junte-se aos nossos clientes satisfeitos!
          </p>
          <a
            href={`https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20acadêmicos.`}
            onClick={handleSendWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-5 h-5" />
            Falar Agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}