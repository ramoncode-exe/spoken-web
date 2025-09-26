import Link from "next/link"
import { Lamp, Handshake, Book, Rocket } from 'lucide-react';

export default function Cta() {
    return (
        <main>
            <div className="text-center p-4 bg-[#108bcd] text-white mt-4">
                <div>
                    <h1 className="text-3xl font-bold text-center mt-6">Pronto para transformar sua forma de aprender idiomas?</h1>
                    <p className="mt-4 text-[14px]">Com o Spooken, você aprende apenas o essencial para se comunicar de verdade, sem enrolação e totalmente grátis.</p>
                    <div className="text-white flex flex-wrap justify-center gap-4 my-6">
                        <div className="bg-[#0676b3] shadow-lg transform hover:-translate-y-1 transition rounded-lg p-3 flex flex-col items-center text-center gap-2 w-42">
                            <Rocket size={28} />
                            <p className='font-bold text-sm'>Avance rápido</p>
                            <p className='text-[12px]'>Aprenda só o que realmente importa.</p>
                        </div>
                        <div className="bg-[#0676b3] shadow-lg transform hover:-translate-y-1 transition rounded-lg p-3 flex flex-col items-center text-center gap-2 w-42">
                            <Handshake size={28} />
                            <p className='font-bold text-sm'>100% gratuito</p>
                            <p className='text-[12px]'>Sem custos, sem limites.</p>
                        </div>
                        <div className="bg-[#0676b3] shadow-lg transform hover:-translate-y-1 transition rounded-lg p-3 flex flex-col items-center text-center gap-2 w-42">
                            <Book size={28} />
                            <p className='font-bold text-sm'>Conteúdo prático</p>
                            <p className='text-[12px]'>Palavras e frases do dia a dia.</p>
                        </div>
                        <div className="bg-[#0676b3] shadow-lg transform hover:-translate-y-1 transition rounded-lg p-3 flex flex-col items-center text-center gap-2 w-42">
                            <Lamp size={28} />
                            <p className='font-bold text-sm'>Fácil e acessível</p>
                            <p className='text-[12px]'>Estude no seu ritmo, onde quiser.</p>
                        </div>
                    </div>
                    <p className="mb-4 mt-4 text-[14px]">Crie sua conta agora e dê o primeiro passo para falar com confiança!</p>
                    <Link href="/signup">
                        <button className="bg-[#0676b3] text-white text-[18px] transform hover:-translate-y-1 transition border border-none px-4 py-2 rounded-full font-bold hover:bg-[#0ed4fc] hover:text-white">Começar</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}