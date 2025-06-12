import { useParams } from "react-router-dom"
import Logo from "../assets/logo.svg"
import { motion } from "framer-motion"

export default function CardsAulas(){

    const { id } = useParams()

    return(
        <motion.main className="flex items-center justify-center flex-col font-poppins" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 1 }}>
            <div className="mt-5 mb-5">
                <img className="w-[180px]" src={Logo} alt="logo img" />
            </div>
            <div>
                <div className="bg-gradient-to-r from-[#9b18d420] border border-[#9b18d4] w-[400px] h-[500px] rounded-lg p-1.5 text-center">
                    <h1 className="mt-5 mb-2 font-bold">Tópico</h1>
                    <p className="mt-2 mb-2 text-sm">Em último caso: Utilize o ChatGPT ou Google Tradutor para tirar a sua dúvida, caso não consiga responder!</p>
                    <p className="">Questão: Hi</p>
                </div>
            </div> 
        </motion.main>
        
    )
}