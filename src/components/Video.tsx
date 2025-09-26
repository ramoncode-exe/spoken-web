export default function Video() {
    return (
        <main className="text-center p-4">
            <div className="mt-4">
                <h1 className="text-3xl font-bold mb-4">Bora aprender idiomas de um jeito divertido?</h1>
                <p className="text-[#3d3d3d] mb-4">Entenda como o Spooken pode ajudar você a aprender qualquer idioma totalmente de graça!</p>
            </div>
            <div className="flex justify-center mt-4 mb-4 p-2">

                <iframe className="w-full max-w-4xl h-96 rounded-lg shadow-lg" src="https://www.youtube.com/embed/i-Qsto17E1w?si=Hb_adL-Q8gz8uEK3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </main>
    )
}