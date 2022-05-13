
import { useState } from "react"
import styled from "styled-components"
import CardsQuestion from "./CardsQuestion"
import Card from "./Card"

export default function Flashcard({ card,answer,setAnswer }) {
     const [selected,setSelected] = useState(false)
    return (
       !selected?
        <Card>
            <p> Pergunta {card.key}</p>
            <img src="./imgs/Vector.png" onClick={ ()=> setSelected(true)}/>
        </Card>
        :<CardsQuestion card={card} answer={answer} setAnswer={setAnswer} />
    )
}

