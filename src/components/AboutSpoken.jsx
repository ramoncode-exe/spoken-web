import AbtSpoken from "../assets/abtspoken-bg.svg"

export default function About() {

    return (
        <main id="aboutspoken">
            <div className="flex items-center justify-center mt-3 gap-5 p-1.5 max-lg:flex-wrap font-poppins">
                <div>
                    <img className="max-w-[500px] max-md:max-w-[350px]" src={AbtSpoken} alt="About Spoken Img" />
                </div>
                <div className="max-w-[500px] mb-10">
                    <h1 className="text-[24px] font-bold mb-3"><span className="text-[#5932c1]">Idiomas para Todos,</span> Sem Barreiras</h1>
                    <p className="leading-7 text-[14px]">O Spoken foi criado com um propósito claro: ajudar você a aprender idiomas de forma rápida, simples e gratuita.
                        A plataforma é acessível para pessoas de qualquer lugar do mundo. Não importa sua origem ou condição financeira. O objetivo do Spoken é um só: ajudar!</p>
                    <div className="flex flex-wrap gap-5 mt-5 text-center items-center justify-center">
                        <div className="w-[200px] bg-[#5932c1] text-[#fff] rounded-2xl p-5 flex flex-col items-center text-center shadow-md" >
                            <p className="text-[14px]"><span className="text-[18px] font-bold">500+ </span><br />Usuários</p>
                        </div>
                        <div className="w-[200px] bg-[#5932c1] text-[#fff] rounded-2xl p-5 flex flex-col items-center text-center shadow-md" >
                            <p className="text-[14px]"><span className="text-[18px] font-bold">80+ </span><br />Lições</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}