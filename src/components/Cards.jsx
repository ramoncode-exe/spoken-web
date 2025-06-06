import { motion } from "framer-motion"

export default function Cards(){

    return(
        <main className="flex flex-wrap justify-center items-center gap-10 text-center p-1.5">
            <motion.div  whileHover={{ rotateY: 360, transition: {duration: 1 } }} className="border h-[120px] p-1.5 w-[400px] rounded-lg ">
                <h1>Cards</h1>
            </motion.div>
            <motion.div  whileHover={{ rotateY: 360, transition: {duration: 1 } }} className="border h-[120px] p-1.5 w-[400px] rounded-lg ">
                <h1>Cards</h1>
            </motion.div>
            <motion.div  whileHover={{ rotateY: 360, transition: {duration: 1 } }} className="border h-[120px] p-1.5 w-[400px] rounded-lg ">
                <h1>Cards</h1>
            </motion.div>
            <motion.div  whileHover={{ rotateY: 360, transition: {duration: 1 } }} className="border h-[120px] p-1.5 w-[400px] rounded-lg ">
                <h1>Cards</h1>
            </motion.div>
            <motion.div  whileHover={{ rotateY: 360, transition: {duration: 1 } }} className="border h-[120px] p-1.5 w-[400px] rounded-lg ">
                <h1>Cards</h1>
            </motion.div>
            <motion.div  whileHover={{ rotateY: 360, transition: {duration: 1 } }} className="border h-[120px] p-1.5 w-[400px] rounded-lg ">
                <h1>Cards</h1>
            </motion.div>
        </main>
    )
}