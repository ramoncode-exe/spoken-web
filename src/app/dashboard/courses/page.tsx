import { Album } from 'lucide-react';
import FlagEnglish from "../../../assets/english.svg"
import FlagSpanish from "../../../assets/spanish.svg"
import FlagFrench from "../../../assets/french.svg"
import Image from "next/image"

export default function CoursesDashboardPage() {
    return (
        <div className="text-[#bebebe]">
            <h1 className="text-2xl font-bold">Cursos</h1>
            <div className='mt-4'>
                <div>
                    <h1 className="text-lg font-bold">Conteúdos Legais</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagEnglish} alt="flag english" className='w-12' />
                            </div>
                            <div>
                                <span>10 Min.</span>
                            </div>
                        </div>

                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Comer na Inglaterra</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagFrench} alt="flag french" className='w-12' />
                            </div>
                            <div>
                                <span>7 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Conversando em Francês</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagEnglish} alt="flag english" className='w-12' />
                            </div>
                            <div>
                                <span>8 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Viajando para a Inglaterra</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagSpanish} alt="flag spanish" className='w-12' />
                            </div>
                            <div>
                                <span>12 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Fazendo Compras</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 mt-2 items-center w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <div>
                    <h1 className="text-lg font-bold">Inglês</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagEnglish} alt="flag english" className='w-12' />
                            </div>
                            <div>
                                <span>8 Min.</span>
                            </div>
                        </div>

                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Comendo em Londres</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagEnglish} alt="flag french" className='w-12' />
                            </div>
                            <div>
                                <span>5 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Conhecendo um Americano</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagEnglish} alt="flag english" className='w-12' />
                            </div>
                            <div>
                                <span>12 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Viajando para USA</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagEnglish} alt="flag spanish" className='w-12' />
                            </div>
                            <div>
                                <span>10 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Compras na Inglaterra</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 mt-2 items-center w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <div>
                    <h1 className="text-lg font-bold">Espanhol</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagSpanish} alt="flag english" className='w-12' />
                            </div>
                            <div>
                                <span>10 Min.</span>
                            </div>
                        </div>

                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Pedindo um prato</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagSpanish} alt="flag french" className='w-12' />
                            </div>
                            <div>
                                <span>13 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Conversando em Espanhol</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagSpanish} alt="flag english" className='w-12' />
                            </div>
                            <div>
                                <span>11 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Viajando para Madrid</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagSpanish} alt="flag spanish" className='w-12' />
                            </div>
                            <div>
                                <span>7 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Compras pela Espanha</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 mt-2 items-center w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <div>
                    <h1 className="text-lg font-bold">Francês</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagFrench} alt="flag english" className='w-12' />
                            </div>
                            <div>
                                <span>12 Min.</span>
                            </div>
                        </div>

                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Em um Restaurante</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagFrench} alt="flag french" className='w-12' />
                            </div>
                            <div>
                                <span>7 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Conhecendo um Francês</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagFrench} alt="flag english" className='w-12' />
                            </div>
                            <div>
                                <span>9 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Viajando para a França</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 items-center mt-2 w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                    <div className='bg-[#343a40] p-2 shadow-lg rounded-sm transform hover:-translate-y-1 transition'>
                        <div className='flex items-center justify-between mb-10'>
                            <div>
                                <Image src={FlagFrench} alt="flag spanish" className='w-12' />
                            </div>
                            <div>
                                <span>11 Min.</span>
                            </div>
                        </div>
                        <h2 className='text-sm border-b border-[#4f5152] p-2'>Compras pela França</h2>
                        <span className='text-[12px] bg-[#008000]/30 text-[#00c127] p-1 rounded-sm font-bold flex gap-1 mt-2 items-center w-26'><Album size={18} />CONTEÚDO</span>
                    </div>
                </div>
            </div>
        </div>
    )
}