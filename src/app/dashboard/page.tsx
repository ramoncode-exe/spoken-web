"use client"

import { Bolt, Book, Clock, CheckCircle, Phone, MapPin, Mail, Users, Search } from 'lucide-react';
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
        <div className="">
            <div className='flex justify-between max-md:flex-wrap border-b border-[#bef3ff] text-[#000]'>
                <div className='max-md:mt-2'>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="mt-2 mb-4">Bem-vindo ao seu espaço de aprendizado no Spooken 🚀</p>
                </div>
                <div className='max-md:hidden'>
                    <div className='flex items-center gap-4 max-md:mb-4'>
                        <search className='w-[300px] max-md:w-[200px]'>
                            <form className='rounded-4xl flex shadow-lg p-1 bg-[#CAF0F8] text-[#000]  items-center'>
                                <Search size={18} /><input className='ml-2 outline-none' name="fsrch" id="fsrch" placeholder="Procurar" />
                            </form>
                        </search>
                        <Users className="bg-[#CAF0F8] text-[#10d3ff] p-1 rounded-full" size={26} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <div className="lg:col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#000]">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#CAF0F8] shadow-lg">
                            <div className="p-3 rounded-md bg-[#5a33c2]/20 text-[#5a33c2]"><Book size={22} /></div>
                            <div>
                                <div className="text-sm">Palavras descobertas</div>
                                <div className="text-xl font-bold">1.234</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#CAF0F8] shadow-lg">
                            <div className="p-3 rounded-md bg-[#00b4d8]/20 text-[#00B4D8]"><Bolt size={22} /></div>
                            <div>
                                <div className="text-sm">Sua ofensiva</div>
                                <div className="text-xl font-bold">Alta</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#CAF0F8] shadow-lg">
                            <div className="p-3 rounded-md bg-[#ffd166]/20 text-[#ffd166]"><Clock size={22} /></div>
                            <div>
                                <div className="text-sm">Horas estudadas</div>
                                <div className="text-xl font-bold">42h</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#CAF0F8] shadow-lg">
                            <div className="p-3 rounded-md bg-[#7ee4b5]/20 text-[#7ee4b5]"><CheckCircle size={22} /></div>
                            <div>
                                <div className="text-sm">Lições concluídas</div>
                                <div className="text-xl font-bold">80</div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {options.map((option, idx) => (
                            <div key={idx} className="p-4 rounded-lg bg-[#CAF0F8] text-[#000] transform hover:-translate-y-1 transition  shadow-lg">
                                <h2 className="font-bold">{option.title}</h2>

                                {option.text && <p className="text-sm">{option.text}</p>}
                                {option.news && <p className='text-sm'>{option.news}</p>}
                                {option.button && <Link href="/dashboard/news"><button className='w-full border border-green-600 p-2 bg-green-600 mt-4 text-[#fff] shadow-lg rounded-lg'>{option.button}</button></Link>}

                                {option.imgGermany && (
                                    <div className='flex items-center gap-2 p-1 rounded-lg mt-2 bg-[#90E0EF]'>
                                        <Image src={option.imgGermany} alt="Bandeira da Alemanha" width={40} /> {option.GermanyIdioma && <p className="text-sm">{option.GermanyIdioma}</p>}
                                    </div>
                                )}
                                {option.imgItaly && (
                                    <div className='flex items-center gap-2 p-1 mt-2 rounded-lg bg-[#90E0EF]'>
                                        <Image src={option.imgItaly} alt="Bandeira da Itália" width={40} /> {option.ItalyIdioma && <p className="text-sm">{option.ItalyIdioma}</p>}
                                    </div>
                                )}


                                {option.iconEmail && (
                                    <div className='flex items-center gap-2 mt-2'>
                                        <option.iconEmail size={16} /> {option.textEmail && <p className="text-sm">{option.textEmail}</p>}
                                    </div>
                                )}

                                {option.iconLocation && (
                                    <div className='flex items-center gap-2 mt-2'>
                                        <option.iconLocation size={16} /> {option.textLocation && <p className='text-sm'>{option.textLocation}</p>}
                                    </div>
                                )}

                                {option.iconPhone && (
                                    <div className='flex items-center gap-2 mt-2'>
                                        <option.iconPhone size={16} /> {option.textPhone && <p className='text-sm'>{option.textPhone}</p>}
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
