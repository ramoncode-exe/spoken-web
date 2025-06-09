import { easeInOut, motion } from "framer-motion"
import AbtSpoken from "../assets/abtspoken-bg.svg"

export default function About(){

    return(
        <motion.main initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 6, ease: "easeInOut"}}>
            <div className="flex items-center justify-center mt-3 gap-5 p-1.5 max-lg:flex-wrap font-poppins">
                <div>
                    <img className="max-w-[500px] max-md:max-w-[350px]" src={AbtSpoken} alt="About Spoken Img" />
                </div>
                <div className="max-w-[500px] mb-10">
                    <h1 className="text-[24px] font-bold mb-3"><span className="text-[#9b18d4]">Inglês para Todos,</span> Sem Barreiras</h1>
                    <p className="leading-7 text-[14px]">O Spoken foi criado com um propósito claro: ajudar você a aprender inglês de forma rápida, simples e gratuita.
                    A plataforma é acessível para pessoas de qualquer lugar do mundo. Não importa sua origem ou condição financeira. O objetivo do Spoken é um só: ajudar!</p>
                </div> 
            </div>   
        </motion.main>
    )
}