import { motion } from "framer-motion"
import { Cloudy, Brain, Handshake, Rocket } from 'lucide-react';

export default function Benefits(){

    const benefits = [
        { icon: <Cloudy />, title: "Fale de verdade", phrase: "Pratique sua fala, não só leitura." },
        { icon: <Brain />, title: "Simples e leve", phrase: "Fácil de usar em qualquer dispositivo." },
        { icon: <Handshake />, title: "100% gratuito", phrase: "Feito pra quem não pode pagar." },
        { icon: <Rocket />, title: "No seu ritmo", phrase: "Estude quando e como quiser." }
    ]

    return(
        <motion.main initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 4, ease:"easeOut" }} className="flex flex-wrap mt-3 mb-10 gap-5 items-center justify-center font-poppins">
            {benefits.map((benefit, i) => (
                <motion.div whileHover={{ scale: 1.1 }} className="w-[280px] bg-gradient-to-t from-[#9b18d420] border border-[#9b18d4] rounded-lg p-1.5" key={i}>
                    <p className="mt-3 mb-3">{benefit.icon}</p>
                    <h1 className="font-bold text-[16px]">{benefit.title}</h1>
                    <p className="mb-3 text-[14px]">{benefit.phrase}</p>
                </motion.div>
            ))}
        </motion.main>
    )
}