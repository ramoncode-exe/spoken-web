"use client"

import { useState } from "react";
import LogoLight from "../../assets/logo-light.svg";
import Image from "next/image";
import Link from "next/link";
import { House, GraduationCap, Newspaper, UsersRound, Bolt, Menu, X } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#131f24]">
            {/* Sidebar desktop */}
            <aside className="hidden  border-r border-gray-700 md:flex text-[#e4e4e4] w-[220px] p-6 flex-col">
                <Image src={LogoLight} alt="Logo Spooken" className="w-[150px]" />

                <nav className="flex flex-col gap-4 text-sm mt-8">
                    <Link href="/dashboard" className="flex items-center gap-2 hover:text-white">
                        <House size={18} /> Home
                    </Link>
                    <Link href="/dashboard/courses" className="flex items-center gap-2 hover:text-white">
                        <GraduationCap size={18} /> Cursos
                    </Link>
                    <Link href="/dashboard/news" className="flex items-center gap-2 hover:text-white">
                        <Newspaper size={18} /> Notícias
                    </Link>
                    <Link href="/dashboard/perfil" className="flex items-center gap-2 hover:text-white">
                        <UsersRound size={18} /> Perfil
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-2 hover:text-white">
                        <Bolt size={18} /> Configurações
                    </Link>
                </nav>
            </aside>

            {/* Sidebar mobile */}
            {open && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)} />
                    <aside className="fixed left-0 top-0 bottom-0 z-50 w-64 bg-[#131f24] text-[#e4e4e4] p-6 md:hidden">
                        <div className="flex items-center justify-between">
                            <Image src={LogoLight} alt="Logo Spooken" className="w-[130px]" />
                            <button onClick={() => setOpen(false)} className="p-2 rounded bg-white/10">
                                <X size={18} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-4 text-sm mt-6">
                            <Link href="/dashboard" onClick={() => setOpen(false)} className="flex items-center gap-2">
                                <House size={18} /> Home
                            </Link>
                            <Link href="/dashboard/courses" onClick={() => setOpen(false)} className="flex items-center gap-2">
                                <GraduationCap size={18} /> Cursos
                            </Link>
                            <Link href="/dashboard/news" onClick={() => setOpen(false)} className="flex items-center gap-2">
                                <Newspaper size={18} /> Notícias
                            </Link>
                            <Link href="/dashboard/perfil" onClick={() => setOpen(false)} className="flex items-center gap-2">
                                <UsersRound size={18} /> Perfil
                            </Link>
                            <Link href="/dashboard/settings" onClick={() => setOpen(false)} className="flex items-center gap-2">
                                <Bolt size={18} /> Configurações
                            </Link>
                        </nav>
                    </aside>
                </>
            )}

            {/* Conteúdo das páginas */}
            <main className="flex-1 p-6 bg-[#131f24] text-white">
                {/* Topbar mobile */}
                <div className="md:hidden flex items-center justify-between mb-4">
                    <button onClick={() => setOpen(true)} className="p-2 rounded bg-white/10">
                        <Menu size={20} />
                    </button>
                </div>

                {children}
            </main>
        </div>
    );
}
