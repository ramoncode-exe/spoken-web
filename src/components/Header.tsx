'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo-spooken.svg";
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className="font-bold text-[15px] bg-[#00B4D8] text-white p-1.5 text-center">
                <p>Aqui você pode aprender três idiomas gratuitamente! 🔥</p>
            </div>

            <nav className="relative flex items-center justify-between p-3 border-b border-[#e5e7eb] max-w-6xl mx-auto px-4">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image src={Logo} alt="Logo Spooken" className="w-40 h-auto" />
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center text-[16px]">
                    <ul className="flex space-x-6 mr-6">
                        <Link className="hover:underline transform hover:-translate-y-1 transition" href="">Sobre</Link>
                        <Link className="hover:underline transform hover:-translate-y-1 transition" href="">Depoimentos</Link>
                        <Link className="hover:underline transform hover:-translate-y-1 transition" href="">Benefícios</Link>
                        <Link className="hover:underline transform hover:-translate-y-1 transition" href="">Criador</Link>
                    </ul>
                    <Link href="/login">
                        <button className="bg-[#00B4D8] text-white transform hover:-translate-y-1 transition hover:text-[#00B4D8] px-4 py-2 rounded-full border mr-2 font-bold hover:bg-white hover:border-[#00B4D8]">Log in</button>
                    </Link>
                    <Link href="/signup">
                        <button className="bg-white text-[#00B4D8] transform hover:-translate-y-1 transition border border-[#00B4D8] px-4 py-2 rounded-full font-bold hover:bg-[#00B4D8] hover:text-white">Sign Up</button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={open}
                        onClick={() => setOpen(v => !v)}
                        className="p-2 rounded-md bg-white/10 hover:bg-white/20"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile panel */}
                {open && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-md md:hidden z-40">
                        <div className="px-4 py-4 flex flex-col gap-3">
                            <Link href="" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100">Sobre</Link>
                            <Link href="" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100">Depoimentos</Link>
                            <Link href="" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100">Benefícios</Link>
                            <Link href="" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100">Criador</Link>

                            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                                <Link href="/login" onClick={() => setOpen(false)} className="text-center py-2 px-3 rounded bg-[#00B4D8] text-white font-bold">Log in</Link>
                                <Link href="/signup" onClick={() => setOpen(false)} className="text-center py-2 px-3 rounded border border-[#00B4D8] text-[#00B4D8] font-bold">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}