export default function Hero(){
    return(
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Texto */}
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                        Excelência Acadêmica
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        <span className="text-white">Potencialize</span>
                        <br />
                        <span className="text-white">sua vida</span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
                            acadêmica
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                        Transforme seu futuro acadêmico com nossa assessoria especializada. 
                        <span className="text-cyan-300 font-medium"> Orientação personalizada</span> para cada etapa da sua jornada.
                    </p>

                    {/* Estatísticas */}
                    <div className="flex flex-wrap gap-6 py-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-300">500+</div>
                            <div className="text-sm text-gray-400">Estudantes atendidos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-300">95%</div>
                            <div className="text-sm text-gray-400">Taxa de aprovação</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-300">24h</div>
                            <div className="text-sm text-gray-400">Suporte disponível</div>
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                            href="#contact" 
                            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <span className="relative z-10 flex items-center">
                                Começar Agora
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>

                        <a 
                            href="#services" 
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-semibold rounded-full hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
                        >
                            Nossos Serviços
                        </a>
                    </div>
                </div>

                {/* Área visual */}
                <div className="relative">
                    {/* Card principal */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                        {/* Elementos decorativos do card */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-300/30 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-300/30 rounded-full blur-lg"></div>
                        
                        {/* Ícones acadêmicos */}
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Orientação Acadêmica</h3>
                                    <p className="text-gray-300 text-sm">Suporte especializado</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Resultados Garantidos</h3>
                                    <p className="text-gray-300 text-sm">Alta taxa de aprovação</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Acompanhamento Total</h3>
                                    <p className="text-gray-300 text-sm">Do início ao fim</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Elementos flutuantes */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-300/20 rounded-full animate-pulse delay-75"></div>
                </div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}