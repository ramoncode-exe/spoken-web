import { motion, scale } from "framer-motion"
import Logo from "../assets/logo.svg"

export default function Header(){
    
    return(
        <nav className="p-1.5 flex items-center justify-evenly border-b border-[#d0d0d0] font-poppins">
            <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }} >
                <img className="w-[180px]" src={Logo} alt="logo spoken" />
            </motion.div>
            <motion.div className="max-md:hidden" initial={{ x: +200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }} >
                <ul className="flex gap-5 items-center text-sm">
                    <a href="#home" ><motion.li whileHover={{ scale: 1.1 }} className="hover:font-bold p-1">Começar</motion.li></a>
                    <a href="#aboutspoken" ><motion.li whileHover={{ scale: 1.1 }} className="hover:font-bold p-1">Sobre Nós</motion.li></a>
                    <a href="#aboutme" ><motion.li whileHover={{ scale: 1.1 }} className="hover:font-bold p-1">Criador</motion.li></a>
                </ul>
            </motion.div>
            <motion.div className="max-md:hidden text-sm" initial={{ x: +200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease:"easeOut" }}>
                <a href="#cards"><motion.button whileHover={{ scale: 1.1 }} className="p-2 rounded-3xl border border-[#6c47ec] mr-2 text-[#6c47ec] hover:bg-[#6c47ec] hover:text-[#fff]">Aprender</motion.button></a>
                <motion.button onClick={()=> window.open("https://www.youtube.com/@ramonaqui")} whileHover={{ scale: 1.1 }} className="bg-[#6c47ec] p-2 rounded-3xl border text-[#FFFFFF] hover:bg-[#5131c4]">Meu Canal</motion.button>
            </motion.div>
        </nav>
    )
}