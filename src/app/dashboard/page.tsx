"use client"

import { Bolt, Book, Clock, CheckCircle, Mails, MapPinHouse, Phone } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImgNewsHome from "../../assets/post-who.png"

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
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#343a40] shadow-lg transform hover:-translate-y-1 transition">
                            <div className="p-3 rounded-md bg-[#5a33c2]/20 text-[#5a33c2]"><Book size={22} /></div>
                            <div>
                                <div className="text-sm">Palavras descobertas</div>
                                <div className="text-xl font-bold">1.234</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#343a40] shadow-lg transform hover:-translate-y-1 transition">
                            <div className="p-3 rounded-md bg-[#00b4d8]/20 text-[#00B4D8]"><Bolt size={22} /></div>
                            <div>
                                <div className="text-sm">Sua ofensiva</div>
                                <div className="text-xl font-bold">Alta</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#343a40] shadow-lg transform hover:-translate-y-1 transition">
                            <div className="p-3 rounded-md bg-[#ffd166]/20 text-[#ffd166]"><Clock size={22} /></div>
                            <div>
                                <div className="text-sm">Horas estudadas</div>
                                <div className="text-xl font-bold">42h</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#343a40] shadow-lg transform hover:-translate-y-1 transition">
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
                            <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                                <h2 className='text-sm border-b border-[#4f5152] p-2'>Comida</h2>
                                <span className='text-[#8e8e8e] text-[10px]'></span>
                            </div>
                            <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                                <h2 className='text-sm border-b border-[#4f5152] p-2'>Conversando</h2>
                                <span className='text-[#8e8e8e] text-[10px]'></span>
                            </div>
                            <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                                <h2 className='text-sm border-b border-[#4f5152] p-2'>Viagens</h2>
                                <span className='text-[#8e8e8e] text-[10px]'></span>
                            </div>
                            <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                                <h2 className='text-sm border-b border-[#4f5152] p-2'>Compras</h2>
                                <span className='text-[#8e8e8e] text-[10px]'></span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 text-[#bebebe] grid grid-cols-3 max-md:grid-cols-2 grid-rows-1 gap-4'>
                        <div className='col-span-2'>
                            <div>
                                <h1 className="text-lg font-bold">Atualizações Recentes</h1>
                            </div>
                            <div className="bg-[#343a40] shadow-lg mt-4 rounded-md flex max-md:flex-wrap">
                                <div className='w-full md:w-48 flex-shrink'>
                                    <Image src={ImgNewsHome} className='object-cover w-full h-full' alt='news img' />
                                </div>
                                <div className='p-6 border-r-4 border-[#b70994]'>
                                    <h2 className='text-md text-[#bebebe] md:text-xl font-bold mb-2'>Quem lançou o Spooken?</h2>
                                    <span className='text-[12px] bg-[#008000]/30 text-[#00c127] mt-4 mb-4 p-1 rounded-sm font-bold flex w-22 items-center gap-1'><Book size={18} />HISTÓRIA</span>
                                    <p className='text-sm md:text-[15px] text-[#8e8e8e] mt-2'>O Spooken foi lançado por Ramon Patrick, um jovem de apenas 21 anos que é apaixonado por tecnologia e idiomas...</p>
                                    <Link href="/dashboard/news">
                                        <button className='bg-[#7209b7] p-2 rounded-md mt-2 text-sm text-[#fff] transform hover:-translate-y-1 transition'>Ver Atualizações</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 max-md:col-span-2'>
                            <div>
                                <h1 className="text-lg font-bold">Suporte</h1>
                            </div>
                            <div className="bg-[#343a40] border-r-4 border-[#00c127] shadow-lg mt-4 rounded-sm p-4">
                                <h2 className='text-sm font-bold mb-4'>Tem alguma dúvida?</h2>
                                <div className='mt-2 text-[#bebebe] border-b border-[#4f5152]'>
                                    <div className='flex gap-2 text-sm mb-4'>
                                        <Mails />
                                        <span>ramonpatrick0906@gmail.com</span>
                                    </div>
                                    <div className='flex gap-2 text-sm mb-4'>
                                        <Phone />
                                        <span>912 411 769</span>
                                    </div>
                                    <div className='flex gap-2 text-sm mb-4'>
                                        <MapPinHouse />
                                        <span>Lisboa, Portugal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
