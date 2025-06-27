export default function Services(){
    const services = [
        {
            title: "Desenvolvimento de TCC",
            description: "Acompanhamento completo na elaboração do seu Trabalho de Conclusão de Curso com foco em qualidade, normas e prazos.",
            features: ["Orientação metodológica", "Revisão de normas ABNT", "Acompanhamento personalizado"],
            gradient: "from-blue-500 to-cyan-400",
            bgGradient: "from-blue-50 to-cyan-50",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Relatórios Acadêmicos",
            description: "Elaboração de relatórios técnicos e acadêmicos com estrutura clara e adequada às exigências da sua instituição.",
            features: ["Formatação profissional", "Análise de dados", "Estrutura técnica"],
            gradient: "from-cyan-500 to-blue-400",
            bgGradient: "from-cyan-50 to-blue-50",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "Criação de Questionários",
            description: "Desenvolvimento de instrumentos de coleta de dados como questionários e formulários online de forma clara e objetiva.",
            features: ["Design intuitivo", "Validação científica", "Análise de resultados"],
            gradient: "from-blue-600 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        },
    ]

    return(
        <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300 rounded-full filter blur-3xl animate-pulse delay-75"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-150"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header da seção */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        Nossos Serviços
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                        Soluções <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">acadêmicas</span>
                        <br />
                        sob medida
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Apoio completo para sua jornada acadêmica com 
                        <span className="text-blue-600 font-semibold"> atendimento personalizado</span> e resultados garantidos.
                    </p>
                </div>

                {/* Grid de serviços */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
                        >
                            {/* Background gradient sutil */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            {/* Elementos decorativos */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-blue-300/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                            
                            <div className="relative z-10">
                                {/* Ícone */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>

                                {/* Título */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Descrição */}
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-600">
                                            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Botão */}
                                <button className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action final */}
                <div className="text-center bg-gradient-to-r from-blue-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                    {/* Elementos decorativos do CTA */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400 rounded-full filter blur-2xl"></div>
                        <div className="absolute bottom-4 left-4 w-24 h-24 bg-cyan-300 rounded-full filter blur-xl"></div>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Pronto para transformar sua 
                            <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent"> jornada acadêmica?</span>
                        </h3>
                        
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos acadêmicos.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                            >
                                Fale Conosco Agora
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            
                            <a 
                                href="#depoiments"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 font-semibold rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
                            >
                                Ver Depoimentos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}