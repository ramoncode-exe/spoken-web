import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import nameCards from "../content/nameCards"

export default function Cards() {

    return (
        <main className="font-poppins p-2 mb-5 mt-5 bg-[url('/bg-cards-desk.svg')] bg-no-repeat bg-center w-full">
            <div className="text-center font-bold text-[24px]">
                <h1>Vamos Começar, <span className="text-[#9b18d4]">Escolha um Tópico!</span></h1>
            </div>
            <div className="flex flex-wrap justify-center items-center mx-auto gap-10 text-center p-1.5 mb-5 mt-5 max-w-[1280px]">
                {nameCards.map((card, i) => (
                    <Link to={`/aula/${card.id}`} key={i}>
                        <motion.div style={{ backgroundImage: `url(${card.image})`, transformStyle: "preserve-3d" }}
                            whileHover={{ rotateY: 360, transition: { duration: 0.4 } }}
                            className="border border-[#9b18d4] h-[450px] p-1.5 w-[300px] max-md:w-[260px] max-md:h-[420px] rounded-lg bg-center bg-cover">
                        </motion.div>
                    </Link>
                ))}

            </div>
        </main>

    )
}