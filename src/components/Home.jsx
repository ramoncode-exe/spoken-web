import { motion } from "framer-motion"
import BgHome from "../assets/home-bg.png"

export default function Home(){
    return(
        <main className="flex items-center p-1.5 w-11/12 mx-auto max-lg:flex-wrap-reverse">
            <motion.div className="mb-8" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }}>
                <span className="p-2 border rounded-lg">Spoken, o seu melhor amigo!</span>
                <h1 className="text-4xl font-bold mt-3 w-8/12"> Porque Não Falar <span>Inglês Ainda Hoje?</span></h1>
                <p className="w-8/12 mt-3">Com o Spoken, você vai aprender apenas o essencial. O Spoken foca apenas nas 3000 palavras mais faladas do inglês!</p>
            </motion.div>
            <motion.div className="mt-8 mb-8" initial={{ x: +200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }}>
                <img className="max-w-500" src={BgHome} alt="img home" />
            </motion.div>
        </main>
    )
}