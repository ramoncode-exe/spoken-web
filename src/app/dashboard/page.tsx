"use client"

import React, { useState } from "react";
import LogoLight from "../../assets/logo-light.svg"
import Image from "next/image"
import Link from "next/link"
import { House, GraduationCap, Newspaper, UsersRound, Bolt, Menu, X } from 'lucide-react';

export default function DashboardPage() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen">

            {/* Desktop sidebar */}
            <aside className="hidden md:flex bg-[#004469] text-[#e4e4e4] w-[220px] p-6 flex-col">
                <div>
                    <Image src={LogoLight} alt="Logo Spooken" className="w-[150px]" />
                </div>

                <nav className="flex flex-col gap-4 text-sm mt-8">
                    <Link href="/dashboard" className="flex items-center gap-2 hover:text-white transition">
                        <House size={18} /> <span>Home</span>
                    </Link>
                    <Link href="/dashboard/cursos" className="flex items-center gap-2 hover:text-white transition">
                        <GraduationCap size={18} /> <span>Cursos</span>
                    </Link>
                    <Link href="/dashboard/noticias" className="flex items-center gap-2 hover:text-white transition">
                        <Newspaper size={18} /> <span>Notícias</span>
                    </Link>
                    <Link href="/dashboard/perfil" className="flex items-center gap-2 hover:text-white transition">
                        <UsersRound size={18} /> <span>Perfil</span>
                    </Link>
                    <Link href="/dashboard/configuracoes" className="flex items-center gap-2 hover:text-white transition">
                        <Bolt size={18} /> <span>Configurações</span>
                    </Link>
                </nav>
            </aside>

            {/* Mobile  */}
            {open && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)} />
                    <aside className="fixed left-0 top-0 bottom-0 z-50 w-64 bg-[#004469] text-[#e4e4e4] p-6 md:hidden">
                        <div className="flex items-center justify-between">
                            <Image src={LogoLight} alt="Logo Spooken" className="w-[130px]" />
                            <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="p-2 rounded bg-white/10">
                                <X size={18} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-4 text-sm mt-6">
                            <Link href="/dashboard" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-white transition">
                                <House size={18} /> <span>Home</span>
                            </Link>
                            <Link href="/dashboard/cursos" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-white transition">
                                <GraduationCap size={18} /> <span>Cursos</span>
                            </Link>
                            <Link href="/dashboard/noticias" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-white transition">
                                <Newspaper size={18} /> <span>Notícias</span>
                            </Link>
                            <Link href="/dashboard/perfil" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-white transition">
                                <UsersRound size={18} /> <span>Perfil</span>
                            </Link>
                            <Link href="/dashboard/configuracoes" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-white transition">
                                <Bolt size={18} /> <span>Configurações</span>
                            </Link>
                        </nav>
                    </aside>
                </>
            )}

            <main className="flex-1 p-6 bg-[#f5f5f5]">
                {/* Mobile top bar */}
                <div className="md:hidden flex items-center justify-between mb-4">
                    <button aria-label="Abrir menu" onClick={() => setOpen(true)} className="p-2 rounded bg-white/10">
                        <Menu size={20} />
                    </button>
                    <div />
                </div>

                <div className="">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="mt-2 text-gray-700">Bem-vindo ao seu espaço de aprendizado no Spooken 🚀</p>
                </div>
            </main>
        </div>
    )
}
