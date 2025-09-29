"use client"

import { Bolt, Book, Clock, CheckCircle, Phone, MapPin, Mail, Flag } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FlagGermany from "../../assets/germany.svg"
import FlagItaly from "../../assets/italy.svg"

export default function DashboardPage() {

    const options = [
        {
            title: "Em andamento",
            text: "2 lições ativas"
        },
        {
            title: "Próximos Idiomas",
            imgGermany: FlagGermany,
            GermanyIdioma: "Alemão",
            imgItaly: FlagItaly,
            ItalyIdioma: "Italiano"

        },
        {
            title: "Notícias",
            news: "Você tem 3 novidades!",
            button: "Ver Agora"
        },
        {
            title: "Suporte",
            iconPhone: Phone,
            textPhone: "912 411 769",
            iconLocation: MapPin,
            textLocation: "Portugal, Lisboa",
            iconEmail: Mail,
            textEmail: "ramonpatrick0906@gmail.com"
        }
    ]


    return (
        <div>
            <div>

            </div>
            <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="mt-2 text-gray-300">Bem-vindo ao seu espaço de aprendizado no Spooken 🚀</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <div className="lg:col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0f1720] shadow-lg">
                            <div className="p-3 rounded-md bg-[#5a33c2]/20 text-[#5a33c2]"><Book size={22} /></div>
                            <div>
                                <div className="text-sm text-gray-400">Palavras descobertas</div>
                                <div className="text-xl font-bold">1.234</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0f1720] shadow-lg">
                            <div className="p-3 rounded-md bg-[#00b4d8]/20 text-[#00B4D8]"><Bolt size={22} /></div>
                            <div>
                                <div className="text-sm text-gray-400">Sua ofensiva</div>
                                <div className="text-xl font-bold">Alta</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0f1720] shadow-lg">
                            <div className="p-3 rounded-md bg-[#ffd166]/20 text-[#ffd166]"><Clock size={22} /></div>
                            <div>
                                <div className="text-sm text-gray-400">Horas estudadas</div>
                                <div className="text-xl font-bold">42h</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0f1720] shadow-lg">
                            <div className="p-3 rounded-md bg-[#7ee4b5]/20 text-[#7ee4b5]"><CheckCircle size={22} /></div>
                            <div>
                                <div className="text-sm text-gray-400">Lições concluídas</div>
                                <div className="text-xl font-bold">80</div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {options.map((option, idx) => (
                            <div key={idx} className="p-4 rounded-lg bg-[#0b1417] border transform hover:-translate-y-1 transition border-gray-800 shadow-lg">
                                <h2 className="font-bold">{option.title}</h2>

                                {option.text && <p className="text-sm text-gray-400">{option.text}</p>}
                                {option.news && <p className='text-sm text-gray-400'>{option.news}</p>}
                                {option.button && <Link href="/dashboard/news"><button className='w-full border border-green-600 p-2 bg-green-600 mt-4 shadow-lg rounded-lg'>{option.button}</button></Link>}

                                {option.imgGermany && (
                                    <div className='flex items-center gap-2 border p-1 rounded-lg mt-2 bg-[#3e3e3e]'>
                                        <Image src={option.imgGermany} alt="Bandeira da Alemanha" width={40} /> {option.GermanyIdioma && <p className="text-sm">{option.GermanyIdioma}</p>}
                                    </div>
                                )}
                                {option.imgItaly && (
                                    <div className='flex items-center gap-2 border p-1 mt-2 rounded-lg bg-[#3e3e3e]'>
                                        <Image src={option.imgItaly} alt="Bandeira da Itália" width={40} /> {option.ItalyIdioma && <p className="text-sm">{option.ItalyIdioma}</p>}
                                    </div>
                                )}


                                {option.iconEmail && (
                                    <div className='flex items-center gap-2 mt-2'>
                                        <option.iconEmail size={16} /> {option.textEmail && <p className="text-sm text-gray-400">{option.textEmail}</p>}
                                    </div>
                                )}

                                {option.iconLocation && (
                                    <div className='flex items-center gap-2 mt-2'>
                                        <option.iconLocation size={16} /> {option.textLocation && <p className='text-sm text-gray-400'>{option.textLocation}</p>}
                                    </div>
                                )}

                                {option.iconPhone && (
                                    <div className='flex items-center gap-2 mt-2'>
                                        <option.iconPhone size={16} /> {option.textPhone && <p className='text-sm text-gray-400'>{option.textPhone}</p>}
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}
