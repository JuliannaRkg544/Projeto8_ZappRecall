import styled from "styled-components"
import { useState } from "react";
import CardAnswers from "./CardAnswers";
import Card from "./Card";


export default function CardsQuestion({ card,answer,setAnswer }) {
    const [selected, setSelected] = useState(false)
    return (
        !selected ?

            <Card> <p>{card.question}</p>
                <img src="./imgs/VectorCircular.png" onClick={(() => { setSelected(true) })} />
            </Card>
            : <CardAnswers card={card} answer={answer} setAnswer={setAnswer}/>
    )
}


