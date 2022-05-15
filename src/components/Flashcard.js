
import { useState } from "react"
import CardsQuestion from "./CardsQuestion"
import arrow from "../assets/images/Vector.png"
import CardWhite from "./CardWhite"

export default function Flashcard({ card, answer, setAnswer,index }) {
    const [selected, setSelected] = useState(false)
    return (
        !selected ?
            <CardWhite >
                <p> Pergunta {index+1}</p>
                <img src={arrow} onClick={() => setSelected(true)} />
            </CardWhite>
            : <CardsQuestion card={card} answer={answer} setAnswer={setAnswer} index={index} />
    )
}
