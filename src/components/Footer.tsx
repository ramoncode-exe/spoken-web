import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer>
            <div className="bg-[#00B4D8] text-white py-8">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start text-center lg:text-left">
                    <div>
                        <p className="font-bold text-lg">Propósito</p>
                        <p className="text-sm mt-2 text-white/90">Projeto criado por Ramon Patrick, com o objetivo de ajudar pessoas do Brasil, Portugal ou qualquer outro país a aprender espanhol, francês ou inglês.</p>
                    </div>

                    <nav aria-label="Links rápidos">
                        <p className="font-bold text-lg">Links Rápidos</p>
                        <ul className="mt-2 text-sm space-y-2">
                            <li><a href="#sobre" className="hover:underline">Sobre</a></li>
                            <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
                            <li><a href="#beneficios" className="hover:underline">Benefícios</a></li>
                        </ul>
                    </nav>

                    <div>
                        <p className="font-bold text-lg">Nossos Idiomas</p>
                        <div className="mt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                            <button className="bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 text-sm flex items-center gap-2">
                                <span>Francês</span>
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 text-sm flex items-center gap-2">
                                <span>Inglês</span>
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 text-sm flex items-center gap-2">
                                <span>Espanhol</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-lg">Suporte</p>
                        <div className="mt-3 flex justify-center lg:justify-start items-center gap-4">
                            <a href="mailto:contato@spooken.app" aria-label="Enviar email" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
                                <Mail size={20} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" aria-label="GitHub" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#00a5c6] text-[14px] text-white p-4 text-center">
                <p>© 2025 Spooken. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}