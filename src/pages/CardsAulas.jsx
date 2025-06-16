import { useParams } from "react-router-dom"
import Logo from "../assets/logo.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function CardsAulas(){

    const { id } = useParams()

    return(
        <motion.main className="flex items-center justify-center flex-col font-poppins" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 1 }}>
            <div className="mt-5 mb-5">
                <img className="w-[180px]" src={Logo} alt="logo img" />
            </div>
            <div>
                <div className="bg-gradient-to-r from-[#9b18d420] border border-[#9b18d4] w-[400px] h-[500px] rounded-lg p-1.5 text-center max-md:w-[350px] max-md:h-[450px]">
                    <h1 className="mt-5 mb-2 font-bold">Tópico</h1>
                    <p className="mt-2 mb-2 text-sm">Tem alguma dúvida: Clique no nosso ajudante!</p>
                    <p className="">Questão: Hi</p>
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-[#d9d9d9] p-2 rounded-3xl border mt-10 text-[#000000] hover:bg-[#1fa745]">Validar Resposta!</motion.button>
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