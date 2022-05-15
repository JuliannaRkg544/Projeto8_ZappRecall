
import Card from "./CardBeige"
import styled from "styled-components"
import CardWhite from "./CardWhite"

export default function FlashcardRisk({ card, color, index }) {
    return (
        <CardWhite>
            <p className={`risk ${color}`}> Pergunta {index+1}</p>  <img src={`./imgs/Vector-${color}.png`} />
        </CardWhite>
    )
}
const Style = styled.div`


`
