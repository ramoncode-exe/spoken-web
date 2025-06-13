import BgAboutMe from "../assets/abtme.svg"
import { Linkedin, Mail, Github } from 'lucide-react';


export default function AboutMe(){

    const info = [
    {
        text: (
        <>
            O <span className="font-bold">Spoken</span> é um projeto criado por <span className="text-[#9b18d4] font-semibold">Ramon Patrick, um jovem brasileiro de 20 anos. Ao imigrar sozinho para a Europa,</span> ele percebeu a dificuldade que muitos enfrentam para aprender inglês sem recursos. Autodidata, aprendeu a programar por conta própria e usou esse conhecimento para criar o <span className="text-[#9b18d4] font-semibold">Spoken</span> — uma aplicação web gratuita, feita para ajudar jovens do mundo todo a aprender inglês de forma rápida e acessível.
        </>
        ),

        h1: (
            <>
                Um Jovem <span className="text-[#9b18d4]">Sonhador!</span>
            </>
        ),
    },
    ];


    return(
         <main className="bg-gradient-to-t from-[#9b18d420]">
            <div className="flex items-center justify-center p-1.5 max-lg:flex-wrap font-poppins">
                <div>
                    <img className="max-w-[550px] max-md:max-w-[350px]" src={BgAboutMe} alt="img home" />
                </div>
                {info.map(( info, i ) => (
                    <div className="max-w-[500px] mb-5 mt-5">
                        <h1 className="font-bold text-[24px] mb-5">{info.h1}</h1>
                        <p className="text-[14px]">{info.text}</p>
                        <div className="flex gap-5 mb-3 mt-3">
                            <span onClick={()=> window.open("https://www.linkedin.com/in/ramonprog/")} ><Linkedin/></span>
                            <span onClick={()=> window.open("https://github.com/ramoncode-exe")} ><Github/></span>
                            <span onClick={()=> window.open("https://mail.google.com/mail/")} ><Mail/></span>
                        </div>
                    </div>
                ))} 
            </div>
            
         </main>
    )
}