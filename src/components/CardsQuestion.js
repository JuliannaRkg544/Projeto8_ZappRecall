import { useState } from "react";
import CardAnswers from "./CardAnswers";
import Card from "./CardBeige";
import arrow from "../assets/images/VectorCircular.png"


export default function CardsQuestion({ card, answer, setAnswer }) {
    const [selected, setSelected] = useState(false)
    return (
        !selected ?
            <Card> <p>{card.question}</p>
                <img src={arrow} onClick={(() => { setSelected(true) })} />
            </Card>
            : <CardAnswers card={card} answer={answer} setAnswer={setAnswer} />
    )
}


