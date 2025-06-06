import { motion, scale } from "framer-motion"
import Logo from "../assets/logo.png"

export default function Header(){
    
    return(
        <nav className="p-1.5 flex items-center justify-evenly border-b">
            <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }} >
                <img className="w-36" src={Logo} alt="logo spoken" />
            </motion.div>
            <motion.div className="max-md:hidden" initial={{ x: +200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }} >
                <ul className="flex gap-5 items-center text-sm">
                    <motion.li whileHover={{ scale: 1.1 }} className="hover:font-bold p-1">Começar</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className="hover:font-bold p-1">Sobre Nós</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className="hover:font-bold p-1">Criador</motion.li>
                </ul>
            </motion.div>
            <motion.div className="max-md:hidden" initial={{ x: +200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }}>
                <motion.button whileHover={{ scale: 1.1 }} className="bg-[#521689] p-2 rounded-3xl border mr-2 text-[#FFFFFF] hover:bg-[#7f39c1]">Aprender</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="bg-[#521689] p-2 rounded-3xl border text-[#FFFFFF] hover:bg-[#7f39c1]">Meu Canal</motion.button>
            </motion.div>
        </nav>
    )
}