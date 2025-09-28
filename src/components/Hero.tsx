import Link from "next/link";
import Image from "next/image";
import HeroImg from "../assets/hero-spooken.svg";
import { Brain, Handshake, Cloud, Rocket } from 'lucide-react';

export default function Hero() {
    return (
        <main className="p-1.5 flex justify-evenly bg-[url('../assets/bg-circle.svg')] bg-no-repeat bg-contain bg-start items-center max-md:flex-wrap">
            <div className="max-md:mt-4">
                <h1 className="text-3xl max-md:w-[350px] font-bold w-[500px]">Porque Não <span className="text-[#0077B6]">Falar Algum Idioma</span> Ainda Hoje?</h1>
                <p className="w-[500px] max-md:w-[350px] mt-4 text-[#3d3d3d]">Com o Spooken, você aprende de forma prática e eficiente, focando apenas no que realmente importa. Nosso método prioriza as 3.000 a 5.000 palavras mais utilizadas em qualquer idioma.</p>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="flex items-start gap-2">
                        <Brain size={20} className="mt-1 text-[#0077B6]" /><p className="text-[#000] text-sm">Fácil de usar em qualuer dispositivo.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <Handshake size={20} className="mt-1 text-[#0077B6]" /><p className="text-[#000] text-sm">Feito para quem não pode pagar!</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <Cloud size={20} className="mt-1 text-[#0077B6]" /><p className="text-[#000] text-sm">Pratique sua fala, não so leitura!</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <Rocket size={20} className="mt-1 text-[#0077B6]" /><p className="text-[#000] text-sm">Estude quando e onde quiser!</p>
                    </div>
                </div>
                <div className="flex mt-4 gap-2">
                    <Link href="/dashboard">
                        <button className="bg-[#00B4D8] text-white transform hover:-translate-y-1 transition hover:text-[#00B4D8] px-4 py-2 rounded-full border mr-2 font-bold hover:bg-white hover:border-[#00B4D8]">Cadastra-se</button>
                    </Link>
                    <Link href="/signup">
                        <button className="bg-white text-[#00B4D8] border transform hover:-translate-y-1 transition border-[#00B4D8] px-4 py-2 rounded-full font-bold hover:bg-[#00B4D8] hover:text-white">Saiba Mais</button>
                    </Link>
                </div>
            </div>
            <div className="max-md:mt-4">
                <Image src={HeroImg} alt="Imagem de uma pessoa estudando idiomas" className="w-[500px] mt-4" />
            </div>
        </main>
    )
}