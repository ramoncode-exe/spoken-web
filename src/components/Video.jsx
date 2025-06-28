export default function Video() {
    return (
        <main className="font-poppins bg-[#5932c1] p-2 rounded-lg">
            <div>
                <h1 className="text-center font-bold text-[24px] mt-8 text-white">
                    Spooken, Aplicação Web voltada para você aprender idiomas!
                </h1>
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
