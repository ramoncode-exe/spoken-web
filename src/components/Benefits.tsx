import { Brain, Handshake, Cloud, Rocket } from 'lucide-react';
import Image from 'next/image';
import FlagFrench from '../assets/french.svg';
import FlagEnglish from '../assets/english.svg';
import FlagSpanish from '../assets/spanish.svg';

export default function Benefits() {
    return (
        <main>
            <div className='bg-[#108bcd] flex p-4 gap-4 text-center justify-center items-center text-white mt-4 md: flex-wrap'>
                <div className="bg-[#0077B6] shadow-lg transform hover:-translate-y-1 transition rounded-lg p-5 flex flex-col items-center text-center gap-2 w-52">
                    <Brain size={28} />
                    <p className='font-bold text-sm'>SIMPLES E LEVE</p>
                    <p className='text-[12px]'>FÁCIL DE USAR EM QUALQUER DISPOSITIVO.</p>
                </div>
                <div className="bg-[#0077B6] shadow-lg transform hover:-translate-y-1 transition rounded-lg p-5 flex flex-col items-center text-center gap-2 w-52">
                    <Handshake size={28} />
                    <p className='font-bold text-sm'>100% GRATUITO</p>
                    <p className='text-[12px]'>FEITO PRA QUEM NÃO PODE PAGAR.</p>
                </div>
                <div className="bg-[#0077B6] shadow-lg transform hover:-translate-y-1 transition rounded-lg p-5 flex flex-col items-center text-center gap-2 w-52">
                    <Cloud size={28} />
                    <p className='font-bold text-sm'>NO SEU RITMO</p>
                    <p className='text-[12px]'>PRATIQUE SUA FALA, NÃO SÓ LEITURA.</p>
                </div>
                <div className="bg-[#0077B6] shadow-lg transform hover:-translate-y-1 transition rounded-lg p-5 flex flex-col items-center text-center gap-2 w-52">
                    <Rocket size={28} />
                    <p className='font-bold text-sm'>FALE DE VERDADE</p>
                    <p className='text-[12px]'>ESTUDE QUANDO E COMO QUISER.</p>
                </div>
            </div>
            <div className='bg-[#90E0EF] text-[#000] text-center p-4'>
                <h1 className='text-xl font-bold'>Qual Idioma vai ser hoje?</h1>
                <div className='flex flex-wrap justify-center gap-4 mt-4'>
                    <span className='font-medium bg-[#CAF0F8] p-2 rounded-2xl shadow-lg flex flex-row'><Image src={FlagFrench} alt='logo french' className='w-[30px] mr-2' />Francês</span>
                    <span className='font-medium bg-[#CAF0F8] p-2 rounded-2xl shadow-lg flex flex-row'><Image src={FlagEnglish} alt='logo english' className='w-[30px] mr-2' />Inglês</span>
                    <span className='font-medium bg-[#CAF0F8] p-2 rounded-2xl shadow-lg flex flex-row'><Image src={FlagSpanish} alt='logo spanish' className='w-[30px] mr-2' />Espanhol</span>
                </div>
            </div>
        </main>
    )
}