
import Card from "./CardBeige"
import styled from "styled-components"

export default function FlashcardRisk({ card, color }) {
    return (
        <Card>
            <p className={`risk ${color}`}> Pergunta {card.key}</p>  <img src={`./imgs/Vector-${color}.png`} />
        </Card>
    )
}
const Style = styled.div`


`
