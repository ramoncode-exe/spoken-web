export default function PageProfile() {
    return (
        <main className="text-[#d7d7d7]">
            <div>
                <h1 className="text-2xl font-bold">Dados do Perfil</h1>
                <div className="grid-cols-3 grid max-md:grid-cols-2 grid-rows-1 gap-4 mt-4">
                    <div className="col-span-1 border-r-4 border-[#3e3e3e] rounded-sm shadow-lg max-md:col-span-2 p-4 bg-[#343a40]">
                        <h2 className="text-lg font-bold">Perfil</h2>
                        <div className="text-center">
                            <div>
                                <div className="bg-[#00518f] rounded-full mt-4 mb-4 w-[200px] h-[200px] mx-auto">
                                </div>
                            </div>
                            <div className="text-sm">
                                <p className="text-[#dedede] mb-1 font-bold">Ramon Patrick</p>
                                <p className="text-[#dedede] mb-4">ramonpatrick0906@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 border-r-4 border-[#3e3e3e] rounded-sm max shadow-lg p-4 bg-[#343a40]">
                        <h2 className="text-lg font-bold">Dados</h2>
                        <div className="flex gap-10 mt-5">
                            <div>
                                <p className="text-[#bcbcbc] mb-1">Nome:</p>
                                <p className="text-[#dedede] text-sm">Ramon Patrick</p>
                            </div>
                            <div>
                                <p className="text-[#bcbcbc] mb-1">E-mail:</p>
                                <p className="text-[#dedede] text-sm">ramonpatrick0906@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}