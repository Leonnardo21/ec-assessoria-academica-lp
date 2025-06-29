import Logo from "../assets/logo.jpg";

export default function About(){
    return(
        <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-300 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header da seção */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Sobre Nós
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Transformando <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">futuros acadêmicos</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Nascemos com o propósito de tornar a jornada acadêmica mais leve e direcionada
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Card */}
                        <div className="relative">
                            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/50 max-w-md mx-auto">
                                {/* Elementos decorativos */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-300/30 rounded-full blur-xl"></div>
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-300/20 rounded-full blur-lg"></div>

                                {/* Área da imagem (logo EC) */}
                                <div className="w-full h-60 rounded-2xl overflow-hidden">
                                <img
                                    src={Logo}
                                    alt="Logo EC Assessoria"
                                    className="w-full h-full object-cover"
                                />
                                </div>

                                {/* Métricas em cards menores */}
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center border border-blue-100">
                                    <div className="text-2xl font-bold text-blue-600">3+</div>
                                    <div className="text-sm text-gray-600">Anos de experiência</div>
                                </div>
                                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 text-center border border-cyan-100">
                                    <div className="text-2xl font-bold text-cyan-600">100%</div>
                                    <div className="text-sm text-gray-600">Dedicação</div>
                                </div>
                                </div>
                            </div>
                        </div>


                    {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                                    A EC Assessoria Acadêmica nasceu com o propósito de ajudar estudantes a 
                                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> vencerem os desafios</span> 
                                    do mundo acadêmico com mais leveza, foco e direcionamento.
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Suporte Personalizado</h4>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Oferecemos suporte personalizado para TCCs, trabalhos acadêmicos, organização de estudos e muito mais, com uma equipe experiente e dedicada ao seu sucesso.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Potencial Máximo</h4>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Acreditamos que com o apoio certo, todo estudante pode alcançar seu potencial máximo e conquistar seus objetivos acadêmicos com confiança.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div className="pt-6">
                            <a 
                                href="#services" 
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                            >
                                Conheça nossos serviços
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}