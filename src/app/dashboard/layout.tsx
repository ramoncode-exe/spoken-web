"use client"

import { useState } from "react";
import LogoLight from "../../assets/logo-light.svg";
import Image from "next/image";
import Link from "next/link";
import { House, GraduationCap, Newspaper, UsersRound, Bolt } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#108bcd]">
            {/* Sidebar desktop */}
            <aside className="hidden md:flex text-[#fff] w-[220px] p-6 flex-col">
                <Image src={LogoLight} alt="Logo Spooken" className="w-[150px]" />

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

            <main className="flex-1 bg-[#f8f8f8]">
                <div className="md:hidden flex bg-[#108bcd]">
                    <Image src={LogoLight} alt="Logo Spooken" className="w-[180px] mx-auto" />
                </div>

                <div className="p-6">
                    {children}
                </div>

            </main>
        </div >
    );
}
