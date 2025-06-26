import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import nameCards from "../content/nameCards"

export default function Cards() {
    const carrosselRef = useRef(null)
    const [totalPaginas, setTotalPaginas] = useState(0)
    const [paginaAtual, setPaginaAtual] = useState(0)

    useEffect(() => {
        const carrossel = carrosselRef.current
        if (!carrossel) return

        const calcularPaginas = () => {
            const larguraVisivel = carrossel.clientWidth
            const larguraTotal = carrossel.scrollWidth
            const paginas = Math.ceil(larguraTotal / larguraVisivel)
            setTotalPaginas(paginas)
        }

        calcularPaginas()
        window.addEventListener('resize', calcularPaginas)
        return () => window.removeEventListener('resize', calcularPaginas)
    }, [])

    useEffect(() => {
        const carrossel = carrosselRef.current
        if (!carrossel) return

        const handleScroll = () => {
            const larguraVisivel = carrossel.clientWidth
            const scrollX = carrossel.scrollLeft
            const pagina = Math.round(scrollX / larguraVisivel)
            setPaginaAtual(pagina)
        }

        carrossel.addEventListener('scroll', handleScroll)
        return () => carrossel.removeEventListener('scroll', handleScroll)
    }, [])

    const irParaPagina = (index) => {
        const carrossel = carrosselRef.current
        if (!carrossel) return

        const larguraVisivel = carrossel.clientWidth
        carrossel.scrollTo({
            left: index * larguraVisivel,
            behavior: "smooth"
        })
    }

    // Carrossel infinito automático
    useEffect(() => {
        const interval = setInterval(() => {
            setPaginaAtual((prev) => {
                const next = (prev + 1) % totalPaginas
                irParaPagina(next)
                return next
            })
        }, 5000) // muda de página a cada 5s

        return () => clearInterval(interval)
    }, [totalPaginas])

    return (
        <main id="cards" className="font-poppins p-2">
            <div className="text-center font-bold text-[24px] mt-5">
                <h1>Vamos Começar, <span className="text-[#9b18d4]">Escolha um Tópico!</span></h1>
            </div>

            <div
                id="scroll-hide"
                ref={carrosselRef}
                className="flex scroll-smooth whitespace-nowrap overflow-x-scroll items-center mx-auto gap-5 text-center p-1.5 mb-5 mt-5"
            >
                {nameCards.map((card, i) => (
                    <Link to={`/aula/${card.id}`} key={i}>
                        <motion.div
                            style={{ backgroundImage: `url(${card.image})` }}
                            className="border border-[#9b18d4] h-[400px] p-1.5 w-[250px] max-md:w-[230px] max-md:h-[380px] rounded-lg bg-center bg-cover flex-shrink-0"
                        ></motion.div>
                    </Link>
                ))}
            </div>

            {/* Bolinhas com framer-motion */}
            <div className="flex justify-center mt-3">
                {Array.from({ length: totalPaginas }).map((_, i) => (
                    <motion.button
                        key={i}
                        onClick={() => irParaPagina(i)}
                        initial={false}
                        animate={{
                            scale: i === paginaAtual ? 1.4 : 1,
                            backgroundColor: i === paginaAtual ? "#7956e7" : "#d1d5db",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-3 h-3 mx-1 rounded-full"
                    />
                ))}
            </div>
        </main>
    )
}
