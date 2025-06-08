import { motion } from "framer-motion"
import { i, title } from "framer-motion/client"

export default function Cards(){

    const cards = [
        { title: "Me Apresentando", phrase: "Fale seu nome, idade e de onde é." },
        { title: "Oi e Tchau", phrase: "Cumprimente e se despeça." },
        { title: "Minha Rotina", phrase: "Fale sobre o seu dia a dia." },
        { title: "Comer Fora", phrase: "Peça comida e bebidas." },
        { title: "Onde Fica?", phrase: "Pergunte e entenda direções."},
        { title: "Bate-papo", phrase: "Converse de forma simples." },
        { title: "Compras", phrase: "Fale sobre preços e produtos."},
        { title: "Emergência", phrase: "Peça ajuda em situações urgentes."},
        { title: "Viajando", phrase: "Use inglês em aeroportos e hotéis."}
    ]

    return(
        <main className="flex flex-wrap justify-center items-center gap-10 text-center p-1.5 mb-5 mt-5">
            {cards.map((card, i) => (
                <motion.div key={i} whileHover={{ rotateY: 360, transition: {duration: 0.6 } }} className="border border-[#9b18d4] h-[120px] p-1.5 w-[400px] rounded-lg ">
                    <h1>{card.title}</h1>
                    <p>{card.phrase}</p>
                </motion.div>
            ))}
            
        </main>
    )
}