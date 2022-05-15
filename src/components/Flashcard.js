
import { useState } from "react"
import CardsQuestion from "./CardsQuestion"
import Card from "./CardBeige"
import arrow from "../assets/images/Vector.png"
import styled from "styled-components"

export default function Flashcard({ card, answer, setAnswer }) {
    const [selected, setSelected] = useState(false)
    const number = [1,2,3,4,5,6,7,8]
    return (
        !selected ?
            <Card>
                <p > Pergunta {number.map((n,index)=>{return console.log(n)})}</p>
                <img src={arrow} onClick={() => setSelected(true)} />
            </Card>
            : <CardsQuestion card={card} answer={answer} setAnswer={setAnswer} />
    )
}
