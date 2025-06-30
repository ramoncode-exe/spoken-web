export default function Video() {
    return (
        <main className="font-poppins bg-[#5932c1] p-2">
            <div className="text-center">
                <h1 className="text-center font-bold text-[24px] mt-8 text-white">
                   Como funciona o Spooken?
                </h1>
                <p className="text-[14px] text-[#fff] mt-3">Entenda como o Spooken pode ajudar você a aprender qualquer idioma totalmente de graça!</p>
            </div>
            <div className="flex justify-center mt-5 mb-8">
                <div className="w-full max-w-[720px] aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/i-Qsto17E1w"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
