import { motion } from "framer-motion"
import { i, title } from "framer-motion/client"

export default function Cards(){

    const cards = [
        {image: "./apresentation.svg"},
        {image: "./hi-and-bye.svg"},
        {image: "./routine.svg"},
        {image: "./eat-out.svg"},
        {image: "./where-is-it.svg"},
        {image: "./talking.svg"},
        {image: "./buy.svg"},
        {image: "./emergency.svg"},
        {image: "./travelling.svg"}
    ]

    return(
        <main className="font-poppins mb-5 mt-5">
            <div className="text-center font-bold text-[24px]">
                <h1>Vamos Começar, <span className="text-[#9b18d4]">Escolha um Tópico!</span></h1>
            </div>
            <div className="flex flex-wrap justify-center items-center mx-auto gap-10 text-center p-1.5 mb-5 mt-5 max-w-[1280px]">
                {cards.map((card, i) => (
                    <motion.div style={{ backgroundImage: `url(${card.image})`, transformStyle: "preserve-3d"}}  key={i} whileHover={{ rotateY: 360, transition: {duration: 0.4 } }} className="bg-gradient-to-t from-[#9b18d420] border border-[#9b18d4] h-[600px] p-1.5 w-[400px] max-md:w-[300px] max-md:h-[500px] rounded-lg bg-center bg-cover">
                    </motion.div>
                ))}
                
            </div>  
        </main>
        
    )
}