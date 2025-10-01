"use client"

import { Bolt, Book, Clock, CheckCircle, Phone, MapPin, Mail, Users, Search } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FlagGermany from "../../assets/germany.svg"
import FlagItaly from "../../assets/italy.svg"

export default function DashboardPage() {

    return (
        <div className="">
            <div className='flex justify-between max-md:flex-wrap border-b border-[#343a40] text-[#d7d7d7]'>
                <div className='max-md:mt-2'>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="mt-2 mb-4">Bem-vindo ao seu espaço de aprendizado no Spooken 🚀</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <div className="lg:col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#d7d7d7]">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#343a40] shadow-lg">
                            <div className="p-3 rounded-md bg-[#5a33c2]/20 text-[#5a33c2]"><Book size={22} /></div>
                            <div>
                                <div className="text-sm">Palavras descobertas</div>
                                <div className="text-xl font-bold">1.234</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#343a40] shadow-lg">
                            <div className="p-3 rounded-md bg-[#00b4d8]/20 text-[#00B4D8]"><Bolt size={22} /></div>
                            <div>
                                <div className="text-sm">Sua ofensiva</div>
                                <div className="text-xl font-bold">Alta</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#343a40] shadow-lg">
                            <div className="p-3 rounded-md bg-[#ffd166]/20 text-[#ffd166]"><Clock size={22} /></div>
                            <div>
                                <div className="text-sm">Horas estudadas</div>
                                <div className="text-xl font-bold">42h</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#343a40] shadow-lg">
                            <div className="p-3 rounded-md bg-[#7ee4b5]/20 text-[#7ee4b5]"><CheckCircle size={22} /></div>
                            <div>
                                <div className="text-sm">Lições concluídas</div>
                                <div className="text-xl font-bold">80</div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 text-[#bebebe]'>
                        <div>
                            <h1 className="text-2xl font-bold">Conteúdos Legais</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
