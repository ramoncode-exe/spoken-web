import { useParams } from "react-router-dom"
import { useState } from "react"
import Logo from "../assets/logo.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import spokenContent from "../content/contentCards"

export default function CardsAulas(){

    const { id } = useParams()
    const [content, setContent] = useState(0);
    const totalContent = spokenContent[id]?.length || 0;

    function nextStep(){
        if ( content < totalContent - 1 ){
            setContent(content + 1);
        } 
    }


    return(
        <motion.main className="flex items-center justify-center flex-col font-poppins" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 1 }}>
            <div className="mt-5 mb-5">
                <img className="w-[180px]" src={Logo} alt="logo img" />
            </div>
            <div>
                <div className="bg-gradient-to-r from-[#9b18d420] border border-[#9b18d4] w-[400px] h-[500px] rounded-lg p-1.5 text-center max-md:w-[350px] max-md:h-[450px]">
                    <h1 className="mt-5 mb-2 font-bold">Tópico</h1>
                    <p className="mt-2 mb-2 text-sm">Tem alguma dúvida: Clique no nosso ajudante!</p>
                    { spokenContent[id] && spokenContent[content] && (
                        <p>{spokenContent[id][content].en}</p>
                    )}
                    <p className="">{spokenContent[id][content].en}</p>
                    <div className="flex flex-col">
                        <motion.button whileHover={{ scale: 1.1 }} className="bg-[#d9d9d9] p-2 rounded-3xl border mt-10 text-[#000000] hover:bg-[#1fa745] w-[200px] mx-auto">Validar Resposta!</motion.button>
                        <motion.button onClick={() => nextStep()} whileHover={{ scale: 1.1 }} className="bg-[#d9d9d9] p-2 rounded-3xl border mt-10 text-[#000000] hover:bg-[#1fa745] w-[200px] mx-auto">Próxima Frase</motion.button>
                    </div>
                    
                </div>
            </div>
            <Link to={`/`}>
                <div className="mt-10 mb-10">
                        <motion.button whileHover={{ scale: 1.1 }} className="bg-[#d9d9d9] p-2 rounded-3xl border text-[#000000] hover:bg-[#1fa745]">Voltar ao Início</motion.button>
                </div> 
            </Link>
        </motion.main>
        
    )
}