import { useState } from "react";
import { motion } from "framer-motion";
import MenuBar from "../assets/menubar.svg";
import Logo from "../assets/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-1.5 flex items-center justify-evenly border-b border-[#d0d0d0] font-poppins relative">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img className="w-[150px]" src={Logo} alt="logo spoken" />
      </motion.div>

      <div className="md:hidden z-20">
        <img
          className="w-[30px] cursor-pointer"
          src={MenuBar}
          alt="menu responsive bar"
          onClick={toggleMenu}
        />
      </div>

      <motion.div
        className="max-md:hidden"
        initial={{ x: +200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <ul className="flex gap-5 items-center text-sm">
          <a href="#home">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="hover:font-bold p-1"
            >
              Começar
            </motion.li>
          </a>
          <a href="#aboutspoken">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="hover:font-bold p-1"
            >
              Sobre Nós
            </motion.li>
          </a>
          <a href="#aboutme">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="hover:font-bold p-1"
            >
              Criador
            </motion.li>
          </a>
        </ul>
      </motion.div>

      <motion.div
        className="max-md:hidden text-sm"
        initial={{ x: +200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <a href="#cards">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-3xl border border-[#6c47ec] mr-2 text-[#6c47ec] hover:bg-[#6c47ec] hover:text-[#fff]"
          >
            Aprender
          </motion.button>
        </a>
        <motion.button
          onClick={() => window.open("https://www.youtube.com/@ramonaqui")}
          whileHover={{ scale: 1.1 }}
          className="bg-[#6c47ec] p-2 rounded-3xl border text-[#FFFFFF] hover:bg-[#5131c4]"
        >
          Meu Canal
        </motion.button>
      </motion.div>

      {isOpen && (
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 p-4 md:hidden shadow-lg z-10 border-b border-[#d0d0d0]"
        >
          {[
            { id: "home", text: "Começar" },
            { id: "aboutspoken", text: "Sobre Nós" },
            { id: "aboutme", text: "Criador" },
          ].map((item, idx) => (
            <a
              href={`#${item.id}`}
              key={idx}
              onClick={() => setIsOpen(false)}
              className="w-full text-center"
            >
              <li className="p-2 hover:bg-gray-100 rounded-lg w-full">
                {item.text}
              </li>
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            <a href="#cards" onClick={() => setIsOpen(false)}>
              <button className="p-2 rounded-3xl border border-[#6c47ec] text-[#6c47ec] hover:bg-[#6c47ec] hover:text-[#fff] text-sm">
                Aprender
              </button>
            </a>
            <button
              onClick={() => {
                window.open("https://www.youtube.com/@ramonaqui");
                setIsOpen(false);
              }}
              className="bg-[#6c47ec] p-2 rounded-3xl border text-[#FFFFFF] hover:bg-[#5131c4] text-sm"
            >
              Meu Canal
            </button>
          </div>
        </motion.ul>
      )}
    </nav>
  );
}