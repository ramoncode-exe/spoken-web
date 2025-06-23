import { useParams } from "react-router-dom"
import { useState } from "react"
import LogoLight from "../assets/logo-light.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import spokenContent from "../content/contentCards"
import nameCards from "../content/nameCards"
import { Mic } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";


export default function CardsAulas() {

    const { id } = useParams()
    const [content, setContent] = useState(0);
    const [idiomaAtual, setIdiomaAtual] = useState('en');
    const totalContent = spokenContent[id]?.length || 0;
    const cardData = nameCards.find(card => card.id === id);

    function nextStep() {
        if (content < totalContent - 1) {
            setContent(content + 1);
        }
    }

    function backStep() {
        if (content > 0) {
            setContent(content - 1);
        }
    }


    function resetLanguage(newLanguage) {
            setIdiomaAtual(newLanguage);
            setContent(0);
    }



    function speak(text) {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);

            const langMap = {
                en: 'en-US',
                es: 'es-ES',
                fr: 'fr-FR'
            };

            utterance.lang = langMap[idiomaAtual] || 'en-US';
            utterance.rate = 0.75;
            speechSynthesis.speak(utterance);
        } else {
            alert("Seu navegador não suporta a leitura de voz.");
        }
    }



    return (
        <motion.main className="flex items-center text-[#fff] justify-center flex-col font-poppins bg-[url('/bg-spoken-class.svg')] bg-no-repeat bg-center w-full" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 1 }}>
            <div className="mt-5 mb-5">
                <img className="w-[180px]" src={LogoLight} alt="logo img" />
            </div>
            <div className="mt-5 mb-5">
                <h1 className="text-[20px] italic">E aí, qual idioma vai ser hoje?</h1>
            </div>
            <div>
                <div className="flex mb-3 gap-5">
                    <motion.div onClick={() => resetLanguage('en')} whileHover={{ scale: 1.1 }} className="border p-1 bg-gradient-to-r from-[#3e1c4c62] border-[#9b18d4] rounded-lg">
                        <ReactCountryFlag countryCode="US" />
                    </motion.div>
                    <motion.div onClick={() => resetLanguage('es')} whileHover={{ scale: 1.1 }} className="border p-1 bg-gradient-to-r from-[#3e1c4c62] border-[#9b18d4] rounded-lg">
                        <ReactCountryFlag countryCode="ES" />
                    </motion.div>
                    <motion.div onClick={() => resetLanguage('fr')} whileHover={{ scale: 1.1 }} className="border p-1 bg-gradient-to-r from-[#3e1c4c62] border-[#9b18d4] rounded-lg">
                        <ReactCountryFlag countryCode="FR" />
                    </motion.div>
                </div>
            </div>
            <div>
                <div className="bg-gradient-to-r from-[#3e1c4c62] border border-[#9b18d4] shadow-xl backdrop-blur-md w-[400px] h-[500px] rounded-lg p-1.5 text-center max-md:w-[350px] max-md:h-[450px]">
                    <h1 className="mt-5 mb-2 font-bold text-[22px] text-[#9b18d4]">{cardData?.title || "Tópico"}</h1>
                    <div className="flex items-center justify-center mt-5">
                        {spokenContent[id]?.[content]?.[idiomaAtual] && (
                            <>
                                <motion.p
                                    key={idiomaAtual + content}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[16px]"
                                >
                                    {spokenContent[id][content][idiomaAtual]}
                                </motion.p>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => speak(spokenContent[id][content][idiomaAtual])}
                                >
                                    <Mic className="ml-2 font-bold hover:text-[#9b18d4]" />
                                </motion.button>
                            </>
                        )}
                    </div>


                    <div className="flex flex-col">
                        <motion.button onClick={() => backStep()} whileHover={{ scale: 1.1 }} className="bg-[#00000052] p-2 border-[#9b18d4] rounded-3xl border mt-10 text-[#fff] hover:bg-[#9b18d4] hover:text-[#fff] w-[200px] mx-auto">Voltar Frase</motion.button>
                        <motion.button onClick={() => nextStep()} whileHover={{ scale: 1.1 }} className="bg-[#00000052] p-2 border-[#9b18d4] rounded-3xl border mt-3 text-[#fff] hover:bg-[#9b18d4] hover:text-[#fff] w-[200px] mx-auto">Próxima Frase</motion.button>
                        <p className="mt-2 mb-2 text-[10px] italic">Tem alguma dúvida: Clique no nosso ajudante!</p>
                    </div>

                </div>
            </div>
            <Link to={`/`}>
                <div className="mb-10">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-[#00000052] p-2 border-[#9b18d4] rounded-3xl border mt-10 text-[#fff] hover:bg-[#9b18d4] hover:text-[#fff] w-[200px] mx-auto">Voltar ao Início</motion.button>
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