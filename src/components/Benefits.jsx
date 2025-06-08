import { motion } from "framer-motion"

export default function Benefits(){

    const benefits = [
        { icon: "", title: "", phrase: "" },
        { icon: "", title: "", phrase: "" },
        { icon: "", title: "", phrase: "" },
        { icon: "", title: "", phrase: "" }
    ]

    return(
        <motion.main>
            {benefits.map((benefit, i) => (
                <div key={i}>
                    <span></span>
                    <h1></h1>
                    <p></p>
                </div>
            ))}
        </motion.main>
    )
}