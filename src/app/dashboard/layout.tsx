"use client"

import { useState } from "react";
import Logo from "../../assets/logo-spooken.svg";
import Image from "next/image";
import Link from "next/link";
import { House, GraduationCap, Newspaper, UsersRound, Bolt, Menu, X } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#e9ecef]">
            {/* Sidebar desktop */}
            <aside className="hidden md:flex text-[#000000] w-[220px] p-6 flex-col">
                <Image src={Logo} alt="Logo Spooken" className="w-[150px]" />

                <nav className="flex flex-col gap-4 text-sm mt-8">
                    <div className="border-b border-[#c2c2c2]">
                        <div>
                            <h2 className="mb-4">Menu</h2>
                        </div>
                        <Link href="/dashboard" onClick={() => setOpen(false)} className="flex mb-4 items-center gap-2">
                            <House size={18} /> Home
                        </Link>
                        <Link href="/dashboard/courses" onClick={() => setOpen(false)} className="flex mb-4 items-center gap-2">
                            <GraduationCap size={18} /> Cursos
                        </Link>
                        <Link href="/dashboard/news" onClick={() => setOpen(false)} className="flex items-center mb-4 gap-2">
                            <Newspaper size={18} /> Notícias
                        </Link>
                    </div>
                    <div className="border-b border-[#c2c2c2]">
                        <div>
                            <h2 className="mb-4">Suporte</h2>
                        </div>
                        <Link href="/dashboard/perfil" onClick={() => setOpen(false)} className="flex mb-4 items-center gap-2">
                            <UsersRound size={18} /> Perfil
                        </Link>
                        <Link href="/dashboard/settings" onClick={() => setOpen(false)} className="flex items-center mb-4 gap-2">
                            <Bolt size={18} /> Configurações
                        </Link>
                    </div>

                </nav>
            </aside>

            {/* Sidebar mobile */}
            {
                open && (
                    <>
                        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)} />
                        <aside className="fixed left-0 top-0 bottom-0 z-50 w-64 bg-[#e9ecef] text-[#000000] p-6 md:hidden">
                            <div className="flex items-center justify-between">
                                <Image src={Logo} alt="Logo Spooken" className="w-[130px]" />
                                <button onClick={() => setOpen(false)} className="p-2 rounded bg-white/10">
                                    <X size={18} />
                                </button>
                            </div>
                            <nav className="flex flex-col gap-4 text-sm mt-6">
                                <div className="border-b border-[#c2c2c2]">
                                    <div>
                                        <h2 className="mb-4">Menu</h2>
                                    </div>
                                    <Link href="/dashboard" onClick={() => setOpen(false)} className="flex mb-4 items-center gap-2">
                                        <House size={18} /> Home
                                    </Link>
                                    <Link href="/dashboard/courses" onClick={() => setOpen(false)} className="flex mb-4 items-center gap-2">
                                        <GraduationCap size={18} /> Cursos
                                    </Link>
                                    <Link href="/dashboard/news" onClick={() => setOpen(false)} className="flex items-center mb-4 gap-2">
                                        <Newspaper size={18} /> Notícias
                                    </Link>
                                </div>
                                <div className="border-b border-[#c2c2c2]">
                                    <div>
                                        <h2 className="mb-4">Suporte</h2>
                                    </div>
                                    <Link href="/dashboard/perfil" onClick={() => setOpen(false)} className="flex mb-4 items-center gap-2">
                                        <UsersRound size={18} /> Perfil
                                    </Link>
                                    <Link href="/dashboard/settings" onClick={() => setOpen(false)} className="flex items-center mb-4 gap-2">
                                        <Bolt size={18} /> Configurações
                                    </Link>
                                </div>
                            </nav>
                        </aside>
                    </>
                )
            }

            {/* Conteúdo das páginas */}
            <main className="flex-1 p-6 bg-[#f8f8f8] text-white">
                {/* Topbar mobile */}
                <div className="md:hidden flex items-center justify-between mb-4">
                    <button onClick={() => setOpen(true)} className="p-2 rounded bg-[#0f1720]">
                        <Menu size={20} />
                    </button>
                </div>

                {children}
            </main>
        </div >
    );
}
