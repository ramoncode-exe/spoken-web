import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Cards(){

    const cards = [
        {id: "1", image: "./apresentation.svg"},
        {id: "2", image: "./routine.svg"},
        {id: "3", image: "./eat-out.svg"},
        {id: "4", image: "./talking.svg"},
        {id: "5", image: "./buy.svg"},
        {id: "6", image: "./travelling.svg"}
    ]

    return(
        <main className="font-poppins mb-5 mt-5">
            <div className="text-center font-bold text-[24px]">
                <h1>Vamos Começar, <span className="text-[#9b18d4]">Escolha um Tópico!</span></h1>
            </div>
            <div className="flex flex-wrap justify-center items-center mx-auto gap-10 text-center p-1.5 mb-5 mt-5 max-w-[1280px]">
                {cards.map((card, i) => (
                    <Link to={`/aula/${card.id}`} key={i}>
                        <motion.div style={{ backgroundImage: `url(${card.image})`, transformStyle: "preserve-3d"}}
                        whileHover={{ rotateY: 360, transition: {duration: 0.4 } }} 
                        className="border border-[#9b18d4] h-[450px] p-1.5 w-[300px] max-md:w-[260px] max-md:h-[420px] rounded-lg bg-center bg-cover">
                        </motion.div>
                    </Link>
                ))}
                
            </div>  
        </main>
        
    )
}