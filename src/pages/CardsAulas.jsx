import { useParams } from "react-router-dom"
import { useState } from "react"
import Logo from "../assets/logo.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import spokenContent from "../content/contentCards"
import nameCards from "../content/nameCards"
import { Mic } from 'lucide-react';


export default function CardsAulas() {

    const { id } = useParams()
    const [content, setContent] = useState(0);
    const totalContent = spokenContent[id]?.length || 0;
    const cardData = nameCards.find(card => card.id === id);

    function nextStep() {
        if (content < totalContent - 1) {
            setContent(content + 1);
        }
    }

    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US'; // Inglês americano
            speechSynthesis.speak(utterance);
        } else {
            alert("Seu navegador não suporta a leitura de voz.");
        }
    }



    return (
        <motion.main className="flex items-center justify-center flex-col font-poppins" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 1 }}>
            <div className="mt-5 mb-5">
                <img className="w-[180px]" src={Logo} alt="logo img" />
            </div>
            <div>
                
            </div>
            <div>
                <div className="bg-gradient-to-r from-[#9b18d420] border border-[#9b18d4] w-[400px] h-[500px] rounded-lg p-1.5 text-center max-md:w-[350px] max-md:h-[450px]">
                    <h1 className="mt-5 mb-2 font-bold text-[22px] text-[#9b18d4]">{cardData?.title || "Tópico"}</h1>
                    <div className="flex items-center justify-center mt-5">
                        {spokenContent[id] && spokenContent[content] && (
                            <p>{spokenContent[id][content].en}</p>
                        )}
                        <p className="text-[16px]">{spokenContent[id][content].en}</p>
                        <button onClick={() => speak(spokenContent[id][content].en)}>
                           <Mic className="ml-2 font-bold hover:text-[#9b18d4]" /> 
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <motion.button onClick={() => nextStep()} whileHover={{ scale: 1.1 }} className="bg-transparent p-2 border-[#9b18d4] rounded-3xl border mt-10 text-[#000000] hover:bg-[#9b18d4] hover:text-[#fff] w-[200px] mx-auto">Próxima Frase</motion.button>
                        <p className="mt-2 mb-2 text-[12px] font-semibold">Tem alguma dúvida: Clique no nosso ajudante!</p>
                    </div>

                </div>
            </div>
            <Link to={`/`}>
                <div className="mb-10">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-transparent p-2 border-[#9b18d4] rounded-3xl border mt-10 text-[#000000] hover:bg-[#9b18d4] hover:text-[#fff] w-[200px] mx-auto">Voltar ao Início</motion.button>
                </div>
            </Link>
            <footer className="bg-[#9b18d4] w-full p-3 text-center font-poppins">
                <div>
                    <p className="text-[#fff] text-[14px]">Todos os direitos reservados. Spoken Inc. 2025.</p>
                </div>
            </footer>
        </motion.main>

    )
}