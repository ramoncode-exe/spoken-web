import Image from "next/image"
import AboutImg from "../assets/about-spooken.svg"
import { Users, BookOpen } from 'lucide-react';

export default function About() {
    return (
        <section className="">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-md">
                        <Image src={AboutImg} alt="Pessoa estudando idiomas" className="w-full h-auto" />
                    </div>
                </div>

                <div>
                    <span className="text-[#00B4D8] font-bold">VAMOS COMEÇAR</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Idiomas para todos, <span className="text-[#00B4D8]">sem barreiras</span></h2>
                    <p className="mt-4 text-gray-600 max-w-xl">O Spooken foi criado com um propósito claro: ajudar você a aprender idiomas de forma rápida, simples e gratuita. A plataforma é acessível para pessoas de qualquer lugar do mundo, independente da origem ou condição financeira. Nosso objetivo é um só: tornar o aprendizado acessível.</p>

                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-xs">
                        <div className="flex items-center gap-3 bg-[#00B4D8] text-white rounded-lg p-3 shadow">
                            <div className="p-2 bg-white/10 rounded-full">
                                <Users size={22} className="text-white" />
                            </div>
                            <div>
                                <div className="font-bold">500+</div>
                                <div className="text-sm">Usuários</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-[#00B4D8] text-white rounded-lg p-3 shadow">
                            <div className="p-2 bg-white/10 rounded-full">
                                <BookOpen size={22} className="text-white" />
                            </div>
                            <div>
                                <div className="font-bold">80+</div>
                                <div className="text-sm">Lições</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}