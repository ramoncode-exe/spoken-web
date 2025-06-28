import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import nameCards from "../content/nameCards"

export default function Cards() {
    return (
        <main id="cards" className="font-poppins p-2">
            <div className="text-center font-bold text-[24px] mt-5">
                <h1>
                    Vamos Começar, <span className="text-[#7956e7]">Escolha um Tópico!</span>
                </h1>
            </div>

            <div className="flex flex-wrap justify-center items-center mx-auto gap-10 text-center p-1.5 mb-5 mt-5 max-w-[1280px]">
                {nameCards.map((card, i) => (
                    <Link to={`/aula/${card.id}`} key={i}>
                        <motion.div
                            style={{
                                backgroundImage: `url(${card.image})`
                            }}
                            whileHover={{ scale: 1.1 }}
                            className="h-[300px] p-1.5 w-[450px] max-md:w-[320px] max-md:h-[250px] rounded-2xl bg-center bg-cover shadow-md"
                        />
                    </Link>
                ))}
            </div>
        </main>
    )
}


