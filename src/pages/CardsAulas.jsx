import { useParams } from "react-router-dom"

export default function CardsAulas(){

    const { id } = useParams()

    return(
        <div>
            <h1>Conteúdo</h1>
        </div>
    )
}