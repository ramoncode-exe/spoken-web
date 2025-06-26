import { motion } from "framer-motion"
import { Cloudy, Brain, Handshake, Rocket } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        { icon: <Cloudy size={32} />, title: "FALE DE VERDADE", phrase: "PRATIQUE SUA FALA, NÃO SÓ LEITURA." },
        { icon: <Brain size={32} />, title: "SIMPLES E LEVE", phrase: "FÁCIL DE USAR EM QUALQUER DISPOSITIVO." },
        { icon: <Handshake size={32} />, title: "100% GRATUITO", phrase: "FEITO PRA QUEM NÃO PODE PAGAR." },
        { icon: <Rocket size={32} />, title: "NO SEU RITMO", phrase: "ESTUDE QUANDO E COMO QUISER." }
    ];

    return (
        <main className="flex flex-wrap mt-3 mb-10 gap-5 items-center justify-center font-poppins bg-[#5932c1] p-6 text-white">
            {benefits.map((benefit, i) => (
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-[320px] bg-white/10 rounded-2xl p-5 flex flex-col items-center text-center shadow-md"
                    key={i}
                >
                    <div className="mb-3 text-white">{benefit.icon}</div>
                    <h1 className="font-bold text-[16px] mb-2 uppercase">{benefit.title}</h1>
                    <p className="text-[12px] uppercase">{benefit.phrase}</p>
                </motion.div>
            ))}
        </main>
    );
}
