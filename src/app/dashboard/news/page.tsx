import Image from "next/image"
import PostLaunch from "../../../assets/post-launch.png"
import PostStudy from "../../../assets/post-study.png"
import PostWho from "../../../assets/post-who.png"

export default function NewsDashboardPage() {
    const posts = [
        {
            title: "Quem lançou o Spooken?",
            img: PostWho,
            alt: "Quem criou o Spooken?",
            body:
                "O Spooken foi lançado por Ramon Patrick, um jovem de apenas 21 anos que é apaixonado por tecnologia e idiomas. Ele criou o Spooken com o objetivo de ajudar pessoas a aprenderem novos idiomas de forma divertida e eficaz.",
            data: "25/08/2025"
        },
        {
            title: "O que é o Spooken?",
            img: PostStudy,
            alt: "O que é o Spooken?",
            body:
                "O Spooken é uma plataforma de aprendizado de idiomas que utiliza técnicas de gamificação para tornar o processo de aprendizado mais envolvente e motivador. Com o Spooken, você pode aprender inglês, espanhol, francês, alemão e muitos outros idiomas de forma divertida e eficaz.",
            data: "26/08/2025"
        },
        {
            title: "Quando o Spooken foi lançado?",
            img: PostLaunch,
            alt: "Lançamento Spooken",
            body:
                "O Spooken foi lançado recentemente em 2025, após meses de desenvolvimento e testes. Desde então, a plataforma tem crescido rapidamente e conquistado usuários ao redor do mundo.",
            data: "27/08/2025"
        },
    ]

    return (
        <div className="py-8">
            <div className="max-w-4xl mx-auto px-4">
                <header className="text-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Notícias</h1>
                    <p className="text-sm md:text-base text-gray-300">
                        Todas as notícias, novidades e atualizações do Spooken você pode
                        encontrar nesta seção, então não deixe de acompanhar!
                    </p>
                </header>

                <div className="grid gap-6">
                    {posts.map((post, idx) => (
                        <article
                            key={idx}
                            className="bg-[#0b1417] border border-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row gap-4 p-4"
                        >
                            <div className="flex-shrink-0 w-full md:w-48">
                                <Image
                                    src={post.img}
                                    alt={post.alt}
                                    className="rounded-lg object-cover w-full h-40 md:h-44"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-lg md:text-xl font-extrabold mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm md:text-[15px] text-gray-300">{post.body}</p>
                                <span className="text-[12px] text-gray-500 mt-4">{post.data}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

