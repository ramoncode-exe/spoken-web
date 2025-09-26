import { MessageSquare, Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            text: 'Sempre achei que aprender inglês era difícil, mas com o Spooken ficou muito mais simples. Em poucas semanas já consigo entender várias frases do dia a dia sem me sentir perdido.',
            name: 'Mariana, 24 anos',
            role: 'Estudante de Administração',
        },
        {
            text: 'Eu não tinha tempo para cursos longos, precisava de algo prático. O Spooken foca só no que realmente importa, e isso acelerou muito meu aprendizado. Finalmente consigo conversar no trabalho sem travar!',
            name: 'Ricardo, 32 anos',
            role: 'Analista de TI',
        },
        {
            text: 'Já testei vários aplicativos pagos, mas nenhum foi tão direto e eficiente quanto o Spooken. É gratuito, intuitivo e me ajuda a manter uma rotina diária de estudos sem esforço.',
            name: 'Camila, 28 anos',
            role: 'Professora',
        },
        {
            text: 'O Spooken mudou minha visão sobre aprender idiomas. Ao invés de regras complicadas, ele me deu confiança para falar o essencial e me comunicar logo nas primeiras semanas.',
            name: 'Diego, 19 anos',
            role: 'Intercambista',
        },
        {
            text: 'Eu adoro como o Spooken só foca nas palavras mais usadas. Não perco tempo decorando coisas que nunca vou utilizar. É perfeito para quem tem pressa em aprender.',
            name: 'Fernanda, 35 anos',
            role: 'Empreendedora',
        },
        {
            text: 'Minha experiência com o Spooken tem sido incrível. Além de aprender rápido, me sinto motivado todos os dias porque vejo progresso real. Parece que finalmente achei o método certo para mim.',
            name: 'João, 27 anos',
            role: 'Engenheiro Civil',
        },
    ];

    return (
        <main className="py-8 px-4 bg-[url('../assets/bg-hero.svg')] bg-no-repeat bg-contain bg-start">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">O que nossos <span className='text-[#0077B6]'>usuários dizem</span></h2>
                    <p className="text-sm text-gray-600 mt-2">Depoimentos reais de quem já pratica com o Spooken</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {testimonials.map((t, idx) => (
                        <article key={idx} className="bg-[#CAF0F8] rounded-lg shadow-md p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg transform hover:-translate-y-1 transition">
                            <div className="flex items-center justify-center bg-[#0077B6] rounded-full p-3">
                                <MessageSquare size={28} className="text-[#e6f0ff]" />
                            </div>
                            <p className="text-sm text-gray-700 italic">“{t.text}”</p>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                                <span className="text-xs text-gray-500">{t.role}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-2 text-yellow-700" aria-hidden>
                                <Star size={14} />
                                <Star size={14} />
                                <Star size={14} />
                                <Star size={14} />
                                <Star size={14} />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}