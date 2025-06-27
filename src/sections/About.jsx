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
                        {/* Card principal com glassmorphism */}
                        <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
                            {/* Elementos decorativos */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-300/30 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-300/20 rounded-full blur-lg"></div>
                            
                            {/* Placeholder da imagem com elementos visuais */}
                            <div className="relative h-80 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl flex items-center justify-center overflow-hidden">
                                {/* Ícones representativos */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-6 opacity-20">
                                        {/* Ícone de graduação */}
                                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            </svg>
                                        </div>
                                        {/* Ícone de livro */}
                                        <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        {/* Ícone de sucesso */}
                                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        {/* Ícone de pessoas */}
                                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        {/* Ícone de estrela */}
                                        <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </div>
                                        {/* Ícone de alvo */}
                                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Texto central */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">EC Assessoria</h3>
                                        <p className="text-gray-600">Sua parceira acadêmica</p>
                                    </div>
                                </div>
                            </div>

                            {/* Métricas em cards menores */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center border border-blue-100">
                                    <div className="text-2xl font-bold text-blue-600">5+</div>
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

                        {/* Call to action */}
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