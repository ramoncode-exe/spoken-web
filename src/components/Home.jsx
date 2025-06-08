import { motion } from "framer-motion"
import BgHome from "../assets/home-bg.svg"

export default function Home(){
    return(
        <main className="bg-gradient-to-b from-[#9b18d420]">
            <div className="flex items-center justify-center p-1.5 max-lg:flex-wrap-reverse font-poppins">
                <motion.div className="mb-8 max-w-[500px]" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }}>
                    <span className="p-2 border rounded-lg text-[14px] border-[#9b18d4] bg-[#9b18d420] ">Spoken, o seu melhor amigo!</span>
                    <h1 className="text-[36px] font-bold mt-5 w-8/12"> Porque Não Falar <span className="text-[#9b18d4]">Inglês Ainda Hoje?</span></h1>
                    <p className="mt-3">Com o Spoken, você vai aprender apenas o essencial. O Spoken foca apenas nas 3000 palavras mais faladas do inglês!</p>
                </motion.div>
                <motion.div className="mt-8 mb-8" initial={{ x: +200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }}>
                    <img className="max-w-500" src={BgHome} alt="img home" />
                </motion.div>
            </div>
        </main>
    )
}