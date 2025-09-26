import Image from "next/image"
import Logo from "../../assets/logo-spooken.svg"
import { Brain, Handshake, Cloud, Rocket } from 'lucide-react';


export default function SignUpPage() {
    return (
        <main className="bg-[#CAF0F8] w-full min-h-screen font-poppins flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 py-8 md:py-0 gap-6 md:gap-10">
            <div className="bg-white w-full max-w-md md:w-[400px] rounded-lg p-6 flex flex-col shadow-lg">
                <div>
                    <Image src={Logo} alt="Logo Spooken" className="w-40 h-20 md:w-[170px] md:h-[80px] mx-auto mb-4" />
                </div>
                <form>
                    <div className="flex flex-col">
                        <label className="font-bold mt-2">Nome*</label>
                        <input className="border-[#e5e7eb] border p-2 rounded-sm bg-[#e5e7eb] mt-2 w-full text-sm" type="text" placeholder="Seu nome completo" />
                        <label className="font-bold mt-4">Email*</label>
                        <input className="border-[#e5e7eb] border p-2 rounded-sm bg-[#e5e7eb] mt-2 w-full text-sm" type="text" placeholder="Seu e-mail" />
                        <label className="font-bold mt-4">Senha*</label>
                        <input className="border-[#e5e7eb] border p-2 rounded-sm bg-[#e5e7eb] mt-2 w-full text-sm" type="password" placeholder="Sua senha" />
                    </div>
                    <div>
                        <button className="bg-[#f52986] text-white p-2 rounded-sm w-full mt-6 transform hover:-translate-y-1 transition">Cadastrar</button>
                    </div>
                    <div>
                        <p className="text-[#848484] text-[12px] mt-4">Todos os seus direitos reservados com total segurança. Spooken Inc</p>
                    </div>
                </form>
            </div>
            <div className="mt-6 md:mt-0 max-w-xl md:ml-8">
                <span className="text-[#5a33c2] font-bold">INSCREVA-SE</span>
                <h1 className="mt-2 text-2xl md:text-3xl font-bold">Comece sua jornada com o Spooken!</h1>
                <p className="mt-2 text-sm md:text-base text-[#444] max-w-md md:w-[480px]">Crie sua conta gratuita e mergulhe no mundo dos idiomas! Com o Spooken, você aprende de forma prática e divertida, revisando palavras importantes, acompanhando seu progresso e participando de lições interativas pensadas para acelerar seu aprendizado.</p>
                <div className="flex flex-col gap-3 mt-4 text-[#5a33c2]">
                    <div className="flex items-start gap-2">
                        <Brain size={20} className="mt-1 text-[#5a33c2]" /><p className="text-[#000] text-sm">Fácil de usar em qualuer dispositivo.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <Handshake size={20} className="mt-1 text-[#5a33c2]" /><p className="text-[#000] text-sm">Feito para quem não pode pagar!</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <Cloud size={20} className="mt-1 text-[#5a33c2]" /><p className="text-[#000] text-sm">Pratique sua fala, não so leitura!</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <Rocket size={20} className="mt-1 text-[#5a33c2]" /><p className="text-[#000] text-sm">Estude quando e onde quiser!</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 mb-4">
                    <div className="bg-[#00B4D8] max-md:w-[200px] w-[200px] flex flex-col text-center text-white rounded-lg shadow-lg p-3 font-bold">
                        <span>500+</span>
                        <span>Usuários</span>
                    </div>
                    <div className="bg-[#00B4D8] max-md:w-[200px] w-[200px] flex flex-col text-center text-white rounded-lg shadow-lg p-3 font-bold">
                        <span>80+</span>
                        <span>Lições</span>
                    </div>
                </div>
            </div>
        </main>
    )
}