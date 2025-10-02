"use client"

import LogoLight from "../../assets/logo-light.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { House, GraduationCap, Newspaper, UsersRound, Bolt, Users, Search } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {



    return (
        <div className="min-h-screen bg-[#212529] font-poppins flex flex-col">


            <header className="w-full h-[60px] bg-[#212529] border-b border-[#343a40] flex items-center justify-around px-6 fixed top-0 left-0 z-50">
                <div>
                    <Image src={LogoLight} alt="Logo Spooken" className="w-[150px]" />
                </div>
                <div>
                    <search className='w-[400px] max-md:w-[200px] max-md:hidden'>
                        <form className='rounded-xl flex shadow-lg p-2 bg-[#343a40] text-[#8e8e8e]  items-center'>
                            <Search size={18} /><input className='ml-2 outline-none' name="fsrch" id="fsrch" placeholder="Pesquisa algo..." />
                        </form>
                    </search>
                </div>
                <div>
                    <Users className="bg-[#343a40] text-[#8e8e8e] p-1 rounded-full" size={26} />
                </div>
            </header>

            <div className="flex flex-1 pt-[60px]">

                <aside className="max-md:hidden text-[#8e8e8e] border-r border-[#343a40] w-[220px] p-6 flex-col">
                    <nav className="flex flex-col gap-4 text-[16px] mt-2">
                        <div className="border-b border-[#343a40] pb-4">
                            <h2 className="mb-4">Menu</h2>
                            <Link href="/dashboard" className="flex mb-4 items-center gap-2 hover:text-[#9e9e9e]">
                                <House size={18} /> Home
                            </Link>
                            <Link href="/dashboard/courses" className="flex mb-4 items-center gap-2 hover:text-[#9e9e9e]">
                                <GraduationCap size={18} /> Cursos
                            </Link>
                            <Link href="/dashboard/news" className="flex items-center mb-4 gap-2 hover:text-[#9e9e9e]">
                                <Newspaper size={18} /> Atualizações
                            </Link>
                        </div>

                        <div className="border-b border-[#343a40] pb-4">
                            <h2 className="mb-4">Minha Conta</h2>
                            <Link href="/dashboard/perfil" className="flex mb-4 items-center gap-2 hover:text-[#9e9e9e]">
                                <UsersRound size={18} /> Perfil
                            </Link>
                            <Link href="/dashboard/settings" className="flex items-center mb-4 gap-2 hover:text-[#9e9e9e]">
                                <Bolt size={18} /> Configurações
                            </Link>
                        </div>
                    </nav>
                </aside>

                {/* CONTEÚDO PRINCIPAL */}
                <main className="flex-1 bg-[#212529] p-6">
                    {children}
                </main>

                {/* Menu Responsivo - Mobile  */}


            </div>
        </div>
    );
}
