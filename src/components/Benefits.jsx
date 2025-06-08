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
        <motion.main className="flex flex-wrap">
            {benefits.map((benefit, i) => (
                <div className="w-[300px]" key={i}>
                    <span>{benefit.icon}</span>
                    <h1>{benefit.title}</h1>
                    <p>{benefit.phrase}</p>
                </div>
            ))}
        </motion.main>
    )
}